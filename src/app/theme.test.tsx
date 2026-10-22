import { act, render } from '@testing-library/react';
import { useSettingsStore, DEFAULT_SETTINGS } from '@/store/settingsStore';
import { useApplySettings } from './theme';

function Probe() {
  useApplySettings();
  return null;
}

function mockMatchMedia(matches: Record<string, boolean>) {
  const listeners = new Map<string, Set<() => void>>();
  window.matchMedia = ((query: string) => ({
    get matches() {
      return matches[query] ?? false;
    },
    media: query,
    addEventListener: (_: string, cb: () => void) => {
      (listeners.get(query) ?? listeners.set(query, new Set()).get(query)!).add(cb);
    },
    removeEventListener: (_: string, cb: () => void) => listeners.get(query)?.delete(cb),
  })) as unknown as typeof window.matchMedia;
  return {
    set: (query: string, value: boolean) => {
      matches[query] = value;
      listeners.get(query)?.forEach((cb) => cb());
    },
  };
}

describe('useApplySettings', () => {
  beforeEach(() => useSettingsStore.setState({ ...DEFAULT_SETTINGS }));

  it('follows the OS theme and reduced-motion preference while on "system"', () => {
    const media = mockMatchMedia({ '(prefers-color-scheme: dark)': true });
    render(<Probe />);
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(document.documentElement.dataset.reducedMotion).toBe('false');
    act(() => media.set('(prefers-color-scheme: dark)', false));
    expect(document.documentElement.dataset.theme).toBe('light');
    act(() => media.set('(prefers-reduced-motion: reduce)', true));
    expect(document.documentElement.dataset.reducedMotion).toBe('true');
  });

  it('lets explicit settings win over the OS', () => {
    mockMatchMedia({ '(prefers-color-scheme: dark)': true });
    useSettingsStore.setState({ theme: 'light', motion: 'reduced' });
    render(<Probe />);
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(document.documentElement.dataset.reducedMotion).toBe('true');
  });
});
