import type { LevelContent } from '../schema';
import { beziehungen } from './u1-beziehungen';
import { ernaehrung } from './u2-ernaehrung';
import { studium } from './u3-studium';
import { service2 } from './u4-service';
import { gesundheit } from './u5-gesundheit';

const units = [beziehungen, ernaehrung, studium, service2, gesundheit];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: units.flatMap((u) => u.activities),
};

export default content;
export type { UnitContent } from './types';
