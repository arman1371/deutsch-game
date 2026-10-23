import type { LevelContent } from '../schema';
import { kunst } from './u1-kunst';
import { literatur } from './u2-literatur';
import { kulturerbe } from './u3-kulturerbe';
import { recht } from './u4-recht';
import { staatPolitik } from './u5-staat';
import { engagement } from './u6-engagement';
import { klima } from './u7-klima';
import { nuancen } from './u8-nuancen';
import { stellung } from './u9-stellung';

const units = [
  kunst,
  literatur,
  kulturerbe,
  recht,
  staatPolitik,
  engagement,
  klima,
  nuancen,
  stellung,
];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
export type { UnitContent } from './types';
