import { createRng, shuffle } from '@/lib/rng';

export interface MemoryCard {
  uid: string;
  pairId: string;
  text: string;
  side: 'a' | 'b';
}

export function buildDeck(
  pairs: readonly { id: string; a: string; b: string }[],
  seed: number,
): MemoryCard[] {
  const cards = pairs.flatMap<MemoryCard>((p) => [
    { uid: `${p.id}:a`, pairId: p.id, text: p.a, side: 'a' },
    { uid: `${p.id}:b`, pairId: p.id, text: p.b, side: 'b' },
  ]);
  return shuffle(cards, createRng(seed));
}

export function isMatch(a: MemoryCard, b: MemoryCard): boolean {
  return a.uid !== b.uid && a.pairId === b.pairId;
}
