import type { LevelMeta } from './schema';

/**
 * Level catalogue. To add a level: create `src/content/<level-id>/index.ts` that default-exports a
 * `LevelContent`, then flip the entry below to `available` and point `load` at it.
 */
export const LEVELS: LevelMeta[] = [
  {
    id: 'a1-1',
    title: 'A1.1',
    subtitle: 'First steps: greetings, family, hobbies, time and shopping',
    status: 'available',
    load: () => import('./a1-1'),
  },
  {
    id: 'a1-2',
    title: 'A1.2',
    subtitle: 'Everyday life: home, travel, health',
    status: 'coming-soon',
  },
  { id: 'a2-1', title: 'A2.1', subtitle: 'Past tense, plans and opinions', status: 'coming-soon' },
  {
    id: 'a2-2',
    title: 'A2.2',
    subtitle: 'Work, services and longer conversations',
    status: 'coming-soon',
  },
];

export function getLevelMeta(id: string): LevelMeta | undefined {
  return LEVELS.find((l) => l.id === id);
}
