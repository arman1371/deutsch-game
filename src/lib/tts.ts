export interface SpeakOptions {
  rate?: number; // 0.5 – 1.5
  onEnd?: () => void;
}

export function ttsSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

export function pickGermanVoice(voices: readonly SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  return (
    voices.find((v) => v.lang === 'de-DE') ??
    voices.find((v) => v.lang.toLowerCase().startsWith('de')) ??
    undefined
  );
}

/** Speak German text with the browser's built-in voice. Returns false when speech is unavailable. */
export function speak(text: string, { rate = 0.9, onEnd }: SpeakOptions = {}): boolean {
  if (!ttsSupported()) return false;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = rate;
  const voice = pickGermanVoice(synth.getVoices());
  if (voice) utterance.voice = voice;
  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }
  synth.speak(utterance);
  return true;
}

export function stopSpeaking(): void {
  if (ttsSupported()) window.speechSynthesis.cancel();
}
