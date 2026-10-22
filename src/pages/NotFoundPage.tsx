import { Link } from 'react-router';
import { Button } from '@/components/ui/Button';
import { t } from '@/i18n';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <span aria-hidden="true" className="text-7xl">
        🧭
      </span>
      <h1 className="text-3xl font-extrabold text-ink">{t('notFound.title')}</h1>
      <p className="text-muted">{t('notFound.body')}</p>
      <Link to="/">
        <Button>{t('notFound.home')}</Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
