import { LESSONS, LESSON_IDS, lessonForTags } from './lessons';
import { TAGS, tagsInGroup } from './tags';

describe('lessons', () => {
  it('has a lesson for every grammar point', () => {
    for (const tag of tagsInGroup('grammar')) expect(LESSON_IDS, tag).toContain(tag);
  });

  it('only uses grammar tag ids and keeps lessons short', () => {
    for (const id of LESSON_IDS) {
      expect(TAGS[id as keyof typeof TAGS]?.group, id).toBe('grammar');
      const l = LESSONS[id];
      expect(l.rule.length, id).toBeLessThanOrEqual(320);
      expect(l.examples.length, id).toBeGreaterThanOrEqual(2);
      expect(l.examples.length, id).toBeLessThanOrEqual(3);
    }
  });
});

describe('lessonForTags', () => {
  it('needs the grammar skill: vocabulary games that mention articles get no lesson', () => {
    expect(lessonForTags(['vocabulary', 'articles', 'food-drinks'])).toBeUndefined();
    expect(lessonForTags(['grammar', 'articles'])).toBe('articles');
  });

  it('prefers the specific grammar point over broad ones', () => {
    expect(lessonForTags(['grammar', 'word-order', 'perfekt'])).toBe('perfekt');
    expect(lessonForTags(['grammar', 'verb-conjugation', 'modal-verbs'])).toBe('modal-verbs');
    expect(lessonForTags(['grammar', 'verb-conjugation', 'pronouns'])).toBe('verb-conjugation');
  });

  it('lets a lesson cover the cases it already explains', () => {
    expect(lessonForTags(['grammar', 'two-way-prepositions', 'dative'])).toBe(
      'two-way-prepositions',
    );
    expect(lessonForTags(['grammar', 'adjective-endings', 'accusative'])).toBe('adjective-endings');
  });

  it('gives up when an activity mixes grammar points', () => {
    expect(lessonForTags(['grammar', 'perfekt', 'past-tense'])).toBeUndefined();
    expect(lessonForTags(['grammar', 'questions', 'word-order'])).toBeUndefined();
    expect(lessonForTags(['vocabulary', 'grammar', 'family'])).toBeUndefined();
  });
});
