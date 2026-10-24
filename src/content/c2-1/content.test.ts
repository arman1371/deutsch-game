import { describeLevelContent } from '@/test/contentSuite';
import { label } from '../builders';
import a11 from '../a1-1';
import a12 from '../a1-2';
import a21 from '../a2-1';
import a22 from '../a2-2';
import b11 from '../b1-1';
import b12 from '../b1-2';
import b21 from '../b2-1';
import b22 from '../b2-2';
import content from './index';

describeLevelContent('C2.1', content, 'c2-1');

/**
 * Words that C2.1 deliberately revisits in a new function.
 * Everything else must be new vocabulary – C2.1 never re-teaches a word card from an earlier level.
 */
const REVIEW_WORDS = new Set<string>([]);

/** Compare words by their bare lemma, so "der Tipp" and "Tipp" count as the same word. */
const key = (v: Parameters<typeof label>[0]) =>
  label(v)
    .replace(/^((der|die|das) )+/i, '')
    .toLowerCase();

describe('C2.1 vocabulary integrity', () => {
  it('does not repeat vocabulary from A1.1 to B2.2', () => {
    const earlier = new Set(
      [
        ...a11.vocab,
        ...a12.vocab,
        ...a21.vocab,
        ...a22.vocab,
        ...b11.vocab,
        ...b12.vocab,
        ...b21.vocab,
        ...b22.vocab,
      ].map(key),
    );
    const repeated = content.vocab.map(key).filter((k) => earlier.has(k) && !REVIEW_WORDS.has(k));
    expect(repeated).toEqual([]);
  });

  it('does not teach a word twice inside C2.1', () => {
    const all = content.vocab.map(key);
    const dup = all.filter((k, i) => all.indexOf(k) !== i && !REVIEW_WORDS.has(k));
    expect(dup).toEqual([]);
  });
});
