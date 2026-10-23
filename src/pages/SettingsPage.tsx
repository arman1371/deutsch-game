import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { t } from '@/i18n';
import { useProgressStore } from '@/store/progressStore';
import { useSettingsStore, type MotionSetting, type ThemeSetting } from '@/store/settingsStore';

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <fieldset className="flex flex-col gap-2">
      <legend className="mb-1 font-extrabold text-ink">{label}</legend>
      <div className="grid grid-flow-col gap-2">
        {options.map((o) => (
          <label
            key={o.value}
            className={`flex min-h-11 cursor-pointer items-center justify-center rounded-xl border-2 px-3 text-sm font-bold ${value === o.value ? 'border-primary bg-primary text-on-primary' : 'border-line bg-surface text-ink'}`}
          >
            <input
              type="radio"
              name={label}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="sr-only"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function SettingsPage() {
  const s = useSettingsStore();
  const reset = useProgressStore((p) => p.reset);

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-5">
      <h1 className="text-3xl font-extrabold text-ink">{t('settings.title')}</h1>
      <Card className="flex flex-col gap-5">
        <Segmented<ThemeSetting>
          label={t('settings.theme')}
          value={s.theme}
          onChange={(theme) => s.set({ theme })}
          options={[
            { value: 'system', label: 'System' },
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
          ]}
        />
        <Segmented<MotionSetting>
          label={t('settings.motion')}
          value={s.motion}
          onChange={(motion) => s.set({ motion })}
          options={[
            { value: 'system', label: 'System' },
            { value: 'full', label: 'Full' },
            { value: 'reduced', label: 'Reduced' },
          ]}
        />
        <label className="flex min-h-11 items-center justify-between gap-3 font-extrabold text-ink">
          {t('settings.sounds')}
          <input
            type="checkbox"
            className="h-6 w-6"
            checked={s.sounds}
            onChange={(e) => s.set({ sounds: e.target.checked })}
          />
        </label>
        <label className="flex min-h-11 items-center justify-between gap-3 font-extrabold text-ink">
          {t('settings.autoSpeak')}
          <input
            type="checkbox"
            className="h-6 w-6"
            checked={s.autoSpeak}
            onChange={(e) => s.set({ autoSpeak: e.target.checked })}
          />
        </label>
        <div className="flex flex-col gap-2">
          <label htmlFor="rate" className="font-extrabold text-ink">
            {t('settings.ttsRate')}: {s.ttsRate.toFixed(1)}×
          </label>
          <div className="flex items-center gap-3">
            <input
              id="rate"
              type="range"
              min={0.5}
              max={1.2}
              step={0.1}
              value={s.ttsRate}
              onChange={(e) => s.set({ ttsRate: Number(e.target.value) })}
              className="h-11 flex-1"
            />
            <SpeakButton text="Guten Tag! Wie geht es Ihnen?" />
          </div>
        </div>
      </Card>
      <Card className="flex flex-col gap-3">
        <h2 className="font-extrabold text-ink">Your data</h2>
        <p className="text-sm text-muted">
          Progress is stored only in this browser. Clearing site data removes it.
        </p>
        <Button
          variant="danger"
          onClick={() => {
            if (window.confirm(t('settings.resetConfirm'))) reset();
          }}
        >
          {t('settings.reset')}
        </Button>
      </Card>
    </div>
  );
}

export default SettingsPage;
