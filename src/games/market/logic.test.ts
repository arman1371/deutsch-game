import { adjust, basketMatches, totalCents } from './logic';

const products = [
  { id: 'apfel', name: 'Apfel', emoji: '🍎', priceCents: 60 },
  { id: 'milch', name: 'Milch', emoji: '🥛', priceCents: 110 },
];

describe('market logic', () => {
  it('compares baskets with orders exactly', () => {
    const order = [{ product: 'apfel', qty: 2 }, { product: 'milch', qty: 1 }];
    expect(basketMatches({ apfel: 2, milch: 1 }, order)).toBe(true);
    expect(basketMatches({ milch: 1, apfel: 2 }, order)).toBe(true);
    expect(basketMatches({ apfel: 2 }, order)).toBe(false);
    expect(basketMatches({ apfel: 3, milch: 1 }, order)).toBe(false);
    expect(basketMatches({ apfel: 2, milch: 1, extra: 1 }, order)).toBe(false);
  });

  it('sums prices in cents', () => {
    expect(totalCents([{ product: 'apfel', qty: 2 }, { product: 'milch', qty: 1 }], products)).toBe(230);
    expect(totalCents([], products)).toBe(0);
    expect(totalCents([{ product: 'unknown', qty: 3 }], products)).toBe(0);
  });

  it('adjusts quantities within 0..9 and drops empty lines', () => {
    expect(adjust({}, 'apfel', 1)).toEqual({ apfel: 1 });
    expect(adjust({ apfel: 1 }, 'apfel', -1)).toEqual({});
    expect(adjust({}, 'apfel', -1)).toEqual({});
    expect(adjust({ apfel: 9 }, 'apfel', 1)).toEqual({ apfel: 9 });
  });
});
