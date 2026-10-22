interface Props {
  value: number; // 0..1
  label: string;
  tone?: 'primary' | 'success';
}

export function ProgressBar({ value, label, tone = 'primary' }: Props) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={pct}
      className="h-3 w-full overflow-hidden rounded-full bg-surface-2"
    >
      <div
        className={`h-full rounded-full transition-[width] duration-300 ${tone === 'success' ? 'bg-success' : 'bg-primary'}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
