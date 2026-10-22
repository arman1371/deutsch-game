import type { Activity, LevelContent, Unit, Vocab } from './schema';

export interface ContentIndex {
  units: Unit[];
  vocab: Vocab[];
  activities: Activity[];
  unitById: Map<string, Unit>;
  activityById: Map<string, Activity>;
  /** activities of a unit in guided-path order */
  pathOf: (unitId: string) => Activity[];
  /** the whole guided path across every unit, in order */
  fullPath: Activity[];
}

/** Merge several loaded levels into one lookup structure. Authoring order = path order. */
export function buildIndex(levels: readonly LevelContent[]): ContentIndex {
  const units = levels
    .flatMap((l) => l.units)
    .sort((a, b) => a.levelId.localeCompare(b.levelId) || a.order - b.order);
  const activities = levels.flatMap((l) => l.activities);
  const vocab = levels.flatMap((l) => l.vocab);
  const unitById = new Map(units.map((u) => [u.id, u]));
  const activityById = new Map(activities.map((a) => [a.id, a]));
  const pathOf = (unitId: string) => activities.filter((a) => a.unitId === unitId);
  const fullPath = units.flatMap((u) => pathOf(u.id));
  return { units, vocab, activities, unitById, activityById, pathOf, fullPath };
}

export const EMPTY_INDEX: ContentIndex = buildIndex([]);
