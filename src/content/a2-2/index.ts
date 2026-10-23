import type { LevelContent } from '../schema';
import { lernen } from './u1-lernen';
import { sportUnit } from './u2-sport';
import { nachbarn } from './u3-nachbarn';
import { kunst } from './u4-kunst';
import { wuensche } from './u5-wuensche';
import { feste } from './u6-feste';
import { postUnit } from './u7-post';
import { werbung } from './u8-werbung';

const units = [lernen, sportUnit, nachbarn, kunst, wuensche, feste, postUnit, werbung];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
export type { UnitContent } from './types';
