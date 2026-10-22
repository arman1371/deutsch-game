import { createRng } from '@/lib/rng';
import { scrambleForItem, scrambleLetters } from './logic';

describe('scrambleLetters', () => {
  it('keeps every letter and never returns the solved word', () => {
    for (let seed = 0; seed < 30; seed++) {
      const tiles = scrambleLetters('Montag', createRng(seed));
      expect(tiles.map((t) => t.ch).sort()).toEqual([...'Montag'].sort());
      expect(tiles.map((t) => t.ch).join('')).not.toBe('Montag');
    }
  });

  it('handles words made of one repeated letter', () => {
    expect(
      scrambleLetters('aaa', createRng(1))
        .map((t) => t.ch)
        .join(''),
    ).toBe('aaa');
  });

  it('is deterministic per seed and item', () => {
    expect(scrambleForItem('Dienstag', 4, 'x')).toEqual(scrambleForItem('Dienstag', 4, 'x'));
    expect(scrambleForItem('Dienstag', 4, 'x')).not.toEqual(scrambleForItem('Dienstag', 4, 'y'));
  });
});
