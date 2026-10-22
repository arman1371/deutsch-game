import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { ActivityCard } from '../ActivityCard';
import { quizActivity } from '@/test/factories';
import { useSettingsStore, DEFAULT_SETTINGS } from '@/store/settingsStore';
import { Button } from './Button';
import { Card } from './Card';
import { Chip, Tag } from './Chip';
import { Confetti } from './Confetti';
import { FeedbackBanner } from './FeedbackBanner';
import { ProgressBar } from './ProgressBar';
import { SpeakButton } from './SpeakButton';
import { Stars } from './Stars';
import { UmlautKeyboard } from './UmlautKeyboard';

describe('Button', () => {
  it('renders variants, icon and fires clicks unless disabled', async () => {
    const onClick = vi.fn();
    const { rerender } = render(
      <Button icon="🔁" onClick={onClick}>
        Again
      </Button>,
    );
    await userEvent.setup().click(screen.getByRole('button', { name: /Again/ }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    rerender(
      <Button disabled onClick={onClick} block size="sm" variant="danger">
        Nope
      </Button>,
    );
    await userEvent.setup().click(screen.getByRole('button', { name: 'Nope' }));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });
});

describe('Card, Tag, Chip', () => {
  it('render content', () => {
    render(
      <>
        <Card data-testid="card">x</Card>
        <Tag tone="success">ok</Tag>
      </>,
    );
    expect(screen.getByTestId('card')).toHaveTextContent('x');
    expect(screen.getByText('ok')).toBeInTheDocument();
  });
  it('Chip toggles and exposes aria-pressed', async () => {
    const onToggle = vi.fn();
    const { rerender } = render(
      <Chip selected={false} onToggle={onToggle}>
        Food
      </Chip>,
    );
    const chip = screen.getByRole('button', { name: 'Food' });
    expect(chip).toHaveAttribute('aria-pressed', 'false');
    await userEvent.setup().click(chip);
    expect(onToggle).toHaveBeenCalled();
    rerender(
      <Chip selected onToggle={onToggle}>
        Food
      </Chip>,
    );
    expect(chip).toHaveAttribute('aria-pressed', 'true');
  });
});

describe('ProgressBar / Stars / Confetti / FeedbackBanner', () => {
  it('clamps progress to 0–100', () => {
    const { rerender } = render(<ProgressBar value={0.456} label="p" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '46');
    rerender(<ProgressBar value={3} label="p" tone="success" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
    rerender(<ProgressBar value={-1} label="p" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });
  it('labels stars for screen readers', () => {
    render(<Stars count={2} />);
    expect(screen.getByRole('img', { name: '2 of 3 stars' })).toBeInTheDocument();
  });
  it('renders decorative confetti', () => {
    render(<Confetti count={5} />);
    expect(screen.getByTestId('confetti')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('confetti').children).toHaveLength(5);
  });
  it('announces feedback politely', () => {
    render(
      <FeedbackBanner kind="almost" title="Almost!">
        Check umlauts
      </FeedbackBanner>,
    );
    const banner = screen.getByRole('status');
    expect(banner).toHaveAttribute('aria-live', 'polite');
    expect(banner).toHaveAttribute('data-kind', 'almost');
    expect(banner).toHaveTextContent('Check umlauts');
  });
});

describe('UmlautKeyboard', () => {
  it('inserts special characters', async () => {
    const onInsert = vi.fn();
    render(<UmlautKeyboard onInsert={onInsert} />);
    const user = userEvent.setup();
    for (const ch of ['ä', 'ö', 'ü', 'ß'])
      await user.click(screen.getByRole('button', { name: ch }));
    expect(onInsert.mock.calls.map((c) => c[0])).toEqual(['ä', 'ö', 'ü', 'ß']);
  });
});

describe('SpeakButton', () => {
  afterEach(() => {
    // @ts-expect-error test cleanup
    delete window.speechSynthesis;
    // @ts-expect-error test cleanup
    delete window.SpeechSynthesisUtterance;
    useSettingsStore.setState({ ...DEFAULT_SETTINGS });
  });

  it('is disabled when speech is unavailable', () => {
    render(<SpeakButton text="Hallo" />);
    expect(screen.getByRole('button', { name: 'Listen: Hallo' })).toBeDisabled();
  });

  it('speaks with the configured rate when available', async () => {
    const synth = { cancel: vi.fn(), speak: vi.fn(), getVoices: () => [] };
    class U {
      constructor(public text: string) {}
      lang = '';
      rate = 1;
      onend: (() => void) | null = null;
      onerror: (() => void) | null = null;
    }
    Object.assign(window, { speechSynthesis: synth, SpeechSynthesisUtterance: U });
    useSettingsStore.setState({ ttsRate: 0.6 });
    render(<SpeakButton text="Guten Tag" label="Play" size="lg" />);
    await userEvent.setup().click(screen.getByRole('button', { name: 'Play' }));
    expect(synth.speak).toHaveBeenCalledTimes(1);
    expect(synth.speak.mock.calls[0]![0]).toMatchObject({
      text: 'Guten Tag',
      rate: 0.6,
      lang: 'de-DE',
    });
  });
});

describe('ActivityCard', () => {
  it('links to the game and shows meta, tags and stars', () => {
    render(
      <MemoryRouter>
        <ActivityCard
          activity={quizActivity('a', 'u', { title: 'My quiz' })}
          to="/play/a"
          stars={2}
          badge="Up next"
          unitTitle="Unit One"
        />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /My quiz/ });
    expect(link).toHaveAttribute('href', '/play/a');
    expect(link).toHaveTextContent('Quiz');
    expect(link).toHaveTextContent('Easy');
    expect(link).toHaveTextContent('3 min');
    expect(link).toHaveTextContent('Vocabulary');
    expect(link).toHaveTextContent('Up next');
    expect(screen.getByRole('img', { name: '2 of 3 stars' })).toBeInTheDocument();
    expect(screen.getByText('Unit: Unit One')).toBeInTheDocument();
  });
});
