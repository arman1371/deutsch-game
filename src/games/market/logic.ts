export interface Product {
  id: string;
  name: string;
  emoji: string;
  priceCents: number;
}
export type Basket = Record<string, number>;
export interface OrderItem {
  product: string;
  qty: number;
}

export function basketMatches(basket: Basket, items: readonly OrderItem[]): boolean {
  const wanted = Object.fromEntries(items.map((i) => [i.product, i.qty]));
  const ids = new Set([...Object.keys(basket), ...Object.keys(wanted)]);
  return [...ids].every((id) => (basket[id] ?? 0) === (wanted[id] ?? 0));
}

export function totalCents(items: readonly OrderItem[], products: readonly Product[]): number {
  return items.reduce(
    (sum, i) => sum + i.qty * (products.find((p) => p.id === i.product)?.priceCents ?? 0),
    0,
  );
}

export function adjust(basket: Basket, productId: string, delta: number): Basket {
  const qty = Math.max(0, Math.min(9, (basket[productId] ?? 0) + delta));
  const next = { ...basket };
  if (qty === 0) delete next[productId];
  else next[productId] = qty;
  return next;
}
