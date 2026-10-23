import {
  conjugate,
  conjugatePreterite,
  konjunktiv2,
  PRONOUNS,
  type Forms,
} from '@/lib/german/conjugation';
import { unit } from '../builders';
import type { Unit } from '../schema';
import { customTable } from '../a1-2/helpers';

/** The B1.1 units share the A1.2 / A2.2 authoring helpers; the level id and the compound-tense tables are new. */
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
} from '../a1-2/helpers';
export { adjGap, k2Table, passiveTable, reflexiveAccTable } from '../a2-2/helpers';

export const unitB11 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'b1-1' });

type Blanks = Parameters<typeof customTable>[4];
type SixForms = Parameters<typeof customTable>[3];

/** Each form of `aux` followed by the same rest: hatte + gemacht, werde + machen … */
const compound = (aux: Forms, rest: string): SixForms =>
  PRONOUNS.map((p) => `${aux[p]} ${rest}`) as unknown as SixForms;

/** Plusquamperfekt: "gemacht", haben → hatte gemacht, hattest gemacht … */
export const pqpTable = (
  participle: string,
  aux: 'haben' | 'sein',
  meaning: string,
  blanks: Blanks,
) =>
  customTable(
    `pqp-${participle}`,
    `${participle} (Plusquamperfekt)`,
    meaning,
    compound(conjugatePreterite(aux), participle),
    blanks,
  );

/** Futur I: "machen" → werde machen, wirst machen … */
export const futurTable = (infinitive: string, meaning: string, blanks: Blanks) =>
  customTable(
    `futur-${infinitive}`,
    `${infinitive} (Futur I)`,
    meaning,
    compound(conjugate('werden'), infinitive),
    blanks,
  );

/** Konjunktiv II of the past: "gemacht", haben → hätte gemacht, hättest gemacht … */
export const k2PastTable = (
  participle: string,
  aux: 'haben' | 'sein',
  meaning: string,
  blanks: Blanks,
) =>
  customTable(
    `k2past-${participle}`,
    `${participle} (Konjunktiv II, past)`,
    meaning,
    compound(konjunktiv2(aux), participle),
    blanks,
  );

/** Passive with a modal verb: müssen + "untersucht" → muss untersucht werden … */
export const passiveModalTable = (
  modal: 'müssen' | 'können' | 'dürfen' | 'sollen',
  participle: string,
  meaning: string,
  blanks: Blanks,
) =>
  customTable(
    `passiv-${modal}-${participle}`,
    `${modal} + ${participle} werden`,
    meaning,
    compound(conjugate(modal), `${participle} werden`),
    blanks,
  );
