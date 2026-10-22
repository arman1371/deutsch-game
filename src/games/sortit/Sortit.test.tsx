import { screen } from '@testing-library/react';
import { renderGame } from '@/test/render';
import Sortit from './Sortit';

const config = {
  instruction: 'Hello or goodbye?',
  buckets: [
    { id: 'hello', label: 'Hello', emoji: '👋' },
    { id: 'bye', label: 'Goodbye' },
  ],
  items: [
    { id: 'i1', text: 'Hallo', bucket: 'hello', speak: 'Hallo' },
    { id: 'i2', text: 'Tschüss', bucket: 'bye' },
  ],
};
const BUCKET: Record<string, string> = { Hallo: 'hello', Tschüss: 'bye' };
const OTHER: Record<string, string> = { Hallo: 'bye', Tschüss: 'hello' };
const prompt = () => screen.getByTestId('prompt').textContent!;

describe('Sortit', () => {
  it('shows the instruction and advances immediately on a correct sort', async () => {
    const { user, onFinish } = renderGame(Sortit, config);
    expect(screen.getByText('Hello or goodbye?')).toBeInTheDocument();
    const first = prompt();
    await user.click(screen.getByTestId(`bucket-${BUCKET[first]}`));
    expect(screen.getByTestId('flash')).toHaveTextContent('✓');
    expect(screen.getByTestId('counter')).toHaveTextContent('2 / 2');
    await user.click(screen.getByTestId(`bucket-${BUCKET[prompt()]}`));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 2, total: 2, mistakes: [] }),
    );
  });

  it('explains a wrong sort and waits for Continue', async () => {
    const { user, onFinish } = renderGame(Sortit, config);
    const first = prompt();
    await user.click(screen.getByTestId(`bucket-${OTHER[first]}`));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByTestId(`bucket-${BUCKET[first]}`)).toBeDisabled();
    await user.click(screen.getByTestId('continue'));
    await user.click(screen.getByTestId(`bucket-${BUCKET[prompt()]}`));
    const result = onFinish.mock.calls[0]![0];
    expect(result.correct).toBe(1);
    expect(result.mistakes).toHaveLength(1);
  });

  it('supports number keys for the boxes', async () => {
    const { user } = renderGame(Sortit, config);
    const first = prompt();
    await user.keyboard(BUCKET[first] === 'hello' ? '1' : '2');
    expect(screen.getByTestId('flash')).toHaveTextContent('✓');
  });
});
