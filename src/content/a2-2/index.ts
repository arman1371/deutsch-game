import type { LevelContent } from '../schema';
import { lernen } from './u1-lernen';

const units = [lernen];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
export type { UnitContent } from './types';
