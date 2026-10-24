import type { ComponentPropsWithRef } from 'react';
import { Icon, type IconName } from './Icon';

type Variant = 'ghost' | 'tonal' | 'solid';
type Size = 'md' | 'lg';

const VARIANTS: Record<Variant, string> = {
  ghost: 'bg-transparent text-ink hover:bg-surface-2',
  tonal: 'bg-surface-2 text-ink hover:bg-sunken',
  solid: 'bg-primary text-on-primary shadow-[0_3px_0_var(--primary-edge)] hover:bg-primary-hover',
};
const SIZES: Record<Size, { box: string; icon: number }> = {
  md: { box: 'h-11 w-11 rounded-xl', icon: 20 },
  lg: { box: 'h-14 w-14 rounded-2xl', icon: 24 },
};

interface Props extends Omit<ComponentPropsWithRef<'button'>, 'children' | 'aria-label'> {
  icon: IconName;
  /** Required: an icon-only control has no other accessible name. */
  'aria-label': string;
  variant?: Variant;
  size?: Size;
  filled?: boolean;
}

export function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  filled,
  className = '',
  type = 'button',
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={`press inline-flex shrink-0 items-center justify-center disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]} ${SIZES[size].box} ${className}`}
      {...rest}
    >
      <Icon name={icon} size={SIZES[size].icon} filled={filled} />
    </button>
  );
}
