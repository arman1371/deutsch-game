export type Gender = 'm' | 'f' | 'n' | 'pl';
export type Case = 'nom' | 'acc' | 'dat';

const DEFINITE: Record<Case, Record<Gender, string>> = {
  nom: { m: 'der', f: 'die', n: 'das', pl: 'die' },
  acc: { m: 'den', f: 'die', n: 'das', pl: 'die' },
  dat: { m: 'dem', f: 'der', n: 'dem', pl: 'den' },
};
const INDEFINITE: Record<Case, Record<Gender, string>> = {
  nom: { m: 'ein', f: 'eine', n: 'ein', pl: '' },
  acc: { m: 'einen', f: 'eine', n: 'ein', pl: '' },
  dat: { m: 'einem', f: 'einer', n: 'einem', pl: '' },
};

export function definiteArticle(gender: Gender, c: Case = 'nom'): string {
  return DEFINITE[c][gender];
}
export function indefiniteArticle(gender: Gender, c: Case = 'nom'): string {
  return INDEFINITE[c][gender];
}

/** Negative article: kein/keine (+ -en for masculine accusative, no singular "eine" for plural). */
export function negativeArticle(gender: Gender, c: Case = 'nom'): string {
  if (c === 'dat') return { m: 'keinem', f: 'keiner', n: 'keinem', pl: 'keinen' }[gender];
  if (gender === 'pl') return 'keine';
  if (gender === 'f') return 'keine';
  if (gender === 'm') return c === 'acc' ? 'keinen' : 'kein';
  return 'kein';
}

export type PossessiveStem = 'mein' | 'dein' | 'sein' | 'ihr' | 'unser' | 'euer' | 'Ihr';

/**
 * Possessive articles follow ein/kein: nominative -∅ (m, n), -e (f, pl); accusative m: -en;
 * dative -em (m, n), -er (f), -en (pl).
 */
export function possessive(stem: PossessiveStem, gender: Gender, c: Case = 'nom'): string {
  const base = stem === 'euer' ? 'eur' : stem;
  if (c === 'dat') return `${base}${{ m: 'em', f: 'er', n: 'em', pl: 'en' }[gender]}`;
  if (gender === 'f' || gender === 'pl') return `${base}e`;
  if (gender === 'm' && c === 'acc') return `${base}en`;
  return stem;
}

export function genderOfArticle(article: string): Gender | null {
  if (article === 'der') return 'm';
  if (article === 'die') return 'f';
  if (article === 'das') return 'n';
  return null;
}
