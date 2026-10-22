import { buildTiles, isCorrectSentence, moveItem, sentenceOf } from './logic';

describe('sentence logic', () => {
  it('builds tiles including extra words and never the solved order', () => {
    const words = ['Ich', 'heiße', 'Anna.'];
    for (let seed = 0; seed < 20; seed++) {
      const tiles = buildTiles(words, [], seed, 'k');
      expect(tiles.map((t) => t.text).sort()).toEqual([...words].sort());
      expect(tiles.map((t) => t.text)).not.toEqual(words);
    }
    expect(buildTiles(words, ['bin'], 1, 'k')).toHaveLength(4);
    expect(new Set(buildTiles(words, ['bin'], 1, 'k').map((t) => t.id)).size).toBe(4);
  });

  it('joins and grades sentences leniently on case and punctuation', () => {
    expect(sentenceOf(['Wie', 'heißt', 'du?'])).toBe('Wie heißt du?');
    expect(isCorrectSentence(['wie', 'heißt', 'du'], ['Wie', 'heißt', 'du?'])).toBe(true);
    expect(isCorrectSentence(['heißt', 'wie', 'du?'], ['Wie', 'heißt', 'du?'])).toBe(false);
    expect(
      isCorrectSentence(
        ['Am', 'Abend', 'sehe', 'ich', 'fern.'],
        ['Ich', 'sehe', 'am', 'Abend', 'fern.'],
        ['Am Abend sehe ich fern.'],
      ),
    ).toBe(true);
  });

  it('moves items', () => {
    expect(moveItem(['a', 'b', 'c'], 0, 2)).toEqual(['b', 'c', 'a']);
    expect(moveItem(['a', 'b', 'c'], 2, 0)).toEqual(['c', 'a', 'b']);
    expect(moveItem(['a'], 5, 0)).toEqual(['a']);
  });
});
