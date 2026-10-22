import { act, screen } from '@testing-library/react';
import { renderGame } from '@/test/render';
import Memory from './Memory';
import { buildDeck, isMatch } from './logic';

const config = {
  pairs: [
    { id: 'p1', a: 'Hund', b: 'dog' },
    { id: 'p2', a: 'Katze', b: 'cat' },
    { id: 'p3', a: 'Maus', b: 'mouse' },
  ],
};

const cards = () => screen.getAllByTestId('memory-card');
const textOf = (el: HTMLElement) => el.getAttribute('aria-label')!;
// With fixed seed the deck order is stable; find a card's index by its (hidden) text via the logic helper.
const deck = buildDeck(config.pairs, 1);
const indexOf = (uid: string) => deck.findIndex((c) => c.uid === uid);

describe('memory logic', () => {
  it('builds a shuffled deck with two cards per pair', () => {
    expect(deck).toHaveLength(6);
    expect(new Set(deck.map((c) => c.pairId)).size).toBe(3);
    expect(buildDeck(config.pairs, 1)).toEqual(deck);
  });
  it('matches only the two different sides of one pair', () => {
    const a = deck.find((c) => c.uid === 'p1:a')!;
    const b = deck.find((c) => c.uid === 'p1:b')!;
    expect(isMatch(a, b)).toBe(true);
    expect(isMatch(a, a)).toBe(false);
    expect(
      isMatch(
        a,
        deck.find((c) => c.uid === 'p2:b')!,
      ),
    ).toBe(false);
  });
});

describe('Memory', () => {
  beforeEach(() => vi.useFakeTimers({ shouldAdvanceTime: true }));
  afterEach(() => vi.useRealTimers());

  it('flips cards face up and matches a pair', async () => {
    const { user } = renderGame(Memory, config, 1, { advanceTimers: vi.advanceTimersByTime });
    expect(cards()).toHaveLength(6);
    expect(cards()[0]).toHaveAttribute('data-state', 'down');
    await user.click(cards()[indexOf('p1:a')]!);
    expect(textOf(cards()[indexOf('p1:a')]!)).toMatch(/Hund/);
    await user.click(cards()[indexOf('p1:b')]!);
    expect(cards()[indexOf('p1:a')]).toHaveAttribute('data-state', 'matched');
    expect(screen.getByTestId('pairs-found')).toHaveTextContent('1 / 3');
    expect(screen.getByTestId('moves')).toHaveTextContent('1 moves');
    expect(screen.getByRole('status')).toHaveTextContent('Match! Hund = dog');
  });

  it('flips mismatches back after a delay and records them as mistakes', async () => {
    const { user, onFinish } = renderGame(Memory, config, 1, {
      advanceTimers: vi.advanceTimersByTime,
    });
    await user.click(cards()[indexOf('p1:a')]!);
    await user.click(cards()[indexOf('p2:b')]!);
    expect(screen.getByRole('status')).toHaveTextContent('Not a pair');
    await user.click(cards()[indexOf('p3:a')]!); // locked while two cards are up
    expect(cards()[indexOf('p3:a')]).toHaveAttribute('data-state', 'down');
    act(() => void vi.advanceTimersByTime(900));
    expect(cards()[indexOf('p1:a')]).toHaveAttribute('data-state', 'down');

    for (const id of ['p1', 'p2', 'p3']) {
      await user.click(cards()[indexOf(`${id}:a`)]!);
      await user.click(cards()[indexOf(`${id}:b`)]!);
    }
    act(() => void vi.advanceTimersByTime(700));
    expect(onFinish).toHaveBeenCalledTimes(1);
    const result = onFinish.mock.calls[0]![0];
    expect(result).toMatchObject({ total: 3, correct: 1 });
    expect(result.mistakes.sort()).toEqual(['p1', 'p2']);
  });

  it('ignores clicks on matched cards and on an already flipped card', async () => {
    const { user } = renderGame(Memory, config, 1, { advanceTimers: vi.advanceTimersByTime });
    await user.click(cards()[indexOf('p1:a')]!);
    await user.click(cards()[indexOf('p1:a')]!);
    expect(screen.getByTestId('moves')).toHaveTextContent('0 moves');
  });
});
