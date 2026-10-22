import type { ReactNode } from 'react';

export type FeedbackKind = 'correct' | 'almost' | 'wrong';

const STYLE: Record<FeedbackKind, string> = {
  correct: 'bg-success-soft border-success',
  almost: 'bg-warning-soft border-warning',
  wrong: 'bg-danger-soft border-danger',
};
const ICON: Record<FeedbackKind, string> = { correct: '✅', almost: '🟡', wrong: '❌' };

interface Props {
  kind: FeedbackKind;
  title: string;
  children?: ReactNode;
}

/** Announced politely to screen readers; sits at the bottom of a game after each answer. */
export function FeedbackBanner({ kind, title, children }: Props) {
  return (
    <div
      role="status"
      aria-live="polite"
      data-testid="feedback"
      data-kind={kind}
      className={`anim-pop rounded-2xl border-2 p-4 ${STYLE[kind]} ${kind === 'wrong' ? 'anim-shake' : ''}`}
    >
      <p className="flex items-center gap-2 text-lg font-extrabold text-ink">
        <span aria-hidden="true">{ICON[kind]}</span>
        {title}
      </p>
      {children ? <div className="mt-1 text-ink">{children}</div> : null}
    </div>
  );
}
