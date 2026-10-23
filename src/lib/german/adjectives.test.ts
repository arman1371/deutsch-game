import { adjectiveEnding, declineAdjective, type DeclensionKind } from './adjectives';
import type { Case, Gender } from './articles';

const GENDERS: Gender[] = ['m', 'f', 'n', 'pl'];
const row = (kind: DeclensionKind, c: Case) => GENDERS.map((g) => adjectiveEnding(kind, g, c));

describe('adjectiveEnding', () => {
  it('after the definite article: -e / -en', () => {
    expect(row('definite', 'nom')).toEqual(['e', 'e', 'e', 'en']);
    expect(row('definite', 'acc')).toEqual(['en', 'e', 'e', 'en']);
    expect(row('definite', 'dat')).toEqual(['en', 'en', 'en', 'en']);
  });

  it('after ein / kein / mein: the article is missing in m nom and n nom/acc', () => {
    expect(row('indefinite', 'nom')).toEqual(['er', 'e', 'es', 'en']);
    expect(row('indefinite', 'acc')).toEqual(['en', 'e', 'es', 'en']);
    expect(row('indefinite', 'dat')).toEqual(['en', 'en', 'en', 'en']);
  });

  it('without an article the adjective carries the article ending', () => {
    expect(row('none', 'nom')).toEqual(['er', 'e', 'es', 'e']);
    expect(row('none', 'acc')).toEqual(['en', 'e', 'es', 'e']);
    expect(row('none', 'dat')).toEqual(['em', 'er', 'em', 'en']);
  });
});

describe('declineAdjective', () => {
  it('adds the ending to regular adjectives', () => {
    expect(declineAdjective('neu', 'definite', 'm', 'acc')).toBe('neuen');
    expect(declineAdjective('groß', 'indefinite', 'n', 'nom')).toBe('großes');
    expect(declineAdjective('frisch', 'none', 'f', 'nom')).toBe('frische');
    expect(declineAdjective('kalt', 'none', 'n', 'dat')).toBe('kaltem');
  });

  it('adapts hoch, -el and -er stems', () => {
    expect(declineAdjective('hoch', 'definite', 'm', 'nom')).toBe('hohe');
    expect(declineAdjective('dunkel', 'indefinite', 'f', 'acc')).toBe('dunkle');
    expect(declineAdjective('teuer', 'definite', 'n', 'nom')).toBe('teure');
    expect(declineAdjective('sauber', 'definite', 'f', 'nom')).toBe('saubere');
  });
});
