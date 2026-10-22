import { screen } from '@testing-library/react';
import { renderGame } from '@/test/render';
import Listen from './Listen';

const config = {
  items: [
    {
      id: 'l1',
      speak: 'Guten Morgen',
      answer: 'good morning',
      options: ['good morning', 'good night'],
      transcript: 'Guten Morgen = good morning',
    },
  ],
};

describe('Listen', () => {
  it('shows the audio button, the TTS fallback text when speech is missing, and grades the answer', async () => {
    const { user, onFinish } = renderGame(Listen, config);
    expect(screen.getByRole('button', { name: 'Play the audio again' })).toBeDisabled(); // no speechSynthesis in jsdom
    expect(screen.getByTestId('tts-fallback')).toHaveTextContent('Guten Morgen');
    await user.click(screen.getByRole('button', { name: 'good night' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByText('Guten Morgen = good morning')).toBeInTheDocument();
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(
      expect.objectContaining({ correct: 0, total: 1, mistakes: ['l1'] }),
    );
  });

  it('accepts the right answer', async () => {
    const { user, onFinish } = renderGame(Listen, config);
    await user.click(screen.getByRole('button', { name: 'good morning' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 1 }));
  });
});
