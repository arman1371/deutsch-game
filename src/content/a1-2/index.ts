import type { LevelContent } from '../schema';
import { stadt } from './u1-stadt';

const units = [stadt];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
