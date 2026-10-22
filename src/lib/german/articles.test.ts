import {
  definiteArticle, genderOfArticle, indefiniteArticle, negativeArticle, possessive,
} from './articles';

describe('articles', () => {
  it('gives definite articles for nominative and accusative', () => {
    expect(definiteArticle('m')).toBe('der');
    expect(definiteArticle('m', 'acc')).toBe('den');
    expect(definiteArticle('f', 'acc')).toBe('die');
    expect(definiteArticle('n', 'acc')).toBe('das');
    expect(definiteArticle('pl')).toBe('die');
  });

  it('gives indefinite articles (none in the plural)', () => {
    expect(indefiniteArticle('m')).toBe('ein');
    expect(indefiniteArticle('m', 'acc')).toBe('einen');
    expect(indefiniteArticle('f')).toBe('eine');
    expect(indefiniteArticle('n', 'acc')).toBe('ein');
    expect(indefiniteArticle('pl')).toBe('');
  });

  it('gives negative articles', () => {
    expect(negativeArticle('m')).toBe('kein');
    expect(negativeArticle('m', 'acc')).toBe('keinen');
    expect(negativeArticle('f')).toBe('keine');
    expect(negativeArticle('n', 'acc')).toBe('kein');
    expect(negativeArticle('pl', 'acc')).toBe('keine');
  });

  it('inflects possessive articles like ein/kein', () => {
    expect(possessive('mein', 'm')).toBe('mein');
    expect(possessive('mein', 'f')).toBe('meine');
    expect(possessive('mein', 'pl')).toBe('meine');
    expect(possessive('mein', 'm', 'acc')).toBe('meinen');
    expect(possessive('euer', 'f')).toBe('eure');
    expect(possessive('euer', 'n')).toBe('euer');
    expect(possessive('unser', 'f')).toBe('unsere');
    expect(possessive('Ihr', 'm', 'acc')).toBe('Ihren');
  });

  it('maps an article back to a gender', () => {
    expect(genderOfArticle('der')).toBe('m');
    expect(genderOfArticle('die')).toBe('f');
    expect(genderOfArticle('das')).toBe('n');
    expect(genderOfArticle('ein')).toBeNull();
  });
});
