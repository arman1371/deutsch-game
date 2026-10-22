export type Gender = 'm' | 'f' | 'n' | 'pl';
export type Case = 'nom' | 'acc';

const DEFINITE: Record<Case, Record<Gender, string>> = {
  nom: { m: 'der', f: 'die', n: 'das', pl: 'die' },
  acc: { m: 'den', f: 'die', n: 'das', pl: 'die' },
};
const INDEFINITE: Record<Case, Record<Gender, string>> = {
  nom: { m: 'ein', f: 'eine', n: 'ein', pl: '' },
  acc: { m: 'einen', f: 'eine', n: 'ein', pl: '' },
};

export function definiteArticle(gender: Gender, c: Case = 'nom'): string {
  return DEFINITE[c][gender];
}
export function indefiniteArticle(gender: Gender, c: Case = 'nom'): string {
  return INDEFINITE[c][gender];
}

/** Negative article: kein/keine (+ -en for masculine accusative, no singular "eine" for plural). */
export function negativeArticle(gender: Gender, c: Case = 'nom'): string {
  if (gender === 'pl') return 'keine';
  if (gender === 'f') return 'keine';
  if (gender === 'm') return c === 'acc' ? 'keinen' : 'kein';
  return 'kein';
}

export type PossessiveStem = 'mein' | 'dein' | 'sein' | 'ihr' | 'unser' | 'euer' | 'Ihr';

/** Possessive articles in the nominative follow ein/kein: -∅ (m, n), -e (f, pl). Accusative m: -en. */
export function possessive(stem: PossessiveStem, gender: Gender, c: Case = 'nom'): string {
  const base = stem === 'euer' ? 'eur' : stem;
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
