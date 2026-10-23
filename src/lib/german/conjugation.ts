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
  helfen: {
    ich: 'helfe',
    du: 'hilfst',
    'er/sie/es': 'hilft',
    wir: 'helfen',
    ihr: 'helft',
    'sie/Sie': 'helfen',
  },
  geben: {
    ich: 'gebe',
    du: 'gibst',
    'er/sie/es': 'gibt',
    wir: 'geben',
    ihr: 'gebt',
    'sie/Sie': 'geben',
  },
  laden: {
    ich: 'lade',
    du: 'lädst',
    'er/sie/es': 'lädt',
    wir: 'laden',
    ihr: 'ladet',
    'sie/Sie': 'laden',
  },
  lassen: {
    ich: 'lasse',
    du: 'lässt',
    'er/sie/es': 'lässt',
    wir: 'lassen',
    ihr: 'lasst',
    'sie/Sie': 'lassen',
  },
  waschen: {
    ich: 'wasche',
    du: 'wäschst',
    'er/sie/es': 'wäscht',
    wir: 'waschen',
    ihr: 'wascht',
    'sie/Sie': 'waschen',
  },
  brechen: {
    ich: 'breche',
    du: 'brichst',
    'er/sie/es': 'bricht',
    wir: 'brechen',
    ihr: 'brecht',
    'sie/Sie': 'brechen',
  },
  halten: {
    ich: 'halte',
    du: 'hältst',
    'er/sie/es': 'hält',
    wir: 'halten',
    ihr: 'haltet',
    'sie/Sie': 'halten',
  },
  tragen: {
    ich: 'trage',
    du: 'trägst',
    'er/sie/es': 'trägt',
    wir: 'tragen',
    ihr: 'tragt',
    'sie/Sie': 'tragen',
  },
  vergessen: {
    ich: 'vergesse',
    du: 'vergisst',
    'er/sie/es': 'vergisst',
    wir: 'vergessen',
    ihr: 'vergesst',
    'sie/Sie': 'vergessen',
  },
  empfehlen: {
    ich: 'empfehle',
    du: 'empfiehlst',
    'er/sie/es': 'empfiehlt',
    wir: 'empfehlen',
    ihr: 'empfehlt',
    'sie/Sie': 'empfehlen',
  },
  raten: {
    ich: 'rate',
    du: 'rätst',
    'er/sie/es': 'rät',
    wir: 'raten',
    ihr: 'ratet',
    'sie/Sie': 'raten',
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

export const REFLEXIVE_PRONOUNS: Forms = {
  ich: 'mich',
  du: 'dich',
  'er/sie/es': 'sich',
  wir: 'uns',
  ihr: 'euch',
  'sie/Sie': 'sich',
};

/** Reflexive verbs, accusative: "sich freuen" → "freue mich", "freust dich" … */
export function reflexiveForms(infinitive: string): Forms {
  const forms = conjugate(infinitive);
  return Object.fromEntries(
    PRONOUNS.map((p) => [p, `${forms[p]} ${REFLEXIVE_PRONOUNS[p]}`]),
  ) as Forms;
}

const f = (ich: string, du: string, er: string, wir: string, ihr: string, sie: string): Forms => ({
  ich,
  du,
  'er/sie/es': er,
  wir,
  ihr,
  'sie/Sie': sie,
});

const PRETERITE: Record<string, Forms> = {
  sein: f('war', 'warst', 'war', 'waren', 'wart', 'waren'),
  haben: f('hatte', 'hattest', 'hatte', 'hatten', 'hattet', 'hatten'),
  werden: f('wurde', 'wurdest', 'wurde', 'wurden', 'wurdet', 'wurden'),
  können: f('konnte', 'konntest', 'konnte', 'konnten', 'konntet', 'konnten'),
  müssen: f('musste', 'musstest', 'musste', 'mussten', 'musstet', 'mussten'),
  wollen: f('wollte', 'wolltest', 'wollte', 'wollten', 'wolltet', 'wollten'),
  dürfen: f('durfte', 'durftest', 'durfte', 'durften', 'durftet', 'durften'),
  sollen: f('sollte', 'solltest', 'sollte', 'sollten', 'solltet', 'sollten'),
};

/** Strong verbs: infinitive → ich/er form of the simple past (du +st, wir/sie +en, ihr +t). */
const STRONG_PRETERITE: Record<string, string> = {
  gehen: 'ging',
  kommen: 'kam',
  sehen: 'sah',
  geben: 'gab',
  finden: 'fand',
  fahren: 'fuhr',
  bleiben: 'blieb',
  schreiben: 'schrieb',
  sprechen: 'sprach',
  nehmen: 'nahm',
  trinken: 'trank',
  essen: 'aß',
  lesen: 'las',
  rufen: 'rief',
  laufen: 'lief',
  fallen: 'fiel',
  treffen: 'traf',
  helfen: 'half',
  stehen: 'stand',
  liegen: 'lag',
  sitzen: 'saß',
  beginnen: 'begann',
  ziehen: 'zog',
  verlieren: 'verlor',
  schlafen: 'schlief',
  schwimmen: 'schwamm',
  singen: 'sang',
  bekommen: 'bekam',
  verstehen: 'verstand',
  vergessen: 'vergaß',
};

/** Mixed verbs: infinitive → ich/er form (stem change + -te endings). */
const MIXED_PRETERITE: Record<string, string> = {
  denken: 'dachte',
  bringen: 'brachte',
  wissen: 'wusste',
  kennen: 'kannte',
  nennen: 'nannte',
  rennen: 'rannte',
};

/** Weak ich/er form: stem + -te, with -ete after t/d and consonant + n/m (arbeitete, öffnete). */
function weakPreterite(infinitive: string): string {
  const stem = infinitive.endsWith('en') ? infinitive.slice(0, -2) : infinitive.slice(0, -1);
  const eStem = /(t|d)$/.test(stem) || /[^aeiouäöülrhmn][nm]$/.test(stem);
  return `${stem}${eStem ? 'ete' : 'te'}`;
}

/**
 * Simple past (Präteritum). Covers sein/haben/werden, the modal verbs, a list of common strong and
 * mixed verbs and every other -en/-eln/-ern verb as a regular (weak) verb. Strong verbs that are
 * not in the list would come out wrong, so add them to `STRONG_PRETERITE` before using them.
 */
export function conjugatePreterite(infinitive: string): Forms {
  const known = PRETERITE[infinitive];
  if (known) return known;

  const mixed = MIXED_PRETERITE[infinitive];
  if (mixed) return f(mixed, `${mixed}st`, mixed, `${mixed}n`, `${mixed}t`, `${mixed}n`);

  const strong = STRONG_PRETERITE[infinitive];
  if (strong) {
    const est = /(t|d|s|ß|z|x)$/.test(strong);
    const et = /(t|d)$/.test(strong);
    return f(
      strong,
      `${strong}${est ? 'est' : 'st'}`,
      strong,
      `${strong}en`,
      `${strong}${et ? 'et' : 't'}`,
      `${strong}en`,
    );
  }

  if (!/(en|ln|rn)$/.test(infinitive)) throw new Error(`No preterite for "${infinitive}"`);
  const weak = weakPreterite(infinitive);
  return f(weak, `${weak}st`, weak, `${weak}n`, `${weak}t`, `${weak}n`);
}

const KONJUNKTIV2: Record<string, Forms> = {
  sein: f('wäre', 'wärst', 'wäre', 'wären', 'wärt', 'wären'),
  haben: f('hätte', 'hättest', 'hätte', 'hätten', 'hättet', 'hätten'),
  werden: f('würde', 'würdest', 'würde', 'würden', 'würdet', 'würden'),
  können: f('könnte', 'könntest', 'könnte', 'könnten', 'könntet', 'könnten'),
  müssen: f('müsste', 'müsstest', 'müsste', 'müssten', 'müsstet', 'müssten'),
  dürfen: f('dürfte', 'dürftest', 'dürfte', 'dürften', 'dürftet', 'dürften'),
  sollen: f('sollte', 'solltest', 'sollte', 'sollten', 'solltet', 'sollten'),
  wollen: f('wollte', 'wolltest', 'wollte', 'wollten', 'wolltet', 'wollten'),
};

/** Konjunktiv II of the verbs A2 learners use for wishes, advice and polite requests. */
export function konjunktiv2(infinitive: string): Forms {
  const forms = KONJUNKTIV2[infinitive];
  if (!forms) throw new Error(`No Konjunktiv II for "${infinitive}"`);
  return forms;
}

const DATIVE_REFLEXIVE_PRONOUNS: Forms = {
  ich: 'mir',
  du: 'dir',
  'er/sie/es': 'sich',
  wir: 'uns',
  ihr: 'euch',
  'sie/Sie': 'sich',
};

/** Reflexive verbs with the pronoun in the dative: "sich waschen" → "wasche mir", "wäschst dir" … */
export function reflexiveDativeForms(infinitive: string): Forms {
  const forms = conjugate(infinitive);
  return Object.fromEntries(
    PRONOUNS.map((p) => [p, `${forms[p]} ${DATIVE_REFLEXIVE_PRONOUNS[p]}`]),
  ) as Forms;
}

/** Passive voice, present tense: "informiert" → "werde informiert", "wirst informiert" … */
export function passiveForms(participle: string): Forms {
  const forms = conjugate('werden');
  return Object.fromEntries(PRONOUNS.map((p) => [p, `${forms[p]} ${participle}`])) as Forms;
}
