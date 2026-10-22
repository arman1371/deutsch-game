import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  selected: boolean;
  onToggle: () => void;
  children: ReactNode;
}

/** Toggle chip used by the filter bar. */
export function Chip({ selected, onToggle, children, className = '', ...rest }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onToggle}
      className={`min-h-11 rounded-full border-2 px-4 text-sm font-bold transition-colors ${
        selected
          ? 'border-primary bg-primary text-on-primary'
          : 'border-line bg-surface text-ink hover:bg-surface-2'
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

/** Small non-interactive label. */
export function Tag({
  children,
  tone = 'neutral',
}: {
  children: ReactNode;
  tone?: 'neutral' | 'primary' | 'success' | 'warning';
}) {
  const tones = {
    neutral: 'bg-surface-2 text-ink',
    primary: 'bg-primary-soft text-ink',
    success: 'bg-success-soft text-ink',
    warning: 'bg-warning-soft text-ink',
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-bold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
