import type { LevelContent } from '../schema';
import { kollegen } from './u1-kollegen';
import { digital } from './u2-digital';
import { konsum } from './u3-konsum';
import { weiterbildung } from './u4-weiterbildung';
import { regeln } from './u5-regeln';
import { engagement } from './u6-engagement';
import { politik } from './u7-politik';
import { geschichte } from './u8-geschichte';
import { stadtLand } from './u9-stadt-land';
import { heimat } from './u10-heimat';
import { kunst } from './u11-kunst';
import { diskussion } from './u12-diskussion';

const units = [
  kollegen,
  digital,
  konsum,
  weiterbildung,
  regeln,
  engagement,
  politik,
  geschichte,
  stadtLand,
  heimat,
  kunst,
  diskussion,
];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
export type { UnitContent } from './types';
