import type { SVGProps } from 'react';
import { ICON_PATHS, type IconName } from './iconPaths';

export type { IconName };

interface Props extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  /** Pixel size; the design uses 16, 20, 24 and 32. */
  size?: number;
  /** Fill the shape with the current colour (star, play, flame). */
  filled?: boolean;
  /** Accessible name; omit for decorative icons. */
  title?: string;
}

/** Line icon from the design system. Decorative unless a `title` is passed. */
export function Icon({ name, size = 24, filled = false, title, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {ICON_PATHS[name].split('|').map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
