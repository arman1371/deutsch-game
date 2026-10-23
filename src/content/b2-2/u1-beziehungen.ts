import { byDe, flashcards, listen, memory, quizDeEn, spell, vocabList } from '../builders';
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
  unitB22,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'b2-2-beziehungen';

const bonds = vocabList(U, 'Relationships & family forms', [
  ['Patchwork-Familie', 'blended family', '👨‍👩‍👧‍👦', 'die', 'Patchwork-Familien'],
  ['Stiefvater', 'stepfather', '👨', 'der', 'Stiefväter'],
  ['Stiefkind', 'stepchild', '🧒', 'das', 'Stiefkinder'],
  ['Halbbruder', 'half-brother', '👦', 'der', 'Halbbrüder'],
  ['Lebensgefährte', 'partner (male)', '🧑‍🤝‍🧑', 'der', 'Lebensgefährten'],
  ['Einzelkind', 'only child', '🧍', 'das', 'Einzelkinder'],
  ['Großfamilie', 'extended family', '👪', 'die', 'Großfamilien'],
  ['Partnerschaft', 'partnership, relationship', '👫', 'die', 'Partnerschaften'],
  ['Ehe', 'marriage', '💒', 'die', 'Ehen'],
  ['Verlobung', 'engagement', '💍', 'die', 'Verlobungen'],
  ['Trennung', 'separation, break-up', '💔', 'die', 'Trennungen'],
  ['Eifersucht', 'jealousy', '😒', 'die'],
  ['Geborgenheit', 'security, feeling safe', '🤗', 'die'],
  ['Zusammenhalt', 'solidarity, cohesion', '🫂', 'der'],
  ['sich versöhnen', 'to make up, to reconcile', '🕊️'],
]);

const diversity = vocabList(U, 'Diversity & prejudice', [
  ['Vielfalt', 'diversity, variety', '🌈', 'die'],
  ['Benachteiligung', 'disadvantage', '⚖️', 'die', 'Benachteiligungen'],
  ['Diskriminierung', 'discrimination', '🚫', 'die', 'Diskriminierungen'],
  ['Chancengleichheit', 'equal opportunities', '🟰', 'die'],
  ['Minderheit', 'minority', '👥', 'die', 'Minderheiten'],
  ['Integration', 'integration', '🧩', 'die'],
  ['Zugehörigkeit', 'belonging', '🏷️', 'die'],
  ['Akzeptanz', 'acceptance', '👍', 'die'],
  ['Hautfarbe', 'skin colour', '🎨', 'die', 'Hautfarben'],
  ['Weltanschauung', 'worldview', '🔭', 'die', 'Weltanschauungen'],
  ['Mitgefühl', 'compassion', '💞', 'das'],
  ['ausgrenzen', 'to exclude', '🚷'],
  ['akzeptieren', 'to accept', '✅'],
  ['vielfältig', 'diverse, varied', '🌍'],
  ['respektvoll', 'respectful', '🙏'],
]);

const vocab = [...bonds, ...diversity];

