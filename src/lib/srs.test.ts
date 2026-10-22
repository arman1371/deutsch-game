import { addMistake, dayNumber, isDue, mistakeKey, reviewMistake } from './srs';

describe('srs', () => {
  it('builds keys and day numbers', () => {
    expect(mistakeKey('a', 'b')).toBe('a::b');
    expect(dayNumber(new Date(2026, 0, 2))).toBe(dayNumber(new Date(2026, 0, 1)) + 1);
  });

  it('creates and re-creates mistakes counting repeats', () => {
    const m = addMistake(undefined, 'act', 'i1', 10);
    expect(m).toMatchObject({ box: 1, wrongCount: 1, lastSeen: 10, key: 'act::i1' });
    expect(addMistake(m, 'act', 'i1', 12)).toMatchObject({ box: 1, wrongCount: 2, lastSeen: 12 });
  });

  it('promotes on correct answers and graduates after box 3', () => {
    let m = addMistake(undefined, 'a', 'i', 0);
    m = reviewMistake(m, true, 1)!;
    expect(m.box).toBe(2);
    m = reviewMistake(m, true, 2)!;
    expect(m.box).toBe(3);
    expect(reviewMistake(m, true, 5)).toBeNull();
  });

  it('demotes on a wrong answer', () => {
    const m = { ...addMistake(undefined, 'a', 'i', 0), box: 3 as const };
    expect(reviewMistake(m, false, 4)).toMatchObject({ box: 1, wrongCount: 2, lastSeen: 4 });
  });

  it('knows when items are due', () => {
    const m1 = addMistake(undefined, 'a', 'i', 5);
    expect(isDue(m1, 5)).toBe(true);
    const m2 = { ...m1, box: 2 as const };
    expect(isDue(m2, 5)).toBe(false);
    expect(isDue(m2, 6)).toBe(true);
    const m3 = { ...m1, box: 3 as const };
    expect(isDue(m3, 7)).toBe(false);
    expect(isDue(m3, 8)).toBe(true);
  });
});
