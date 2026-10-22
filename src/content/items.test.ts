import { quizActivity } from '@/test/factories';
import { getItems, itemCount, withItems } from './items';

describe('items', () => {
  it('reads and filters items without mutating the source', () => {
    const a = quizActivity();
    expect(itemCount(a)).toBe(2);
    const sub = withItems(a, ['q2']);
    expect(getItems(sub).map((i) => i.id)).toEqual(['q2']);
    expect(itemCount(a)).toBe(2);
    expect(withItems(a, [])).toMatchObject({ id: 'act-1' });
  });
});
