import { digitsToGerman, formatPrice, numberToGerman, priceToGerman, spellOut } from './numbers';

describe('numberToGerman', () => {
  it.each([
    [0, 'null'],
    [1, 'eins'],
    [12, 'zwölf'],
    [16, 'sechzehn'],
    [17, 'siebzehn'],
    [20, 'zwanzig'],
    [21, 'einundzwanzig'],
    [30, 'dreißig'],
    [66, 'sechsundsechzig'],
    [99, 'neunundneunzig'],
    [100, 'einhundert'],
    [101, 'einhunderteins'],
    [215, 'zweihundertfünfzehn'],
    [1000, 'eintausend'],
    [1999, 'eintausendneunhundertneunundneunzig'],
    [21000, 'einundzwanzigtausend'],
    [999999, 'neunhundertneunundneunzigtausendneunhundertneunundneunzig'],
  ])('%i → %s', (n, word) => {
    expect(numberToGerman(n)).toBe(word);
  });

  it('rejects out-of-range input', () => {
    expect(() => numberToGerman(-1)).toThrow(RangeError);
    expect(() => numberToGerman(1.5)).toThrow(RangeError);
    expect(() => numberToGerman(1_000_000)).toThrow(RangeError);
  });
});

describe('digits, letters and prices', () => {
  it('reads digit by digit', () => {
    expect(digitsToGerman('0151 23')).toBe('null eins fünf eins zwei drei');
  });
  it('spells words', () => {
    expect(spellOut('Bär')).toBe('be a-Umlaut er');
    expect(spellOut('a-1')).toBe('a - 1');
  });
  it('formats prices', () => {
    expect(formatPrice(250)).toBe('2,50 €');
    expect(formatPrice(5)).toBe('0,05 €');
  });
  it('speaks prices', () => {
    expect(priceToGerman(250)).toBe('zwei Euro fünfzig');
    expect(priceToGerman(100)).toBe('ein Euro');
    expect(priceToGerman(80)).toBe('achtzig Cent');
    expect(priceToGerman(1200)).toBe('zwölf Euro');
  });
});
