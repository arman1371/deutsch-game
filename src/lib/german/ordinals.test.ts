import { dateToDigits, dateToGerman, MONTHS, ordinal, ordinalDative } from './ordinals';

describe('ordinals', () => {
  it('handles the irregular ones', () => {
    expect([1, 3, 7, 8].map(ordinal)).toEqual(['erste', 'dritte', 'siebte', 'achte']);
  });

  it('adds -te up to 19 and -ste from 20', () => {
    expect([2, 4, 5, 6, 9, 10, 12, 19].map(ordinal)).toEqual([
      'zweite',
      'vierte',
      'fünfte',
      'sechste',
      'neunte',
      'zehnte',
      'zwölfte',
      'neunzehnte',
    ]);
    expect([20, 21, 30, 31].map(ordinal)).toEqual([
      'zwanzigste',
      'einundzwanzigste',
      'dreißigste',
      'einunddreißigste',
    ]);
  });

  it('forms the dative used after am / im', () => {
    expect(ordinalDative(1)).toBe('ersten');
    expect(ordinalDative(24)).toBe('vierundzwanzigsten');
  });

  it('says dates', () => {
    expect(dateToGerman(3, 5)).toBe('am dritten Mai');
    expect(dateToGerman(24, 12)).toBe('am vierundzwanzigsten Dezember');
    expect(dateToDigits(3, 5)).toBe('3.5.');
    expect(MONTHS).toHaveLength(12);
  });

  it('rejects out-of-range input', () => {
    expect(() => ordinal(0)).toThrow(RangeError);
    expect(() => dateToGerman(32, 1)).toThrow(RangeError);
    expect(() => dateToGerman(1, 13)).toThrow(RangeError);
  });
});
