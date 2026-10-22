import type { Activity, Unit, Vocab } from '../schema';

export interface UnitContent {
  unit: Unit;
  vocab: Vocab[];
  activities: Activity[];
}
