import { adjectiveEnding, type DeclensionKind } from '@/lib/german/adjectives';
import type { Case, Gender } from '@/lib/german/articles';
import type { Forms, Pronoun } from '@/lib/german/conjugation';
import { adjectiveEndingWhy, personFormWhy } from '@/lib/german/forms';
import type { LessonId } from './lessons';
import type { Activity } from './schema';
import { getItems, mapItems } from './items';

/** Hint fields an item can carry (see `lesson` / `why` in schema.ts). */
export interface ItemHint {
  lesson?: LessonId;
  why?: Record<string, string>;
}

interface HintableItem {
  id: string;
  answer?: string;
  options?: readonly string[];
}

/** A lesson id, hint fields, or a function that derives them from the item (e.g. `verbForms`). */
export type HintEntry = LessonId | ItemHint | ((item: HintableItem) => ItemHint);

/**
 * Grammar hints for existing activities, kept next to a level instead of inside every unit file:
 * `{ [activityId]: { '*': activityLesson, [itemId]: entry } }`. New content can also write
 * `lesson` / `why` directly on its items – both end up in the same schema fields.
 */
export type HintOverlay = Record<string, Record<string, HintEntry>>;

/**
 * Wrong options that are another person's form of the verb get a generated "why":
 * verbForms(conjugate('sprechen'), 'er/sie/es') on [spricht, sprichst, …] → “sprichst” is the du form …
 */
export const verbForms =
  (forms: Forms, person: Pronoun, lesson: LessonId = 'verb-conjugation') =>
  (item: HintableItem): ItemHint => {
    const why: Record<string, string> = {};
    for (const o of item.options ?? []) {
      const w = o === item.answer ? undefined : personFormWhy(forms, person, o);
      if (w) why[o] = w;
    }
    return Object.keys(why).length ? { lesson, why } : { lesson };
  };

function resolve(entry: HintEntry, item: HintableItem): ItemHint {
  if (typeof entry === 'string') return { lesson: entry };
  if (typeof entry === 'function') return entry(item);
  return entry;
}

/** Merge a hint overlay into activities. Unknown activity or item ids throw (caught by the content tests). */
export function withHints(activities: Activity[], overlay: HintOverlay): Activity[] {
  const byId = new Map(activities.map((a) => [a.id, a]));
  for (const id of Object.keys(overlay)) {
    if (!byId.has(id)) throw new Error(`hint overlay: unknown activity ${id}`);
  }
  return activities.map((a) => {
    const entries = overlay[a.id];
    if (!entries) return a;
    const items = getItems(a) as HintableItem[];
    for (const key of Object.keys(entries)) {
      if (key !== '*' && !items.some((i) => i.id === key)) {
        throw new Error(`hint overlay: unknown item ${a.id}/${key}`);
      }
    }
    const star = entries['*'];
    const patched = mapItems<HintableItem>(a, (i) => {
      const entry = entries[i.id];
      return entry ? { ...i, ...resolve(entry, i) } : i;
    });
    return typeof star === 'string' ? ({ ...patched, lesson: star } as Activity) : patched;
  });
}

const ENDINGS = ['e', 'en', 'er', 'es', 'em'];

/** Adjective-ending item: every wrong ending gets a generated "why" (see adjGap in a2-2/helpers.ts). */
export const adjectiveHint =
  (kind: DeclensionKind, gender: Gender, c: Case) =>
  (item: HintableItem): ItemHint => {
    const answer = item.answer ?? '';
    const stem = answer.slice(0, answer.length - adjectiveEnding(kind, gender, c).length);
    const why: Record<string, string> = {};
    for (const o of item.options ?? []) {
      const ending = o.startsWith(stem) ? o.slice(stem.length) : '';
      if (o !== answer && ENDINGS.includes(ending)) {
        why[o] = adjectiveEndingWhy(kind, gender, c, ending);
      }
    }
    return { lesson: 'adjective-endings', why };
  };
