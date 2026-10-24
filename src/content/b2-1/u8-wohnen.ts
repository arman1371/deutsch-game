import { byDe, flashcards, listen, quizEmoji, spell, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  heard,
  hint,
  meta,
  q,
  say,
  sent,
  sortItems,
  tf,
  typed,
  unitB21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b2-1-wohnen';

const market = vocabList(U, 'Housing market and ways of living', [
  ['Genossenschaft', 'housing cooperative', '🏘️', 'die', 'Genossenschaften'],
  ['Mehrgenerationenhaus', 'multi-generation house', '👨‍👩‍👧‍👦', 'das', 'Mehrgenerationenhäuser'],
  ['Kaltmiete', 'base rent', '💶', 'die'],
  ['Mietspiegel', 'rent index', '📊', 'der'],
  ['Eigenbedarf', 'landlord’s own use', '🔑', 'der'],
  ['Mieterhöhung', 'rent increase', '📈', 'die', 'Mieterhöhungen'],
  ['Wohnungsnot', 'housing shortage', '🆘', 'die'],
  ['Sanierung', 'renovation', '🏗️', 'die', 'Sanierungen'],
  ['Eigentumswohnung', 'owner-occupied flat', '🏠', 'die', 'Eigentumswohnungen'],
  ['Wohnungsbaugesellschaft', 'housing association', '🏢', 'die', 'Wohnungsbaugesellschaften'],
  ['Untermieter', 'subtenant', '🧑‍🤝‍🧑', 'der', 'Untermieter'],
  ['Gemeinschaftsraum', 'common room', '🛋️', 'der', 'Gemeinschaftsräume'],
  ['Staffelmiete', 'graduated rent', '📅', 'die'],
]);

const defects = vocabList(U, 'Defects and complaints', [
  ['Mängelanzeige', 'notice of defects', '📄', 'die', 'Mängelanzeigen'],
  ['Schimmel', 'mould', '🦠', 'der'],
  ['Feuchtigkeit', 'dampness', '💧', 'die'],
  ['Heizungsausfall', 'heating failure', '🥶', 'der', 'Heizungsausfälle'],
  ['Lärmbelästigung', 'noise nuisance', '🔊', 'die'],
  ['Mietminderung', 'rent reduction', '📉', 'die', 'Mietminderungen'],
  ['Missstand', 'grievance, deficiency', '⚠️', 'der', 'Missstände'],
  ['Abhilfe', 'remedy, relief', '🩹', 'die'],
  ['beheben', 'to fix, remedy', '🔧'],
  ['beanstanden', 'to complain about', '🧾'],
  ['instand setzen', 'to repair, restore', '🛠️'],
  ['untervermieten', 'to sublet', '🔁'],
]);

const rules = vocabList(U, 'Conditions and rules', [
  [
    'Wer eine Wohnung sucht, braucht viel Geduld.',
    'Whoever looks for a flat needs a lot of patience.',
    '🔎',
  ],
  [
    'Wem die Miete zu hoch ist, der sucht eine Genossenschaft.',
    'Whoever finds the rent too high looks for a cooperative.',
    '💶',
  ],
  [
    'Falls der Mangel nicht behoben wird, darf ich die Miete mindern.',
    'If the defect is not fixed, I may reduce the rent.',
    '📉',
  ],
  [
    'Sofern der Vermieter zustimmt, darf ich untervermieten.',
    'Provided the landlord agrees, I may sublet.',
    '✍️',
  ],
  ['Hätte ich mehr Platz, würde ich umziehen.', 'If I had more space I would move.', '📦'],
  [
    'Bei Lärm informieren Sie bitte die Hausverwaltung.',
    'In case of noise, please inform the property management.',
    '☎️',
  ],
  [
    'Zahlen Sie pünktlich. Andernfalls müssen Sie eine Gebühr zahlen.',
    'Pay on time. Otherwise you must pay a fee.',
    '⏰',
  ],
]);

const vocab = [...market, ...defects, ...rules];

export const wohnen: UnitContent = {
  unit: unitB21({
    id: U,
    order: 8,
    title: 'Wohnen heute',
    subtitle: 'The housing market, new ways of living and complaints – and conditions',
    emoji: '🏢',
    goals: [
      'Talk about the housing market and different ways of living',
      'Write a notice of defects and complain to a landlord',
      'Express general statements and conditions in formal German',
    ],
    grammar: [
      'wer / wen / wem clauses: Wer eine Wohnung sucht, braucht Geduld. Wem die Miete zu hoch ist, der …',
      'Conditions: falls, sofern, clauses without wenn (Hätte ich …), andernfalls, bei + dative.',
    ],
    vocabFields: [
      'Housing market and ways of living',
      'Defects and complaints',
      'Conditions and rules',
    ],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-market',
      'flashcards',
      meta(
        'Housing market and ways of living',
        'Genossenschaft, Mietspiegel, Wohnungsnot – the market and new ideas.',
        ['vocabulary', 'housing-market'],
        1,
        5,
      ),
      flashcards(market),
    ),
    activity(
      U,
      'flash-defects',
      'flashcards',
      meta(
        'Defects and complaints',
        'Schimmel, Mängelanzeige, Mietminderung – when something is wrong.',
        ['vocabulary', 'housing-market'],
        1,
        5,
      ),
      flashcards(defects),
    ),
    activity(
      U,
      'flash-rules',
      'flashcards',
      meta(
        'Conditions and rules',
        'Sentences with wer, falls, sofern and andernfalls.',
        ['vocabulary', 'communication', 'housing-market'],
        1,
        4,
      ),
      flashcards(rules),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Flat and defects', 'Name what you see.', ['vocabulary', 'housing-market'], 1, 4),
      quizEmoji(
        byDe(
          [...market, ...defects],
          'Mehrgenerationenhaus',
          'Mieterhöhung',
          'Sanierung',
          'Gemeinschaftsraum',
          'Schimmel',
          'Feuchtigkeit',
          'Heizungsausfall',
          'Mängelanzeige',
        ),
      ),
    ),
    activity(
      U,
      'listen-rules',
      'listen',
      meta('Hear the rules', 'Listen and pick the meaning.', ['listening', 'housing-market'], 2, 4),
      listen(rules),
    ),
    activity(
      U,
      'memory-explain',
      'memory',
      meta(
        'Say it differently',
        'Match each word with its explanation in German.',
        ['vocabulary', 'housing-market'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'die Genossenschaft', b: 'Wohnungen gehören allen Mitgliedern' },
          { id: 'm2', a: 'der Eigenbedarf', b: 'Der Vermieter will selbst einziehen.' },
          { id: 'm3', a: 'der Untermieter', b: 'wohnt zur Miete beim Hauptmieter' },
          { id: 'm4', a: 'die Mietminderung', b: 'weniger Miete wegen eines Mangels' },
          { id: 'm5', a: 'beheben', b: 'einen Fehler reparieren' },
          { id: 'm6', a: 'die Wohnungsnot', b: 'zu wenige bezahlbare Wohnungen' },
        ],
      },
    ),
    activity(
      U,
      'spell-market',
      'spell',
      meta(
        'Spell the new words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'housing-market'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(market, 'Kaltmiete', 'Eigenbedarf', 'Untermieter'), 'unscramble').items,
          ...spell(byDe(defects, 'Schimmel', 'Mietminderung', 'Lärmbelästigung'), 'type').items,
          dictation(
            'd1',
            'Sofern der Vermieter zustimmt, darf ich untervermieten.',
            'provided the landlord agrees, I may sublet',
          ),
          dictation(
            'd2',
            'Wem die Miete zu hoch ist, der sucht eine Genossenschaft.',
            'whoever finds the rent too high looks for a cooperative',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-conditions',
      'sortit',
      meta(
        'Real or unreal?',
        'Is the condition possible, or contrary to fact?',
        ['grammar', 'conditional-b2'],
        2,
        4,
      ),
      {
        instruction: 'Is the condition real (indicative) or unreal (Konjunktiv II)?',
        buckets: [
          { id: 'real', label: 'real (möglich)', emoji: '✅' },
          { id: 'unreal', label: 'irreal (Konjunktiv II)', emoji: '💭' },
        ],
        items: sortItems('c', [
          ['Falls der Mangel bleibt, mindere ich die Miete.', 'real'],
          ['Sofern der Vermieter zustimmt, ziehe ich ein.', 'real'],
          ['Bei Lärm informieren Sie die Verwaltung.', 'real'],
          ['Hätte ich mehr Geld, würde ich kaufen.', 'unreal'],
          ['Wäre die Miete niedriger, bliebe ich.', 'unreal'],
          ['Wenn ich mehr Platz hätte, würde ich umziehen.', 'unreal'],
          ['Wenn es regnet, bleiben wir zu Hause.', 'real'],
          ['Wenn ich Millionär wäre, kaufte ich ein Schloss.', 'unreal'],
        ]),
      },
    ),
    activity(
      U,
      'gap-wer',
      'gapfill',
      meta(
        'Whoever …',
        'Choose wer, wen, wem – and the word that continues the sentence.',
        ['grammar', 'relative-wer'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'w1',
              '___ eine Wohnung sucht, braucht viel Geduld.',
              'Wer',
              ['Wer', 'Wen', 'Wem', 'Was'],
              'Whoever looks for a flat needs a lot of patience.',
              'Nominative: the person who looks (sucht).',
            ),
            {
              Wen: 'wen is the accusative; here the person is the subject of sucht.',
              Wem: 'wem is the dative; suchen does not take a dative.',
              Was: 'was refers to things, not to people.',
            },
          ),
          hint(
            gap(
              'w2',
              '___ die Miete zu hoch ist, der sucht eine Genossenschaft.',
              'Wem',
              ['Wem', 'Wer', 'Wen', 'Was'],
              'Whoever finds the rent too high looks for a cooperative.',
              'Dative: Die Miete ist ihm zu hoch → wem.',
            ),
            {
              Wer: 'wer is the nominative; the rent is the subject, the person is the dative: wem.',
              Wen: 'wen is the accusative; ist zu hoch takes a dative.',
              Was: 'was refers to things, not to people.',
            },
          ),
          hint(
            gap(
              'w3',
              'Wen die Nachbarn stören, ___ sollte mit ihnen reden.',
              'der',
              ['der', 'den', 'dem', 'das'],
              'Whoever is disturbed by the neighbours should talk to them.',
              'The main clause needs its own subject: der (nominative).',
            ),
            {
              den: 'den would be an accusative object; the main clause needs a subject: der.',
              dem: 'dem is the dative; sollte needs a subject: der.',
              das: 'das refers to things and does not fit a person here.',
            },
          ),
          hint(
            gap(
              'w4',
              '___ in einer Hausgemeinschaft lebt, muss Kompromisse eingehen.',
              'Wer',
              ['Wer', 'Wem', 'Wen', 'Wessen'],
              'Whoever lives in a house community must compromise.',
              'wer = subject of lebt.',
            ),
            {
              Wem: 'wem is the dative; leben has no dative object.',
              Wen: 'wen is the accusative; the person is the subject.',
              Wessen: 'wessen means “whose” and needs a noun.',
            },
          ),
          hint(
            gap(
              'w5',
              'Alles, ___ im Mietvertrag steht, gilt auch für Untermieter.',
              'was',
              ['was', 'das', 'wer', 'wem'],
              'Everything that is in the lease also applies to subtenants.',
              'After alles use was.',
            ),
            {
              das: 'After alles (and nichts, etwas) the relative pronoun is was, not das.',
              wer: 'wer refers to persons.',
              wem: 'wem refers to persons.',
            },
          ),
          hint(
            gap(
              'w6',
              'Wem etwas nicht gefällt, ___ soll es sagen.',
              'der',
              ['der', 'den', 'dem', 'was'],
              'Whoever dislikes something should say so.',
              'The main clause continues with der (subject of soll).',
            ),
            {
              den: 'den would be an accusative object; the subject of soll is der.',
              dem: 'dem would be a dative; soll needs a subject.',
              was: 'was refers to things.',
            },
          ),
          hint(
            typed(
              'w7',
              'Wer zu spät zahlt, ___ eine Mahnung. (bekommen)',
              'bekommt',
              'Whoever pays late gets a reminder.',
              'Main clause: the verb comes right after the wer-clause, in the er-form.',
            ),
            { bekommen: 'The subject is Wer (singular): bekommt.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-conditions',
      'gapfill',
      meta(
        'If … then',
        'Complete the conditions with the right word.',
        ['grammar', 'conditional-b2'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'k1',
              '___ der Vermieter zustimmt, darf ich untervermieten.',
              'Sofern',
              ['Sofern', 'Obwohl', 'Weil', 'Damit'],
              'Provided that the landlord agrees, I may sublet.',
              'sofern = provided that (formal condition).',
            ),
            {
              Obwohl: 'obwohl expresses a contrast, not a condition.',
              Weil: 'weil gives a reason, not a condition.',
              Damit: 'damit expresses a purpose.',
            },
          ),
          hint(
            gap(
              'k2',
              '___ ich mehr Platz, würde ich umziehen.',
              'Hätte',
              ['Hätte', 'Habe', 'Hatte', 'Haben'],
              'If I had more space I would move.',
              'Without wenn the verb comes first – in Konjunktiv II: hätte.',
            ),
            {
              Habe: 'habe is Konjunktiv I / present; an unreal condition needs Konjunktiv II hätte.',
              Hatte: 'hatte is the Präteritum; the unreal condition needs hätte.',
              Haben: 'haben is the plural; ich takes hätte.',
            },
          ),
          hint(
            gap(
              'k3',
              '___ Regen bleibt der Spielplatz geschlossen.',
              'Bei',
              ['Bei', 'Falls', 'Sofern', 'Andernfalls'],
              'In case of rain the playground stays closed.',
              'bei + noun expresses a condition without a clause.',
            ),
            {
              Falls: 'falls needs a whole clause with a verb at the end.',
              Sofern: 'sofern needs a whole clause with a verb at the end.',
              Andernfalls: 'andernfalls starts a main clause and means “otherwise”.',
            },
          ),
          hint(
            gap(
              'k4',
              'Bitte zahlen Sie pünktlich. ___ müssen Sie eine Gebühr zahlen.',
              'Andernfalls',
              ['Andernfalls', 'Falls', 'Sofern', 'Wenn'],
              'Please pay on time. Otherwise you must pay a fee.',
              'andernfalls = otherwise; the verb follows directly.',
            ),
            {
              Falls: 'falls would send the verb to the end: Falls Sie … zahlen müssen.',
              Sofern: 'sofern would send the verb to the end.',
              Wenn: 'wenn would send the verb to the end.',
            },
          ),
          hint(
            gap(
              'k5',
              '___ der Mangel nicht behoben wird, darf der Mieter die Miete mindern.',
              'Falls',
              ['Falls', 'Bei', 'Andernfalls', 'Damit'],
              'If the defect is not remedied, the tenant may reduce the rent.',
              'falls starts a subordinate clause.',
            ),
            {
              Bei: 'bei needs a noun, not a clause.',
              Andernfalls:
                'andernfalls starts a main clause and refers back to a previous sentence.',
              Damit: 'damit expresses a purpose.',
            },
          ),
          hint(
            typed(
              'k6',
              '___ die Wohnung größer, würde ich bleiben. (sein)',
              'Wäre',
              'If the flat were bigger, I would stay.',
              'Without wenn the verb comes first: Wäre …',
            ),
            {
              Wenn: 'wenn would keep the verb at the end; without wenn the verb comes first: Wäre.',
            },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences-conditions',
      'sentence',
      meta(
        'Formal conditions',
        'Build sentences with wer, wem, sofern and Hätte ich …',
        ['grammar', 'word-order', 'conditional-b2'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'Whoever looks for a flat needs a lot of patience.', [
            'Wer',
            'eine',
            'Wohnung',
            'sucht,',
            'braucht',
            'viel',
            'Geduld.',
          ]),
          sent('s2', 'Whoever finds the rent too high looks for a cooperative.', [
            'Wem',
            'die',
            'Miete',
            'zu',
            'hoch',
            'ist,',
            'der',
            'sucht',
            'eine',
            'Genossenschaft.',
          ]),
          sent('s3', 'Provided that the landlord agrees, I may sublet.', [
            'Sofern',
            'der',
            'Vermieter',
            'zustimmt,',
            'darf',
            'ich',
            'untervermieten.',
          ]),
          sent(
            's4',
            'If I had more space, I would move.',
            ['Hätte', 'ich', 'mehr', 'Platz,', 'würde', 'ich', 'umziehen.'],
            { alsoAccept: ['Wenn ich mehr Platz hätte, würde ich umziehen.'] },
          ),
          sent('s5', 'Please pay on time, otherwise you must pay a fee.', [
            'Zahlen',
            'Sie',
            'bitte',
            'pünktlich,',
            'andernfalls',
            'müssen',
            'Sie',
            'eine',
            'Gebühr',
            'zahlen.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-living',
      'listen',
      meta(
        'Ways of living',
        'Listen and pick what they say.',
        ['listening', 'housing-market'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'In unserem Mehrgenerationenhaus wohnen junge Familien und Rentner unter einem Dach und helfen sich gegenseitig.',
            'In the multi-generation house young families and pensioners live together and help each other.',
            [
              'Only students live in the house.',
              'The house has been empty for years.',
              'Young and old live in separate buildings.',
            ],
          ),
          heard(
            'l2',
            'Die Genossenschaft vermietet günstig, weil sie keinen Gewinn machen will. Allerdings muss man Mitglied werden.',
            'The cooperative rents cheaply because it does not want to make a profit, but you must become a member.',
            [
              'The cooperative is more expensive than other landlords.',
              'You can rent without becoming a member.',
              'The cooperative wants to make as much profit as possible.',
            ],
          ),
          heard(
            'l3',
            'Wegen der Wohnungsnot in der Stadt ziehen viele Menschen in die Vororte, obwohl sie dort längere Wege haben.',
            'Because of the housing shortage many people move to the suburbs although they face longer commutes.',
            [
              'Because of the housing shortage many people move into the city centre.',
              'There is no housing shortage any more.',
              'People move away because the commute is short.',
            ],
          ),
          heard(
            'l4',
            'Seit der Sanierung ist die Kaltmiete um zwanzig Prozent gestiegen. Das kann sich nicht jeder leisten.',
            'Since the renovation the base rent has risen by twenty percent, which not everyone can afford.',
            [
              'Since the renovation the rent has fallen.',
              'The rent has not changed at all.',
              'Everybody can afford the higher rent easily.',
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
        'Complaints and viewings',
        'Report a defect and ask about a shared flat.',
        ['communication', 'housing-market'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'defect',
            title: 'Ein Mangel in der Wohnung',
            emoji: '🥶',
            setting: 'The heating in your flat has failed. You call the property management.',
            turns: [
              say(
                'Hausverwaltung',
                'Hausverwaltung Schulz, guten Tag. Wie kann ich Ihnen helfen?',
                'Property management Schulz, hello. How can I help you?',
              ),
              you(
                'Guten Tag, hier Yilmaz aus der Birkenstraße 12. Seit drei Tagen ist die Heizung ausgefallen. Bitte beheben Sie den Mangel schnell.',
                [
                  'Meine Heizung ist kaputt. Machen Sie was!',
                  'Stay polite and name the facts: who, what, since when.',
                ],
                [
                  'Guten Tag, hier Yilmaz aus der Birkenstraße 12. Seit drei Tagen die Heizung ist ausgefallen. Bitte beheben Sie den Mangel.',
                  'After Seit drei Tagen the verb comes second: … ist die Heizung ausgefallen.',
                ],
              ),
              say(
                'Hausverwaltung',
                'Das tut mir leid. Ich schicke heute noch einen Handwerker vorbei.',
                'I am sorry. I will send a craftsman today.',
              ),
              you('Danke. Falls der Mangel nicht behoben wird, werde ich die Miete mindern.', [
                'Dann zahle ich gar nichts mehr.',
                'State your rights calmly and precisely.',
              ]),
            ],
          },
          {
            id: 'wg',
            title: 'Besichtigung in einer Genossenschaft',
            emoji: '🏘️',
            setting: 'You look at a flat of a housing cooperative.',
            turns: [
              say(
                'Mitglied',
                'Bei uns gibt es einen Gemeinschaftsraum. Wer möchte, kann ihn für Feiern mieten.',
                'We have a common room. Whoever wants can rent it for parties.',
              ),
              you(
                'Das klingt gut. Muss ich Mitglied werden, ehe ich einziehen kann?',
                [
                  'Das klingt gut. Muss ich Mitglied werden, ehe ich kann einziehen?',
                  'ehe sends the verb to the end: … ehe ich einziehen kann.',
                ],
                [
                  'Ich habe kein Interesse an Gemeinschaft.',
                  'Ask a question – you are here to learn more.',
                ],
              ),
              say(
                'Mitglied',
                'Ja, Sie zahlen einmalig einen Anteil. Sofern Sie ausziehen, bekommen Sie ihn zurück.',
                'Yes, you pay a one-off share. If you move out, you get it back.',
              ),
              you('Das ist fair. Wie hoch ist die Kaltmiete im Vergleich zum Mietspiegel?', [
                'Wie viel Geld habe ich?',
                'Ask a relevant question about rent.',
              ]),
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
        'Housing blitz',
        'wer / wem and conditions – true or false?',
        ['grammar', 'relative-wer'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Wer zu spät kommt, muss draußen warten.', true),
          tf(
            'b2',
            'Wen zu spät kommt, muss draußen warten.',
            false,
            'The person is the subject of kommt: Wer.',
          ),
          tf('b3', 'Wem die Wohnung nicht gefällt, der sollte sie nicht mieten.', true),
          tf(
            'b4',
            'Wer die Wohnung nicht gefällt, der sollte sie nicht mieten.',
            false,
            'gefallen takes the dative: Wem die Wohnung nicht gefällt.',
          ),
          tf('b5', 'Alles, was im Vertrag steht, gilt.', true),
          tf(
            'b6',
            'Alles, das im Vertrag steht, gilt.',
            false,
            'After alles the relative pronoun is was.',
          ),
          tf('b7', 'Hätte ich Zeit, würde ich kommen.', true),
          tf('b8', 'Falls kein Einspruch kommt, gilt der Vertrag.', true),
          tf('b9', 'Andernfalls = ansonsten.', true),
          tf(
            'b10',
            'Ein Untermieter ist der Eigentümer der Wohnung.',
            false,
            'A subtenant rents from the main tenant, not from the owner.',
          ),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Housing vocabulary, wer-clauses and conditions in one round.',
        ['vocabulary', 'grammar', 'housing-market'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', '___ die Heizung ausfällt, sollte sofort die Hausverwaltung anrufen.', 'Wer', [
              'Wen',
              'Wem',
              'Was',
            ]),
            {
              Wen: 'wen is the accusative; the person here is the subject.',
              Wem: 'wem is the dative; ausfallen takes no person as dative object here.',
              Was: 'was refers to things.',
            },
            'relative-wer',
          ),
          hint(
            q('c2', '___ der Lärm stört, der kann sich beschweren.', 'Wen', ['Wer', 'Wem', 'Was']),
            {
              Wer: 'The noise is the subject of stört; the person is the object: wen (accusative).',
              Wem: 'stören takes the accusative: wen.',
              Was: 'was refers to things.',
            },
            'relative-wer',
          ),
          hint(
            q(
              'c3',
              '___ Sie den Vertrag nicht unterschreiben, können Sie nicht einziehen.',
              'Sollten',
              ['Sollen', 'Sollte', 'Soll'],
            ),
            {
              Sollen:
                'Sie is plural-polite and needs sollten (Konjunktiv II) at the start of the condition.',
              Sollte: 'Sie takes sollten.',
              Soll: 'soll is the present indicative and does not form an if-clause without wenn.',
            },
            'conditional-b2',
          ),
          hint(
            q('c4', 'Mieten Sie pünktlich! ___ droht eine Kündigung.', 'Andernfalls', [
              'Falls',
              'Sofern',
              'Wenn',
            ]),
            {
              Falls: 'falls would send the verb to the end.',
              Sofern: 'sofern would send the verb to the end.',
              Wenn: 'wenn would send the verb to the end.',
            },
            'conditional-b2',
          ),
          q('c5', 'die Genossenschaft', 'housing cooperative', [
            'property management',
            'subtenant',
            'rent index',
          ]),
          q('c6', 'der Missstand', 'grievance, deficiency', ['remedy', 'renovation', 'dampness']),
          q('c7', 'beheben', 'to fix, remedy', [
            'to sublet',
            'to complain about',
            'to give notice',
          ]),
          q('c8', 'die Mietminderung', 'rent reduction', [
            'rent increase',
            'base rent',
            'notice period',
          ]),
          q(
            'c9',
            'You report that your heating has not worked for days.',
            'Seit drei Tagen ist die Heizung ausgefallen.',
            [
              'Seit drei Tagen die Heizung ist ausgefallen.',
              'Seit drei Tagen ausgefallen ist die Heizung.',
              'Seit drei Tagen die Heizung ausgefallen ist.',
            ],
          ),
          q('c10', 'der Eigenbedarf', 'landlord’s own use', [
            'rent index',
            'notice period',
            'subtenant',
          ]),
        ],
      },
    ),
  ],
};
