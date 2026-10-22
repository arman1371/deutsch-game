import { screen } from '@testing-library/react';
import { renderGame } from '@/test/render';
import Gapfill from './Gapfill';

const chips = { items: [{ id: 'g1', text: 'Guten ___!', answer: 'Morgen', options: ['Morgen', 'Nacht', 'Danke'], translation: 'Good morning!', explanation: 'A greeting.' }] };
const typed = { items: [{ id: 'g2', text: 'Ich ___ Anna.', answer: 'heiße', alsoAccept: ['heisse'] }] };

describe('Gapfill', () => {
  it('answers with chips and shows the filled sentence and explanation', async () => {
    const { user, onFinish } = renderGame(Gapfill, chips);
    expect(screen.getByTestId('sentence')).toHaveTextContent('Guten …!');
    expect(screen.getByText('Good morning!')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Nacht' }));
    expect(screen.getByTestId('sentence')).toHaveTextContent('Guten Nacht!');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
    expect(screen.getByText('Morgen', { selector: 'strong' })).toBeInTheDocument();
    expect(screen.getByText('A greeting.')).toBeInTheDocument();
    await user.click(screen.getByTestId('continue'));
    expect(onFinish).toHaveBeenCalledWith(expect.objectContaining({ correct: 0, mistakes: ['g1'] }));
  });

  it('types the answer, accepts alternatives, supports Enter and umlaut keys', async () => {
    const { user } = renderGame(Gapfill, typed);
    const check = screen.getByRole('button', { name: 'Check' });
    expect(check).toBeDisabled();
    const input = screen.getByLabelText('Missing word');
    await user.type(input, 'hei');
    await user.click(screen.getByRole('button', { name: 'ß' }));
    await user.type(input, 'e{Enter}');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
  });

  it('treats an alternative spelling as correct', async () => {
    const { user } = renderGame(Gapfill, typed);
    await user.type(screen.getByLabelText('Missing word'), 'heisse{Enter}');
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'correct');
  });

  it('marks wrong typed answers', async () => {
    const { user } = renderGame(Gapfill, typed);
    await user.type(screen.getByLabelText('Missing word'), 'bin');
    await user.click(screen.getByRole('button', { name: 'Check' }));
    expect(screen.getByTestId('feedback')).toHaveAttribute('data-kind', 'wrong');
  });
});
