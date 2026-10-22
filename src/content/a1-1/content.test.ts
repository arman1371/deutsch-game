import { getItems } from '../items';
import { LevelContentSchema, type Activity } from '../schema';
import { TAGS } from '../tags';
import content from './index';

describe('A1.1 content', () => {
  it('passes schema validation', () => {
    const parsed = LevelContentSchema.safeParse(content);
    if (!parsed.success) console.error(JSON.stringify(parsed.error.issues.slice(0, 5), null, 2));
    expect(parsed.success).toBe(true);
  });

  it('has unique ids', () => {
    const dup = (ids: string[]) => ids.filter((id, i) => ids.indexOf(id) !== i);
    expect(dup(content.activities.map((a) => a.id))).toEqual([]);
    expect(dup(content.units.map((u) => u.id))).toEqual([]);
    expect(dup(content.vocab.map((v) => v.id))).toEqual([]);
  });

  it('has unique item ids inside each activity', () => {
    for (const a of content.activities) {
      const ids = getItems(a).map((i) => i.id);
      expect(new Set(ids).size, `${a.id} has duplicate item ids`).toBe(ids.length);
    }
  });

  it('links every activity to a unit and uses canonical tags', () => {
    const unitIds = new Set(content.units.map((u) => u.id));
    for (const a of content.activities) {
      expect(unitIds.has(a.unitId), a.id).toBe(true);
      for (const tag of a.tags) expect(Object.hasOwn(TAGS, tag), `${a.id}: ${tag}`).toBe(true);
    }
  });

  it('numbers units 1..n in order and prefixes ids with the unit id', () => {
    expect(content.units.map((u) => u.order)).toEqual(content.units.map((_, i) => i + 1));
    for (const a of content.activities) expect(a.id.startsWith(a.unitId)).toBe(true);
  });

  describe.each(content.units.map((u) => [u.title, u.id] as const))('%s', (_title, unitId) => {
    const acts: Activity[] = content.activities.filter((a) => a.unitId === unitId);

    it('has 10–16 activities covering at least 6 game types', () => {
      expect(acts.length).toBeGreaterThanOrEqual(10);
      expect(acts.length).toBeLessThanOrEqual(16);
      expect(new Set(acts.map((a) => a.gameType)).size).toBeGreaterThanOrEqual(6);
    });

    it('starts with an easy activity and ends with a challenge', () => {
      expect(acts[0]!.difficulty).toBe(1);
      expect(acts.at(-1)!.title.toLowerCase()).toContain('challenge');
    });

    it('has at least one vocabulary and one grammar-or-conversation activity', () => {
      const tags = new Set(acts.flatMap((a) => a.tags));
      expect(tags.has('vocabulary')).toBe(true);
      expect(tags.has('grammar') || tags.has('communication')).toBe(true);
    });
  });

  it('keeps German answers consistent: quiz/gap options never repeat the prompt', () => {
    for (const a of content.activities) {
      if (a.gameType !== 'quiz') continue;
      for (const q of a.config.questions) {
        expect(
          q.options.filter((o) => o === q.answer),
          `${a.id}/${q.id}`,
        ).toHaveLength(1);
      }
    }
  });
});
