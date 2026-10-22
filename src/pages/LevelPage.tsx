import { Link, useParams } from 'react-router';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { useContent } from '@/content/ContentProvider';
import { getLevelMeta } from '@/content/levels';
import { useProgressStore } from '@/store/progressStore';
import { NotFoundPage } from './NotFoundPage';

export function LevelPage() {
  const { levelId = '' } = useParams();
  const content = useContent();
  const progress = useProgressStore((s) => s.activities);
  const level = getLevelMeta(levelId);
  const units = content.units.filter((u) => u.levelId === levelId);
  if (!level || level.status !== 'available' || units.length === 0) return <NotFoundPage />;

  return (
    <div className="flex flex-col gap-6">
      <header>
        <Link to="/" className="text-sm font-bold text-primary">
          ← Home
        </Link>
        <h1 className="mt-1 text-3xl font-extrabold text-ink">{level.title}</h1>
        <p className="text-muted">{level.subtitle}</p>
      </header>
      <ol className="grid gap-4 sm:grid-cols-2" aria-label="Units">
        {units.map((unit) => {
          const path = content.pathOf(unit.id);
          const done = path.filter((a) => progress[a.id]).length;
          return (
            <li key={unit.id}>
              <Link
                to={`/levels/${levelId}/units/${unit.id}`}
                data-testid={`unit-${unit.id}`}
                className="block h-full"
              >
                <Card className="press flex h-full flex-col gap-2 hover:bg-surface-2">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-3xl"
                    >
                      {unit.emoji}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-muted">Unit {unit.order}</p>
                      <h2 className="text-xl font-extrabold leading-tight text-ink">
                        {unit.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-muted">{unit.subtitle}</p>
                  <div className="mt-auto pt-2">
                    <ProgressBar
                      value={path.length ? done / path.length : 0}
                      label={`${unit.title} progress`}
                      tone="success"
                    />
                    <p className="mt-1 text-sm font-bold text-muted">
                      {done} / {path.length} games
                    </p>
                  </div>
                </Card>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default LevelPage;
