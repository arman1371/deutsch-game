import { screen } from '@testing-library/react';
import { renderGame } from '@/test/render';
import Quiz from './Quiz';

const config = {
  questions: [
    { id: 'q1', prompt: 'Hallo', options: ['hello', 'bye', 'thanks'], answer: 'hello', emoji: '👋', speak: 'Hallo' },
    { id: 'q2', prompt: 'Tschüss', options: ['hello', 'bye', 'thanks'], answer: 'bye', explanation: 'Bye!' },
  ],
};
const ANSWER: Record<string, string> = { Hallo: 'hello', Tschüss: 'bye' };
const WRONG: Record<string, string> = { Hallo: 'thanks', Tschüss: 'thanks' };
const prompt = () => screen.getByTestId('prompt').textContent!;

describe('Quiz', () => {
  it('plays through with correct answers', async () => {
    const { user, onFinish } = renderGame(Quiz, config);
    await user.click(screen.getByRole('button', { name: ANSWER[prompt()]! }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    await user.click(screen.getByTestId('continue'));
    await user.click(screen.getByRole('button', { name: ANSWER[prompt()]! }));
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 2, total: 2, mistakes: [] }));
  });

  it('shows the answer and explanation on a mistake and records it', async () => {
    const { user, onFinish } = renderGame(Quiz, config);
    const p = prompt();
    await user.click(screen.getByRole('button', { name: WRONG[p]! }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByText(ANSWER[p]!, { selector: 'strong' })).toBeInTheDocument();
    // answer buttons are locked after answering
    expect(screen.getByRole('button', { name: new RegExp(`^${WRONG[p]}`) })).toBeDisabled();
    await user.click(screen.getByTestId('continue'));
    await user.click(screen.getByRole('button', { name: ANSWER[prompt()]! }));
    await user.click(screen.getByTestId('continue'));
    const result = onFinish.mock.calls[0]![0];
    expect(result.correct).toBe(1);
    expect(result.mistakes).toHaveLength(1);
  });

  it('supports number-key answers', async () => {
    const { user } = renderGame(Quiz, config);
    await user.keyboard('1');
    expect(screen.getByTestId('feedback')).toBeInTheDocument();
  });
});
