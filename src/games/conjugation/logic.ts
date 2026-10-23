import { checkAnswer, type AnswerVerdict } from '@/lib/answer-check';
import { personFormWhy } from '@/lib/german/forms';
import { PRONOUNS, type Pronoun } from '@/lib/german/conjugation';

export type CellVerdicts = Partial<Record<Pronoun, AnswerVerdict>>;

export function gradeTable(
  forms: Record<Pronoun, string>,
  blanks: readonly Pronoun[],
  values: Partial<Record<Pronoun, string>>,
): { cells: CellVerdicts; overall: AnswerVerdict } {
  const cells: CellVerdicts = {};
  for (const p of blanks) cells[p] = checkAnswer(values[p] ?? '', forms[p]);
  const verdicts = Object.values(cells);
  const overall: AnswerVerdict = verdicts.includes('wrong')
    ? 'wrong'
    : verdicts.includes('almost')
      ? 'almost'
      : 'correct';
  return { cells, overall };
}

export const pronounOrder = PRONOUNS;

/** Why the first wrong cell is wrong, when the learner wrote the form of another person. */
export function conjugationWhy(
  forms: Record<Pronoun, string>,
  cells: CellVerdicts,
  values: Partial<Record<Pronoun, string>>,
): string | undefined {
  for (const p of PRONOUNS) {
    if (cells[p] !== 'wrong') continue;
    const why = personFormWhy(forms, p, values[p] ?? '');
    if (why) return why;
  }
  return undefined;
}
