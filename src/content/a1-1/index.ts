import type { LevelContent } from '../schema';
import { withHints } from '../hints';
import { hints } from './hints';
import { hallo } from './u1-hallo';
import { wer } from './u2-wer';
import { woher } from './u3-woher';
import { zahlen } from './u4-zahlen';
import { familie } from './u5-familie';
import { freizeit } from './u6-freizeit';
import { tag } from './u7-tag';
import { einkaufen } from './u8-einkaufen';

const units = [hallo, wer, woher, zahlen, familie, freizeit, tag, einkaufen];

const content: LevelContent = {
  units: units.map((u) => u.unit),
  vocab: units.flatMap((u) => u.vocab),
  activities: withHints(
    units.flatMap((u) => u.activities),
    hints,
  ),
};

export default content;
