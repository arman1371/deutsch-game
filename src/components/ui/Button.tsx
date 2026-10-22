import type { ComponentPropsWithRef, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'success' | 'danger';
type Size = 'md' | 'lg' | 'sm';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-primary text-on-primary shadow-[0_4px_0_var(--primary-edge)] hover:bg-primary-hover',
  secondary:
    'bg-surface text-ink border-2 border-line shadow-[0_4px_0_var(--border)] hover:bg-surface-2',
  ghost: 'bg-transparent text-ink hover:bg-surface-2',
  success: 'bg-success text-on-primary shadow-[0_4px_0_rgb(0_0_0/0.25)]',
  danger: 'bg-danger text-on-primary shadow-[0_4px_0_rgb(0_0_0/0.25)]',
};
const SIZES: Record<Size, string> = {
  sm: 'min-h-11 px-4 text-sm',
  md: 'min-h-12 px-5 text-base',
  lg: 'min-h-14 px-7 text-lg',
};

interface Props extends ComponentPropsWithRef<'button'> {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  icon?: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  block,
  icon,
  className = '',
  children,
  type = 'button',
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={`press inline-flex items-center justify-center gap-2 rounded-2xl font-extrabold disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]} ${SIZES[size]} ${block ? 'w-full' : ''} ${className}`}
      {...rest}
    >
      {icon ? <span aria-hidden="true">{icon}</span> : null}
      {children}
    </button>
  );
}
