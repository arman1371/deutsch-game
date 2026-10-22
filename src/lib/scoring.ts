export interface GameResult {
  /** number of items answered correctly on the first try */
  correct: number;
  total: number;
  /** ids of every item the player answered (right or wrong) */
  played: string[];
  /** ids of items that were answered wrong (or flagged "again") at least once */
  mistakes: string[];
  /** optional extra points (combo bonuses in Blitz, etc.) */
  bonusXp?: number;
}

export function accuracy(r: Pick<GameResult, 'correct' | 'total'>): number {
  return r.total === 0 ? 1 : Math.max(0, Math.min(1, r.correct / r.total));
}

/** Everyone who finishes gets at least one star – the goal is to keep learning, not to punish. */
export function starsFor(acc: number): 1 | 2 | 3 {
  if (acc >= 0.9) return 3;
  if (acc >= 0.7) return 2;
  return 1;
}

export function xpFor(r: GameResult): number {
  const stars = starsFor(accuracy(r));
  return r.correct * 10 + stars * 5 + (r.bonusXp ?? 0);
}
