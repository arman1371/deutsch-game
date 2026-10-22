import { pickGermanVoice, speak, stopSpeaking, ttsSupported } from './tts';

const voice = (lang: string, name = lang) => ({ lang, name }) as SpeechSynthesisVoice;

describe('tts', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    // @ts-expect-error cleanup of stubs
    delete window.speechSynthesis;
    // @ts-expect-error cleanup of stubs
    delete window.SpeechSynthesisUtterance;
  });

  it('reports unsupported and no-ops without speechSynthesis', () => {
    expect(ttsSupported()).toBe(false);
    expect(speak('Hallo')).toBe(false);
    expect(() => stopSpeaking()).not.toThrow();
  });

  it('prefers de-DE, then any German voice', () => {
    expect(pickGermanVoice([voice('en-US'), voice('de-AT'), voice('de-DE')])?.lang).toBe('de-DE');
    expect(pickGermanVoice([voice('en-US'), voice('de-AT')])?.lang).toBe('de-AT');
    expect(pickGermanVoice([voice('en-US')])).toBeUndefined();
  });

  it('speaks with the chosen voice and rate', () => {
    const synth = {
      cancel: vi.fn(),
      speak: vi.fn(),
      getVoices: () => [voice('de-DE')],
    };
    class Utterance {
      lang = '';
      rate = 1;
      voice: unknown;
      onend: (() => void) | null = null;
      onerror: (() => void) | null = null;
      constructor(public text: string) {}
    }
    Object.assign(window, { speechSynthesis: synth, SpeechSynthesisUtterance: Utterance });
    const onEnd = vi.fn();
    expect(speak('Guten Tag', { rate: 0.7, onEnd })).toBe(true);
    expect(synth.cancel).toHaveBeenCalled();
    const u = synth.speak.mock.calls[0]![0] as Utterance;
    expect(u).toMatchObject({ text: 'Guten Tag', lang: 'de-DE', rate: 0.7 });
    expect(u.voice).toMatchObject({ lang: 'de-DE' });
    u.onend?.();
    expect(onEnd).toHaveBeenCalled();
    stopSpeaking();
    expect(synth.cancel).toHaveBeenCalledTimes(2);
  });
});
