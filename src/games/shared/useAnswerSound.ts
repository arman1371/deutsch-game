import { useCallback } from 'react';
import { playSfx } from '@/lib/sfx';
import { useSettingsStore } from '@/store/settingsStore';

/** Returns `(correct) => void` that plays the right/wrong cue unless sound effects are off. */
export function useAnswerSound() {
  const sounds = useSettingsStore((s) => s.sounds);
  return useCallback(
    (correct: boolean) => {
      if (sounds) playSfx(correct ? 'correct' : 'wrong');
    },
    [sounds],
  );
}
