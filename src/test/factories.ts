import type { Activity, LevelContent } from '@/content/schema';

export function quizActivity(id = 'act-1', unitId = 'unit-1', overrides: Partial<Activity> = {}): Activity {
  return {
    id, unitId, title: `Quiz ${id}`, description: 'A quiz', tags: ['vocabulary', 'greetings'],
    difficulty: 1, estMinutes: 3, gameType: 'quiz',
    config: {
      questions: [
        { id: 'q1', prompt: 'Hallo', options: ['Hello', 'Bye'], answer: 'Hello' },
        { id: 'q2', prompt: 'Tschüss', options: ['Hello', 'Bye'], answer: 'Bye' },
      ],
    },
    ...overrides,
  } as Activity;
}

export function levelFixture(): LevelContent {
  return {
    units: [
      { id: 'unit-1', levelId: 'a1-1', order: 1, title: 'Unit One', subtitle: 'First', emoji: '👋', goals: ['Greet'], grammar: [], vocabFields: [] },
      { id: 'unit-2', levelId: 'a1-1', order: 2, title: 'Unit Two', subtitle: 'Second', emoji: '🎒', goals: ['Count'], grammar: [], vocabFields: [] },
    ],
    vocab: [],
    activities: [
      quizActivity('act-1', 'unit-1'),
      quizActivity('act-2', 'unit-1', { difficulty: 2, estMinutes: 5, tags: ['grammar', 'questions'] }),
      quizActivity('act-3', 'unit-2', { difficulty: 3, estMinutes: 8, tags: ['vocabulary', 'numbers'] }),
    ],
  };
}
