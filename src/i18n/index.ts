import { en } from './en';

type Leaves<T, P extends string = ''> = {
  [K in keyof T & string]: T[K] extends string ? `${P}${K}` : Leaves<T[K], `${P}${K}.`>;
}[keyof T & string];

export type StringKey = Leaves<typeof en>;

/** Look up a UI string by dotted path and fill `{placeholders}`. Only English for now. */
export function t(key: StringKey, vars?: Record<string, string | number>): string {
  const value = key.split('.').reduce<unknown>((acc, part) => (acc as Record<string, unknown>)?.[part], en);
  let out = typeof value === 'string' ? value : key;
  if (vars) for (const [k, v] of Object.entries(vars)) out = out.replaceAll(`{${k}}`, String(v));
  return out;
}
