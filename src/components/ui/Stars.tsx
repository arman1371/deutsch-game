import { t } from '@/i18n';
import { Icon } from './Icon';

const PX = { sm: 16, md: 24, lg: 40 } as const;

export function Stars({
  count,
  max = 3,
  size = 'md',
}: {
  count: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  return (
    <span role="img" aria-label={t('common.stars', { n: count })} className="inline-flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <Icon
          key={i}
          name="star"
          size={PX[size]}
          filled={i < count}
          className={i < count ? 'text-accent' : 'text-line'}
        />
      ))}
    </span>
  );
}
