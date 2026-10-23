import {
  konjunktiv2,
  passiveForms,
  reflexiveDativeForms,
  reflexiveForms,
} from '@/lib/german/conjugation';
import { adjectiveEnding, declineAdjective, type DeclensionKind } from '@/lib/german/adjectives';
import type { Case, Gender } from '@/lib/german/articles';
import { unit } from '../builders';
import type { Unit } from '../schema';
import { customTable, gap } from '../a1-2/helpers';

/** The A2.2 units share the A1.2 authoring helpers; only the level id and the grammar tables are new. */
export {
  activity,
  customTable,
  dictation,
  gap,
  heard,
  meta,
  pastTable,
  q,
  readRound,
  say,
  sent,
  sepTable,
  setRound,
  sortItems,
  table,
  tf,
  typed,
  you,
} from '../a1-2/helpers';
export { reflexiveTable } from '../a2-1/helpers';

export const unit22 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'a2-2' });

type Blanks = Parameters<typeof customTable>[4];
type SixForms = Parameters<typeof customTable>[3];

const sixForms = (f: ReturnType<typeof konjunktiv2>): SixForms => [
  f.ich,
  f.du,
  f['er/sie/es'],
  f.wir,
  f.ihr,
  f['sie/Sie'],
];

/** Konjunktiv II table: "sein" → wäre, wärst, wäre … (forms generated, not typed twice). */
export const k2Table = (infinitive: string, meaning: string, blanks: Blanks) =>
  customTable(
    `k2-${infinitive}`,
    `${infinitive} (Konjunktiv II)`,
    meaning,
    sixForms(konjunktiv2(infinitive)),
    blanks,
  );

/** Present passive table: "informiert" → werde informiert, wirst informiert … */
export const passiveTable = (participle: string, meaning: string, blanks: Blanks) =>
  customTable(
    `passiv-${participle}`,
    `${participle} werden (Passiv)`,
    meaning,
    sixForms(passiveForms(participle)),
    blanks,
  );

/** Reflexive verb with a dative pronoun: "waschen" → wasche mir, wäschst dir … */
export const reflexiveDativeTable = (infinitive: string, meaning: string, blanks: Blanks) =>
  customTable(
    `sich-dat-${infinitive}`,
    `sich (Dat.) ${infinitive}`,
    meaning,
    sixForms(reflexiveDativeForms(infinitive)),
    blanks,
  );

/** Accusative reflexive table, re-exported under a name that fits next to its dative sibling. */
export const reflexiveAccTable = (infinitive: string, meaning: string, blanks: Blanks) =>
  customTable(
    `sich-${infinitive}`,
    `sich ${infinitive}`,
    meaning,
    sixForms(reflexiveForms(infinitive)),
    blanks,
  );

const ENDING_ORDER = ['e', 'en', 'er', 'es', 'em'] as const;

/**
 * Gap item for an adjective ending. The blank holds the whole declined adjective and the base form
 * follows the sentence in brackets: adjGap('a1', 'Ich kaufe den ___ Mantel.', 'neu', 'definite',
 * 'm', 'acc', …) → answer "neuen" with the other endings (neue, neuer, neues) as chips.
 */
export const adjGap = (
  id: string,
  text: string,
  adjective: string,
  kind: DeclensionKind,
  gender: Gender,
  c: Case,
  translation: string,
  explanation?: string,
) => {
  const answer = declineAdjective(adjective, kind, gender, c);
  const stem = answer.slice(0, answer.length - adjectiveEnding(kind, gender, c).length);
  const wrong = ENDING_ORDER.map((e) => `${stem}${e}`)
    .filter((o) => o !== answer)
    .slice(0, 3);
  return gap(id, `${text} (${adjective})`, answer, [answer, ...wrong], translation, explanation);
};
