import { conjugate, conjugatePreterite, PRONOUNS, type Forms } from '@/lib/german/conjugation';
import { flashcards, listen, memory, quizEmoji, spell, unit } from '../builders';
import type { Activity, Unit, Vocab } from '../schema';
import type { LessonId } from '../lessons';
import type { TagId } from '../tags';
import { customTable, activity, dictation, meta } from '../a1-2/helpers';

/** The C2.2 units share the A1.2 authoring helpers; the level id, hint helper and compound tables are new. */
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

export const unitC22 = (u: Omit<Unit, 'levelId'>): Unit => unit({ ...u, levelId: 'c2-2' });

/** Attach a grammar hint to an item: `why` maps wrong options to one sentence, `lesson` picks the mini lesson. */
export const withWhy = <T extends object>(
  item: T,
  why: Record<string, string>,
  lesson?: LessonId,
): T & { why: Record<string, string>; lesson?: LessonId } => ({
  ...item,
  why,
  ...(lesson ? { lesson } : {}),
});

/** Attach only a mini lesson to an item (for mixed-grammar challenge rounds). */
export const withLesson = <T extends object>(
  item: T,
  lesson: LessonId,
): T & { lesson: LessonId } => ({
  ...item,
  lesson,
});

type Blanks = Parameters<typeof customTable>[4];
type SixForms = Parameters<typeof customTable>[3];

/** Each form of `aux` followed by the same rest: wurde + gebaut, bin + gebaut worden … */
const compound = (aux: Forms, rest: string): SixForms =>
  PRONOUNS.map((p) => `${aux[p]} ${rest}`) as unknown as SixForms;

/** Passive Präteritum: "gefragt" → wurde gefragt, wurdest gefragt … */
export const passivePreteriteTable = (participle: string, meaning: string, blanks: Blanks) =>
  customTable(
    `passiv-prat-${participle}`,
    `${participle} werden (Präteritum)`,
    meaning,
    compound(conjugatePreterite('werden'), participle),
    blanks,
  );

/** Passive Perfekt: "gefragt" → bin gefragt worden, bist gefragt worden … */
export const passivePerfectTable = (participle: string, meaning: string, blanks: Blanks) =>
  customTable(
    `passiv-perf-${participle}`,
    `${participle} werden (Perfekt)`,
    meaning,
    compound(conjugate('sein'), `${participle} worden`),
    blanks,
  );

/** Passive Futur I: "gefragt" → werde gefragt werden, wirst gefragt werden … */
export const passiveFutureTable = (participle: string, meaning: string, blanks: Blanks) =>
  customTable(
    `passiv-fut-${participle}`,
    `${participle} werden (Futur I)`,
    meaning,
    compound(conjugate('werden'), `${participle} werden`),
    blanks,
  );

/** Zustandspassiv: "geschlossen" → bin geschlossen, bist geschlossen … */
export const stateTable = (participle: string, meaning: string, blanks: Blanks) =>
  customTable(
    `zustand-${participle}`,
    `${participle} sein (Zustandspassiv)`,
    meaning,
    compound(conjugate('sein'), participle),
    blanks,
  );

/** Modal verb with a perfect infinitive: sollen + "gelogen haben" → soll gelogen haben … */
export const modalPerfectTable = (
  modal: 'müssen' | 'können' | 'dürfen' | 'sollen' | 'wollen',
  perfectInfinitive: string,
  meaning: string,
  blanks: Blanks,
) =>
  customTable(
    `modal-${modal}-${perfectInfinitive.replace(/ /g, '-')}`,
    `${modal} + ${perfectInfinitive}`,
    meaning,
    compound(conjugate(modal), perfectInfinitive),
    blanks,
  );

// ---- shared vocabulary path ---------------------------------------------------------------------

export interface VocabList {
  /** activity key suffix, e.g. "art" → `flash-art` */
  key: string;
  title: string;
  description: string;
  vocab: Vocab[];
}

export interface VocabPathOptions {
  unitId: string;
  /** topic tag of the unit */
  topic: TagId;
  lists: VocabList[];
  /** words with an emoji that the picture quiz asks for (8 or fewer) */
  pictures: Vocab[];
  /** words for the listening round */
  listening: Vocab[];
  /** words for the memory game (3–10) */
  pairs: Vocab[];
  /** spelling round: words to unscramble and to type, plus dictations as [id, German, English] */
  unscramble: Vocab[];
  typeIn: Vocab[];
  dictations: readonly [string, string, string][];
  /** titles/descriptions of the picture quiz, listening and memory rounds */
  picturesTitle: string;
  picturesDescription: string;
  listenTitle: string;
  memoryTitle: string;
  memoryDescription: string;
}

/**
 * The standard opening of a unit: one flashcard set per word list, a picture quiz, a listening round,
 * a memory game and a spelling mix. Hand-written grammar and conversation games follow in the unit file.
 */
export function vocabPath(o: VocabPathOptions): Activity[] {
  const skills = (...t: TagId[]): TagId[] => [...t, o.topic];
  const acts: Activity[] = o.lists.map((l, i) =>
    activity(
      o.unitId,
      `flash-${l.key}`,
      'flashcards',
      meta(l.title, l.description, skills('vocabulary'), 1, 5 - (i % 2)),
      flashcards(l.vocab),
    ),
  );
  acts.push(
    activity(
      o.unitId,
      'quiz-pictures',
      'quiz',
      meta(o.picturesTitle, o.picturesDescription, skills('vocabulary'), 1, 4),
      quizEmoji(o.pictures),
    ),
    activity(
      o.unitId,
      'listen-words',
      'listen',
      meta(o.listenTitle, 'Listen and pick the meaning.', skills('listening'), 2, 4),
      listen(o.listening),
    ),
    activity(
      o.unitId,
      'memory-words',
      'memory',
      meta(o.memoryTitle, o.memoryDescription, skills('vocabulary'), 2, 4),
      memory(o.pairs),
    ),
    activity(
      o.unitId,
      'spell-words',
      'spell',
      meta('Spell it', 'Unscramble, type and write what you hear.', skills('spelling'), 2, 5),
      {
        items: [
          ...spell(o.unscramble, 'unscramble').items,
          ...spell(o.typeIn, 'type').items,
          ...o.dictations.map(([id, de, en]) => dictation(id, de, en)),
        ],
      },
    ),
  );
  return acts;
}
