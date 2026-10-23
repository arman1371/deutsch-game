import type { LevelContent } from '../schema';
import { stadt } from './u1-stadt';
import { wohnen } from './u2-wohnen';
import { arbeit } from './u3-arbeit';
import { gesundheit } from './u4-gesundheit';
import { kleidung } from './u5-kleidung';
import { reisen } from './u6-reisen';
import { feiern } from './u7-feste';
import { termine } from './u8-termine';
import { aemter } from './u9-aemter';
import { alltag } from './u10-alltag';

const units = [
  stadt,
  wohnen,
  arbeit,
  gesundheit,
  kleidung,
  reisen,
  feiern,
  termine,
  aemter,
  alltag,
];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
