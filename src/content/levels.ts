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
    subtitle: 'Everyday life: town, home, work, health, travel and services',
    status: 'available',
    load: () => import('./a1-2'),
  },
  {
    id: 'a2-1',
    title: 'A2.1',
    subtitle: 'Online life, plans, travel, flat hunting, offices, school and job search',
    status: 'available',
    load: () => import('./a2-1'),
  },
  {
    id: 'a2-2',
    title: 'A2.2',
    subtitle:
      'Learning, sport, neighbours, music, wishes, post, travel, banking and the world of work',
    status: 'available',
    load: () => import('./a2-2'),
  },
  {
    id: 'b1-1',
    title: 'B1.1',
    subtitle:
      'Luck, entertainment, health, languages, work, services, living together, friendship, future, celebrations, environment and mishaps',
    status: 'available',
    load: () => import('./b1-1'),
  },
  {
    id: 'b1-2',
    title: 'B1.2',
    subtitle:
      'Colleagues, digital life, consumer rights, courses, customs, volunteering, politics, history, city and country, home and Europe, theatre and the B1 exam',
    status: 'available',
    load: () => import('./b1-2'),
  },
  {
    id: 'b2-1',
    title: 'B2.1',
    subtitle: 'Arguing in depth, news and media, work and society at upper-intermediate level',
    status: 'coming-soon',
  },
  {
    id: 'c2-1',
    title: 'C2.1',
    subtitle:
      'Nuance and style, working life, economy, digitalisation, AI and research, medicine, mind and wellbeing, media and debate',
    status: 'available',
    load: () => import('./c2-1'),
  },
];

export function getLevelMeta(id: string): LevelMeta | undefined {
  return LEVELS.find((l) => l.id === id);
}
