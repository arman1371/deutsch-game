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
  unitB12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b1-2-heimat';

const home = vocabList(U, 'Home & roots', [
  ['Heimweh', 'homesickness', '🥺', 'das'],
  ['Herkunft', 'origin', '🧭', 'die'],
  ['Wurzeln', 'roots', '🌳', 'die'],
  ['Lebensgefühl', 'attitude to life', '😌', 'das'],
  ['Geruch', 'smell', '👃', 'der', 'Gerüche'],
  ['Zubereitung', 'preparation (of food)', '🍲', 'die'],
  ['Fremde', 'foreign parts, abroad', '🧳', 'die'],
  ['auswandern', 'to emigrate', '✈️'],
  ['sich einleben', 'to settle in', '🏡'],
]);

const europe = vocabList(U, 'Europe & feeling at home', [
  ['Europäische Union', 'European Union', '🇪🇺', 'die'],
  ['Mitgliedsstaat', 'member state', '🏳️', 'der', 'Mitgliedsstaaten'],
  ['Reisefreiheit', 'freedom to travel', '🛂', 'die'],
  ['Grenzkontrolle', 'border check', '🛃', 'die', 'Grenzkontrollen'],
  ['Amtssprache', 'official language', '🗣️', 'die', 'Amtssprachen'],
  ['Heimat ist für mich, wo meine Freunde sind.', 'Home for me is where my friends are.', '💛'],
  ['Ich fühle mich hier zu Hause.', 'I feel at home here.', '🛋️'],
  ['Ich vermisse vor allem das Essen.', 'Most of all I miss the food.', '🥟'],
]);

const vocab = [...home, ...europe];

