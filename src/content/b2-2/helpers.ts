import { unit } from '../builders';
import type { LessonId } from '../lessons';
import type { Unit } from '../schema';
import { customTable } from '../a1-2/helpers';

/** The B2.2 units share the earlier authoring helpers; the level id, hint helper and Konjunktiv I tables are new. */
export {
  activity,
  customTable,
  dictation,
  gap,
  heard,
  meta,
  q,
  say,
  sent,
  sortItems,
  table,
  tf,
  typed,
  you,
} from '../a1-2/helpers';
export { k2Table, passiveTable } from '../a2-2/helpers';
export { futurTable, pqpTable } from '../b1-1/helpers';

export const unitB22 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'b2-2' });

/**
 * Adds grammar hints to a gap-fill or quiz item: `why` maps wrong options to one sentence on why
 * they are wrong, `lesson` names the mini lesson when the activity mixes grammar points.
 */
export const hint = <T extends { answer: string }>(
  item: T,
  why: Record<string, string>,
  lesson?: LessonId,
): T & { why: Record<string, string>; lesson?: LessonId } => ({
  ...item,
  why,
  ...(lesson ? { lesson } : {}),
});

type Blanks = Parameters<typeof customTable>[4];
type SixForms = Parameters<typeof customTable>[3];

/** Konjunktiv I: stem + -e, -est, -e, -en, -et, -en; sein is the one irregular verb. */
const konjunktiv1 = (infinitive: string): SixForms => {
  if (infinitive === 'sein') return ['sei', 'seiest', 'sei', 'seien', 'seiet', 'seien'];
  const stem = infinitive.replace(/e?n$/, '');
  return [`${stem}e`, `${stem}est`, `${stem}e`, `${stem}en`, `${stem}et`, `${stem}en`];
};

/** Konjunktiv I table: "gehen" → gehe, gehest, gehe, gehen, gehet, gehen. */
export const k1Table = (infinitive: string, meaning: string, blanks: Blanks) =>
  customTable(
    `k1-${infinitive}`,
    `${infinitive} (Konjunktiv I)`,
    meaning,
    konjunktiv1(infinitive),
    blanks,
  );
