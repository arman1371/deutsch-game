import type { LevelContent } from '../schema';
import { online } from './u1-online';
import { freizeit } from './u2-freizeit';
import { wetter } from './u3-wetter';
import { bahn } from './u4-bahn';
import { wohnung } from './u5-wohnung';
import { aemter } from './u6-aemter';
import { familie } from './u7-familie';

const units = [online, freizeit, wetter, bahn, wohnung, aemter, familie];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
export type { UnitContent } from './types';
