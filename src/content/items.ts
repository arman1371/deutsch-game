import type { Activity } from './schema';

type ItemsKey =
  | 'cards'
  | 'questions'
  | 'pairs'
  | 'items'
  | 'tables'
  | 'statements'
  | 'scenes'
  | 'rounds'
  | 'orders';

const ITEMS_KEY: Record<Activity['gameType'], ItemsKey> = {
  flashcards: 'cards',
  quiz: 'questions',
  memory: 'pairs',
  listen: 'items',
  spell: 'items',
  sentence: 'items',
  gapfill: 'items',
  sortit: 'items',
  conjugation: 'tables',
  blitz: 'statements',
  dialogue: 'scenes',
  clock: 'rounds',
  market: 'orders',
};

export function getItems(activity: Activity): { id: string }[] {
  const config = activity.config as unknown as Record<string, { id: string }[]>;
  return config[ITEMS_KEY[activity.gameType]] ?? [];
}

/** Copy of the activity that only contains the given item ids (used by the mistakes review). */
export function withItems(activity: Activity, ids: readonly string[]): Activity {
  const key = ITEMS_KEY[activity.gameType];
  const config = activity.config as unknown as Record<string, { id: string }[]>;
  const kept = (config[key] ?? []).filter((i) => ids.includes(i.id));
  return { ...activity, config: { ...config, [key]: kept } } as Activity;
}

export function itemCount(activity: Activity): number {
  return getItems(activity).length;
}
