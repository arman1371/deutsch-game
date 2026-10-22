import { numberToGerman } from './numbers';

export const MONTHS = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
] as const;

const IRREGULAR_STEM: Record<number, string> = { 1: 'erst', 3: 'dritt', 7: 'siebt', 8: 'acht' };

/** Ordinal stem without ending: 1–19 take -t (zweit, vierte…), 20+ take -st (zwanzigst). */
function ordinalStem(n: number): string {
  if (!Number.isInteger(n) || n < 1 || n > 99) throw new RangeError(`Unsupported ordinal: ${n}`);
  if (n < 20) return IRREGULAR_STEM[n] ?? `${numberToGerman(n)}t`;
  return `${numberToGerman(n)}st`;
}

/** "die ___ Straße": 1 → erste, 3 → dritte, 20 → zwanzigste. */
export const ordinal = (n: number): string => `${ordinalStem(n)}e`;

/** After an article in the dative: "am dritten Mai", "im zweiten Stock". */
export const ordinalDative = (n: number): string => `${ordinalStem(n)}en`;

/** Dates ("am dritten Mai") are spoken with the dative ordinal. */
export function dateToGerman(day: number, month: number): string {
  const name = MONTHS[month - 1];
  if (!name || day < 1 || day > 31) throw new RangeError(`Unsupported date: ${day}.${month}.`);
  return `am ${ordinalDative(day)} ${name}`;
}

/** Written form of a date: 3.5. */
export const dateToDigits = (day: number, month: number): string => `${day}.${month}.`;
