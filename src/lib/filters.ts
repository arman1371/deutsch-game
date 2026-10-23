import { GAME_TYPES, type GameType } from '@/content/gameTypes';
import type { Activity, Unit } from '@/content/schema';
import { TAGS, isTagId, tagsInGroup, type TagId } from '@/content/tags';

export type DurationBucket = 'quick' | 'medium' | 'long';

export interface FilterState {
  q: string;
  levels: string[];
  units: string[];
  skills: TagId[];
  topics: TagId[];
  grammar: TagId[];
  types: GameType[];
  difficulty: (1 | 2 | 3)[];
  duration: DurationBucket[];
}

export const EMPTY_FILTERS: FilterState = {
  q: '',
  levels: [],
  units: [],
  skills: [],
  topics: [],
  grammar: [],
  types: [],
  difficulty: [],
  duration: [],
};

export const GAME_TYPE_LABELS: Record<GameType, { label: string; emoji: string }> = {
  flashcards: { label: 'Flashcards', emoji: '🃏' },
  quiz: { label: 'Quiz', emoji: '🎯' },
  memory: { label: 'Memory', emoji: '🧠' },
  listen: { label: 'Listen & pick', emoji: '🎧' },
  spell: { label: 'Spell it', emoji: '🔤' },
  sentence: { label: 'Sentence builder', emoji: '🧱' },
  gapfill: { label: 'Gap fill', emoji: '✏️' },
  sortit: { label: 'Sort it', emoji: '🗂️' },
  conjugation: { label: 'Conjugation grid', emoji: '🧮' },
  blitz: { label: 'Blitz', emoji: '⚡' },
  dialogue: { label: 'Dialogue', emoji: '💬' },
  clock: { label: 'Clock master', emoji: '🕒' },
  market: { label: 'Market stand', emoji: '🛒' },
};

export const DIFFICULTY_LABELS = { 1: 'Easy', 2: 'Medium', 3: 'Hard' } as const;
export const DURATION_LABELS: Record<DurationBucket, string> = {
  quick: '≤ 3 min',
  medium: '4–6 min',
  long: '7+ min',
};

export function durationBucket(minutes: number): DurationBucket {
  if (minutes <= 3) return 'quick';
  return minutes <= 6 ? 'medium' : 'long';
}

const hasAny = <T>(selected: readonly T[], test: (v: T) => boolean) =>
  selected.length === 0 || selected.some(test);

/** Within one facet options are OR-ed, across facets they are AND-ed. */
export function matchesFilters(
  activity: Activity,
  f: FilterState,
  unitTitle?: string,
  levelId?: string,
): boolean {
  const q = f.q.trim().toLowerCase();
  if (q) {
    const haystack = [
      activity.title,
      activity.description,
      unitTitle ?? '',
      ...activity.tags.map((t) => TAGS[t].label),
      GAME_TYPE_LABELS[activity.gameType].label,
    ]
      .join(' ')
      .toLowerCase();
    if (!q.split(/\s+/).every((word) => haystack.includes(word))) return false;
  }
  const tagged = (group: TagId[]) => hasAny(group, (t) => activity.tags.includes(t));
  return (
    hasAny(f.levels, (l) => l === levelId) &&
    hasAny(f.units, (u) => u === activity.unitId) &&
    tagged(f.skills) &&
    tagged(f.topics) &&
    tagged(f.grammar) &&
    hasAny(f.types, (t) => t === activity.gameType) &&
    hasAny(f.difficulty, (d) => d === activity.difficulty) &&
    hasAny(f.duration, (d) => d === durationBucket(activity.estMinutes))
  );
}

export function filterActivities(
  activities: readonly Activity[],
  f: FilterState,
  units: readonly Unit[] = [],
): Activity[] {
  const byId = new Map(units.map((u) => [u.id, u]));
  return activities.filter((a) => {
    const unit = byId.get(a.unitId);
    return matchesFilters(a, f, unit?.title, unit?.levelId);
  });
}

export function activeFilterCount(f: FilterState): number {
  return (
    (f.q.trim() ? 1 : 0) +
    f.levels.length +
    f.units.length +
    f.skills.length +
    f.topics.length +
    f.grammar.length +
    f.types.length +
    f.difficulty.length +
    f.duration.length
  );
}

const list = (raw: string | null) => (raw ? raw.split(',').filter(Boolean) : []);

export function filtersFromParams(p: URLSearchParams): FilterState {
  const tagList = (key: string, group: 'skill' | 'topic' | 'grammar') =>
    list(p.get(key)).filter((t): t is TagId => isTagId(t) && tagsInGroup(group).includes(t));
  return {
    q: p.get('q') ?? '',
    levels: list(p.get('lvl')),
    units: list(p.get('unit')),
    skills: tagList('skill', 'skill'),
    topics: tagList('topic', 'topic'),
    grammar: tagList('grammar', 'grammar'),
    types: list(p.get('type')).filter((t): t is GameType =>
      (GAME_TYPES as readonly string[]).includes(t),
    ),
    difficulty: list(p.get('level'))
      .map(Number)
      .filter((n): n is 1 | 2 | 3 => n === 1 || n === 2 || n === 3),
    duration: list(p.get('time')).filter(
      (d): d is DurationBucket => d === 'quick' || d === 'medium' || d === 'long',
    ),
  };
}

export function filtersToParams(f: FilterState): URLSearchParams {
  const p = new URLSearchParams();
  const set = (k: string, v: readonly (string | number)[]) => v.length && p.set(k, v.join(','));
  if (f.q.trim()) p.set('q', f.q.trim());
  set('lvl', f.levels);
  set('unit', f.units);
  set('skill', f.skills);
  set('topic', f.topics);
  set('grammar', f.grammar);
  set('type', f.types);
  set('level', f.difficulty);
  set('time', f.duration);
  return p;
}