export const heimat: UnitContent = {
  unit: unitB12({
    id: U,
    order: 10,
    title: 'Alte und neue Heimat',
    subtitle: 'What home means, settling in somewhere new, regional food and Europe',
    emoji: '🇪🇺',
    goals: [
      'Say what home means to you',
      'Talk about emigrating, homesickness and settling in',
      'Understand basic facts about the European Union',
    ],
    grammar: [
      'Compound nouns: the last part gives the article – das Heimweh, die Reisefreiheit; linking -s: der Mitgliedsstaat.',
      'Verbs as nouns: kochen → das Kochen, beim Kochen.',
    ],
    vocabFields: ['Home & roots', 'Europe & feeling at home'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-home',
      'flashcards',
      meta(
        'Home & roots',
        'Heimweh, Herkunft, sich einleben – feeling at home.',
        ['vocabulary', 'home-europe'],
        1,
        4,
      ),
      flashcards(home),
    ),
    activity(
      U,
      'flash-europe',
      'flashcards',
      meta(
        'Europe & feeling at home',
        'Europäische Union, Reisefreiheit – and what home means.',
        ['vocabulary', 'communication', 'home-europe'],
        1,
        4,
      ),
      flashcards(europe),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Home and Europe', 'Name what you see.', ['vocabulary', 'home-europe'], 1, 4),
      quizEmoji(
        byDe(
          [...home, ...europe],
          'Heimweh',
          'Wurzeln',
          'Geruch',
          'auswandern',
          'Europäische Union',
          'Reisefreiheit',
          'Grenzkontrolle',
          'Amtssprache',
        ),
      ),
    ),
    activity(
      U,
      'quiz-stress',
      'quiz',
      meta(
        'Stress in compound nouns',
        'In a compound the first part is usually stressed. Which syllable is stressed?',
        ['pronunciation', 'home-europe'],
        2,
        4,
      ),
      {
        questions: [
          q(
            'w1',
            'Heimweh',
            'HEIM-weh',
            ['heim-WEH'],
            'Compounds are stressed on the first part: HEIMweh.',
          ),
          q(
            'w2',
            'Reisefreiheit',
            'REI-se-frei-heit',
            ['rei-se-FREI-heit', 'rei-SE-frei-heit'],
            'The first part (Reise) carries the main stress.',
          ),
          q(
            'w3',
            'Grenzkontrolle',
            'GRENZ-kon-trol-le',
            ['grenz-kon-TROL-le', 'grenz-KON-trol-le'],
            'First part stressed – even though Kontrolle alone is stressed on -trol-.',
          ),
          q(
            'w4',
            'Amtssprache',
            'AMTS-spra-che',
            ['amts-SPRA-che', 'amts-spra-CHE'],
            'The first part (Amt) carries the stress.',
          ),
          q(
            'w5',
            'Mitgliedsstaat',
            'MIT-glieds-staat',
            ['mit-glieds-STAAT', 'mit-GLIEDS-staat'],
            'The first part carries the stress.',
          ),
          q(
            'w6',
            'Lebensgefühl',
            'LE-bens-ge-fühl',
            ['le-bens-ge-FÜHL', 'le-BENS-ge-fühl'],
            'Leben is the first part: LEbensgefühl.',
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-europe',
      'listen',
      meta('Hear the words', 'Listen and pick the meaning.', ['listening', 'home-europe'], 2, 4),
      listen(europe),
    ),
    activity(
      U,
      'spell-home',
      'spell',
      meta(
        'Spell the home words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'home-europe'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(home, 'Heimweh', 'Geruch', 'Herkunft'), 'unscramble').items,
          ...spell(byDe([...home, ...europe], 'Zubereitung', 'Reisefreiheit', 'auswandern'), 'type')
            .items,
          dictation('d1', 'Ich fühle mich hier zu Hause.', 'I feel at home here'),
          dictation(
            'd2',
            'Beim Kochen denke ich an meine Oma.',
            'when cooking I think of my grandma',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-articles',
      'sortit',
      meta(
        'der, die or das?',
        'The last part of a compound decides the article.',
        ['grammar', 'word-formation', 'articles'],
        2,
        4,
      ),
      {
        instruction: 'Which article does the compound take?',
        buckets: [
          { id: 'der', label: 'der', emoji: '🔵' },
          { id: 'die', label: 'die', emoji: '🔴' },
          { id: 'das', label: 'das', emoji: '🟢' },
        ],
        items: sortItems('a', [
          ['Mitglied + der Staat', 'der'],
          ['Heimat + der Ort', 'der'],
          ['Reise + die Freiheit', 'die'],
          ['Grenze + die Kontrolle', 'die'],
          ['Amt + die Sprache', 'die'],
          ['Leben + das Gefühl', 'das'],
          ['Heim + das Weh', 'das'],
          ['Familie + das Rezept', 'das'],
        ]),
      },
    ),
    activity(
      U,
      'gap-words',
      'gapfill',
      meta(
        'Das Kochen, der Mitgliedsstaat',
        'Compound nouns and verbs used as nouns.',
        ['grammar', 'word-formation'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'f1',
              '___ Reisefreiheit ist für viele das Beste an der EU.',
              'Die',
              ['Die', 'Der', 'Das', 'Den'],
              'For many the freedom to travel is the best thing about the EU.',
              'die Reise + die Freiheit → die Reisefreiheit.',
            ),
            {
              Der: 'The last part decides: die Freiheit → die Reisefreiheit.',
              Das: 'The last part decides: die Freiheit → die Reisefreiheit.',
              Den: 'The last part decides: die Freiheit → die Reisefreiheit, nominative.',
            },
          ),
          hint(
            gap(
              'f2',
              'Beim ___ denke ich immer an meine Großmutter.',
              'Kochen',
              ['Kochen', 'kochen', 'Koch', 'Kochung'],
              'When cooking I always think of my grandmother.',
              'A verb as a noun: das Kochen (capital letter), beim = bei dem.',
            ),
            {
              kochen: 'Used as a noun the verb is written with a capital letter: das Kochen.',
              Koch: 'der Koch is the cook (a person); the activity is das Kochen.',
              Kochung: 'There is no -ung noun here; the infinitive itself becomes the noun.',
            },
          ),
          hint(
            gap(
              'f3',
              'Deutschland ist ein Mitglied___ der EU.',
              'sstaat',
              ['sstaat', 'staat', 'esstaat', 'enstaat'],
              'Germany is a member state of the EU.',
              'Linking -s: Mitglied + s + Staat.',
            ),
            {
              staat: 'Here a linking s is needed: der Mitgliedsstaat.',
              esstaat: 'The linking letter is just s: Mitgliedsstaat.',
              enstaat: 'The linking letter is s, not en: Mitgliedsstaat.',
            },
          ),
          hint(
            gap(
              'f4',
              'Das ___ fällt mir in der Fremde am schwersten. (sich einleben)',
              'Einleben',
              ['Einleben', 'einleben', 'Einlebung', 'Eingelebte'],
              'Settling in is what I find hardest abroad.',
              'Infinitive as a noun: das Einleben (no sich).',
            ),
            {
              einleben: 'As a noun it needs a capital letter: das Einleben.',
              Einlebung: 'No -ung noun exists here; use the infinitive: das Einleben.',
              Eingelebte: 'das Eingelebte is not used; the activity is das Einleben.',
            },
          ),
          hint(
            gap(
              'f5',
              '___ Lebensgefühl in Italien gefällt mir.',
              'Das',
              ['Das', 'Der', 'Die', 'Dem'],
              'I like the attitude to life in Italy.',
              'das Leben + das Gefühl → das Lebensgefühl.',
            ),
            {
              Der: 'The last part decides: das Gefühl → das Lebensgefühl.',
              Die: 'The last part decides: das Gefühl → das Lebensgefühl.',
              Dem: 'Lebensgefühl is the subject (nominative): das.',
            },
          ),
          hint(
            typed(
              'f6',
              'Der Heimat___ ist der Ort, wo man aufgewachsen ist. (Heimat + Ort)',
              'ort',
              'Your home town is the place where you grew up.',
              'Words ending in -at take no linking s: Heimatort.',
            ),
            { sort: 'No linking s after Heimat: der Heimatort.' },
          ),
          hint(
            typed(
              'f7',
              'Zum ___ braucht man viel Mut. (auswandern, as a noun)',
              'Auswandern',
              'You need a lot of courage to emigrate.',
              'zum = zu dem + infinitive as a noun.',
            ),
            { auswandern: 'As a noun it needs a capital letter: zum Auswandern.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Where is home?',
        'Build sentences about home and Europe.',
        ['grammar', 'word-order', 'word-formation'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'Home for me is where my friends are.', [
            'Heimat',
            'ist',
            'für',
            'mich,',
            'wo',
            'meine',
            'Freunde',
            'sind.',
          ]),
          sent('s2', 'When cooking I think of my grandma.', [
            'Beim',
            'Kochen',
            'denke',
            'ich',
            'an',
            'meine',
            'Oma.',
          ]),
          sent('s3', 'I feel at home here.', ['Ich', 'fühle', 'mich', 'hier', 'zu', 'Hause.']),
          sent(
            's4',
            'Most of all I miss the food.',
            ['Ich', 'vermisse', 'vor', 'allem', 'das', 'Essen.'],
            { alsoAccept: ['Vor allem vermisse ich das Essen.'] },
          ),
          sent(
            's5',
            'She emigrated to Canada ten years ago.',
            ['Sie', 'ist', 'vor', 'zehn', 'Jahren', 'nach', 'Kanada', 'ausgewandert.'],
            { alsoAccept: ['Vor zehn Jahren ist sie nach Kanada ausgewandert.'] },
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-stories',
      'listen',
      meta(
        'Between two homes',
        'Listen to people who moved abroad.',
        ['listening', 'home-europe'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Am Anfang hatte ich großes Heimweh, aber inzwischen habe ich mich gut eingelebt.',
            'She was very homesick at first but has settled in well now.',
            [
              'She has never been homesick.',
              'She is still very unhappy and wants to go back.',
              'She has just arrived and feels at home.',
            ],
          ),
          heard(
            'l2',
            'Wenn ich den Geruch von frischem Brot rieche, denke ich sofort an meine Heimat.',
            'The smell of fresh bread reminds him of home.',
            [
              'He does not like the smell of fresh bread.',
              'He bakes bread every morning.',
              'Fresh bread reminds him of his holiday.',
            ],
          ),
          heard(
            'l3',
            'Seit es im Schengen-Raum keine Grenzkontrollen mehr gibt, fahre ich ohne Pass zu meiner Familie nach Polen.',
            'Without border checks she drives to Poland without a passport.',
            [
              'She needs a visa for Poland.',
              'There are strict border checks to Poland.',
              'Her family lives in Germany.',
            ],
          ),
          heard(
            'l4',
            'Die Europäische Union hat heute 27 Mitgliedsstaaten und 24 Amtssprachen.',
            'The EU has 27 member states and 24 official languages.',
            [
              'The EU has 24 member states and 27 official languages.',
              'The EU has one official language.',
              'The EU has 12 member states.',
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
        'What is home?',
        'Talk about home with a new friend and about regional food.',
        ['communication', 'home-europe'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'home',
            title: 'Was ist Heimat?',
            emoji: '💛',
            setting: 'At a language café, Sofia asks you what home means to you.',
            turns: [
              say(
                'Sofia',
                'Was bedeutet Heimat für dich? Dein Geburtsort?',
                'What does home mean to you? Your place of birth?',
              ),
              you('Nicht unbedingt. Heimat ist für mich, wo meine Freunde sind.', [
                'Nicht unbedingt. Heimat ist für mich, wo meine Freunde.',
                'The wo-clause needs a verb at the end: … wo meine Freunde sind.',
              ]),
              say('Sofia', 'Und hast du manchmal Heimweh?', 'And are you sometimes homesick?'),
              you(
                'Ja, manchmal. Ich vermisse vor allem das Essen.',
                ['Ja, manchmal. Ich vermisse vor allem die Essen.', 'das Essen is neuter.'],
                [
                  'Ja, manchmal. Ich vermisse vor allem dem Essen.',
                  'vermissen takes the accusative: das Essen.',
                ],
              ),
            ],
          },
          {
            id: 'food',
            title: 'Ein Gericht aus der Heimat',
            emoji: '🥟',
            setting: 'You bring a dish from home to a party. Your colleague Lars is curious.',
            turns: [
              say('Lars', 'Mmh, was ist das?', 'Mmm, what is that?'),
              you(
                'Das ist ein Familienrezept aus meiner Heimat. Die Zubereitung dauert zwei Stunden.',
                [
                  'Das ist ein Familienrezept aus meiner Heimat. Der Zubereitung dauert zwei Stunden.',
                  'Words ending in -ung are feminine: die Zubereitung.',
                ],
              ),
              say('Lars', 'Wow! Hast du das selbst gekocht?', 'Wow! Did you cook that yourself?'),
              you('Ja. Beim Kochen fühle ich mich wie zu Hause.', [
                'Ja. Beim kochen fühle ich mich wie zu Hause.',
                'A verb used as a noun takes a capital letter: beim Kochen.',
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
        'Home blitz',
        'Compounds, verbs as nouns and Europe – true or false?',
        ['grammar', 'word-formation'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Es heißt „die Reisefreiheit“, weil es „die Freiheit“ heißt.', true),
          tf('b2', 'Es heißt „der Lebensgefühl“.', false, 'das Gefühl → das Lebensgefühl.'),
          tf('b3', 'Verben als Nomen sind immer neutral: das Lesen, das Kochen.', true),
          tf('b4', 'Man schreibt: „beim kochen“.', false, 'As a noun: beim Kochen.'),
          tf('b5', 'In „Mitgliedsstaat“ steht ein Fugen-s.', true),
          tf('b6', 'Wer Heimweh hat, vermisst sein Zuhause.', true),
          tf(
            'b7',
            'Wer auswandert, bleibt in seinem Heimatland.',
            false,
            'auswandern = to move to another country.',
          ),
          tf('b8', 'In der EU gibt es mehr als zwanzig Amtssprachen.', true),
          tf(
            'b9',
            'Reisefreiheit bedeutet, dass man nicht reisen darf.',
            false,
            'It means you may travel freely.',
          ),
          tf('b10', 'In Komposita ist meistens der erste Teil betont.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Home words, Europe and word formation in one round.',
        ['vocabulary', 'grammar', 'home-europe'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', '___ Grenzkontrolle dauerte nur fünf Minuten.', 'Die', ['Der', 'Das', 'Den']),
            {
              Der: 'The last part decides: die Kontrolle → die Grenzkontrolle.',
              Das: 'The last part decides: die Kontrolle → die Grenzkontrolle.',
              Den: 'The last part decides: die Kontrolle; nominative: die.',
            },
            'word-formation',
          ),
          hint(
            q('c2', 'Beim ___ höre ich Musik.', 'Laufen', ['laufen', 'Lauf', 'Läufer']),
            {
              laufen: 'As a noun: beim Laufen (capital letter).',
              Lauf: 'der Lauf is one run; for the activity use the infinitive: beim Laufen.',
              Läufer: 'der Läufer is the runner (a person).',
            },
            'word-formation',
          ),
          hint(
            q('c3', 'Arbeit + Platz =', 'der Arbeitsplatz', [
              'das Arbeitplatz',
              'der Arbeitplatz',
              'die Arbeitsplatz',
            ]),
            {
              'das Arbeitplatz': 'der Platz decides the article, and Arbeit needs a linking s.',
              'der Arbeitplatz': 'Arbeit needs a linking s: Arbeitsplatz.',
              'die Arbeitsplatz': 'der Platz decides the article: der Arbeitsplatz.',
            },
            'word-formation',
          ),
          q('c4', 'das Heimweh', 'homesickness', ['origin', 'roots', 'attitude to life']),
          q('c5', 'sich einleben', 'to settle in', ['to emigrate', 'to move out', 'to go home']),
          q('c6', 'die Reisefreiheit', 'freedom to travel', [
            'border check',
            'member state',
            'official language',
          ]),
          q(
            'c7',
            'Someone asks how you feel in your new town. It is good. You say …',
            'Ich fühle mich hier zu Hause.',
            [
              'Ich habe großes Heimweh.',
              'Ich möchte auswandern.',
              'Ich vermisse vor allem das Essen.',
            ],
          ),
          q('c8', 'die Herkunft', 'origin', ['homesickness', 'smell', 'roots']),
          q('c9', 'auswandern', 'to emigrate', ['to settle in', 'to travel', 'to miss']),
          q('c10', 'die Amtssprache', 'official language', [
            'mother tongue',
            'dialect',
            'member state',
          ]),
        ],
      },
    ),
  ],
};
