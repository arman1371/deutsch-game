import { levelFixture } from '@/test/factories';
import {
  activeFilterCount,
  durationBucket,
  EMPTY_FILTERS,
  filterActivities,
  filtersFromParams,
  filtersToParams,
  matchesFilters,
} from './filters';

const { activities, units } = levelFixture();
const ids = (f: Partial<typeof EMPTY_FILTERS>) =>
  filterActivities(activities, { ...EMPTY_FILTERS, ...f }, units).map((a) => a.id);

describe('filters', () => {
  it('returns everything with empty filters', () => {
    expect(ids({})).toEqual(['act-1', 'act-2', 'act-3']);
  });

  it('filters by level through the unit', () => {
    const mixed = [...units.slice(0, 1), { ...units[1]!, levelId: 'a1-2' }];
    const byLevel = (levels: string[]) =>
      filterActivities(activities, { ...EMPTY_FILTERS, levels }, mixed).map((a) => a.id);
    expect(byLevel(['a1-1'])).toEqual(['act-1', 'act-2']);
    expect(byLevel(['a1-2'])).toEqual(['act-3']);
    expect(byLevel(['a1-1', 'a1-2'])).toEqual(['act-1', 'act-2', 'act-3']);
    expect(byLevel(['a2-1'])).toEqual([]);
  });

  it('buckets durations', () => {
    expect(durationBucket(2)).toBe('quick');
    expect(durationBucket(3)).toBe('quick');
    expect(durationBucket(5)).toBe('medium');
    expect(durationBucket(7)).toBe('long');
  });

  it('ORs within a facet and ANDs across facets', () => {
    expect(ids({ units: ['unit-2'] })).toEqual(['act-3']);
    expect(ids({ difficulty: [1, 3] })).toEqual(['act-1', 'act-3']);
    expect(ids({ difficulty: [1, 3], units: ['unit-1'] })).toEqual(['act-1']);
    expect(ids({ skills: ['grammar'] })).toEqual(['act-2']);
    expect(ids({ topics: ['numbers'] })).toEqual(['act-3']);
    expect(ids({ grammar: ['questions'] })).toEqual(['act-2']);
    expect(ids({ types: ['quiz'], duration: ['long'] })).toEqual(['act-3']);
    expect(ids({ types: ['market'] })).toEqual([]);
  });

  it('searches title, tags, unit and type', () => {
    expect(ids({ q: 'act-3' })).toEqual(['act-3']);
    expect(ids({ q: 'unit two' })).toEqual(['act-3']);
    expect(ids({ q: 'numbers quiz' })).toEqual(['act-3']);
    expect(ids({ q: 'zzz' })).toEqual([]);
    expect(matchesFilters(activities[0]!, { ...EMPTY_FILTERS, q: 'greetings' })).toBe(true);
  });

  it('counts active filters', () => {
    expect(activeFilterCount(EMPTY_FILTERS)).toBe(0);
    expect(
      activeFilterCount({
        ...EMPTY_FILTERS,
        q: ' x ',
        levels: ['a1-2'],
        units: ['a', 'b'],
        difficulty: [1],
      }),
    ).toBe(5);
  });

  it('round-trips through URL params and drops invalid values', () => {
    const f = {
      ...EMPTY_FILTERS,
      q: 'hallo',
      levels: ['a1-2'],
      units: ['u1'],
      skills: ['grammar' as const],
      types: ['quiz' as const],
      difficulty: [2 as const],
      duration: ['quick' as const],
    };
    const params = filtersToParams(f);
    expect(filtersFromParams(new URLSearchParams(params.toString()))).toEqual(f);
    const dirty = filtersFromParams(
      new URLSearchParams('skill=bogus,grammar&topic=grammar&type=nope&level=9,2&time=forever'),
    );
    expect(dirty.skills).toEqual(['grammar']);
    expect(dirty.topics).toEqual([]); // grammar is not a topic
    expect(dirty.types).toEqual([]);
    expect(dirty.difficulty).toEqual([2]);
    expect(dirty.duration).toEqual([]);
    expect(filtersToParams(EMPTY_FILTERS).toString()).toBe('');
  });
});