export const beziehungen: UnitContent = {
  unit: unitB22({
    id: U,
    order: 1,
    title: 'Beziehungen & Vielfalt',
    subtitle: 'Family forms, partnerships, prejudice and diversity at work',
    emoji: '🫂',
    goals: [
      'Describe modern family forms and relationships and put statistics into words',
      'Talk about prejudice, discrimination and diversity and argue for or against',
      'Compare expectations with reality (anders als erwartet)',
    ],
    grammar: [
      'Nouns with fixed prepositions: Angst vor, Hoffnung auf, Interesse an, Streit um',
      'Comparative clauses: genauso … wie, anders als, mehr … als ich gedacht hatte, je nachdem, ob',
      'Question words with prepositions: Wovor hat sie Angst? Worauf hofft er?',
    ],
    vocabFields: ['Relationships & family forms', 'Diversity & prejudice'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-bonds',
      'flashcards',
      meta(
        'Family forms & relationships',
        'Patchwork-Familie, Lebensgefährte, Trennung – modern ways of living together.',
        ['vocabulary', 'relationships-diversity'],
        1,
        5,
      ),
      flashcards(bonds),
    ),
    activity(
      U,
      'flash-diversity',
      'flashcards',
      meta(
        'Diversity & prejudice',
        'Vielfalt, Benachteiligung, Akzeptanz – words for a diverse society.',
        ['vocabulary', 'relationships-diversity'],
        1,
        5,
      ),
      flashcards(diversity),
    ),
    activity(
      U,
      'quiz-words',
      'quiz',
      meta(
        'What does it mean?',
        'Relationship and diversity words in English.',
        ['vocabulary', 'relationships-diversity'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'Stiefvater',
          'Lebensgefährte',
          'Verlobung',
          'Geborgenheit',
          'Zusammenhalt',
          'Benachteiligung',
          'Chancengleichheit',
          'Minderheit',
          'Zugehörigkeit',
          'Weltanschauung',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'memory-bonds',
      'memory',
      meta(
        'Match the words',
        'Pair German relationship words with their meaning.',
        ['vocabulary', 'relationships-diversity'],
        2,
        4,
      ),
      memory(
        byDe(bonds, 'Einzelkind', 'Großfamilie', 'Ehe', 'Trennung', 'Eifersucht', 'sich versöhnen'),
      ),
    ),
    activity(
      U,
      'listen-words',
      'listen',
      meta(
        'Hear the diversity words',
        'Listen and pick the meaning.',
        ['listening', 'relationships-diversity'],
        2,
        4,
      ),
      listen(
        byDe(
          diversity,
          'Diskriminierung',
          'Integration',
          'Akzeptanz',
          'Hautfarbe',
          'Mitgefühl',
          'ausgrenzen',
        ),
        diversity,
      ),
    ),
    activity(
      U,
      'spell-words',
      'spell',
      meta(
        'Spell the family words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'relationships-diversity'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(bonds, 'Stiefkind', 'Halbbruder'), 'unscramble').items,
          ...spell(byDe(diversity, 'Minderheit'), 'unscramble').items,
          ...spell(byDe(bonds, 'Partnerschaft', 'Verlobung'), 'type').items,
          ...spell(byDe(diversity, 'Vielfalt'), 'type').items,
          dictation(
            'd1',
            'Die Patchwork-Familie hält fest zusammen.',
            'The blended family sticks together.',
          ),
          dictation(
            'd2',
            'Vielfalt am Arbeitsplatz ist eine Chance.',
            'Diversity at the workplace is an opportunity.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-noun-prepositions',
      'gapfill',
      meta(
        'Angst vor, Hoffnung auf …',
        'Pick the preposition that belongs to the noun.',
        ['grammar', 'noun-prepositions', 'relationships-diversity'],
        2,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'n1',
              'Sie hat große Angst ___ dem Alleinsein.',
              'vor',
              ['vor', 'an', 'um', 'auf'],
              'She is very afraid of being alone.',
              'die Angst vor + Dativ',
            ),
            {
              an: 'Angst is followed by vor, not an.',
              um: 'um goes with nouns like Sorge or Streit, not Angst.',
              auf: 'auf goes with Hoffnung or Wunsch, not Angst.',
            },
          ),
          hint(
            gap(
              'n2',
              'Die Hoffnung ___ eine stabile Beziehung gibt er nicht auf.',
              'auf',
              ['auf', 'für', 'an', 'zu'],
              'He does not give up hope for a stable relationship.',
              'die Hoffnung auf + Akkusativ',
            ),
            {
              für: 'Hoffnung is followed by auf (the verb hoffen auf works the same way).',
              an: 'an goes with Interesse or Zweifel, not Hoffnung.',
              zu: 'zu is not used after Hoffnung.',
            },
          ),
          hint(
            gap(
              'n3',
              'Sein Interesse ___ anderen Kulturen wächst.',
              'an',
              ['an', 'auf', 'vor', 'mit'],
              'His interest in other cultures is growing.',
              'das Interesse an + Dativ',
            ),
            {
              auf: 'auf goes with Hoffnung or Vorfreude, not Interesse.',
              vor: 'vor goes with Angst or Respekt, not Interesse.',
              mit: 'mit is not used after Interesse.',
            },
          ),
          hint(
            gap(
              'n4',
              'Der Streit ___ das Erbe dauerte Jahre.',
              'um',
              ['um', 'für', 'von', 'zu'],
              'The quarrel over the inheritance lasted years.',
              'der Streit um + Akkusativ',
            ),
            {
              für: 'Streit is followed by um (or mit for the person).',
              von: 'von does not go with Streit.',
              zu: 'zu does not go with Streit.',
            },
          ),
          hint(
            gap(
              'n5',
              'Wir haben großen Respekt ___ jeder Lebensform.',
              'vor',
              ['vor', 'an', 'zu', 'um'],
              'We have great respect for every way of living.',
              'der Respekt vor + Dativ',
            ),
            {
              an: 'an goes with Interesse, not Respekt.',
              zu: 'zu goes with Vertrauen or Lust, not Respekt.',
              um: 'um goes with Streit or Sorge, not Respekt.',
            },
          ),
          hint(
            gap(
              'n6',
              'Ihre Abneigung ___ große Familienfeiern ist bekannt.',
              'gegen',
              ['gegen', 'von', 'vor', 'auf'],
              'Her dislike of big family parties is well known.',
              'die Abneigung gegen + Akkusativ',
            ),
            {
              von: 'von does not go with Abneigung.',
              vor: 'vor goes with Angst or Respekt, not Abneigung.',
              auf: 'auf goes with Hoffnung or Lust, not Abneigung.',
            },
          ),
          hint(
            typed(
              'n7',
              'Der Wunsch ___ Geborgenheit ist ganz normal.',
              'nach',
              'The wish for security is completely normal.',
              'der Wunsch nach + Dativ',
            ),
            { auf: 'Wunsch is followed by nach (Hoffnung is the noun that takes auf).' },
          ),
          hint(
            typed(
              'n8',
              'Wovor hat sie Angst? – ___ dem Alleinsein. (answer the question)',
              'vor',
              'What is she afraid of? – Of being alone.',
              'wo(r) + preposition: Wovor? → vor dem Alleinsein',
            ),
            { an: 'The question word Wovor shows the preposition: vor.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-comparisons',
      'gapfill',
      meta(
        'Anders als erwartet',
        'als, wie or je nachdem in comparative clauses.',
        ['grammar', 'comparative-clauses', 'relationships-diversity'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'c1',
              'Das Zusammenleben war schwieriger, ___ wir gedacht hatten.',
              'als',
              ['als', 'wie', 'wenn', 'dass'],
              'Living together was harder than we had thought.',
              'comparative + als',
            ),
            {
              wie: 'After a comparative (schwieriger) German uses als, not wie.',
              wenn: 'wenn means “if/when” and does not compare.',
              dass: 'dass does not compare two things.',
            },
          ),
          hint(
            gap(
              'c2',
              'Die Hochzeit war genauso schön, ___ ich es mir vorgestellt hatte.',
              'wie',
              ['wie', 'als', 'denn', 'dass'],
              'The wedding was just as beautiful as I had imagined.',
              'genauso … wie for equality',
            ),
            {
              als: 'genauso … is completed by wie. als is only for unequal comparisons.',
              denn: 'denn is a reason (because), not a comparison.',
              dass: 'dass does not compare two things.',
            },
          ),
          hint(
            gap(
              'c3',
              'Mein Stiefvater ist ganz anders ___ ich dachte.',
              'als',
              ['als', 'wie', 'von', 'zu'],
              'My stepfather is completely different from what I thought.',
              'anders als',
            ),
            {
              wie: 'anders is followed by als in standard German (anders wie is colloquial).',
              von: 'With anders you compare with als.',
              zu: 'With anders you compare with als.',
            },
          ),
          hint(
            gap(
              'c4',
              '___ nachdem, ob die Familie zustimmt, planen wir die Feier.',
              'Je',
              ['Je', 'Wie', 'Nach', 'So'],
              'Depending on whether the family agrees, we plan the party.',
              'je nachdem, ob / wie …',
            ),
            {
              Wie: 'The fixed phrase is je nachdem (“depending on”).',
              Nach: 'The fixed phrase is je nachdem (“depending on”).',
              So: 'The fixed phrase is je nachdem (“depending on”).',
            },
          ),
          typed(
            'c5',
            'Die Familie ist nicht so groß, ___ ich dachte.',
            'wie',
            'The family is not as big as I thought.',
            'so … wie, also in the negative',
          ),
          hint(
            gap(
              'c6',
              'Eine Beziehung ist oft mehr Arbeit, ___ viele glauben.',
              'als',
              ['als', 'wie', 'was', 'denn'],
              'A relationship is often more work than many think.',
              'mehr … als',
            ),
            {
              wie: 'mehr is a comparative, so you need als.',
              was: 'was is a relative pronoun here, not a comparison word.',
              denn: 'denn is not used for comparison in modern German.',
            },
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-prepositions',
      'sortit',
      meta(
        'vor, auf or an?',
        'Which preposition goes with the noun?',
        ['grammar', 'noun-prepositions', 'relationships-diversity'],
        2,
        5,
      ),
      {
        instruction: 'Which preposition follows the noun?',
        buckets: [
          { id: 'vor', label: '… vor', emoji: '😨' },
          { id: 'auf', label: '… auf', emoji: '🤞' },
          { id: 'an', label: '… an', emoji: '🔍' },
        ],
        items: sortItems('p', [
          ['die Angst', 'vor'],
          ['der Respekt', 'vor'],
          ['der Schutz', 'vor'],
          ['die Hoffnung', 'auf'],
          ['die Antwort', 'auf'],
          ['die Vorfreude', 'auf'],
          ['der Verzicht', 'auf'],
          ['das Interesse', 'an'],
          ['der Zweifel', 'an'],
          ['der Mangel', 'an'],
          ['die Erinnerung', 'an'],
        ]),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build the sentence',
        'Nouns with prepositions and comparative clauses.',
        ['grammar', 'noun-prepositions', 'comparative-clauses'],
        3,
        7,
      ),
      {
        items: [
          sent('s1', 'The family is bigger than I had expected.', [
            'Die',
            'Familie',
            'ist',
            'größer,',
            'als',
            'ich',
            'erwartet',
            'hatte.',
          ]),
          sent('s2', 'He reacted differently than I had thought.', [
            'Er',
            'reagierte',
            'anders,',
            'als',
            'ich',
            'gedacht',
            'hatte.',
          ]),
          sent('s3', 'She is afraid of being alone.', [
            'Sie',
            'hat',
            'Angst',
            'vor',
            'dem',
            'Alleinsein.',
          ]),
          sent('s4', 'Our interest in other cultures is growing.', [
            'Unser',
            'Interesse',
            'an',
            'anderen',
            'Kulturen',
            'wächst.',
          ]),
          sent('s5', 'It depends on whether the family agrees.', [
            'Das',
            'hängt',
            'davon',
            'ab,',
            'ob',
            'die',
            'Familie',
            'zustimmt.',
          ]),
          sent(
            's6',
            'Depending on how it goes, we will move in together.',
            ['Je', 'nachdem,', 'wie', 'es', 'läuft,', 'ziehen', 'wir', 'zusammen.'],
            { alsoAccept: ['Wir ziehen zusammen, je nachdem, wie es läuft.'] },
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-talk',
      'listen',
      meta(
        'Family stories',
        'Listen to people talk about their relationships.',
        ['listening', 'relationships-diversity'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Meine Patchwork-Familie ist größer, als ich je gedacht hätte.',
            'My blended family is bigger than I would ever have thought.',
            [
              'My blended family is smaller than I wanted.',
              'I would like to have a bigger family one day.',
              'My family has never met each other.',
            ],
          ),
          heard(
            'l2',
            'Sie fühlt sich ausgegrenzt, weil sie eine andere Weltanschauung hat.',
            'She feels excluded because she has a different worldview.',
            [
              'She feels at home because her views are the same as everyone’s.',
              'She is excluded because she arrives late.',
              'She wants to change her worldview next year.',
            ],
          ),
          heard(
            'l3',
            'Nach der Trennung haben sie sich schnell wieder versöhnt.',
            'After the break-up they quickly made up again.',
            [
              'After the break-up they never spoke again.',
              'They separated after a quick reconciliation.',
              'They got engaged right before the break-up.',
            ],
          ),
          heard(
            'l4',
            'Unsere Firma setzt auf Vielfalt und Chancengleichheit.',
            'Our company relies on diversity and equal opportunities.',
            [
              'Our company is afraid of diversity.',
              'Our company has very few employees.',
              'Our company pays equal bonuses only to managers.',
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
        'Family and fairness',
        'Talk about a new family and about prejudice at work.',
        ['communication', 'relationships-diversity', 'noun-prepositions'],
        2,
        7,
      ),
      {
        scenes: [
          {
            id: 'new-family',
            title: 'Die neue Familie',
            emoji: '👨‍👩‍👧‍👦',
            setting: 'Your colleague Jana tells you about her new patchwork family.',
            turns: [
              say(
                'Jana',
                'Seit dem Sommer wohnen wir zu sechst zusammen – mein Lebensgefährte und seine Kinder sind eingezogen.',
                'Since the summer the six of us live together – my partner and his children moved in.',
              ),
              you(
                'Das klingt spannend. Ist es anders, als du erwartet hast?',
                [
                  'Das klingt spannend. Ist es anders wie du erwartet hast?',
                  'After anders you need als.',
                ],
                [
                  'Das klingt spannend. Ist es anders, als du erwartet.',
                  'The clause needs its verb: als du erwartet hast.',
                ],
              ),
              say(
                'Jana',
                'Ja, es ist lauter, aber auch herzlicher, als ich gedacht hatte.',
                'Yes, it is louder but also warmer than I thought.',
              ),
              you(
                'Hast du Angst vor Konflikten mit den Stiefkindern?',
                ['Hast du Angst an Konflikten mit den Stiefkindern?', 'Angst takes vor.'],
                ['Hast du Angst auf Konflikten mit den Stiefkindern?', 'Angst takes vor.'],
              ),
              say(
                'Jana',
                'Ein bisschen. Aber wir haben viel Respekt voreinander.',
                'A little. But we have a lot of respect for each other.',
              ),
            ],
          },
          {
            id: 'prejudice',
            title: 'Vorurteile im Büro',
            emoji: '🏢',
            setting: 'A diversity manager asks you about experiences at work.',
            turns: [
              say(
                'Frau Brandt',
                'Haben Sie schon einmal erlebt, dass jemand wegen seiner Herkunft benachteiligt wurde?',
                'Have you ever experienced someone being disadvantaged because of their origin?',
              ),
              you(
                'Ja, einmal. Ein Kollege wurde ausgegrenzt, ohne dass jemand etwas sagte.',
                [
                  'Ja, einmal. Ein Kollege wurde ausgegrenzt, ohne dass jemand etwas sagen.',
                  'In the ohne-dass clause the verb must be conjugated: sagte.',
                ],
                [
                  'Ja, einmal. Ein Kollege wurde ausgegrenzt, ohne jemand etwas sagte.',
                  'ohne needs dass before a clause with its own subject.',
                ],
              ),
              say(
                'Frau Brandt',
                'Was wünschen Sie sich von der Firma?',
                'What do you wish for from the company?',
              ),
              you(
                'Ich wünsche mir mehr Akzeptanz und echte Chancengleichheit.',
                [
                  'Ich wünsche mir mehr Akzeptanz und echt Chancengleichheit.',
                  'An adjective before a feminine noun without article needs the ending -e: echte Chancengleichheit.',
                ],
                [
                  'Ich wünsche mich mehr Akzeptanz und echte Chancengleichheit.',
                  'sich wünschen with a dative pronoun: wünsche mir.',
                ],
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
        'Relationship blitz',
        'Nouns with prepositions, comparisons and vocabulary – true or false?',
        ['grammar', 'noun-prepositions', 'comparative-clauses'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Sie hat Angst vor dem Alleinsein.', true),
          tf('b2', 'Sie hat Angst an dem Alleinsein.', false, 'Angst takes vor.'),
          tf('b3', 'Das Interesse an Kunst ist groß.', true),
          tf('b4', 'Das Interesse auf Kunst ist groß.', false, 'Interesse takes an.'),
          tf('b5', 'Es war schöner, als ich gedacht hatte.', true),
          tf('b6', 'Es war schöner, wie ich gedacht hatte.', false, 'After a comparative: als.'),
          tf('b7', 'Er ist genauso nett wie sein Bruder.', true),
          tf('b8', 'Er ist genauso nett als sein Bruder.', false, 'genauso … wie.'),
          tf('b9', 'Der Streit um das Haus war lang.', true),
          tf('b10', 'Ein Einzelkind hat viele Geschwister.', false, 'An only child has none.'),
          tf('b11', 'Chancengleichheit bedeutet gleiche Möglichkeiten für alle.', true),
          tf(
            'b12',
            'Ein Stiefvater ist der Bruder der Mutter.',
            false,
            'He is the mother’s husband.',
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
        'Relationship words, prepositions and comparisons in one round.',
        ['vocabulary', 'grammar', 'relationships-diversity'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Die Hoffnung ___ eine Versöhnung bleibt.', 'auf', ['an', 'vor', 'um']),
          q('c2', 'der Respekt ___ anderen Menschen', 'vor', ['auf', 'an', 'von']),
          q('c3', 'Das Fest war besser, ___ wir erwartet hatten.', 'als', ['wie', 'dass', 'denn']),
          q('c4', 'Er ist so alt ___ ich.', 'wie', ['als', 'denn', 'von']),
          q('c5', 'Worauf hofft sie? Die Frage fragt nach …', 'Hoffnung auf etwas', [
            'Angst vor etwas',
            'Interesse an etwas',
            'Streit um etwas',
          ]),
          q('c6', 'die Benachteiligung', 'disadvantage', ['acceptance', 'belonging', 'worldview']),
          q('c7', 'die Zugehörigkeit', 'belonging', ['minority', 'jealousy', 'compassion']),
          q('c8', 'ausgrenzen', 'to exclude', ['to accept', 'to make up', 'to move in']),
          q('c9', 'Ein Kind ohne Geschwister ist ein …', 'Einzelkind', [
            'Stiefkind',
            'Halbbruder',
            'Lebensgefährte',
          ]),
          q('c10', 'Das hängt ___ ab, ob wir Zeit haben.', 'davon', ['dafür', 'darauf', 'damit']),
        ],
      },
    ),
  ],
};
