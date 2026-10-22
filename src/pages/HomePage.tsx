import { Link } from 'react-router';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { useContent } from '@/content/ContentProvider';
import { LEVELS } from '@/content/levels';
import { nextActivity, playUrl, queueAfter } from '@/app/path';
import { GAME_TYPE_LABELS } from '@/lib/filters';
import { dayNumber } from '@/lib/srs';
import { t } from '@/i18n';
import { useProgressStore, visibleStreak } from '@/store/progressStore';

export function HomePage() {
  const content = useContent();
  const progress = useProgressStore((s) => s.activities);
  const xp = useProgressStore((s) => s.xp);
  const streak = useProgressStore((s) => visibleStreak(s.streak, dayNumber()));
  const mistakes = useProgressStore((s) => Object.keys(s.mistakes).length);

  const next = nextActivity(content.fullPath, progress);
  const nextIds = content.fullPath.map((a) => a.id);
  const unit = next ? content.unitById.get(next.unitId) : undefined;
  const hasStarted = Object.keys(progress).length > 0;

  return (
    <div className="flex flex-col gap-8">
      <section
        className="rounded-3xl bg-primary p-6 text-on-primary shadow-[0_6px_0_var(--primary-edge)] md:p-8"
        aria-labelledby="hero-title"
      >
        <p className="text-sm font-extrabold uppercase tracking-wider opacity-90">{t('tagline')}</p>
        <h1 id="hero-title" className="mt-1 text-3xl font-extrabold md:text-4xl">
          {hasStarted ? t('home.continueTitle') : t('home.startTitle')}
        </h1>
        {next && unit ? (
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-lg">
              <span aria-hidden="true">{GAME_TYPE_LABELS[next.gameType].emoji} </span>
              <strong>{next.title}</strong>
              <span className="block opacity-90">
                {unit.emoji} {unit.title}
              </span>
            </p>
            <Link
              to={playUrl(
                next.id,
                queueAfter(nextIds, next.id).filter(
                  (id) => content.activityById.get(id)?.unitId === next.unitId,
                ),
              )}
            >
              <Button variant="secondary" size="lg" data-testid="continue-cta">
                {hasStarted ? t('common.continue') : t('common.start')}
              </Button>
            </Link>
          </div>
        ) : (
          <p className="mt-3 text-lg">
            You finished every game – replay your favourites from the library!
          </p>
        )}
      </section>

      <section aria-label="Your stats" className="grid grid-cols-3 gap-3 text-center">
        <Card>
          <p className="text-2xl font-extrabold text-ink">🔥 {streak}</p>
          <p className="text-sm text-muted">{t('home.streak', { n: streak })}</p>
        </Card>
        <Card>
          <p className="text-2xl font-extrabold text-ink">⭐ {xp}</p>
          <p className="text-sm text-muted">{t('home.xp', { n: xp })}</p>
        </Card>
        <Link to="/review" className="block">
          <Card className="h-full">
            <p className="text-2xl font-extrabold text-ink">📦 {mistakes}</p>
            <p className="text-sm text-muted">Fehlerkiste</p>
          </Card>
        </Link>
      </section>

      <section aria-labelledby="levels-title">
        <h2 id="levels-title" className="mb-3 text-2xl font-extrabold text-ink">
          {t('home.levels')}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {LEVELS.map((level) => {
            const available = level.status === 'available';
            const activities = content.activities.filter(
              (a) => content.unitById.get(a.unitId)?.levelId === level.id,
            );
            const done = activities.filter((a) => progress[a.id]).length;
            const body = (
              <Card className={`flex h-full flex-col gap-2 ${available ? '' : 'opacity-60'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-extrabold text-ink">{level.title}</h3>
                  {!available ? (
                    <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-muted">
                      {t('common.comingSoon')}
                    </span>
                  ) : null}
                </div>
                <p className="text-muted">{level.subtitle}</p>
                {available ? (
                  <div className="mt-auto pt-2">
                    <ProgressBar
                      value={activities.length ? done / activities.length : 0}
                      label={`${level.title} progress`}
                      tone="success"
                    />
                    <p className="mt-1 text-sm font-bold text-muted">
                      {done} / {activities.length} games
                    </p>
                  </div>
                ) : null}
              </Card>
            );
            return (
              <li key={level.id}>
                {available ? (
                  <Link
                    to={`/levels/${level.id}`}
                    data-testid={`level-${level.id}`}
                    className="block h-full"
                  >
                    {body}
                  </Link>
                ) : (
                  <div aria-disabled="true">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
