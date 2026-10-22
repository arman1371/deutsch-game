import { levelFixture } from '@/test/factories';
import { buildIndex, EMPTY_INDEX } from './index';

describe('buildIndex', () => {
  const idx = buildIndex([levelFixture()]);
  it('indexes units and activities', () => {
    expect(idx.unitById.get('unit-2')?.title).toBe('Unit Two');
    expect(idx.activityById.get('act-3')?.unitId).toBe('unit-2');
    expect(idx.pathOf('unit-1').map((a) => a.id)).toEqual(['act-1', 'act-2']);
    expect(idx.fullPath.map((a) => a.id)).toEqual(['act-1', 'act-2', 'act-3']);
  });
  it('sorts units by level then order', () => {
    const l = levelFixture();
    l.units.reverse();
    expect(buildIndex([l]).units.map((u) => u.id)).toEqual(['unit-1', 'unit-2']);
  });
  it('has an empty index', () => {
    expect(EMPTY_INDEX.activities).toEqual([]);
  });
});
