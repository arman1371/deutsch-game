import { normalize } from '@/lib/answer-check';
import { createRng, hashString, shuffle } from '@/lib/rng';

export interface WordTile {
  id: string;
  text: string;
}

export function buildTiles(
  words: readonly string[],
  extra: readonly string[] = [],
  seed = 0,
  key = '',
): WordTile[] {
  const tiles = [...words, ...extra].map((text, i) => ({ id: `t${i}`, text }));
  let out = shuffle(tiles, createRng(seed ^ hashString(key)));
  // never hand the player the solved sentence
  const solved = words.join(' ');
  if (extra.length === 0 && new Set(words).size > 1) {
    const rng = createRng(seed + 1);
    for (let i = 0; i < 20 && out.map((t) => t.text).join(' ') === solved; i++)
      out = shuffle(tiles, rng);
  }
  return out;
}

export function sentenceOf(texts: readonly string[]): string {
  return texts.join(' ');
}

export function isCorrectSentence(
  texts: readonly string[],
  words: readonly string[],
  alsoAccept: readonly string[] = [],
): boolean {
  const given = normalize(sentenceOf(texts));
  return [sentenceOf(words), ...alsoAccept].some((s) => normalize(s) === given);
}

export function moveItem<T>(list: readonly T[], from: number, to: number): T[] {
  const copy = [...list];
  const [item] = copy.splice(from, 1);
  if (item === undefined) return copy;
  copy.splice(to, 0, item);
  return copy;
}
