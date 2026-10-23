import { conjugate } from './conjugation';
import {
  adjectiveEndingWhy,
  adjectiveRule,
  contrastForms,
  describeForm,
  personFormWhy,
} from './forms';

describe('describeForm', () => {
  it('knows articles, ein-words and possessives', () => {
    expect(describeForm('dem')).toBe('masculine/neuter dative');
    expect(describeForm('Den')).toBe(describeForm('den'));
    expect(describeForm('einen')).toContain('masculine accusative');
    expect(describeForm('meiner')).toBe('feminine dative');
    expect(describeForm('unsere')).toContain('feminine');
    expect(describeForm('euer')).toBe(describeForm('ein'));
  });

  it('knows personal pronouns and keeps Sie/sie apart', () => {
    expect(describeForm('mir')).toContain('dative of ich');
    expect(describeForm('Mich')).toContain('accusative of ich');
    expect(describeForm('Sie')).toContain('polite');
    expect(describeForm('sie')).toContain('she');
    expect(describeForm('Ihnen')).toContain('polite');
  });

  it('returns undefined for other words', () => {
    expect(describeForm('Haus')).toBeUndefined();
    expect(describeForm('einmal')).toBeUndefined();
    expect(describeForm('ihr')).toBeUndefined(); // too ambiguous to describe
  });
});

describe('contrastForms', () => {
  it('explains a wrong grammar word against the answer', () => {
    expect(contrastForms('dem', 'den')).toBe(
      '“dem” is masculine/neuter dative. Here you need “den”: masculine accusative (or dative plural).',
    );
    expect(contrastForms('mich', 'mir')).toContain('accusative of ich');
  });

  it('stays quiet for vocabulary and for forms that look the same', () => {
    expect(contrastForms('Brot', 'Käse')).toBeUndefined();
    expect(contrastForms('ein', 'kein')).toBeUndefined();
  });
});

describe('adjective endings', () => {
  it('names the rule', () => {
    expect(adjectiveRule('definite', 'm', 'acc')).toBe(
      'masculine accusative after der/die/das → -en',
    );
  });

  it('says where a wrong ending belongs', () => {
    expect(adjectiveEndingWhy('definite', 'm', 'acc', 'e')).toBe(
      '-e after der/die/das is for masculine/feminine/neuter nominative, feminine/neuter accusative. Here it is masculine accusative, so the ending is -en.',
    );
    expect(adjectiveEndingWhy('definite', 'f', 'nom', 'er')).toBe(
      '-er is never used after der/die/das. Here it is feminine nominative, so the ending is -e.',
    );
  });
});

describe('personFormWhy', () => {
  const sprechen = conjugate('sprechen');

  it('names the person whose form was given', () => {
    expect(personFormWhy(sprechen, 'er/sie/es', 'sprichst')).toBe(
      '“sprichst” is the du form – for er/sie/es it is “spricht”.',
    );
    expect(personFormWhy(sprechen, 'ihr', 'sprechen')).toBe(
      '“sprechen” is the wir and sie/Sie form – for ihr it is “sprecht”.',
    );
  });

  it('returns undefined for the right form or an unknown word', () => {
    expect(personFormWhy(sprechen, 'du', 'Sprichst')).toBeUndefined();
    expect(personFormWhy(sprechen, 'du', 'sprechst')).toBeUndefined();
  });
});
