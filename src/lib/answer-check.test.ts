import {
  checkAnswer, checkNumeric, foldUmlauts, normalize, normalizeDigits, parsePriceToCents, stripUmlauts,
} from './answer-check';

describe('answer-check', () => {
  it('normalizes case, spacing and punctuation', () => {
    expect(normalize('  Ich  HEISSE   Anna! ')).toBe('ich heisse anna');
  });

  it('accepts exact answers regardless of case/punctuation', () => {
    expect(checkAnswer('Guten Morgen!', 'guten morgen')).toBe('correct');
    expect(checkAnswer('x', ['y', 'x'])).toBe('correct');
  });

  it('flags umlaut transliteration as almost', () => {
    expect(checkAnswer('Groesse', 'Größe')).toBe('almost');
    expect(checkAnswer('Grosse', 'Größe')).toBe('almost');
    expect(checkAnswer('Madchen', 'Mädchen')).toBe('almost');
    expect(checkAnswer('Schoen', 'schön')).toBe('almost');
    expect(checkAnswer('Maedchen', 'Mädchen')).toBe('almost');
  });

  it('rejects wrong or empty input', () => {
    expect(checkAnswer('Hallo', 'Tschüss')).toBe('wrong');
    expect(checkAnswer('   ', 'Tschüss')).toBe('wrong');
  });

  it('folds umlauts', () => {
    expect(foldUmlauts('äöüß')).toBe('aeoeuess');
    expect(stripUmlauts('äöüß')).toBe('aouss');
  });

  it('compares digits ignoring separators', () => {
    expect(normalizeDigits('0151 / 234-56')).toBe('015123456');
    expect(checkNumeric('0151 234 56', '015123456')).toBe('correct');
    expect(checkNumeric('', '1')).toBe('wrong');
    expect(checkNumeric('2', '1')).toBe('wrong');
  });

  it('parses prices', () => {
    expect(parsePriceToCents('3,50')).toBe(350);
    expect(parsePriceToCents('3.5 €')).toBe(350);
    expect(parsePriceToCents('12 Euro')).toBe(1200);
    expect(parsePriceToCents('abc')).toBeNull();
    expect(parsePriceToCents('1,234')).toBeNull();
  });
});
