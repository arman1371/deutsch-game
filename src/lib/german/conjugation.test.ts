import {
  conjugate,
  conjugatePreterite,
  PRONOUNS,
  reflexiveForms,
  separableForms,
} from './conjugation';

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

describe('modal and A1.2 verbs', () => {
  it('conjugates the modal verbs', () => {
    expect(row('müssen')).toEqual(['muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen']);
    expect(row('dürfen')).toEqual(['darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen']);
    expect(row('sollen')).toEqual(['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen']);
    expect(row('mögen')).toEqual(['mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen']);
  });

  it('knows wissen and werden', () => {
    expect(row('wissen')).toEqual(['weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen']);
    expect(row('werden')).toEqual(['werde', 'wirst', 'wird', 'werden', 'werdet', 'werden']);
  });
});

describe('conjugatePreterite', () => {
  it('gives war and hatte', () => {
    expect(PRONOUNS.map((p) => conjugatePreterite('sein')[p])).toEqual([
      'war',
      'warst',
      'war',
      'waren',
      'wart',
      'waren',
    ]);
    expect(PRONOUNS.map((p) => conjugatePreterite('haben')[p])).toEqual([
      'hatte',
      'hattest',
      'hatte',
      'hatten',
      'hattet',
      'hatten',
    ]);
  });

  it('gives the modal verbs without umlaut', () => {
    expect(conjugatePreterite('können')['ich']).toBe('konnte');
    expect(conjugatePreterite('müssen')['wir']).toBe('mussten');
    expect(conjugatePreterite('dürfen')['du']).toBe('durftest');
  });

  it('throws for verbs it does not know', () => {
    expect(() => conjugatePreterite('gehen')).toThrow();
  });
});

describe('reflexiveForms', () => {
  it('adds the reflexive pronoun after the verb', () => {
    expect(reflexiveForms('freuen')).toEqual({
      ich: 'freue mich',
      du: 'freust dich',
      'er/sie/es': 'freut sich',
      wir: 'freuen uns',
      ihr: 'freut euch',
      'sie/Sie': 'freuen sich',
    });
  });

  it('keeps irregular stems', () => {
    expect(reflexiveForms('treffen').du).toBe('triffst dich');
  });
});

describe('laden', () => {
  it('has the umlaut in du/er forms (herunterladen)', () => {
    expect(separableForms('herunter', 'laden').du).toBe('lädst herunter');
    expect(conjugate('laden')['er/sie/es']).toBe('lädt');
  });
});
