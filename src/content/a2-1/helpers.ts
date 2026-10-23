import { reflexiveForms } from '@/lib/german/conjugation';
import { unit } from '../builders';
import type { Unit } from '../schema';
import { customTable } from '../a1-2/helpers';

/** The A2.1 units share the A1.2 authoring helpers; only the level id and reflexive tables are new. */
export {
  activity,
  customTable,
  dictation,
  gap,
  heard,
  meta,
  pastTable,
  q,
  readRound,
  say,
  sent,
  sepTable,
  setRound,
  sortItems,
  table,
  tf,
  typed,
  you,
} from '../a1-2/helpers';

export const unit21 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'a2-1' });

type Blanks = Parameters<typeof customTable>[4];

/** Reflexive verb table: "sich freuen" → ich freue mich … (forms generated, not typed twice). */
export const reflexiveTable = (infinitive: string, meaning: string, blanks: Blanks) => {
  const f = reflexiveForms(infinitive);
  return customTable(
    `sich-${infinitive}`,
    `sich ${infinitive}`,
    meaning,
    [f.ich, f.du, f['er/sie/es'], f.wir, f.ihr, f['sie/Sie']],
    blanks,
  );
};
