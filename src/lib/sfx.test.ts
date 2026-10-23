import { playSfx, resetSfx, SFX, sfxSupported } from './sfx';

function stubAudio(state: AudioContextState = 'running') {
  const started: number[] = [];
  const resume = vi.fn(() => Promise.resolve());
  const param = () => ({
    setValueAtTime: vi.fn(),
    exponentialRampToValueAtTime: vi.fn(),
  });
  class FakeContext {
    state = state;
    currentTime = 0;
    destination = {};
    resume = resume;
    createGain() {
      const node = { gain: param(), connect: (n: unknown) => n };
      return node;
    }
    createOscillator() {
      const frequency = param();
      return {
        type: 'sine',
        frequency,
        connect: (n: unknown) => n,
        start: () => started.push(frequency.setValueAtTime.mock.calls[0]![0] as number),
        stop: vi.fn(),
      };
    }
  }
  const ctor = vi.fn(function (this: unknown) {
    return new FakeContext();
  });
  vi.stubGlobal('AudioContext', ctor);
  return { started, resume, ctor };
}

describe('sfx', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    resetSfx();
  });

  it('no-ops without Web Audio', () => {
    expect(sfxSupported()).toBe(false);
    expect(playSfx('correct')).toBe(false);
  });

  it('plays a rising cue for correct and a low cue for wrong, reusing one context', () => {
    const { started, ctor } = stubAudio();
    expect(sfxSupported()).toBe(true);
    expect(playSfx('correct')).toBe(true);
    expect(started).toEqual(SFX.correct.notes.map((n) => n.freq));
    expect(started[1]!).toBeGreaterThan(started[0]!);
    started.length = 0;
    expect(playSfx('wrong')).toBe(true);
    expect(started).toEqual([220]);
    expect(ctor).toHaveBeenCalledTimes(1);
  });

  it('keeps every cue very short', () => {
    for (const { notes } of Object.values(SFX)) {
      const end = Math.max(...notes.map((n) => n.at + n.duration));
      expect(end).toBeLessThanOrEqual(0.25);
    }
  });

  it('resumes a suspended context (autoplay policy)', () => {
    const { resume } = stubAudio('suspended');
    playSfx('wrong');
    expect(resume).toHaveBeenCalled();
  });

  it('never throws when Web Audio fails', () => {
    vi.stubGlobal(
      'AudioContext',
      vi.fn(function () {
        throw new Error('blocked');
      }),
    );
    expect(playSfx('correct')).toBe(false);
  });
});
