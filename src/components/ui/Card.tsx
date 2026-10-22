import type { HTMLAttributes } from 'react';

export function Card({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-(--radius-card) border-2 border-line bg-surface p-4 shadow-[0_4px_0_var(--border)] ${className}`}
      {...rest}
    />
  );
}
