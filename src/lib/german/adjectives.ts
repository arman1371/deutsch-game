import type { Case, Gender } from './articles';

/** What comes before the adjective: der/die/das (weak), ein/kein/mein (mixed) or nothing (strong). */
export type DeclensionKind = 'definite' | 'indefinite' | 'none';

const ENDINGS: Record<DeclensionKind, Record<Case, Record<Gender, string>>> = {
  definite: {
    nom: { m: 'e', f: 'e', n: 'e', pl: 'en' },
    acc: { m: 'en', f: 'e', n: 'e', pl: 'en' },
    dat: { m: 'en', f: 'en', n: 'en', pl: 'en' },
  },
  indefinite: {
    nom: { m: 'er', f: 'e', n: 'es', pl: 'en' },
    acc: { m: 'en', f: 'e', n: 'es', pl: 'en' },
    dat: { m: 'en', f: 'en', n: 'en', pl: 'en' },
  },
  none: {
    nom: { m: 'er', f: 'e', n: 'es', pl: 'e' },
    acc: { m: 'en', f: 'e', n: 'es', pl: 'e' },
    dat: { m: 'em', f: 'er', n: 'em', pl: 'en' },
  },
};

/** The adjective ending for an article type, gender and case: definite · nom · m → "e". */
export function adjectiveEnding(kind: DeclensionKind, gender: Gender, c: Case): string {
  return ENDINGS[kind][c][gender];
}

/** Adjective stems that change before an ending: hoch → hoh-, dunkel → dunkl-, teuer → teur-. */
function stemBeforeEnding(adjective: string): string {
  if (adjective === 'hoch') return 'hoh';
  if (/el$/.test(adjective)) return `${adjective.slice(0, -2)}l`;
  if (/(eu|au)er$/.test(adjective)) return `${adjective.slice(0, -2)}r`;
  return adjective;
}

/** "neu" + definite · acc · m → "neuen"; "dunkel" + none · nom · f → "dunkle". */
export function declineAdjective(
  adjective: string,
  kind: DeclensionKind,
  gender: Gender,
  c: Case,
): string {
  return `${stemBeforeEnding(adjective)}${adjectiveEnding(kind, gender, c)}`;
}
