import { byDe, flashcards, listen, memory, quizDeEn, spell, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  heard,
  meta,
  q,
  say,
  sortItems,
  sw,
  tf,
  typed,
  unitC21,
  withWhy,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'c2-1-medizin';

const care = vocabList(U, 'Medicine & care', [
  ['Vorsorgeuntersuchung', 'preventive check-up', '🩺', 'die', 'Vorsorgeuntersuchungen'],
  ['Wechselwirkung', 'interaction (of drugs)', '⚗️', 'die', 'Wechselwirkungen'],
  ['Pflegekraft', 'care worker, nurse', '🧑‍⚕️', 'die', 'Pflegekräfte'],
  ['Gesundheitswesen', 'healthcare system', '🏥', 'das'],
  ['Facharzt', 'specialist doctor', '👨‍⚕️', 'der', 'Fachärzte'],
  ['Eingriff', 'procedure, operation', '🔪', 'der', 'Eingriffe'],
  ['Wartezeit', 'waiting time', '⏳', 'die', 'Wartezeiten'],
  ['Impfstoff', 'vaccine', '💉', 'der', 'Impfstoffe'],
  ['Erreger', 'pathogen', '🦠', 'der', 'Erreger'],
  ['Diagnose', 'diagnosis', '📋', 'die', 'Diagnosen'],
  ['Therapie', 'therapy', '🧑‍⚕️', 'die', 'Therapien'],
  ['chronisch', 'chronic', '♾️'],
  ['ansteckend', 'contagious', '🤧'],
  ['verträglich', 'well tolerated', '✅'],
  ['verordnen', 'to prescribe', '📝'],
  ['lindern', 'to relieve', '🪶'],
  ['heilen', 'to heal, to cure', '🌿'],
]);

const living = vocabList(U, 'Healthy living', [
  ['Ernährungsweise', 'diet, way of eating', '🥗', 'die', 'Ernährungsweisen'],
  ['Bewegungsmangel', 'lack of exercise', '🛋️', 'der'],
  ['Ausgleich', 'balance, compensation', '⚖️', 'der'],
  ['Belastung', 'strain, burden', '🏋️', 'die', 'Belastungen'],
  ['Ruhephase', 'rest period', '😴', 'die', 'Ruhephasen'],
  ['Lebensstil', 'lifestyle', '🔁', 'der', 'Lebensstile'],
  ['Vorbeugung', 'prevention', '🛡️', 'die'],
  ['sich schonen', 'to take it easy', '🛌'],
  ['sich auskurieren', 'to recover fully', '🌡️'],
  ['regenerieren', 'to regenerate', '🔋'],
  ['stärken', 'to strengthen', '💪'],
  ['meiden', 'to avoid, to shun', '🚫'],
  ['durchhalten', 'to persevere', '🏃'],
]);

const vocab = [...care, ...living];

const whyNominal = {
  n1: {
    Trotz: 'trotz expresses a contrast, but the original clause gives a cause (weil).',
    Durch: 'durch names a means (indem), not a cause (weil).',
    Bei: 'bei replaces a wenn-clause (condition), not weil.',
  },
  n2: {
    Wegen: 'wegen gives a cause, but obwohl expresses a contrast.',
    Durch: 'durch names a means (indem), not a contrast.',
    Nach: 'nach is temporal (nachdem).',
  },
  n3: {
    Bei: 'bei replaces wenn (a condition), not indem (a means).',
    Aus: 'aus names a reason or a material, not a means.',
    Für: 'für names a purpose.',
  },
  n4: {
    Mit: 'mit does not replace a wenn-clause; use bei for a condition.',
    Durch: 'durch names a means (indem), not a condition.',
    Nach: 'nach is temporal (nachdem).',
  },
  n5: {
    Vor: 'vor means before; nachdem means after.',
    Seit: 'seit names a period lasting until now.',
    Bei: 'bei names a condition (wenn).',
  },
  n6: {
    Falls: 'falls is a conjunction (falls + clause), not a noun.',
    Folge: 'die Folge means consequence.',
    Fallen: 'im Falle is singular.',
  },
};

export const medizin: UnitContent = {
  unit: unitC21({
    id: U,
    order: 6,
    title: 'Medizin & Gesundheitswesen',
    subtitle: 'Care, research, prevention and nominal style (aufgrund, trotz, durch, bei)',
    emoji: '⚕️',
    goals: [
      'Discuss the healthcare system, therapies and prevention',
      'Turn clauses into noun phrases for formal reports: weil → aufgrund, obwohl → trotz',
      'Write about causes, means and conditions in a compact, formal style',
    ],
    grammar: [
      'weil → wegen / aufgrund + genitive: Aufgrund der langen Wartezeit …',
      'obwohl → trotz + genitive; indem → durch + accusative',
      'wenn → bei + dative; nachdem → nach + dative; ohne zu → ohne + noun',
      'Verbs become nouns: verzögern → die Verzögerung',
    ],
    vocabFields: ['Medicine & care', 'Healthy living'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-care',
      'flashcards',
      meta(
        'Medicine & care',
        'Diagnose, Wechselwirkung, Pflegekraft – the healthcare vocabulary.',
        ['vocabulary', 'c21-medicine'],
        1,
        6,
      ),
      flashcards(care),
    ),
    activity(
      U,
      'flash-living',
      'flashcards',
      meta(
        'Healthy living',
        'Bewegungsmangel, Ausgleich, regenerieren – prevention and lifestyle.',
        ['vocabulary', 'c21-medicine'],
        1,
        5,
      ),
      flashcards(living),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta('What does it mean?', 'Pick the English meaning.', ['vocabulary', 'c21-medicine'], 2, 5),
      quizDeEn(
        byDe(
          vocab,
          'Wechselwirkung',
          'Gesundheitswesen',
          'Eingriff',
          'Erreger',
          'verträglich',
          'lindern',
          'Bewegungsmangel',
          'Ausgleich',
          'Lebensstil',
          'sich auskurieren',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'memory-care',
      'memory',
      meta(
        'Match the words',
        'German words and their meanings.',
        ['vocabulary', 'c21-medicine'],
        2,
        4,
      ),
      memory(
        byDe(
          vocab,
          'Facharzt',
          'Impfstoff',
          'Wartezeit',
          'Therapie',
          'chronisch',
          'ansteckend',
          'Belastung',
          'Vorbeugung',
        ),
      ),
    ),
    activity(
      U,
      'listen-words',
      'listen',
      meta(
        'Hear the medical words',
        'Listen and pick the meaning.',
        ['listening', 'c21-medicine'],
        2,
        4,
      ),
      listen(
        byDe(
          vocab,
          'Diagnose',
          'Vorsorgeuntersuchung',
          'verordnen',
          'heilen',
          'Ruhephase',
          'regenerieren',
          'meiden',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'spell-medicine',
      'spell',
      meta(
        'Spell the clinic',
        'Unscramble, type and write what you hear.',
        ['spelling', 'c21-medicine'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(vocab, 'Erreger', 'Therapie'), 'unscramble').items,
          ...spell(byDe(vocab, 'Impfstoff', 'Facharzt'), 'unscramble').items,
          ...spell(byDe(vocab, 'Wechselwirkung', 'Ernährungsweise'), 'type').items,
          ...spell(byDe(vocab, 'Gesundheitswesen'), 'type').items,
          dictation(
            'd1',
            'Durch regelmäßige Bewegung beugt man Krankheiten vor.',
            'Regular exercise prevents illness.',
          ),
          dictation(
            'd2',
            'Aufgrund der langen Wartezeit sind viele Patienten unzufrieden.',
            'Because of the long waiting time many patients are dissatisfied.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-nominal',
      'gapfill',
      meta(
        'Aufgrund, trotz, durch, bei',
        'Turn the clause into a noun phrase.',
        ['grammar', 'c21-nominal-style'],
        3,
        6,
      ),
      {
        items: withWhy(
          [
            gap(
              'n1',
              '„Weil die Wartezeit lang ist, sind viele Patienten unzufrieden.“ = ___ der langen Wartezeit sind viele Patienten unzufrieden.',
              'Aufgrund',
              ['Aufgrund', 'Trotz', 'Durch', 'Bei'],
              'Because of the long waiting time many patients are dissatisfied.',
              'weil → aufgrund / wegen + genitive.',
            ),
            gap(
              'n2',
              '„Obwohl die Therapie lange dauerte, gab er nicht auf.“ = ___ der langen Therapie gab er nicht auf.',
              'Trotz',
              ['Trotz', 'Wegen', 'Durch', 'Nach'],
              'Despite the long therapy he did not give up.',
              'obwohl → trotz + genitive.',
            ),
            gap(
              'n3',
              '„Indem man regelmäßig trainiert, beugt man vor.“ = ___ regelmäßiges Training beugt man vor.',
              'Durch',
              ['Durch', 'Bei', 'Aus', 'Für'],
              'Regular training is a form of prevention.',
              'indem → durch + accusative (the verb becomes a noun).',
            ),
            gap(
              'n4',
              '„Wenn man Fieber hat, soll man zu Hause bleiben.“ = ___ Fieber soll man zu Hause bleiben.',
              'Bei',
              ['Bei', 'Mit', 'Durch', 'Nach'],
              'If you have a fever, you should stay at home.',
              'wenn → bei + dative.',
            ),
            gap(
              'n5',
              '„Nachdem der Patient entlassen worden war, begann die Reha.“ = ___ der Entlassung des Patienten begann die Reha.',
              'Nach',
              ['Nach', 'Vor', 'Seit', 'Bei'],
              'After the patient’s discharge the rehab began.',
              'nachdem → nach + dative.',
            ),
            gap(
              'n6',
              '„Wenn Wechselwirkungen auftreten, muss man den Arzt informieren.“ = Im ___ von Wechselwirkungen muss man den Arzt informieren.',
              'Falle',
              ['Falle', 'Fallen', 'Falls', 'Folge'],
              'In case of interactions you must inform the doctor.',
              'im Falle + genitive replaces a wenn-clause in formal texts.',
            ),
            typed(
              'n7',
              '„Er verließ die Praxis, ohne zu zögern.“ = Er verließ die Praxis ohne ___.',
              'Zögern',
              'He left the practice without hesitation.',
              'ohne … zu + verb → ohne + noun (the infinitive used as a noun).',
              ['Zögerung'],
            ),
          ],
          whyNominal,
        ),
      },
    ),
    activity(
      U,
      'sort-nominal',
      'sortit',
      meta(
        'Cause, concession or means?',
        'Sort the noun phrases by what they express.',
        ['grammar', 'c21-nominal-style'],
        3,
        5,
      ),
      {
        instruction: 'Which clause would you turn the phrase back into?',
        buckets: [
          { id: 'cause', label: 'Cause (weil)', emoji: '➡️' },
          { id: 'concession', label: 'Concession (obwohl)', emoji: '🤷' },
          { id: 'means', label: 'Means or condition (indem, wenn)', emoji: '🛠️' },
        ],
        items: sortItems('c', [
          ['aufgrund der Verspätung', 'cause'],
          ['wegen der hohen Kosten', 'cause'],
          ['infolge des Streiks', 'cause'],
          ['trotz der Warnung', 'concession'],
          ['ungeachtet der Risiken', 'concession'],
          ['trotz hoher Kosten', 'concession'],
          ['durch regelmäßiges Training', 'means'],
          ['mittels einer Operation', 'means'],
          ['bei Fieber', 'means'],
        ]),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Formal reports',
        'Build sentences in nominal style.',
        ['grammar', 'word-order', 'c21-nominal-style'],
        3,
        7,
      ),
      {
        items: [
          sw(
            's1',
            'Because of the long waiting time many patients are dissatisfied.',
            'Aufgrund der langen Wartezeit sind viele Patienten unzufrieden.',
          ),
          sw(
            's2',
            'Despite the risks she opted for the operation.',
            'Trotz der Risiken entschied sie sich für den Eingriff.',
          ),
          sw(
            's3',
            'Regular training prevents illness.',
            'Durch regelmäßiges Training beugt man Krankheiten vor.',
          ),
          sw(
            's4',
            'You should stay at home if you have a fever.',
            'Bei Fieber sollte man zu Hause bleiben.',
          ),
          sw(
            's5',
            'After the patient’s discharge the rehab began.',
            'Nach der Entlassung des Patienten begann die Reha.',
          ),
          sw(
            's6',
            'He left the practice without hesitation.',
            'Er verließ die Praxis ohne Zögern.',
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-health',
      'listen',
      meta(
        'Health reports',
        'Understand formal health reports.',
        ['listening', 'c21-medicine', 'c21-nominal-style'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Aufgrund der Wechselwirkungen darf das Mittel nicht kombiniert werden.',
            'Because of the interactions the drug must not be combined.',
            [
              'The drug may be combined without restriction.',
              'The interactions were not tested.',
              'The drug has been withdrawn.',
            ],
          ),
          heard(
            'l2',
            'Trotz intensiver Behandlung verschlechterte sich sein Zustand.',
            'Despite intensive treatment his condition worsened.',
            [
              'Thanks to intensive treatment his condition improved.',
              'He refused any treatment.',
              'His condition did not change.',
            ],
          ),
          heard(
            'l3',
            'Durch frühzeitige Vorsorge lassen sich viele Krankheiten verhindern.',
            'Early prevention can stop many illnesses.',
            [
              'Prevention is useless against illness.',
              'Many illnesses can only be treated late.',
              'Early prevention is too expensive.',
            ],
          ),
          heard(
            'l4',
            'Bei chronischen Beschwerden sollte ein Facharzt aufgesucht werden.',
            'In case of chronic complaints a specialist should be seen.',
            [
              'Chronic complaints need no doctor.',
              'A specialist should be avoided.',
              'Chronic complaints heal by themselves.',
            ],
          ),
          heard(
            'l5',
            'Nach dem Eingriff muss sich die Patientin zwei Wochen schonen.',
            'After the operation the patient must take it easy for two weeks.',
            [
              'Before the operation the patient must rest for two weeks.',
              'The patient may work straight after the operation.',
              'The operation lasts two weeks.',
            ],
          ),
        ],
      },
    ),
    activity(
      U,
      'dialogues',
      'dialogue',
      meta(
        'Making it more formal',
        'Reformulate clauses into noun phrases for a formal letter.',
        ['communication', 'c21-medicine', 'c21-nominal-style'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'letter',
            title: 'Der Beschwerdebrief',
            emoji: '✉️',
            setting: 'A colleague drafts a formal complaint to a clinic and asks for help.',
            turns: [
              say(
                'Kai',
                'Ich schreibe: „Weil die Wartezeit so lang war, bin ich unzufrieden.“ Geht das formeller?',
                'I am writing: “Because the waiting time was so long, I am dissatisfied.” Can that be more formal?',
              ),
              you(
                'Aufgrund der langen Wartezeit bin ich unzufrieden.',
                [
                  'Aufgrund die lange Wartezeit bin ich unzufrieden.',
                  'aufgrund takes the genitive: der langen Wartezeit.',
                ],
                [
                  'Weil der langen Wartezeit bin ich unzufrieden.',
                  'weil is a conjunction – it cannot take a noun in the genitive.',
                ],
              ),
              say(
                'Kai',
                'Und: „Obwohl ich mich beschwert habe, hat sich nichts geändert.“',
                'And: “Although I complained, nothing has changed.”',
              ),
              you(
                'Trotz meiner Beschwerde hat sich nichts geändert.',
                [
                  'Trotz ich mich beschwert habe, hat sich nichts geändert.',
                  'trotz is a preposition: it needs a noun (meiner Beschwerde), not a clause.',
                ],
                [
                  'Obwohl meiner Beschwerde hat sich nichts geändert.',
                  'obwohl introduces a clause with a verb at the end.',
                ],
              ),
            ],
          },
          {
            id: 'wait',
            title: 'Die lange Wartezeit',
            emoji: '⏳',
            setting: 'You complain about waiting times, politely but clearly.',
            turns: [
              say(
                'Empfang',
                'Der Facharzt hat erst in drei Monaten einen Termin frei.',
                'The specialist has no appointment for three months.',
              ),
              you(
                'Das ist sehr lang, zumal meine Beschwerden zunehmen.',
                [
                  'Das ist sehr lang, zumal nehmen meine Beschwerden zu.',
                  'zumal sends the verb to the end: zunehmen.',
                ],
                ['Dann gehe ich nie wieder zu Ihnen.', 'Too aggressive for a simple request.'],
              ),
              say(
                'Empfang',
                'Ich kann Sie auf die Warteliste setzen.',
                'I can put you on the waiting list.',
              ),
              you(
                'Gern. Können Sie mich anrufen, sobald etwas frei wird?',
                [
                  'Gern. Können Sie mich anrufen, sobald etwas wird frei?',
                  'sobald-clauses end with the verb.',
                ],
                ['Gern. Ich rufe nie zurück.', 'This makes no sense as a reply.'],
              ),
            ],
          },
        ],
      },
    ),
    activity(
      U,
      'blitz',
      'blitz',
      meta(
        'Nominal style blitz',
        'Clauses and noun phrases – true or false?',
        ['grammar', 'c21-nominal-style'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Aufgrund des Wetters fiel das Fest aus.', true),
          tf('b2', 'Aufgrund dem Wetter fiel das Fest aus.', false, 'aufgrund takes the genitive.'),
          tf('b3', 'Trotz des Regens gingen wir spazieren.', true),
          tf(
            'b4',
            'Trotz es regnete, gingen wir spazieren.',
            false,
            'trotz needs a noun, not a clause.',
          ),
          tf('b5', 'Aus „weil er krank war“ wird „wegen seiner Krankheit“.', true),
          tf('b6', 'Aus „indem man spart“ wird „durch Sparen“.', true),
          tf('b7', 'Aus „wenn man Fieber hat“ wird „bei Fieber“.', true),
          tf('b8', 'Das Nomen zu „verzögern“ heißt „die Verzögerung“.', true),
          tf('b9', 'Eine Wechselwirkung kann man essen.', false, 'It is an interaction of drugs.'),
          tf('b10', 'Wer chronisch krank ist, hat nur kurz Beschwerden.', false),
          tf('b11', 'Ein Erreger kann eine Krankheit auslösen.', true),
          tf('b12', 'Ein Facharzt ist auf ein Gebiet spezialisiert.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Medical words and nominal style in one round.',
        ['vocabulary', 'grammar', 'c21-medicine'],
        3,
        6,
      ),
      {
        questions: [
          q('c1', '___ der Hitze wurde das Fest abgesagt.', 'Wegen', ['Trotz', 'Durch', 'Nach']),
          q('c2', '___ des Verbots rauchte er weiter.', 'Trotz', ['Wegen', 'Aufgrund', 'Infolge']),
          q('c3', '___ Regen bleiben wir zu Hause.', 'Bei', ['Wegen des', 'Trotz', 'Während']),
          q('c4', 'Er löste das Problem ___ Nachdenken.', 'durch', ['trotz', 'wegen', 'ohne zu']),
          q('c5', 'Sie sprach ohne ___.', 'Zögern', ['zögern zu', 'zögerte', 'gezögert']),
          q('c6', 'der Impfstoff', 'vaccine', ['pathogen', 'diagnosis', 'procedure']),
          q('c7', 'lindern', 'to relieve', ['to heal', 'to prescribe', 'to avoid']),
          q('c8', 'verträglich', 'well tolerated', ['chronic', 'contagious', 'harmful']),
          q('c9', 'die Pflegekraft', 'care worker', ['specialist', 'patient', 'pharmacist']),
          q('c10', 'die Vorbeugung', 'prevention', ['treatment', 'diagnosis', 'relief']),
        ],
      },
    ),
  ],
};
