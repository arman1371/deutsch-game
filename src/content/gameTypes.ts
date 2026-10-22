export const GAME_TYPES = [
  'flashcards',
  'quiz',
  'memory',
  'listen',
  'spell',
  'sentence',
  'gapfill',
  'sortit',
  'conjugation',
  'blitz',
  'dialogue',
  'clock',
  'market',
] as const;
export type GameType = (typeof GAME_TYPES)[number];
