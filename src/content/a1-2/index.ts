import type { LevelContent } from '../schema';
import { stadt } from './u1-stadt';
import { wohnen } from './u2-wohnen';
import { arbeit } from './u3-arbeit';

const units = [stadt, wohnen, arbeit];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
