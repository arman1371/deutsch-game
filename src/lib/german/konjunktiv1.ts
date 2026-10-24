import { PRONOUNS, type Forms } from './conjugation';

const SEIN: Forms = {
  ich: 'sei',
  du: 'seiest',
  'er/sie/es': 'sei',
  wir: 'seien',
  ihr: 'seiet',
  'sie/Sie': 'seien',
};

/**
 * Konjunktiv I (reported speech): infinitive stem + -e, -est, -e, -en, -et, -en. Only sein is
 * irregular. Strong verbs keep the infinitive stem (er fahre, not er fährt), which is why the
 * er/sie/es form is the one that is clearly different from the indicative.
 */
export function konjunktiv1(infinitive: string): Forms {
  if (infinitive === 'sein') return SEIN;
  if (!infinitive.endsWith('en')) throw new Error(`Cannot form Konjunktiv I of "${infinitive}"`);
  const stem = infinitive.slice(0, -2);
  return {
    ich: `${stem}e`,
    du: `${stem}est`,
    'er/sie/es': `${stem}e`,
    wir: infinitive,
    ihr: `${stem}et`,
    'sie/Sie': infinitive,
  };
}

/** Konjunktiv I of the Perfekt: "gesagt", haben → habe gesagt, habest gesagt … */
export function konjunktiv1Perfect(participle: string, aux: 'haben' | 'sein'): Forms {
  const forms = konjunktiv1(aux);
  return Object.fromEntries(PRONOUNS.map((p) => [p, `${forms[p]} ${participle}`])) as Forms;
}
