import { byDe, flashcards, listen, quizEmoji, spell, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  heard,
  hint,
  k1Table,
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

const U = 'b2-1-besitz';

const owning = vocabList(U, 'Possessions and minimalism', [
  ['Minimalismus', 'minimalism', '⚪', 'der'],
  ['Besitz', 'possessions, property', '🧳', 'der'],
  ['Verzicht', 'doing without, sacrifice', '✋', 'der'],
  ['Überfluss', 'abundance, excess', '🛒', 'der'],
  ['Anschaffung', 'purchase, acquisition', '🛍️', 'die', 'Anschaffungen'],
  ['Gerümpel', 'junk, clutter', '🗑️', 'das'],
  ['Ballast', 'ballast, dead weight', '⚖️', 'der'],
  ['Tauschbörse', 'swap meet, exchange platform', '🔄', 'die', 'Tauschbörsen'],
  ['Einwegprodukt', 'single-use product', '🥤', 'das', 'Einwegprodukte'],
  ['ausmisten', 'to clear out', '🧹'],
  ['verzichten auf', 'to do without', '🙅'],
  ['sich trennen von', 'to part with', '👋'],
  ['genügsam', 'frugal, modest', '🌿'],
]);

const diet = vocabList(U, 'Diet and food', [
  ['Ernährungsweise', 'way of eating, diet', '🍽️', 'die', 'Ernährungsweisen'],
  ['Fleischkonsum', 'meat consumption', '🥩', 'der'],
  ['Fleischersatz', 'meat substitute', '🌱', 'der'],
  ['Zusatzstoff', 'additive', '🧪', 'der', 'Zusatzstoffe'],
  ['Tierhaltung', 'animal husbandry', '🐄', 'die'],
  ['Lebensmittelverschwendung', 'food waste', '🗑️', 'die'],
  ['Eiweiß', 'protein', '🥚', 'das'],
  ['Hülsenfrüchte', 'legumes', '🫘', 'die'],
  ['Insekt', 'insect', '🦗', 'das', 'Insekten'],
  ['Mangelerscheinung', 'deficiency symptom', '😵', 'die', 'Mangelerscheinungen'],
  ['sich ausgewogen ernähren', 'to eat a balanced diet', '⚖️'],
  ['vegan', 'vegan', '🥦'],
]);

const reporting = vocabList(U, 'Reporting what others say', [
  [
    'Laut der Studie essen viele Menschen zu viel Fleisch.',
    'According to the study many people eat too much meat.',
    '📊',
  ],
  [
    'Die Expertin betont, man solle weniger Fleisch essen.',
    'The expert stresses that people should eat less meat.',
    '👩‍🔬',
  ],
  ['Es heißt, dass Insekten gesund seien.', 'They say that insects are healthy.', '🦗'],
  ['Er behauptet, er habe nichts davon gewusst.', 'He claims he knew nothing about it.', '🤥'],
  [
    'Angeblich verzichtet sie seit einem Jahr auf Fleisch.',
    'Allegedly she has gone without meat for a year.',
    '🤔',
  ],
  [
    'Nach Angaben des Ministeriums steigen die Preise.',
    'According to the ministry prices are rising.',
    '🏛️',
  ],
  [
    'Sie meint, man brauche nicht viel zum Glück.',
    'She thinks you do not need much to be happy.',
    '☺️',
  ],
]);

const vocab = [...owning, ...diet, ...reporting];

export const besitz: UnitContent = {
  unit: unitB21({
    id: U,
    order: 2,
    title: 'Besitz, Verzicht & Ernährung',
    subtitle: 'Living with less, eating consciously – and reporting what others say',
    emoji: '🥗',
    goals: [
      'Discuss minimalism, possessions and doing without',
      'Talk about diets, meat consumption and healthy food',
      'Report statements and news in reported speech',
    ],
    grammar: [
      'Reported speech with Konjunktiv I: Er sagt, er sei müde und habe keine Zeit.',
      'Konjunktiv II as a replacement when Konjunktiv I looks like the present: Sie sagten, sie hätten viel zu tun.',
    ],
    vocabFields: ['Possessions and minimalism', 'Diet and food', 'Reporting what others say'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-owning',
      'flashcards',
      meta(
        'Possessions and minimalism',
        'Besitz, Verzicht, Überfluss – living with less.',
        ['vocabulary', 'minimalism-diet'],
        1,
        5,
      ),
      flashcards(owning),
    ),
    activity(
      U,
      'flash-diet',
      'flashcards',
      meta(
        'Diet and food',
        'Ernährungsweise, Eiweiß, Fleischersatz – eating consciously.',
        ['vocabulary', 'minimalism-diet'],
        1,
        5,
      ),
      flashcards(diet),
    ),
    activity(
      U,
      'flash-reporting',
      'flashcards',
      meta(
        'Reporting what others say',
        'Phrases for news, studies and other people’s opinions.',
        ['vocabulary', 'communication', 'minimalism-diet'],
        1,
        4,
      ),
      flashcards(reporting),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Things and food', 'Name what you see.', ['vocabulary', 'minimalism-diet'], 1, 4),
      quizEmoji(
        byDe(
          [...owning, ...diet],
          'Gerümpel',
          'Tauschbörse',
          'Einwegprodukt',
          'Fleischersatz',
          'Zusatzstoff',
          'Tierhaltung',
          'Hülsenfrüchte',
          'Insekt',
        ),
      ),
    ),
    activity(
      U,
      'listen-reporting',
      'listen',
      meta(
        'Hear the phrases',
        'Listen and pick the meaning.',
        ['listening', 'minimalism-diet'],
        2,
        4,
      ),
      listen(reporting),
    ),
    activity(
      U,
      'memory-direct-reported',
      'memory',
      meta(
        'Direct and reported',
        'Match the direct statement with its reported form.',
        ['vocabulary', 'konjunktiv-1', 'minimalism-diet'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'Ich bin müde.', b: 'Er sagt, er sei müde.' },
          { id: 'm2', a: 'Ich habe keine Zeit.', b: 'Sie sagt, sie habe keine Zeit.' },
          { id: 'm3', a: 'Wir kommen später.', b: 'Sie sagen, sie kämen später.' },
          { id: 'm4', a: 'Man soll weniger essen.', b: 'Der Arzt meint, man solle weniger essen.' },
          { id: 'm5', a: 'Ich muss arbeiten.', b: 'Er sagt, er müsse arbeiten.' },
          { id: 'm6', a: 'Die Preise steigen.', b: 'Es heißt, die Preise würden steigen.' },
        ],
      },
    ),
    activity(
      U,
      'spell-owning',
      'spell',
      meta(
        'Spell the new words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'minimalism-diet'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(owning, 'Ballast', 'Verzicht', 'Gerümpel'), 'unscramble').items,
          ...spell(byDe(diet, 'Eiweiß', 'Ernährungsweise', 'Zusatzstoff'), 'type').items,
          dictation(
            'd1',
            'Er behauptet, er habe nichts davon gewusst.',
            'he claims he knew nothing about it',
          ),
          dictation(
            'd2',
            'Ich möchte auf unnötigen Besitz verzichten.',
            'I would like to do without unnecessary possessions',
          ),
        ],
      },
    ),
    activity(
      U,
      'conj-k1',
      'conjugation',
      meta(
        'Konjunktiv I tables',
        'The forms of reported speech: sei, habe, könne, werde.',
        ['grammar', 'konjunktiv-1'],
        2,
        5,
      ),
      {
        tables: [
          k1Table('sein', 'to be', ['du', 'er/sie/es', 'wir']),
          k1Table('haben', 'to have', ['du', 'er/sie/es', 'ihr']),
          k1Table('können', 'to be able to', ['du', 'er/sie/es', 'ihr']),
          k1Table('müssen', 'to have to', ['du', 'er/sie/es']),
          k1Table('werden', 'to become, will', ['er/sie/es', 'ihr']),
        ],
      },
    ),
    activity(
      U,
      'sort-moods',
      'sortit',
      meta(
        'Which form is it?',
        'Indicative, Konjunktiv I or Konjunktiv II as a replacement?',
        ['grammar', 'konjunktiv-1'],
        3,
        4,
      ),
      {
        instruction:
          'Is the form indicative, Konjunktiv I, or Konjunktiv II used as a replacement?',
        buckets: [
          { id: 'ind', label: 'Indikativ', emoji: '1️⃣' },
          { id: 'k1', label: 'Konjunktiv I', emoji: '2️⃣' },
          { id: 'k2', label: 'Konjunktiv II (Ersatz)', emoji: '3️⃣' },
        ],
        items: sortItems('f', [
          ['er ist', 'ind'],
          ['er sei', 'k1'],
          ['sie haben', 'ind'],
          ['sie hätten', 'k2'],
          ['man solle', 'k1'],
          ['sie kämen', 'k2'],
          ['er habe', 'k1'],
          ['die Preise würden steigen', 'k2'],
        ]),
      },
    ),
    activity(
      U,
      'gap-reported',
      'gapfill',
      meta(
        'Reported speech',
        'Complete the news report with the right verb form.',
        ['grammar', 'konjunktiv-1'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'r1',
              'Der Minister sagt, die Preise ___ weiter steigen.',
              'würden',
              ['würden', 'werden', 'sind', 'wären'],
              'The minister says that prices will keep rising.',
              'werden is the same as the present, so Konjunktiv II würden replaces it.',
            ),
            {
              werden: 'werden looks like the normal present; to show reported speech use würden.',
              sind: 'sind is the indicative of sein and does not fit the future meaning.',
              wären: 'wären is Konjunktiv II of sein; the future needs würden + infinitive.',
            },
          ),
          hint(
            gap(
              'r2',
              'Sie erklärt, sie ___ keinen Hunger.',
              'habe',
              ['habe', 'hat', 'haben', 'hast'],
              'She explains that she is not hungry.',
              'Konjunktiv I of haben for er/sie/es: habe.',
            ),
            {
              hat: 'hat is the indicative; reported speech takes Konjunktiv I: habe.',
              haben: 'haben is the wir/sie plural form; sie (she) takes habe.',
              hast: 'hast is the du form.',
            },
          ),
          hint(
            gap(
              'r3',
              'Er behauptet, er ___ nichts davon gewusst.',
              'habe',
              ['habe', 'hat', 'hatte', 'haben'],
              'He claims that he did not know anything about it.',
              'Perfekt in reported speech: Konjunktiv I of haben + participle.',
            ),
            {
              hat: 'hat is the indicative; use Konjunktiv I habe.',
              hatte: 'hatte is the Präteritum; for reported speech use habe + gewusst.',
              haben: 'haben is the plural form; er takes habe.',
            },
          ),
          hint(
            gap(
              'r4',
              'Die Expertin betont, man ___ mehr Gemüse essen.',
              'solle',
              ['solle', 'soll', 'sollte', 'sollen'],
              'The expert stresses that people should eat more vegetables.',
              'Konjunktiv I of sollen: solle.',
            ),
            {
              soll: 'soll is the indicative; reported speech takes the Konjunktiv I form solle.',
              sollte: 'sollte is the Präteritum / Konjunktiv II; the clear reported form is solle.',
              sollen: 'sollen is the plural form; man takes solle.',
            },
          ),
          hint(
            gap(
              'r5',
              'Die Forscher sagen, Insekten ___ eine gute Eiweißquelle.',
              'seien',
              ['seien', 'sind', 'wären', 'sei'],
              'The researchers say that insects are a good source of protein.',
              'Konjunktiv I plural of sein: seien (different from sind).',
            ),
            {
              sind: 'sind is the indicative; reported speech uses seien.',
              wären:
                'wären is Konjunktiv II; since seien already differs from sind, Konjunktiv I is used.',
              sei: 'sei is singular; Insekten is plural.',
            },
          ),
          hint(
            typed(
              'r6',
              'Er sagt, er ___ müde. (sein)',
              'sei',
              'He says he is tired.',
              'Konjunktiv I of sein: er sei.',
            ),
            { ist: 'ist is the indicative; reported speech takes sei.' },
          ),
          hint(
            typed(
              'r7',
              'Sie meint, man ___ nicht viel zum Glück. (brauchen)',
              'brauche',
              'She thinks you do not need much for happiness.',
              'Konjunktiv I: stem + -e → brauche.',
            ),
            { braucht: 'braucht is the indicative; reported speech takes brauche.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences-reported',
      'sentence',
      meta(
        'Report it',
        'Build sentences in reported speech.',
        ['grammar', 'word-order', 'konjunktiv-1'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'The doctor says that you should sleep more.', [
            'Der',
            'Arzt',
            'sagt,',
            'man',
            'solle',
            'mehr',
            'schlafen.',
          ]),
          sent('s2', 'She said she was tired.', ['Sie', 'sagte,', 'sie', 'sei', 'müde.']),
          sent('s3', 'The minister explained that prices would keep rising.', [
            'Der',
            'Minister',
            'erklärte,',
            'die',
            'Preise',
            'würden',
            'weiter',
            'steigen.',
          ]),
          sent('s4', 'He claims he knew nothing about it.', [
            'Er',
            'behauptet,',
            'er',
            'habe',
            'nichts',
            'davon',
            'gewusst.',
          ]),
          sent('s5', 'According to the study many people eat too much meat.', [
            'Laut',
            'der',
            'Studie',
            'essen',
            'viele',
            'Menschen',
            'zu',
            'viel',
            'Fleisch.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-news',
      'listen',
      meta(
        'Radio report',
        'Listen to short reports and pick what they say.',
        ['listening', 'minimalism-diet'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Eine Studie zeigt: Viele Deutsche essen zu viel Fleisch. Die Forscher raten, man solle mehr Hülsenfrüchte essen.',
            'Researchers advise eating more legumes because people eat too much meat.',
            [
              'Researchers advise eating more meat.',
              'The study shows Germans eat no meat at all.',
              'Researchers want to ban legumes.',
            ],
          ),
          heard(
            'l2',
            'Eine Bloggerin berichtet, sie habe in einem Jahr die Hälfte ihrer Sachen verkauft und fühle sich freier.',
            'A blogger reports that she sold half of her things and feels freer.',
            [
              'A blogger reports that she bought many new things.',
              'A blogger has not sold anything yet.',
              'A blogger feels sad after selling her things.',
            ],
          ),
          heard(
            'l3',
            'Das Ministerium meldet, die Lebensmittelverschwendung sei in den letzten Jahren gesunken.',
            'The ministry reports that food waste has decreased in recent years.',
            [
              'The ministry reports that food waste has increased.',
              'The ministry wants to introduce a new tax.',
              'The ministry says nobody wastes food any more.',
            ],
          ),
          heard(
            'l4',
            'Der Koch sagt, Insekten seien reich an Eiweiß, doch viele Gäste würden sie nicht probieren wollen.',
            'The cook says insects are rich in protein but many guests do not want to try them.',
            [
              'The cook says insects are poisonous.',
              'The cook says all guests love insects.',
              'The cook says insects are expensive but low in protein.',
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
        'Interview and kitchen talk',
        'Talk about minimalism and about your diet.',
        ['communication', 'minimalism-diet'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'interview',
            title: 'Ein Interview über Minimalismus',
            emoji: '🎙️',
            setting: 'A radio host asks you why you started living with fewer things.',
            turns: [
              say(
                'Moderatorin',
                'Sie haben Ihre Wohnung ausgemistet. Warum haben Sie sich von so vielen Dingen getrennt?',
                'You cleared out your flat. Why did you part with so many things?',
              ),
              you(
                'Ich hatte das Gefühl, dass mein Besitz mich belastet. Jetzt habe ich mehr Zeit und Ruhe.',
                [
                  'Ich weiß es nicht. Das ist egal.',
                  'Give a reason – the host expects an explanation.',
                ],
                [
                  'Ich hatte das Gefühl, dass mein Besitz belastet mich. Jetzt habe ich mehr Zeit und Ruhe.',
                  'In a dass-clause the verb goes to the end: … dass mein Besitz mich belastet.',
                ],
              ),
              say(
                'Moderatorin',
                'Und worauf verzichten Sie am schwersten?',
                'And what is hardest for you to do without?',
              ),
              you('Auf meine Bücher – aber ich leihe sie jetzt in der Bibliothek aus.', [
                'Auf meine Bücher – ich verzichte nicht.',
                'You have just said you gave things up; answer the question.',
              ]),
            ],
          },
          {
            id: 'kitchen',
            title: 'Gespräch über das Essen',
            emoji: '🥗',
            setting: 'A colleague offers you a burger. You eat less meat.',
            turns: [
              say(
                'Kollege',
                'Magst du einen Burger? Ich habe zu viele bestellt.',
                'Do you want a burger? I ordered too many.',
              ),
              you(
                'Danke, aber ich esse seit einem Jahr kaum noch Fleisch. Ich ernähre mich lieber ausgewogen.',
                [
                  'Danke, aber ich esse seit einem Jahr kaum noch Fleisch. Ich ernähre mir lieber ausgewogen.',
                  'sich ernähren is reflexive with the accusative: ich ernähre mich.',
                ],
                [
                  'Nein! Fleisch ist ekelhaft.',
                  'That is rude – decline politely and give a short reason.',
                ],
              ),
              say(
                'Kollege',
                'Echt? Es heißt doch, ohne Fleisch bekomme man zu wenig Eiweiß.',
                'Really? They say you get too little protein without meat.',
              ),
              you('Das stimmt nicht. Hülsenfrüchte und Eier enthalten viel Eiweiß.', [
                'Ja, ich bekomme zu wenig. Mir geht es schlecht.',
                'Correct the claim politely with facts.',
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
        'Reporting blitz',
        'Konjunktiv I and food words – true or false?',
        ['grammar', 'konjunktiv-1'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Er sagt, er sei krank.', true),
          tf('b2', 'Er sagt, er sein krank.', false, 'er sei – sein is only the infinitive.'),
          tf('b3', 'Sie sagt, sie habe keine Zeit.', true),
          tf(
            'b4',
            'Sie sagt, sie hat keine Zeit.',
            false,
            'In careful reported speech use habe, not hat.',
          ),
          tf('b5', 'Sie sagten, sie hätten viel zu tun.', true),
          tf(
            'b6',
            'Konjunktiv II ersetzt Konjunktiv I, wenn beide wie der Indikativ aussehen.',
            true,
          ),
          tf(
            'b7',
            'Fleischersatz enthält immer Fleisch.',
            false,
            'Fleischersatz replaces meat; it is usually made of plants.',
          ),
          tf('b8', 'Ein Zusatzstoff wird einem Lebensmittel hinzugefügt.', true),
          tf('b9', 'Wer verzichtet, behält alles.', false, 'verzichten means to do without.'),
          tf('b10', 'Gerümpel ist nützlicher Besitz.', false, 'Gerümpel is useless clutter.'),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Minimalism, diet and reported speech in one round.',
        ['vocabulary', 'grammar', 'minimalism-diet'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Der Sprecher sagt, es ___ keine Lösung.', 'gebe', ['gibt', 'gab', 'geben']),
            {
              gibt: 'gibt is the indicative; reported speech takes Konjunktiv I: gebe.',
              gab: 'gab is the Präteritum, not reported speech.',
              geben: 'geben is the plural; es takes gebe.',
            },
            'konjunktiv-1',
          ),
          hint(
            q('c2', 'Die Politiker sagen, sie ___ keine Zeit.', 'hätten', [
              'haben',
              'habe',
              'hatten',
            ]),
            {
              haben:
                'haben looks like the present; to show reported speech use Konjunktiv II hätten.',
              habe: 'habe is the singular form; Politiker is plural.',
              hatten: 'hatten is the Präteritum; hätten is the Konjunktiv II replacement.',
            },
            'konjunktiv-1',
          ),
          hint(
            q('c3', 'Der Sprecher sagte, die Kunden ___ zufrieden.', 'seien', [
              'sind',
              'sei',
              'war',
            ]),
            {
              sind: 'sind is the indicative; reported speech takes seien.',
              sei: 'sei is singular; die Kunden is plural.',
              war: 'war is the Präteritum, not reported speech.',
            },
            'konjunktiv-1',
          ),
          q('c4', 'der Verzicht', 'doing without, sacrifice', ['abundance', 'purchase', 'clutter']),
          q('c5', 'ausmisten', 'to clear out', ['to buy', 'to part with', 'to throw a party']),
          q('c6', 'das Eiweiß', 'protein', ['additive', 'legumes', 'insect']),
          q('c7', 'das Einwegprodukt', 'single-use product', [
            'swap meet',
            'food waste',
            'animal husbandry',
          ]),
          q('c8', 'genügsam', 'frugal, modest', ['greedy', 'reserved', 'resentful']),
          q(
            'c9',
            'You report a rumour you cannot confirm.',
            'Angeblich verzichtet sie auf Fleisch.',
            ['Ich verzichte auf Fleisch.', 'Verzichte auf Fleisch!', 'Wir verzichten auf Fleisch.'],
          ),
          q('c10', 'die Anschaffung', 'purchase, acquisition', [
            'pension',
            'attachment',
            'procedure',
          ]),
        ],
      },
    ),
  ],
};
