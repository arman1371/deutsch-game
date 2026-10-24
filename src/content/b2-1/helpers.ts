import { conjugate, PRONOUNS, type Forms } from '@/lib/german/conjugation';
import { unit } from '../builders';
import type { LessonId } from '../lessons';
import type { Unit } from '../schema';
import { customTable } from '../a1-2/helpers';

/** The B2.1 units share the earlier authoring helpers; the level id and three compound tables are new. */
export {
  activity,
  customTable,
  dictation,
  gap,
  heard,
  meta,
  q,
  say,
  sent,
  sortItems,
  table,
  tf,
  typed,
  you,
} from '../a1-2/helpers';
export { adjGap } from '../a2-2/helpers';
export { hint } from '../b1-2/helpers';

export const unitB21 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'b2-1' });

type Blanks = Parameters<typeof customTable>[4];
type SixForms = Parameters<typeof customTable>[3];

const compound = (aux: Forms, rest: string): SixForms =>
  PRONOUNS.map((p) => `${aux[p]} ${rest}`) as unknown as SixForms;

/** Zustandspassiv: "geöffnet" → bin geöffnet, bist geöffnet … (result of an action). */
export const statePassiveTable = (participle: string, meaning: string, blanks: Blanks) =>
  customTable(
    `zustand-${participle}`,
    `${participle} (Zustandspassiv)`,
    meaning,
    compound(conjugate('sein'), participle),
    blanks,
  );

/** Futur II: "gemacht", haben → werde gemacht haben, wirst gemacht haben … */
export const futur2Table = (
  participle: string,
  aux: 'haben' | 'sein',
  meaning: string,
  blanks: Blanks,
) =>
  customTable(
    `futur2-${participle}`,
    `${participle} (Futur II)`,
    meaning,
    compound(conjugate('werden'), `${participle} ${aux}`),
    blanks,
  );

/** Konjunktiv I of a regular verb stem (sein is the only irregular verb). */
export const konjunktiv1 = (infinitive: string): Forms => {
  if (infinitive === 'sein') {
    return {
      ich: 'sei',
      du: 'seiest',
      'er/sie/es': 'sei',
      wir: 'seien',
      ihr: 'seiet',
      'sie/Sie': 'seien',
    };
  }
  const stem = infinitive.replace(/en$/, '');
  return {
    ich: `${stem}e`,
    du: `${stem}est`,
    'er/sie/es': `${stem}e`,
    wir: infinitive,
    ihr: `${stem}et`,
    'sie/Sie': infinitive,
  };
};

/** Konjunktiv I table: "haben" → habe, habest, habe, haben, habet, haben. */
export const k1Table = (infinitive: string, meaning: string, blanks: Blanks) => {
  const f = konjunktiv1(infinitive);
  return customTable(
    `k1-${infinitive}`,
    `${infinitive} (Konjunktiv I)`,
    meaning,
    [f.ich, f.du, f['er/sie/es'], f.wir, f.ihr, f['sie/Sie']],
    blanks,
  );
};

export type { LessonId };
