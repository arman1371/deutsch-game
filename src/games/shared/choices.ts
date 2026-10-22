import { createRng, hashString, shuffle } from '@/lib/rng';

/** Shuffle answer options deterministically per question so a replay with the same seed matches. */
export function shuffledOptions(options: readonly string[], seed: number, key: string): string[] {
  return shuffle(options, createRng(seed ^ hashString(key)));
}
