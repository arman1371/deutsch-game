import { conjugate, PRONOUNS, separableForms } from './conjugation';

const row = (v: string) => PRONOUNS.map((p) => conjugate(v)[p]);

describe('conjugate', () => {
  it('handles the A1.1 core verbs', () => {
    expect(row('sein')).toEqual(['bin', 'bist', 'ist', 'sind', 'seid', 'sind']);
    expect(row('haben')).toEqual(['habe', 'hast', 'hat', 'haben', 'habt', 'haben']);
    expect(row('sprechen')).toEqual([
      'spreche',
      'sprichst',
      'spricht',
      'sprechen',
      'sprecht',
      'sprechen',
    ]);
  });

  it('conjugates regular verbs', () => {
    expect(row('kommen')).toEqual(['komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen']);
    expect(row('wohnen')).toEqual(['wohne', 'wohnst', 'wohnt', 'wohnen', 'wohnt', 'wohnen']);
    expect(row('lernen')).toEqual(['lerne', 'lernst', 'lernt', 'lernen', 'lernt', 'lernen']);
  });

  it('handles s-sounds and e-insertion', () => {
    expect(row('heißen')).toEqual(['heiße', 'heißt', 'heißt', 'heißen', 'heißt', 'heißen']);
    expect(row('tanzen')[1]).toBe('tanzt');
    expect(row('arbeiten')).toEqual([
      'arbeite',
      'arbeitest',
      'arbeitet',
      'arbeiten',
      'arbeitet',
      'arbeiten',
    ]);
    expect(conjugate('öffnen').du).toBe('öffnest');
    expect(conjugate('kosten').du).toBe('kostest');
  });

  it('handles -ern verbs and modals', () => {
    expect(conjugate('wandern')).toMatchObject({
      ich: 'wandere',
      wir: 'wandern',
      'er/sie/es': 'wandert',
    });
    expect(row('können')).toEqual(['kann', 'kannst', 'kann', 'können', 'könnt', 'können']);
    expect(row('wollen')).toEqual(['will', 'willst', 'will', 'wollen', 'wollt', 'wollen']);
    expect(conjugate('möchten').ich).toBe('möchte');
  });

  it('rejects unsupported infinitives', () => {
    expect(() => conjugate('gehn')).toThrow();
  });

  it('builds separable verb forms', () => {
    const f = separableForms('auf', 'stehen');
    expect(f.ich).toBe('stehe auf');
    expect(f['er/sie/es']).toBe('steht auf');
    expect(f.wir).toBe('stehen auf');
  });
});
