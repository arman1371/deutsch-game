import { describeLevelContent } from '@/test/contentSuite';
import { label } from '../builders';
import type { LevelContent } from '../schema';
import content from './index';

describeLevelContent('C1.2', content, 'c1-2');

/**
 * Words that C1.2 deliberately revisits in a new function (e.g. a verb that now takes a preposition).
 * Everything else must be new vocabulary – C1.2 never re-teaches a word card from an earlier level.
 */
const REVIEW_WORDS = new Set<string>([]);

/** Compare words by their bare lemma, so "der Tipp" and "Tipp" count as the same word. */
const key = (v: Parameters<typeof label>[0]) =>
  label(v)
    .replace(/^((der|die|das) )+/i, '')
    .toLowerCase();

/** Every level that sorts before C1.2 (A1.1 … C1.1): picked up automatically as soon as it exists. */
const earlierLevels = Object.entries(
  import.meta.glob<{ default: LevelContent }>('../*/index.ts', { eager: true }),
)
  .map(([path, mod]) => [path.split('/')[1]!, mod.default] as const)
  .filter(([id]) => id < 'c1-2');

describe('C1.2 vocabulary integrity', () => {
  it('compares against every earlier level', () => {
    expect(earlierLevels.map(([id]) => id)).toEqual(expect.arrayContaining(['a1-1', 'b1-1']));
  });

  it('does not repeat vocabulary from earlier levels', () => {
    const earlier = new Set(earlierLevels.flatMap(([, c]) => c.vocab).map(key));
    const repeated = content.vocab.map(key).filter((k) => earlier.has(k) && !REVIEW_WORDS.has(k));
    expect(repeated).toEqual([]);
  });

  it('does not teach a word twice inside C1.2', () => {
    const all = content.vocab.map(key);
    const dup = all.filter((k, i) => all.indexOf(k) !== i && !REVIEW_WORDS.has(k));
    expect(dup).toEqual([]);
  });
});
