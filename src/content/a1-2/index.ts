import type { LevelContent } from '../schema';
import { stadt } from './u1-stadt';
import { wohnen } from './u2-wohnen';
import { arbeit } from './u3-arbeit';
import { gesundheit } from './u4-gesundheit';
import { kleidung } from './u5-kleidung';
import { reisen } from './u6-reisen';

const units = [stadt, wohnen, arbeit, gesundheit, kleidung, reisen];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
