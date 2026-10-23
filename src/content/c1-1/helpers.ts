import { konjunktiv1, konjunktiv1Perfect } from '@/lib/german/konjunktiv1';
import { PRONOUNS } from '@/lib/german/conjugation';
import { unit } from '../builders';
import type { LessonId } from '../lessons';
import type { Unit } from '../schema';
import { customTable } from '../a1-2/helpers';

/** The C1.1 units share the B1.1 / A1.2 authoring helpers; the level id and Konjunktiv I tables are new. */
export {
  activity,
  customTable,
  dictation,
  gap,
  heard,
  meta,
  pastTable,
  q,
  say,
  sent,
  sepTable,
  sortItems,
  table,
  tf,
  typed,
  you,
} from '../b1-1/helpers';

export const unitC11 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'c1-1' });

/** Attach a mini lesson to one item – for unit challenges and mixed activities. */
export const lx = <T extends object>(lesson: LessonId, item: T): T & { lesson: LessonId } => ({
  ...item,
  lesson,
});

type Blanks = Parameters<typeof customTable>[4];

const sixForms = (forms: Record<(typeof PRONOUNS)[number], string>) =>
  PRONOUNS.map((p) => forms[p]) as unknown as Parameters<typeof customTable>[3];

/** Konjunktiv I: "machen" → mache, machest, mache … */
export const k1Table = (infinitive: string, meaning: string, blanks: Blanks) =>
  customTable(
    `k1-${infinitive}`,
    `${infinitive} (Konjunktiv I)`,
    meaning,
    sixForms(konjunktiv1(infinitive)),
    blanks,
  );

/** Konjunktiv I of the Perfekt: "gesagt", haben → habe gesagt, habest gesagt … */
export const k1PerfectTable = (
  participle: string,
  aux: 'haben' | 'sein',
  meaning: string,
  blanks: Blanks,
) =>
  customTable(
    `k1perf-${participle}`,
    `${participle} (Konjunktiv I, past)`,
    meaning,
    sixForms(konjunktiv1Perfect(participle, aux)),
    blanks,
  );
