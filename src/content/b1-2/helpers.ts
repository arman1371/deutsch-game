import { conjugatePreterite, conjugate, PRONOUNS, type Forms } from '@/lib/german/conjugation';
import { unit } from '../builders';
import type { LessonId } from '../lessons';
import type { Unit } from '../schema';
import { customTable } from '../a1-2/helpers';

/** The B1.2 units share the earlier authoring helpers; the level id and the past-passive tables are new. */
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
export { adjGap } from '../a2-2/helpers';
export { k2PastTable, passiveModalTable } from '../b1-1/helpers';

export const unitB12 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'b1-2' });

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

const compound = (aux: Forms, rest: string): SixForms =>
  PRONOUNS.map((p) => `${aux[p]} ${rest}`) as unknown as SixForms;

/** Präteritum passive: "eingeladen" → wurde eingeladen, wurdest eingeladen … */
export const passivePastTable = (participle: string, meaning: string, blanks: Blanks) =>
  customTable(
    `passiv-prt-${participle}`,
    `${participle} (Passiv Präteritum)`,
    meaning,
    compound(conjugatePreterite('werden'), participle),
    blanks,
  );

/** Perfekt passive: "eingeladen" → bin eingeladen worden, bist eingeladen worden … */
export const passivePerfektTable = (participle: string, meaning: string, blanks: Blanks) =>
  customTable(
    `passiv-perf-${participle}`,
    `${participle} (Passiv Perfekt)`,
    meaning,
    PRONOUNS.map((p) => `${conjugate('sein')[p]} ${participle} worden`) as unknown as SixForms,
    blanks,
  );
