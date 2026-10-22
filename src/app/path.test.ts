import { quizActivity } from '@/test/factories';
import { nextActivity, pathStates, playUrl, queueAfter } from './path';

const path = ['a', 'b', 'c'].map((id) => quizActivity(id));
const done = (...ids: string[]) =>
  Object.fromEntries(
    ids.map((id) => [id, { stars: 3 as const, bestAccuracy: 1, plays: 1, lastPlayed: 0 }]),
  );

describe('guided path', () => {
  it('marks done, current and open steps', () => {
    expect(pathStates(path, {})).toEqual(['current', 'open', 'open']);
    expect(pathStates(path, done('a'))).toEqual(['done', 'current', 'open']);
    expect(pathStates(path, done('a', 'b', 'c'))).toEqual(['done', 'done', 'done']);
  });

  it('keeps the first unfinished step current even if later ones were played', () => {
    expect(pathStates(path, done('b'))).toEqual(['current', 'done', 'open']);
  });

  it('finds the next activity', () => {
    expect(nextActivity(path, done('a'))?.id).toBe('b');
    expect(nextActivity(path, done('a', 'b', 'c'))).toBeUndefined();
  });

  it('builds play urls with queue and seed', () => {
    expect(playUrl('x')).toBe('/play/x');
    expect(playUrl('x', ['y', 'z'])).toBe('/play/x?q=y%2Cz');
    expect(playUrl('x', [], 4)).toBe('/play/x?seed=4');
  });

  it('computes the queue after an activity', () => {
    expect(queueAfter(['a', 'b', 'c'], 'a')).toEqual(['b', 'c']);
    expect(queueAfter(['a', 'b', 'c'], 'c')).toEqual([]);
    expect(queueAfter(['a'], 'zzz')).toEqual([]);
  });
});
