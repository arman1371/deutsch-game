import { accuracy, starsFor, xpFor, type GameResult } from './scoring';

const r = (correct: number, total: number, extra: Partial<GameResult> = {}): GameResult => ({
  correct, total, played: [], mistakes: [], ...extra,
});

describe('scoring', () => {
  it('computes accuracy safely', () => {
    expect(accuracy(r(3, 4))).toBe(0.75);
    expect(accuracy(r(0, 0))).toBe(1);
    expect(accuracy(r(9, 4))).toBe(1);
  });

  it('awards stars with a floor of one', () => {
    expect(starsFor(1)).toBe(3);
    expect(starsFor(0.9)).toBe(3);
    expect(starsFor(0.75)).toBe(2);
    expect(starsFor(0.7)).toBe(2);
    expect(starsFor(0.1)).toBe(1);
    expect(starsFor(0)).toBe(1);
  });

  it('computes xp including bonus', () => {
    expect(xpFor(r(10, 10))).toBe(100 + 15);
    expect(xpFor(r(5, 10))).toBe(50 + 5);
    expect(xpFor(r(5, 10, { bonusXp: 7 }))).toBe(62);
  });
});
