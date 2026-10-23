import type { LevelContent } from '../schema';
import { online } from './u1-online';
import { freizeit } from './u2-freizeit';
import { wetter } from './u3-wetter';
import { bahn } from './u4-bahn';

const units = [online, freizeit, wetter, bahn];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
export type { UnitContent } from './types';
