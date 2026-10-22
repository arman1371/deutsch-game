import { numberToGerman } from './numbers';

export interface Clock {
  hour: number; // 0–23
  minute: number; // 0–59
}

export function parseTime(hhmm: string): Clock {
  const m = /^(\d{1,2}):(\d{2})$/.exec(hhmm);
  if (!m) throw new Error(`Bad time: ${hhmm}`);
  const hour = Number(m[1]);
  const minute = Number(m[2]);
  if (hour > 23 || minute > 59) throw new Error(`Bad time: ${hhmm}`);
  return { hour, minute };
}

export function formatDigital({ hour, minute }: Clock): string {
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

/** "ein" for 1 o'clock (ein Uhr), otherwise the normal cardinal. */
function hourWord(h: number): string {
  const h24 = ((h % 24) + 24) % 24;
  return h24 === 1 ? 'ein' : numberToGerman(h24);
}

/** Official/24-hour style: 14:30 → "vierzehn Uhr dreißig", 9:00 → "neun Uhr". */
export function formalTime({ hour, minute }: Clock): string {
  const h = `${hourWord(hour)} Uhr`;
  return minute === 0 ? h : `${h} ${numberToGerman(minute)}`;
}

/** 12-hour hour word used in everyday speech ("halb drei" for 14:30 or 02:30). */
function spokenHour(h: number): string {
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return numberToGerman(h12);
}

/**
 * Everyday style (A1 level): full, half, quarter past/to, "X nach/vor".
 * 14:30 → "halb drei", 14:15 → "Viertel nach zwei", 14:45 → "Viertel vor drei",
 * 14:10 → "zehn nach zwei", 14:20 → "zwanzig nach zwei", 14:25 → "fünf vor halb drei",
 * 14:35 → "fünf nach halb drei", 14:40 → "zwanzig vor drei", 14:50 → "zehn vor drei".
 * Minutes that don't map to these patterns fall back to the formal reading.
 */
export function informalTime(clock: Clock): string {
  const { hour, minute } = clock;
  const next = spokenHour(hour + 1);
  const cur = spokenHour(hour);
  switch (minute) {
    case 0:
      return hour % 12 === 1 ? 'ein Uhr' : `${cur} Uhr`;
    case 5:
      return `fünf nach ${cur}`;
    case 10:
      return `zehn nach ${cur}`;
    case 15:
      return `Viertel nach ${cur}`;
    case 20:
      return `zwanzig nach ${cur}`;
    case 25:
      return `fünf vor halb ${next}`;
    case 30:
      return `halb ${next}`;
    case 35:
      return `fünf nach halb ${next}`;
    case 40:
      return `zwanzig vor ${next}`;
    case 45:
      return `Viertel vor ${next}`;
    case 50:
      return `zehn vor ${next}`;
    case 55:
      return `fünf vor ${next}`;
    default:
      return formalTime(clock);
  }
}

export function timeToGerman(clock: Clock, style: 'formal' | 'informal'): string {
  return style === 'formal' ? formalTime(clock) : informalTime(clock);
}

/** Angles (degrees, clockwise from 12) for drawing an analog clock. */
export function clockAngles({ hour, minute }: Clock): { hourAngle: number; minuteAngle: number } {
  return { hourAngle: ((hour % 12) + minute / 60) * 30, minuteAngle: minute * 6 };
}

export const WEEKDAYS = [
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
  'Sonntag',
] as const;
