import { Link, useRouteError } from 'react-router';
import { Button } from '@/components/ui/Button';

export function ErrorPage() {
  const error = useRouteError();
  const message = error instanceof Error ? error.message : 'Unknown error';
  return (
    <div
      role="alert"
      className="mx-auto flex max-w-md flex-col items-center gap-4 p-10 text-center"
    >
      <span aria-hidden="true" className="text-6xl">
        🙈
      </span>
      <h1 className="text-2xl font-extrabold text-ink">Something went wrong</h1>
      <p className="text-muted">{message}</p>
      <Link to="/">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
}
