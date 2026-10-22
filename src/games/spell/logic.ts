import { createRng, shuffle, type Rng } from '@/lib/rng';

export interface LetterTile {
  id: number;
  ch: string;
}

/** Shuffle the letters of a word; avoids returning the original order when another exists. */
export function scrambleLetters(word: string, rng: Rng): LetterTile[] {
  const tiles = [...word].map((ch, id) => ({ id, ch }));
  const original = word;
  const distinct = new Set(tiles.map((t) => t.ch)).size > 1;
  let out = shuffle(tiles, rng);
  for (
    let tries = 0;
    distinct && tries < 20 && out.map((t) => t.ch).join('') === original;
    tries++
  ) {
    out = shuffle(tiles, rng);
  }
  return out;
}

export function scrambleForItem(word: string, seed: number, itemId: string): LetterTile[] {
  let h = seed;
  for (const c of itemId) h = (Math.imul(h, 31) + c.charCodeAt(0)) >>> 0;
  return scrambleLetters(word, createRng(h));
}
