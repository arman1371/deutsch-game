import { createContext, useContext } from 'react';
import type { LessonId } from '@/content/lessons';
import { normalize } from '@/lib/answer-check';
import { contrastForms } from '@/lib/german/forms';

/**
 * The mini lesson of the activity being played (from `activity.lesson` or its grammar tag).
 * PlayPage provides it; engines rendered on their own (tests) simply get none.
 */
export const ActivityLessonContext = createContext<LessonId | undefined>(undefined);

export const useActivityLesson = () => useContext(ActivityLessonContext);

/**
 * One sentence on why `given` is wrong: the item's own `why` entry for that answer, otherwise a
 * generated contrast when both words are grammar forms (dem vs den, mir vs mich).
 */
export function mistakeWhy(
  item: { answer: string; why?: Record<string, string> },
  given: string,
): string | undefined {
  const why = item.why ?? {};
  const own =
    why[given] ?? Object.entries(why).find(([k]) => normalize(k) === normalize(given))?.[1];
  return own ?? contrastForms(given.trim(), item.answer);
}
