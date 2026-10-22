import { createRng, hashString, parseSeed, pickMany, pickOne, randomSeed, shuffle } from './rng';

describe('rng', () => {
  it('is deterministic for a seed and in [0,1)', () => {
    const a = createRng(42);
    const b = createRng(42);
    const seqA = Array.from({ length: 20 }, () => a());
    expect(seqA).toEqual(Array.from({ length: 20 }, () => b()));
    expect(seqA.every((n) => n >= 0 && n < 1)).toBe(true);
  });

  it('differs between seeds', () => {
    expect(createRng(1)()).not.toBe(createRng(2)());
  });

  it('shuffles without mutating and keeps all items', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8];
    const out = shuffle(input, createRng(7));
    expect(input).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect([...out].sort()).toEqual(input);
    expect(shuffle(input, createRng(7))).toEqual(out);
  });

  it('picks items', () => {
    expect(pickOne(['a'], createRng(1))).toBe('a');
    expect(() => pickOne([], createRng(1))).toThrow();
    expect(pickMany([1, 2, 3, 4], 2, createRng(3))).toHaveLength(2);
  });

  it('hashes strings stably', () => {
    expect(hashString('abc')).toBe(hashString('abc'));
    expect(hashString('abc')).not.toBe(hashString('abd'));
  });

  it('parses seeds', () => {
    expect(parseSeed('12')).toBe(12);
    expect(parseSeed(null)).toBeNull();
    expect(parseSeed('')).toBeNull();
    expect(typeof parseSeed('hello')).toBe('number');
    expect(parseSeed('-3')).toBe(hashString('-3'));
    const r = randomSeed();
    expect(Number.isInteger(r)).toBe(true);
  });
});
