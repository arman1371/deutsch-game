import { screen, within } from '@testing-library/react';
import { renderGame } from '@/test/render';
import Sentence from './Sentence';

const config = {
  items: [
    {
      id: 's1',
      translation: 'What is your name?',
      words: ['Wie', 'heißt', 'du?'],
      explanation: 'Verb second.',
    },
    {
      id: 's2',
      translation: 'In the evening I watch TV.',
      words: ['Am', 'Abend', 'sehe', 'ich', 'fern.'],
      alsoAccept: ['Ich sehe am Abend fern.'],
      extra: ['auf'],
    },
  ],
};

async function place(user: ReturnType<typeof renderGame>['user'], words: string[]) {
  for (const w of words) {
    const bank = within(screen.getByRole('group', { name: 'Word bank' }));
    await user.click(bank.getByRole('button', { name: w }));
  }
}
const SOLUTION: Record<string, string[]> = {
  'What is your name?': ['Wie', 'heißt', 'du?'],
  'In the evening I watch TV.': ['Am', 'Abend', 'sehe', 'ich', 'fern.'],
};
// tiles keep their capitalisation; grading ignores case, so “ich sehe Am Abend fern.” is the alternative order
const ALT = ['ich', 'sehe', 'Am', 'Abend', 'fern.'];
const prompt = () => screen.getByTestId('prompt').textContent!;

describe('Sentence', () => {
  it('builds a sentence from word tiles and removes tiles again', async () => {
    const { user } = renderGame(Sentence, config);
    const p = prompt();
    const words = SOLUTION[p]!;
    expect(screen.getByRole('button', { name: 'Check' })).toBeDisabled();
    await place(user, [words[0]!]);
    const line = within(screen.getByTestId('answer-line'));
    expect(line.getByRole('button', { name: `Remove ${words[0]}` })).toBeInTheDocument();
    await user.click(line.getByRole('button', { name: `Remove ${words[0]}` }));
    expect(line.queryByRole('button')).not.toBeInTheDocument();
  });

  it('accepts the correct order, then continues through all items', async () => {
    const { user, onFinish } = renderGame(Sentence, config);
    for (let i = 0; i < 2; i++) {
      await place(user, SOLUTION[prompt()]!);
      await user.click(screen.getByRole('button', { name: 'Check' }));
      expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
      await user.click(screen.getByTestId('continue'));
    }
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 2, total: 2 }));
  });

  it('accepts an alternative word order', async () => {
    const { user } = renderGame(Sentence, { items: [config.items[1]!] });
    await place(user, ALT);
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
  });

  it('rejects a wrong order, shows the solution and locks the tiles', async () => {
    const { user, onFinish } = renderGame(Sentence, { items: [config.items[0]!] });
    await place(user, ['du?', 'Wie', 'heißt']);
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByText('Wie heißt du?', { selector: 'strong' })).toBeInTheDocument();
    expect(screen.getByText('Verb second.')).toBeInTheDocument();
    expect(
      within(screen.getByTestId('answer-line')).getByRole('button', { name: 'Remove Wie' }),
    ).toBeDisabled();
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 0, mistakes: ['s1'] }),
    );
  });
});
