import { PRONOUNS } from './conjugation';
import { konjunktiv1, konjunktiv1Perfect } from './konjunktiv1';

const row = (f: Record<(typeof PRONOUNS)[number], string>) => PRONOUNS.map((p) => f[p]);

describe('konjunktiv1', () => {
  it('forms regular verbs from the infinitive stem', () => {
    expect(row(konjunktiv1('machen'))).toEqual([
      'mache',
      'machest',
      'mache',
      'machen',
      'machet',
      'machen',
    ]);
    expect(row(konjunktiv1('arbeiten'))).toEqual([
      'arbeite',
      'arbeitest',
      'arbeite',
      'arbeiten',
      'arbeitet',
      'arbeiten',
    ]);
  });

  it('keeps the infinitive stem of strong verbs and modal verbs', () => {
    expect(konjunktiv1('fahren')['er/sie/es']).toBe('fahre');
    expect(konjunktiv1('geben')['er/sie/es']).toBe('gebe');
    expect(konjunktiv1('müssen')['er/sie/es']).toBe('müsse');
    expect(konjunktiv1('haben')['er/sie/es']).toBe('habe');
    expect(konjunktiv1('werden')['er/sie/es']).toBe('werde');
  });

  it('knows that sein is irregular', () => {
    expect(row(konjunktiv1('sein'))).toEqual(['sei', 'seiest', 'sei', 'seien', 'seiet', 'seien']);
  });

  it('forms the Konjunktiv I of the Perfekt with the auxiliary', () => {
    expect(konjunktiv1Perfect('gesagt', 'haben')['er/sie/es']).toBe('habe gesagt');
    expect(konjunktiv1Perfect('gegangen', 'sein')['wir']).toBe('seien gegangen');
  });
});
