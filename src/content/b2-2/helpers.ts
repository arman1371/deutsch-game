import { unit } from '../builders';
import type { Unit } from '../schema';

/** The B2.2 units share the earlier authoring helpers; only the level id is new. `hint` and `k1Table` are the B1.2 and B2.1 helpers. */
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
export { hint } from '../b1-2/helpers';
export { k1Table } from '../b2-1/helpers';

export const unitB22 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'b2-2' });
