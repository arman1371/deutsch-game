import type { LevelContent } from '../schema';
import { lernen } from './u1-lernen';
import { sportUnit } from './u2-sport';
import { nachbarn } from './u3-nachbarn';
import { kunst } from './u4-kunst';

const units = [lernen, sportUnit, nachbarn, kunst];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
export type { UnitContent } from './types';
