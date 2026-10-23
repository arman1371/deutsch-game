import { unit } from '../builders';
import type { Unit } from '../schema';

/** The C1.2 units share the A1.2 authoring helpers; only the level id is new. */
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
  tf,
  typed,
  you,
} from '../a1-2/helpers';

export const unitC12 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'c1-2' });
