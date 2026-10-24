import { describeLevelContent } from '@/test/contentSuite';
import { label } from '../builders';
import a11 from '../a1-1';
import a12 from '../a1-2';
import a21 from '../a2-1';
import a22 from '../a2-2';
import b11 from '../b1-1';
import b12 from '../b1-2';
import b21 from '../b2-1';
import b22 from '../b2-2';
import content from './index';

describeLevelContent('C1.1', content, 'c1-1');

/**
 * Words that C1.1 deliberately revisits in a new function (e.g. a verb that now takes a preposition).
 * Everything else must be new vocabulary – C1.1 never re-teaches a word card from an earlier level.
 */
const REVIEW_WORDS = new Set<string>([]);

/**
 * Everyday C1 themes (body language, media, studying, consumption, society …) were already opened by B2.1 and B2.2, which
 * were researched in parallel. These word cards appear in both levels; C1.1 uses them in its own grammar focus (e.g. nominal
 * style, Konjunktiv I). Any further overlap with B2.1 / B2.2 fails the test below.
 */
const B2_OVERLAP = new Set<string>([
  'abhilfe',
  'abhängigkeit',
  'abschalten',
  'abschlussarbeit',
  'algorithmus',
  'altersarmut',
  'anliegen',
  'arbeitsverdichtung',
  'aufschieben',
  'ausdauer',
  'ausgleich',
  'auslandssemester',
  'auslastung',
  'auswerten',
  'auszeit',
  'beanstanden',
  'beanstandung',
  'belegen',
  'bemängeln',
  'berichterstattung',
  'berufung',
  'betonung',
  'burnout',
  'bürgerbegehren',
  'chancengleichheit',
  'delegieren',
  'durchhalten',
  'durchhaltevermögen',
  'ehrgeiz',
  'eignungstest',
  'einsamkeit',
  'einwegprodukt',
  'entschädigung',
  'entsorgen',
  'erkenntnis',
  'existenzgründung',
  'fachkräftemangel',
  'falschmeldung',
  'filterblase',
  'fremdenverkehr',
  'gastgewerbe',
  'genügsam',
  'gestik',
  'glaubwürdigkeit',
  'gleitzeit',
  'haftung',
  'handelsabkommen',
  'hochsaison',
  'hypothese',
  'hörsaal',
  'immatrikulation',
  'inflation',
  'investieren',
  'kommilitone',
  'kulanz',
  'körpersprache',
  'leistungsdruck',
  'massentourismus',
  'mimik',
  'minimalismus',
  'missstand',
  'mundart',
  'müllvermeidung',
  'nachweisen',
  'nebensaison',
  'neuanfang',
  'nicken',
  'prüfungsordnung',
  'quereinsteiger',
  'reichweite',
  'reiseveranstalter',
  'reizüberflutung',
  'rückschlag',
  'schlagfertig',
  'sprachbarriere',
  'stellungnahme',
  'stipendium',
  'stornierung',
  'studienberatung',
  'studiengang',
  'taktvoll',
  'tauschbörse',
  'teilhabe',
  'tonfall',
  'umgangssprache',
  'umsatteln',
  'umsatz',
  'umweg',
  'ungleichheit',
  'verbreiten',
  'verzicht',
  'vielfalt',
  'vorlesung',
  'weichenstellung',
  'werdegang',
  'wertschätzung',
  'widerlegen',
  'wohlstand',
  'zivilcourage',
  'zusammenhalt',
  'überfluss',
  'übernachtung',
]);

/** Compare words by their bare lemma, so "der Tipp" and "Tipp" count as the same word. */
const key = (v: Parameters<typeof label>[0]) =>
  label(v)
    .replace(/^((der|die|das) )+/i, '')
    .toLowerCase();

describe('C1.1 vocabulary integrity', () => {
  it('does not repeat vocabulary from A1.1 to B1.2', () => {
    const earlier = new Set(
      [...a11.vocab, ...a12.vocab, ...a21.vocab, ...a22.vocab, ...b11.vocab, ...b12.vocab].map(key),
    );
    const repeated = content.vocab.map(key).filter((k) => earlier.has(k) && !REVIEW_WORDS.has(k));
    expect(repeated).toEqual([]);
  });

  it('only overlaps with B2.1 and B2.2 where listed', () => {
    const b2 = new Set([...b21.vocab, ...b22.vocab].map(key));
    const unlisted = content.vocab.map(key).filter((k) => b2.has(k) && !B2_OVERLAP.has(k));
    expect(unlisted).toEqual([]);
  });

  it('does not teach a word twice inside C1.1', () => {
    const all = content.vocab.map(key);
    const dup = all.filter((k, i) => all.indexOf(k) !== i && !REVIEW_WORDS.has(k));
    expect(dup).toEqual([]);
  });
});
