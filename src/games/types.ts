import type { ConfigOf, GameType } from '@/content/schema';
import type { GameResult } from '@/lib/scoring';

/** Contract every game engine implements. Engines are pure UI: content in, GameResult out. */
export interface GameProps<T extends GameType> {
  config: ConfigOf<T>;
  /** drives all randomness (shuffles, distractors) so a run can be replayed with ?seed= */
  seed: number;
  onFinish: (result: GameResult) => void;
}
