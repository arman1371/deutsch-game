import { Link } from 'react-router';
import { Button } from '@/components/ui/Button';
import { Confetti } from '@/components/ui/Confetti';
import { Stars } from '@/components/ui/Stars';
import { accuracy, type GameResult } from '@/lib/scoring';
import { t } from '@/i18n';
import type { RecordOutcome } from '@/store/progressStore';

interface Props {
  title: string;
  result: GameResult;
  outcome: RecordOutcome;
  nextTo?: string;
  nextTitle?: string;
  backTo: string;
  backLabel: string;
  onReplay: () => void;
}

export function ResultScreen({
  title,
  result,
  outcome,
  nextTo,
  nextTitle,
  backTo,
  backLabel,
  onReplay,
}: Props) {
  const pct = Math.round(accuracy(result) * 100);
  return (
    <section
      className="mx-auto flex max-w-md flex-col items-center gap-5 py-6 text-center"
      aria-labelledby="result-title"
    >
      {outcome.stars === 3 ? <Confetti /> : null}
      <span aria-hidden="true" className="text-7xl">
        {outcome.stars === 3 ? '🏆' : outcome.stars === 2 ? '🎉' : '💪'}
      </span>
      <h1 id="result-title" className="text-3xl font-extrabold text-ink">
        {t('result.title')}
      </h1>
      <p className="text-muted">{title}</p>
      <Stars count={outcome.stars} size="lg" />
      <ul className="grid w-full grid-cols-2 gap-3">
        <li className="rounded-2xl bg-surface-2 p-3">
          <p className="text-2xl font-extrabold text-ink" data-testid="accuracy">
            {t('result.accuracy', { n: pct })}
          </p>
          <p className="text-sm text-muted">
            {result.correct} / {result.total}
          </p>
        </li>
        <li className="rounded-2xl bg-surface-2 p-3">
          <p className="text-2xl font-extrabold text-ink" data-testid="xp-gained">
            {t('result.xp', { n: outcome.xpGained })}
          </p>
          {outcome.newBest ? (
            <p className="text-sm font-bold text-success">{t('result.newBest')}</p>
          ) : null}
        </li>
      </ul>
      {result.mistakes.length > 0 ? (
        <p className="rounded-2xl bg-warning-soft p-3 text-ink" data-testid="mistakes-note">
          📦 {result.mistakes.length} item{result.mistakes.length === 1 ? '' : 's'} added to your
          Fehlerkiste for later practice.
        </p>
      ) : null}
      <div className="flex w-full flex-col gap-3">
        {nextTo ? (
          <Link to={nextTo}>
            <Button size="lg" block data-testid="next-activity">
              {t('result.nextUp')}: {nextTitle}
            </Button>
          </Link>
        ) : null}
        <Button variant="secondary" size="lg" onClick={onReplay} data-testid="replay">
          {t('common.playAgain')}
        </Button>
        <Link to={backTo}>
          <Button variant="ghost" block>
            {backLabel}
          </Button>
        </Link>
      </div>
    </section>
  );
}
