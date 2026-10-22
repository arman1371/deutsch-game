export const PRONOUNS = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'] as const;
export type Pronoun = (typeof PRONOUNS)[number];
export type Forms = Record<Pronoun, string>;

const IRREGULAR: Record<string, Forms> = {
  sein: { ich: 'bin', du: 'bist', 'er/sie/es': 'ist', wir: 'sind', ihr: 'seid', 'sie/Sie': 'sind' },
  haben: {
    ich: 'habe',
    du: 'hast',
    'er/sie/es': 'hat',
    wir: 'haben',
    ihr: 'habt',
    'sie/Sie': 'haben',
  },
  sprechen: {
    ich: 'spreche',
    du: 'sprichst',
    'er/sie/es': 'spricht',
    wir: 'sprechen',
    ihr: 'sprecht',
    'sie/Sie': 'sprechen',
  },
  essen: {
    ich: 'esse',
    du: 'isst',
    'er/sie/es': 'isst',
    wir: 'essen',
    ihr: 'esst',
    'sie/Sie': 'essen',
  },
  lesen: {
    ich: 'lese',
    du: 'liest',
    'er/sie/es': 'liest',
    wir: 'lesen',
    ihr: 'lest',
    'sie/Sie': 'lesen',
  },
  sehen: {
    ich: 'sehe',
    du: 'siehst',
    'er/sie/es': 'sieht',
    wir: 'sehen',
    ihr: 'seht',
    'sie/Sie': 'sehen',
  },
  fahren: {
    ich: 'fahre',
    du: 'fährst',
    'er/sie/es': 'fährt',
    wir: 'fahren',
    ihr: 'fahrt',
    'sie/Sie': 'fahren',
  },
  schlafen: {
    ich: 'schlafe',
    du: 'schläfst',
    'er/sie/es': 'schläft',
    wir: 'schlafen',
    ihr: 'schlaft',
    'sie/Sie': 'schlafen',
  },
  nehmen: {
    ich: 'nehme',
    du: 'nimmst',
    'er/sie/es': 'nimmt',
    wir: 'nehmen',
    ihr: 'nehmt',
    'sie/Sie': 'nehmen',
  },
  treffen: {
    ich: 'treffe',
    du: 'triffst',
    'er/sie/es': 'trifft',
    wir: 'treffen',
    ihr: 'trefft',
    'sie/Sie': 'treffen',
  },
  // modal verbs
  können: {
    ich: 'kann',
    du: 'kannst',
    'er/sie/es': 'kann',
    wir: 'können',
    ihr: 'könnt',
    'sie/Sie': 'können',
  },
  wollen: {
    ich: 'will',
    du: 'willst',
    'er/sie/es': 'will',
    wir: 'wollen',
    ihr: 'wollt',
    'sie/Sie': 'wollen',
  },
  müssen: {
    ich: 'muss',
    du: 'musst',
    'er/sie/es': 'muss',
    wir: 'müssen',
    ihr: 'müsst',
    'sie/Sie': 'müssen',
  },
  dürfen: {
    ich: 'darf',
    du: 'darfst',
    'er/sie/es': 'darf',
    wir: 'dürfen',
    ihr: 'dürft',
    'sie/Sie': 'dürfen',
  },
  sollen: {
    ich: 'soll',
    du: 'sollst',
    'er/sie/es': 'soll',
    wir: 'sollen',
    ihr: 'sollt',
    'sie/Sie': 'sollen',
  },
  mögen: {
    ich: 'mag',
    du: 'magst',
    'er/sie/es': 'mag',
    wir: 'mögen',
    ihr: 'mögt',
    'sie/Sie': 'mögen',
  },
  wissen: {
    ich: 'weiß',
    du: 'weißt',
    'er/sie/es': 'weiß',
    wir: 'wissen',
    ihr: 'wisst',
    'sie/Sie': 'wissen',
  },
  werden: {
    ich: 'werde',
    du: 'wirst',
    'er/sie/es': 'wird',
    wir: 'werden',
    ihr: 'werdet',
    'sie/Sie': 'werden',
  },
  möchten: {
    ich: 'möchte',
    du: 'möchtest',
    'er/sie/es': 'möchte',
    wir: 'möchten',
    ihr: 'möchtet',
    'sie/Sie': 'möchten',
  },
};

/** Present tense. Regular verbs follow the stem + ending rule, incl. -t/-d and -s/-ß/-z stems. */
export function conjugate(infinitive: string): Forms {
  const known = IRREGULAR[infinitive];
  if (known) return known;
  if (!infinitive.endsWith('en') && !infinitive.endsWith('ln') && !infinitive.endsWith('rn')) {
    throw new Error(`Cannot conjugate "${infinitive}"`);
  }
  const stem = infinitive.endsWith('en') ? infinitive.slice(0, -2) : infinitive.slice(0, -1);
  const eStem = /(t|d)$/.test(stem) || /[^aeiouäöülrhmn][nm]$/.test(stem);
  const sStem = /(s|ß|z|x)$/.test(stem);
  const du = sStem ? `${stem}t` : `${stem}${eStem ? 'est' : 'st'}`;
  const er = `${stem}${eStem ? 'et' : 't'}`;
  const ihr = er;
  return {
    ich: `${stem}e`,
    du,
    'er/sie/es': er,
    wir: infinitive,
    ihr,
    'sie/Sie': infinitive,
  };
}

/** Separable verbs: "aufstehen" with prefix "auf" → main clause "Ich stehe um 7 Uhr auf". */
export function separableForms(prefix: string, base: string): Forms {
  const forms = conjugate(base);
  return Object.fromEntries(PRONOUNS.map((p) => [p, `${forms[p]} ${prefix}`])) as Forms;
}
