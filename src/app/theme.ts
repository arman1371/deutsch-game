import { useEffect } from 'react';
import { resolveReducedMotion, resolveTheme, useSettingsStore } from '@/store/settingsStore';

/** Applies theme + reduced-motion settings to <html>, following OS changes while on "system". */
export function useApplySettings() {
  const theme = useSettingsStore((s) => s.theme);
  const motion = useSettingsStore((s) => s.motion);

  useEffect(() => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => {
      const root = document.documentElement;
      root.dataset.theme = resolveTheme(theme, dark.matches);
      root.dataset.reducedMotion = String(resolveReducedMotion(motion, reduced.matches));
    };
    apply();
    dark.addEventListener?.('change', apply);
    reduced.addEventListener?.('change', apply);
    return () => {
      dark.removeEventListener?.('change', apply);
      reduced.removeEventListener?.('change', apply);
    };
  }, [theme, motion]);
}
