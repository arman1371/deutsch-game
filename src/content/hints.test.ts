import { conjugate } from '@/lib/german/conjugation';
import { quizActivity } from '@/test/factories';
import { adjectiveHint, verbForms, withHints } from './hints';
import { ActivitySchema, type ActivityOf } from './schema';

const grammarQuiz = () =>
  quizActivity('act-1', 'unit-1', {
    tags: ['grammar', 'family'],
    config: {
      questions: [
        {
          id: 'q1',
          prompt: 'Er ___ Deutsch.',
          options: ['spricht', 'sprichst'],
          answer: 'spricht',
        },
        { id: 'q2', prompt: 'Ich sehe ___ Mann.', options: ['den', 'dem'], answer: 'den' },
      ],
    },
  });
const questions = (a: unknown) => (a as ActivityOf<'quiz'>).config.questions;

describe('withHints', () => {
  it('adds lessons, why maps and an activity lesson', () => {
    const [a] = withHints([grammarQuiz()], {
      'act-1': {
        '*': 'accusative',
        q1: verbForms(conjugate('sprechen'), 'er/sie/es'),
        q2: { lesson: 'accusative', why: { dem: 'dem is dative.' } },
      },
    });
    expect(a!.lesson).toBe('accusative');
    expect(questions(a)[0]).toMatchObject({
      lesson: 'verb-conjugation',
      why: { sprichst: '“sprichst” is the du form – for er/sie/es it is “spricht”.' },
    });
    expect(questions(a)[1]).toMatchObject({ lesson: 'accusative', why: { dem: 'dem is dative.' } });
    expect(ActivitySchema.safeParse(a).success).toBe(true);
  });

  it('leaves other activities untouched', () => {
    const other = quizActivity('act-2');
    expect(withHints([other], {})[0]).toBe(other);
  });

  it('throws on unknown activity or item ids', () => {
    expect(() => withHints([grammarQuiz()], { nope: { q1: 'accusative' } })).toThrow(/nope/);
    expect(() => withHints([grammarQuiz()], { 'act-1': { q9: 'accusative' } })).toThrow(/q9/);
  });

  it('is rejected by the schema when a why key is not a wrong option', () => {
    const [a] = withHints([grammarQuiz()], { 'act-1': { q2: { why: { den: 'the answer' } } } });
    expect(ActivitySchema.safeParse(a).success).toBe(false);
  });
});

describe('adjectiveHint', () => {
  it('explains every wrong ending', () => {
    const hint = adjectiveHint(
      'definite',
      'm',
      'acc',
    )({
      id: 'a1',
      answer: 'neuen',
      options: ['neuen', 'neue', 'neuer', 'neu'],
    });
    expect(hint.lesson).toBe('adjective-endings');
    expect(Object.keys(hint.why!)).toEqual(['neue', 'neuer']);
    expect(hint.why!.neue).toContain('so the ending is -en');
  });
});
