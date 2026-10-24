import { conjugate, konjunktiv2, PRONOUNS, type Forms } from '@/lib/german/conjugation';
import { unit } from '../builders';
import type { Unit } from '../schema';
import type { LessonId } from '../lessons';
import { customTable, sent } from '../a1-2/helpers';

/** The C2.1 units share the A1.2 / B1.1 authoring helpers; the level id and the C2 tables are new. */
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
  tf,
  typed,
  you,
} from '../a1-2/helpers';

export const unitC21 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'c2-1' });

/** Sentence-builder item from a plain sentence: the words are the sentence split at the spaces. */
export const sw = (
  id: string,
  translation: string,
  sentence: string,
  opts: { extra?: string[]; alsoAccept?: string[]; explanation?: string; lesson?: LessonId } = {},
) => sent(id, translation, sentence.split(' '), opts);

type Blanks = Parameters<typeof customTable>[4];
type SixForms = Parameters<typeof customTable>[3];

/** Each form of `aux` followed by the same rest: werde + gemacht haben, hätte + gehen müssen … */
const compound = (aux: Forms, rest: string): SixForms =>
  PRONOUNS.map((p) => `${aux[p]} ${rest}`) as unknown as SixForms;

/** Konjunktiv I: stem + e, est, e, en, et, en (sein is the one irregular verb). */
export function konjunktiv1(infinitive: string): Forms {
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
  const stem = infinitive.replace(/e?n$/, '');
  return {
    ich: `${stem}e`,
    du: `${stem}est`,
    'er/sie/es': `${stem}e`,
    wir: `${stem}en`,
    ihr: `${stem}et`,
    'sie/Sie': `${stem}en`,
  };
}

/** Konjunktiv I of one verb: haben → habe, habest, habe, haben, habet, haben. */
export const k1Table = (infinitive: string, meaning: string, blanks: Blanks) =>
  customTable(
    `k1-${infinitive}`,
    `${infinitive} (Konjunktiv I)`,
    meaning,
    PRONOUNS.map((p) => konjunktiv1(infinitive)[p]) as unknown as SixForms,
    blanks,
  );

/** Perfect Konjunktiv I for reported past events: sei gekommen / habe gemacht … */
export const k1PerfectTable = (
  participle: string,
  aux: 'haben' | 'sein',
  meaning: string,
  blanks: Blanks,
) =>
  customTable(
    `k1p-${participle}`,
    `${participle} (Konjunktiv I, past)`,
    meaning,
    compound(konjunktiv1(aux), participle),
    blanks,
  );

/** Futur II: "gemacht haben" → werde gemacht haben, wirst gemacht haben … */
export const futur2Table = (
  participle: string,
  aux: 'haben' | 'sein',
  meaning: string,
  blanks: Blanks,
) =>
  customTable(
    `futur2-${participle}`,
    `${participle} ${aux} (Futur II)`,
    meaning,
    compound(conjugate('werden'), `${participle} ${aux}`),
    blanks,
  );

/** Criticism after the fact with a modal verb: "hätte … kommen müssen". */
export const k2ModalPastTable = (
  infinitive: string,
  modal: 'müssen' | 'sollen' | 'können',
  meaning: string,
  blanks: Blanks,
) =>
  customTable(
    `k2mp-${infinitive}-${modal}`,
    `${infinitive} ${modal} (Konjunktiv II, past)`,
    meaning,
    compound(konjunktiv2('haben'), `${infinitive} ${modal}`),
    blanks,
  );

/** Adds the `why` sentence for wrong options to gap-fill / quiz items, looked up by item id. */
export const withWhy = <T extends { id: string }>(
  items: T[],
  why: Record<string, Record<string, string>>,
) => items.map((i) => (why[i.id] ? { ...i, why: why[i.id] } : i));
