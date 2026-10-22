import {
  clockAngles, formalTime, formatDigital, informalTime, parseTime, timeToGerman, WEEKDAYS,
} from './time';

const t = (s: string) => parseTime(s);

describe('time', () => {
  it('parses and formats', () => {
    expect(t('9:05')).toEqual({ hour: 9, minute: 5 });
    expect(formatDigital(t('9:05'))).toBe('09:05');
    expect(() => parseTime('25:00')).toThrow();
    expect(() => parseTime('nope')).toThrow();
  });

  it.each([
    ['09:00', 'neun Uhr'], ['01:00', 'ein Uhr'], ['14:30', 'vierzehn Uhr dreißig'],
    ['21:05', 'einundzwanzig Uhr fünf'], ['00:15', 'null Uhr fünfzehn'],
  ])('formal %s → %s', (time, expected) => {
    expect(formalTime(t(time))).toBe(expected);
  });

  it.each([
    ['13:00', 'ein Uhr'], ['15:00', 'drei Uhr'], ['00:00', 'zwölf Uhr'],
    ['14:05', 'fünf nach zwei'], ['14:10', 'zehn nach zwei'], ['14:15', 'Viertel nach zwei'],
    ['14:20', 'zwanzig nach zwei'], ['14:25', 'fünf vor halb drei'], ['14:30', 'halb drei'],
    ['14:35', 'fünf nach halb drei'], ['14:40', 'zwanzig vor drei'], ['14:45', 'Viertel vor drei'],
    ['14:50', 'zehn vor drei'], ['14:55', 'fünf vor drei'], ['11:30', 'halb zwölf'],
    ['12:30', 'halb eins'], ['14:07', 'vierzehn Uhr sieben'],
  ])('informal %s → %s', (time, expected) => {
    expect(informalTime(t(time))).toBe(expected);
  });

  it('dispatches by style', () => {
    expect(timeToGerman(t('08:30'), 'formal')).toBe('acht Uhr dreißig');
    expect(timeToGerman(t('08:30'), 'informal')).toBe('halb neun');
  });

  it('computes clock hand angles', () => {
    expect(clockAngles(t('03:00'))).toEqual({ hourAngle: 90, minuteAngle: 0 });
    expect(clockAngles(t('06:30'))).toEqual({ hourAngle: 195, minuteAngle: 180 });
    expect(clockAngles(t('12:00'))).toEqual({ hourAngle: 0, minuteAngle: 0 });
  });

  it('lists the weekdays Monday first', () => {
    expect(WEEKDAYS[0]).toBe('Montag');
    expect(WEEKDAYS).toHaveLength(7);
  });
});
