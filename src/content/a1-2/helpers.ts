import { conjugate, conjugatePreterite, separableForms } from '@/lib/german/conjugation';
import { activity, unit, type Meta } from '../builders';
import type { ConfigOf, Unit } from '../schema';
import type { TagId } from '../tags';

/** Short authoring helpers shared by the A1.2 units (hand-written grammar and conversation items). */

export const unit12 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'a1-2' });

/** meta(title, description, tags, difficulty, estMinutes) */
export const meta = (
  title: string,
  description: string,
  tags: TagId[],
  difficulty: 1 | 2 | 3,
  estMinutes: number,
): Meta => ({ title, description, tags, difficulty, estMinutes });

export { activity };

/** Gap-fill item with answer chips. */
export const gap = (
  id: string,
  text: string,
  answer: string,
  options: string[],
  translation: string,
  explanation?: string,
) => ({
  id,
  text,
  answer,
  options,
  translation,
  ...(explanation ? { explanation } : {}),
});

/** Gap-fill item the learner types (no chips). */
export const typed = (
  id: string,
  text: string,
  answer: string,
  translation: string,
  explanation?: string,
  alsoAccept?: string[],
) => ({
  id,
  text,
  answer,
  translation,
  ...(explanation ? { explanation } : {}),
  ...(alsoAccept ? { alsoAccept } : {}),
});

type Question = ConfigOf<'quiz'>['questions'][number];

/** Quiz question: the correct answer first, then the wrong options (the engine shuffles). */
export const q = (
  id: string,
  prompt: string,
  answer: string,
  wrong: string[],
  explanation?: string,
): Question => ({
  id,
  prompt,
  answer,
  options: [answer, ...wrong],
  ...(explanation ? { explanation } : {}),
});

export const sent = (
  id: string,
  translation: string,
  words: string[],
  opts: { extra?: string[]; alsoAccept?: string[]; explanation?: string } = {},
) => ({ id, translation, words, ...opts });

export const tf = (id: string, text: string, isTrue: boolean, explanation?: string) => ({
  id,
  text,
  isTrue,
  ...(explanation ? { explanation } : {}),
});

type Turn = ConfigOf<'dialogue'>['scenes'][number]['turns'][number];

/** Other person speaks. */
export const say = (who: string, text: string, translation: string): Turn => ({
  kind: 'npc',
  who,
  text,
  translation,
});

/** Player turn: first argument is the right answer, then [wrong text, feedback] pairs. */
export const you = (right: string, ...wrong: [text: string, feedback: string][]): Turn => ({
  kind: 'you',
  options: [
    { text: right, correct: true },
    ...wrong.map(([text, feedback]) => ({ text, correct: false, feedback })),
  ],
});

/** Sort-it items: [text, bucket, emoji?] rows; ids are generated. */
export const sortItems = (prefix: string, rows: readonly (readonly [string, string, string?])[]) =>
  rows.map(([text, bucket, emoji], i) => ({
    id: `${prefix}${i + 1}`,
    text,
    bucket,
    ...(emoji ? { emoji } : {}),
  }));

// ---- listening, spelling, conjugation, clock --------------------------------------------------

/** Listen-and-pick item; the spoken sentence is the German, options are English meanings. */
export const heard = (
  id: string,
  speak: string,
  answer: string,
  wrong: string[],
  transcript?: string,
) => ({
  id,
  speak,
  answer,
  options: [answer, ...wrong],
  ...(transcript ? { transcript } : {}),
});

/** Dictation item: the learner hears `speak` and types `answer`. */
export const dictation = (id: string, answer: string, en: string, speak = answer) => ({
  id,
  mode: 'dictation' as const,
  answer,
  hint: `Type what you hear (${en})`,
  speak,
});

type Pronoun = 'ich' | 'du' | 'er/sie/es' | 'wir' | 'ihr' | 'sie/Sie';

/** Conjugation table with forms from the shared conjugation helper. */
export const table = (verb: string, meaning: string, blanks: Pronoun[], id = verb) => ({
  id,
  verb,
  meaning,
  forms: conjugate(verb),
  blanks,
});

/** Table for the simple past (war, hatte, konnte …); `label` is what the learner sees as the verb. */
export const pastTable = (verb: string, label: string, meaning: string, blanks: Pronoun[]) => ({
  id: `past-${verb}`,
  verb: label,
  meaning,
  forms: conjugatePreterite(verb),
  blanks,
});

/** Separable verb table: verb "abfahren", prefix "ab", base "fahren". */
export const sepTable = (prefix: string, base: string, meaning: string, blanks: Pronoun[]) => ({
  id: `${prefix}${base}`,
  verb: `${prefix}${base}`,
  meaning,
  forms: separableForms(prefix, base),
  blanks,
});

export const readRound = (time: string, style: 'formal' | 'informal') => ({
  id: `r-${time.replace(':', '')}-${style}`,
  time,
  mode: 'read' as const,
  style,
});
export const setRound = (time: string, style: 'formal' | 'informal') => ({
  id: `s-${time.replace(':', '')}-${style}`,
  time,
  mode: 'set' as const,
  style,
});

/** Conjugation table with hand-written forms: ich, du, er/sie/es, wir, ihr, sie/Sie. */
export const customTable = (
  id: string,
  verb: string,
  meaning: string,
  forms: readonly [string, string, string, string, string, string],
  blanks: Pronoun[],
) => ({
  id,
  verb,
  meaning,
  forms: {
    ich: forms[0],
    du: forms[1],
    'er/sie/es': forms[2],
    wir: forms[3],
    ihr: forms[4],
    'sie/Sie': forms[5],
  },
  blanks,
});
