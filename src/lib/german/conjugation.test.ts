import {
  conjugate,
  conjugatePreterite,
  konjunktiv2,
  passiveForms,
  PRONOUNS,
  reflexiveDativeForms,
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

  it('throws for verbs it cannot form', () => {
    expect(() => conjugatePreterite('tun')).toThrow();
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

describe('geben and helfen', () => {
  it('helfen: du hilfst, er hilft', () => {
    expect(conjugate('helfen')['er/sie/es']).toBe('hilft');
  });

  it('changes the stem vowel: du gibst, er gibt (abgeben)', () => {
    expect(conjugate('geben').du).toBe('gibst');
    expect(separableForms('ab', 'geben')['er/sie/es']).toBe('gibt ab');
  });
});

describe('A2.2 verb forms', () => {
  const past = (v: string) => PRONOUNS.map((p) => conjugatePreterite(v)[p]);
  const k2 = (v: string) => PRONOUNS.map((p) => konjunktiv2(v)[p]);

  it('knows lassen and a few more irregular present forms', () => {
    expect(row('lassen')).toEqual(['lasse', 'lässt', 'lässt', 'lassen', 'lasst', 'lassen']);
    expect(conjugate('waschen').du).toBe('wäschst');
    expect(conjugate('brechen')['er/sie/es']).toBe('bricht');
    expect(conjugate('vergessen').du).toBe('vergisst');
    expect(conjugate('empfehlen')['er/sie/es']).toBe('empfiehlt');
  });

  it('inserts the e in -chn- stems and knows gefallen', () => {
    expect(row('zeichnen')).toEqual([
      'zeichne',
      'zeichnest',
      'zeichnet',
      'zeichnen',
      'zeichnet',
      'zeichnen',
    ]);
    expect(conjugatePreterite('zeichnen')['ich']).toBe('zeichnete');
    expect(row('gefallen')).toEqual([
      'gefalle',
      'gefällst',
      'gefällt',
      'gefallen',
      'gefallt',
      'gefallen',
    ]);
  });

  it('knows benehmen and stoßen', () => {
    expect(conjugate('benehmen').du).toBe('benimmst');
    expect(conjugate('stoßen')['er/sie/es']).toBe('stößt');
    expect(conjugate('stoßen').ihr).toBe('stoßt');
  });

  it('forms the simple past of regular verbs', () => {
    expect(past('machen')).toEqual([
      'machte',
      'machtest',
      'machte',
      'machten',
      'machtet',
      'machten',
    ]);
    expect(past('arbeiten')).toEqual([
      'arbeitete',
      'arbeitetest',
      'arbeitete',
      'arbeiteten',
      'arbeitetet',
      'arbeiteten',
    ]);
    expect(conjugatePreterite('öffnen')['ich']).toBe('öffnete');
    expect(conjugatePreterite('wandern')['er/sie/es']).toBe('wanderte');
  });

  it('forms the simple past of strong and mixed verbs', () => {
    expect(past('gehen')).toEqual(['ging', 'gingst', 'ging', 'gingen', 'gingt', 'gingen']);
    expect(past('finden')).toEqual(['fand', 'fandest', 'fand', 'fanden', 'fandet', 'fanden']);
    expect(past('sitzen')).toEqual(['saß', 'saßest', 'saß', 'saßen', 'saßt', 'saßen']);
    expect(past('denken')).toEqual([
      'dachte',
      'dachtest',
      'dachte',
      'dachten',
      'dachtet',
      'dachten',
    ]);
    expect(conjugatePreterite('kommen')['er/sie/es']).toBe('kam');
    expect(conjugatePreterite('bringen')['ich']).toBe('brachte');
  });

  it('forms Konjunktiv II', () => {
    expect(k2('sein')).toEqual(['wäre', 'wärst', 'wäre', 'wären', 'wärt', 'wären']);
    expect(k2('haben')).toEqual(['hätte', 'hättest', 'hätte', 'hätten', 'hättet', 'hätten']);
    expect(k2('werden')[0]).toBe('würde');
    expect(k2('können')[2]).toBe('könnte');
    expect(k2('sollen')[1]).toBe('solltest');
    expect(() => konjunktiv2('gehen')).toThrow();
  });

  it('forms reflexive verbs with a dative pronoun', () => {
    const f = reflexiveDativeForms('waschen');
    expect(f.ich).toBe('wasche mir');
    expect(f.du).toBe('wäschst dir');
    expect(f['er/sie/es']).toBe('wäscht sich');
    expect(f.wir).toBe('waschen uns');
    expect(reflexiveDativeForms('merken').ihr).toBe('merkt euch');
  });

  it('forms the present passive', () => {
    const f = passiveForms('informiert');
    expect(PRONOUNS.map((p) => f[p])).toEqual([
      'werde informiert',
      'wirst informiert',
      'wird informiert',
      'werden informiert',
      'werdet informiert',
      'werden informiert',
    ]);
  });
});
