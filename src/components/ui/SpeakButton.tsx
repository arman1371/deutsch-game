import { useState } from 'react';
import { speak, ttsSupported } from '@/lib/tts';
import { useSettingsStore } from '@/store/settingsStore';
import { t } from '@/i18n';

interface Props {
  text: string;
  label?: string;
  size?: 'md' | 'lg';
}

/** Plays German text via the browser voice. Renders nothing visual-critical if TTS is missing. */
export function SpeakButton({ text, label, size = 'md' }: Props) {
  const rate = useSettingsStore((s) => s.ttsRate);
  const [playing, setPlaying] = useState(false);
  const supported = ttsSupported();
  const dims = size === 'lg' ? 'h-16 w-16 text-3xl' : 'h-12 w-12 text-xl';
  return (
    <button
      type="button"
      aria-label={label ?? `${t('common.listen')}: ${text}`}
      title={supported ? t('common.listen') : t('common.audioUnavailable')}
      disabled={!supported}
      onClick={() => {
        setPlaying(true);
        speak(text, { rate, onEnd: () => setPlaying(false) });
      }}
      className={`press inline-flex shrink-0 items-center justify-center rounded-full bg-primary-soft text-ink shadow-[0_3px_0_var(--border)] disabled:opacity-40 ${dims} ${playing ? 'ring-2 ring-primary' : ''}`}
    >
      <span aria-hidden="true">🔊</span>
    </button>
  );
}
