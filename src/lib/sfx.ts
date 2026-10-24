export type SfxKind = 'correct' | 'wrong';

interface Note {
  freq: number;
  /** seconds after the sound starts */
  at: number;
  duration: number;
  type: OscillatorType;
  /** optional pitch slide target */
  to?: number;
}

/** Tiny synthesized cues: a rising two-note "ding" and a short low "bonk". No audio files needed. */
export const SFX: Record<SfxKind, { gain: number; notes: Note[] }> = {
  correct: {
    gain: 0.12,
    notes: [
      { freq: 660, at: 0, duration: 0.09, type: 'sine' },
      { freq: 990, at: 0.07, duration: 0.14, type: 'sine' },
    ],
  },
  wrong: {
    gain: 0.08,
    notes: [{ freq: 220, to: 150, at: 0, duration: 0.18, type: 'triangle' }],
  },
};

type AudioContextCtor = typeof AudioContext;

let ctx: AudioContext | null = null;

function audioContextCtor(): AudioContextCtor | undefined {
  if (typeof window === 'undefined') return undefined;
  const w = window as unknown as {
    AudioContext?: AudioContextCtor;
    webkitAudioContext?: AudioContextCtor;
  };
  return w.AudioContext ?? w.webkitAudioContext;
}

export function sfxSupported(): boolean {
  return audioContextCtor() !== undefined;
}

/**
 * Play a short feedback sound. The AudioContext is created lazily on the first call, which always
 * happens inside a click/keypress, so browser autoplay rules are satisfied. Returns false when Web
 * Audio is unavailable or fails – sounds are a nice-to-have and must never break a game.
 */
export function playSfx(kind: SfxKind): boolean {
  const Ctor = audioContextCtor();
  if (!Ctor) return false;
  try {
    ctx ??= new Ctor();
    if (ctx.state === 'suspended') void ctx.resume();
    const { gain, notes } = SFX[kind];
    const start = ctx.currentTime;
    for (const note of notes) {
      const osc = ctx.createOscillator();
      const env = ctx.createGain();
      const t0 = start + note.at;
      const t1 = t0 + note.duration;
      osc.type = note.type;
      osc.frequency.value = note.freq;
      osc.frequency.setValueAtTime(note.freq, t0);
      if (note.to) osc.frequency.exponentialRampToValueAtTime(note.to, t1);
      // quick attack and exponential release so there is no click
      env.gain.setValueAtTime(0.0001, t0);
      env.gain.exponentialRampToValueAtTime(gain, t0 + 0.01);
      env.gain.exponentialRampToValueAtTime(0.0001, t1);
      osc.connect(env).connect(ctx.destination);
      osc.start(t0);
      osc.stop(t1 + 0.02);
    }
    return true;
  } catch {
    return false;
  }
}

/** Test hook: forget the cached AudioContext. */
export function resetSfx(): void {
  ctx = null;
}
