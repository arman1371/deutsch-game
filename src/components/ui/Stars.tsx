import { t } from '@/i18n';

export function Stars({
  count,
  max = 3,
  size = 'md',
}: {
  count: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}) {
  const px = { sm: 'text-sm', md: 'text-xl', lg: 'text-4xl' }[size];
  return (
    <span
      role="img"
      aria-label={t('common.stars', { n: count })}
      className={`inline-flex gap-0.5 ${px}`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span key={i} aria-hidden="true" className={i < count ? '' : 'opacity-25 grayscale'}>
          ⭐
        </span>
      ))}
    </span>
  );
}
