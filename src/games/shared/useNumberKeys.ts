import { useEffect } from 'react';

/** Press 1–9 to pick the n-th option (ignored while typing in a field). */
export function useNumberKeys(count: number, enabled: boolean, onPick: (index: number) => void) {
  useEffect(() => {
    if (!enabled) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (target && /^(input|textarea|select)$/i.test(target.tagName)) return;
      const n = Number(e.key);
      if (Number.isInteger(n) && n >= 1 && n <= count) onPick(n - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count, enabled, onPick]);
}
