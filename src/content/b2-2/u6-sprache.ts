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

const U = 'b2-2-sprache';

const varieties = vocabList(U, 'Varieties of language', [
  ['Mundart', 'dialect', '🏔️', 'die', 'Mundarten'],
  ['Umgangssprache', 'colloquial language', '💬', 'die'],
  ['Schriftsprache', 'written language', '✍️', 'die'],
  ['Fachsprache', 'technical language', '🧑‍🔬', 'die', 'Fachsprachen'],
  ['Jugendsprache', 'youth slang', '🧑‍🎤', 'die'],
  ['Landessprache', 'national language', '🏳️', 'die', 'Landessprachen'],
  ['Minderheitensprache', 'minority language', '🗣️', 'die', 'Minderheitensprachen'],
  ['Sprachgrenze', 'language border', '🚧', 'die', 'Sprachgrenzen'],
  ['Anglizismus', 'anglicism', '🇬🇧', 'der', 'Anglizismen'],
  ['Lehnwort', 'loanword', '🔁', 'das', 'Lehnwörter'],
  ['Sprachwandel', 'language change', '🔄', 'der'],
  ['Muttersprachler', 'native speaker', '🧑', 'der', 'Muttersprachler'],
  ['Zweisprachigkeit', 'bilingualism', '👥', 'die'],
  ['Mehrsprachigkeit', 'multilingualism', '🌐', 'die'],
  ['Ausdrucksweise', 'way of expressing oneself', '💬', 'die'],
]);

const skills = vocabList(U, 'Reading, translating & understanding', [
  ['Alphabetisierung', 'teaching literacy', '🔤', 'die'],
  ['Analphabetismus', 'illiteracy', '📕', 'der'],
  ['Lesekompetenz', 'reading skills', '📖', 'die'],
  ['Legasthenie', 'dyslexia', '🧠', 'die'],
  ['Sprachbarriere', 'language barrier', '🧱', 'die', 'Sprachbarrieren'],
  ['Verständigung', 'communication, understanding', '🤝', 'die'],
  ['Dolmetscher', 'interpreter', '🎧', 'der', 'Dolmetscher'],
  ['Lernmethode', 'learning method', '🧭', 'die', 'Lernmethoden'],
  ['Sprachaufenthalt', 'stay abroad to learn a language', '🛫', 'der', 'Sprachaufenthalte'],
  ['Betonung', 'stress, emphasis', '❗', 'die', 'Betonungen'],
  ['Satzmelodie', 'sentence intonation', '🎼', 'die'],
  ['Nuance', 'nuance', '🎨', 'die', 'Nuancen'],
  ['sich verständigen', 'to communicate, to make oneself understood', '🙌'],
  ['sich ausdrücken', 'to express oneself', '🗯️'],
  ['dolmetschen', 'to interpret', '🔊'],
  ['einprägen', 'to memorise', '🧩'],
]);

const vocab = [...varieties, ...skills];

export const sprache: UnitContent = {
  unit: unitB22({
    id: U,
    order: 6,
    title: 'Sprache & Regionen',
    subtitle: 'Dialects, loanwords, bilingualism, literacy and how languages change',
    emoji: '🗺️',
    goals: [
      'Talk about dialects, regional varieties and language change',
      'Discuss multilingualism, literacy and learning methods',
      'Contrast two things precisely and use compact participle phrases',
    ],
    grammar: [
      'Extended participle: das vom Kunden bestellte Produkt, die ständig wachsende Zahl',
      'Contrast: während / wohingegen (verb at the end), hingegen / dagegen / jedoch (verb second), im Gegensatz zu',
      'einerseits … andererseits',
    ],
    vocabFields: ['Varieties of language', 'Reading, translating & understanding'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-varieties',
      'flashcards',
      meta(
        'Varieties of language',
        'Mundart, Lehnwort, Sprachwandel – how people really speak.',
        ['vocabulary', 'language-regions'],
        1,
        5,
      ),
      flashcards(varieties),
    ),
    activity(
      U,
      'flash-skills',
      'flashcards',
      meta(
        'Reading, translating & understanding',
        'Dolmetscher, Lesekompetenz, Sprachbarriere – communicating across languages.',
        ['vocabulary', 'language-regions'],
        1,
        5,
      ),
      flashcards(skills),
    ),
    activity(
      U,
      'quiz-words',
      'quiz',
      meta(
        'What does it mean?',
        'Language words in English.',
        ['vocabulary', 'language-regions'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'Schriftsprache',
          'Minderheitensprache',
          'Sprachgrenze',
          'Anglizismus',
          'Zweisprachigkeit',
          'Analphabetismus',
          'Legasthenie',
          'Sprachaufenthalt',
          'Satzmelodie',
          'einprägen',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'memory-varieties',
      'memory',
      meta(
        'Match the language words',
        'Pair German words with their meaning.',
        ['vocabulary', 'language-regions'],
        2,
        4,
      ),
      memory(
        byDe(
          varieties,
          'Mundart',
          'Fachsprache',
          'Jugendsprache',
          'Lehnwort',
          'Ausdrucksweise',
          'Landessprache',
        ),
      ),
    ),
    activity(
      U,
      'listen-words',
      'listen',
      meta(
        'Hear the language words',
        'Listen and pick the meaning.',
        ['listening', 'language-regions'],
        2,
        4,
      ),
      listen(
        byDe(
          vocab,
          'Sprachwandel',
          'Muttersprachler',
          'Alphabetisierung',
          'Dolmetscher',
          'Betonung',
          'sich ausdrücken',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'spell-words',
      'spell',
      meta(
        'Spell the language words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'language-regions'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(varieties, 'Mundart', 'Lehnwort'), 'unscramble').items,
          ...spell(byDe(skills, 'Nuance'), 'unscramble').items,
          ...spell(byDe(varieties, 'Ausdrucksweise', 'Sprachwandel'), 'type').items,
          ...spell(byDe(skills, 'Dolmetscher'), 'type').items,
          dictation(
            'd1',
            'Die Zahl der Anglizismen wächst ständig.',
            'The number of anglicisms keeps growing.',
          ),
          dictation(
            'd2',
            'Im Süden spricht man Mundart, im Norden eher Hochdeutsch.',
            'In the south people speak dialect, in the north rather standard German.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-participle',
      'gapfill',
      meta(
        'Das vom Kunden bestellte Produkt',
        'Choose the right participle and ending before the noun.',
        ['grammar', 'extended-participle', 'language-regions'],
        3,
        7,
      ),
      {
        items: [
          hint(
            gap(
              'e1',
              'das vom Kunden ___ Produkt',
              'bestellte',
              ['bestellte', 'bestellende', 'bestellten', 'bestellt'],
              'the product ordered by the customer',
              'Partizip II + ending = passive/finished: das bestellte Produkt',
            ),
            {
              bestellende:
                'Partizip I (bestellend) is active. The product is ordered by the customer (passive).',
              bestellten: 'After das the neuter singular ending is -e.',
              bestellt: 'Before a noun the participle needs an adjective ending: bestellte.',
            },
          ),
          hint(
            gap(
              'e2',
              'die an der Uni ___ Studentinnen',
              'studierenden',
              ['studierenden', 'studierende', 'studierten', 'studiert'],
              'the women who are studying at the university',
              'Partizip I = at the same time; plural after die: -en',
            ),
            {
              studierende: 'After die the plural ending is -en.',
              studierten: 'This is a past form of the verb, not a participle.',
              studiert:
                'The participle II studiert needs an adjective ending, and the meaning is active, so Partizip I.',
            },
          ),
          hint(
            gap(
              'e3',
              'ein seit Jahren ___ Projekt',
              'geplantes',
              ['geplantes', 'geplantem', 'geplanten', 'geplanter'],
              'a project planned for years',
              'ein + neuter nominative: -es',
            ),
            {
              geplantem: '-em is the dative ending.',
              geplanten: '-en would be accusative masculine or plural.',
              geplanter: '-er is masculine nominative; Projekt is neuter.',
            },
          ),
          hint(
            gap(
              'e4',
              'der in dieser Region ___ Dialekt',
              'gesprochene',
              ['gesprochene', 'sprechende', 'gesprochen', 'gesprochenen'],
              'the dialect spoken in this region',
              'Partizip II: the dialect is spoken (passive)',
            ),
            {
              sprechende:
                'sprechend is Partizip I (active). A dialect does not speak – it is spoken.',
              gesprochen: 'Before the noun the participle needs an ending.',
              gesprochenen: 'After der (masculine nominative) the ending is -e.',
            },
          ),
          hint(
            gap(
              'e5',
              'die immer weiter ___ Zahl der Anglizismen',
              'wachsende',
              ['wachsende', 'gewachsene', 'wachsender', 'wachsenden'],
              'the ever-growing number of anglicisms',
              'Partizip I: the number is growing right now',
            ),
            {
              gewachsene:
                'gewachsene (Partizip II) means the growth is finished. The number keeps growing, so Partizip I.',
              wachsender: '-er is not right after die (feminine).',
              wachsenden: '-en would be plural or dative.',
            },
          ),
          typed(
            'e6',
            'die vor zwei Jahren ___ (gründen) Schule',
            'gegründete',
            'the school founded two years ago',
            'Partizip II gegründet + -e',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-contrast',
      'gapfill',
      meta(
        'wohingegen, hingegen, im Gegensatz zu',
        'Choose the connector that expresses the contrast.',
        ['grammar', 'adversative-connectors', 'language-regions'],
        3,
        7,
      ),
      {
        items: [
          hint(
            gap(
              'a1',
              'Er mag Berge, ___ sie das Meer liebt.',
              'wohingegen',
              ['wohingegen', 'hingegen', 'dagegen', 'jedoch'],
              'He likes mountains, whereas she loves the sea.',
              'wohingegen = whereas; verb at the end',
            ),
            {
              hingegen:
                'hingegen opens a main clause: the verb would come second (… hingegen liebt sie).',
              dagegen: 'dagegen opens a main clause: the verb would come second.',
              jedoch: 'jedoch opens a main clause: the verb would come second.',
            },
          ),
          hint(
            gap(
              'a2',
              'Sie lebt in der Stadt, er ___ wohnt auf dem Land.',
              'hingegen',
              ['hingegen', 'wohingegen', 'während', 'obwohl'],
              'She lives in the city, he on the other hand lives in the country.',
              'hingegen: verb in second position',
            ),
            {
              wohingegen:
                'wohingegen would send the verb to the end (wohnt is in second position).',
              während: 'während starts a clause with the verb at the end.',
              obwohl: 'obwohl means “although”.',
            },
          ),
          hint(
            gap(
              'a3',
              '___ Wien ist Graz ruhiger.',
              'Im Gegensatz zu',
              ['Im Gegensatz zu', 'Im Gegensatz von', 'Als Gegensatz zu', 'Im Gegenteil zu'],
              'In contrast to Vienna, Graz is quieter.',
              'im Gegensatz zu + Dativ',
            ),
            {
              'Im Gegensatz von': 'The fixed phrase is im Gegensatz zu.',
              'Als Gegensatz zu': 'The fixed phrase is im Gegensatz zu.',
              'Im Gegenteil zu':
                'Im Gegenteil stands alone (“on the contrary”); with a noun use im Gegensatz zu.',
            },
          ),
          hint(
            gap(
              'a4',
              '___ im Norden eher Platt gesprochen wird, hört man im Süden Bairisch.',
              'Während',
              ['Während', 'Dagegen', 'Hingegen', 'Jedoch'],
              'Whereas Low German is more commonly spoken in the north, you hear Bavarian in the south.',
              'während + verb at the end (gesprochen wird)',
            ),
            {
              Dagegen:
                'dagegen opens a main clause. Here the verb wird is at the end, so you need a subordinating word.',
              Hingegen: 'hingegen opens a main clause. Here the verb is at the end.',
              Jedoch: 'jedoch opens a main clause. Here the verb is at the end.',
            },
          ),
          hint(
            gap(
              'a5',
              'Einerseits lernt man schnell, ___ vergisst man vieles wieder.',
              'andererseits',
              ['andererseits', 'außerdem', 'deshalb', 'nämlich'],
              'On the one hand you learn quickly, on the other hand you forget a lot again.',
              'einerseits … andererseits',
            ),
            {
              außerdem: 'außerdem adds something (“besides”); it does not contrast.',
              deshalb: 'deshalb gives a consequence.',
              nämlich: 'nämlich gives an explanation.',
            },
          ),
          typed(
            'a6',
            'Die Älteren sprechen Dialekt, die Jüngeren ___ sprechen meist Hochdeutsch.',
            'hingegen',
            'The older people speak dialect, the younger ones on the other hand mostly speak standard German.',
            'hingegen / dagegen / jedoch: main clause, verb second',
            ['dagegen', 'jedoch'],
          ),
          hint(
            gap(
              'a7',
              'Im Süden ist die Mundart stark, ___ ist sie im Norden fast verschwunden.',
              'dagegen',
              ['dagegen', 'damit', 'deswegen', 'trotzdem'],
              'In the south the dialect is strong, whereas in the north it has almost disappeared.',
              'dagegen = in contrast',
            ),
            {
              damit: 'damit expresses a purpose.',
              deswegen: 'deswegen gives a consequence.',
              trotzdem:
                'trotzdem means “nevertheless”; the two facts are in contrast, not in conflict.',
            },
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-contrast',
      'sortit',
      meta(
        'Where does the verb go?',
        'Sort the contrast sentences by connector type.',
        ['grammar', 'adversative-connectors', 'language-regions'],
        3,
        5,
      ),
      {
        instruction: 'Which kind of contrast expression is it?',
        buckets: [
          { id: 'sub', label: 'während / wohingegen (verb at the end)', emoji: '🔚' },
          { id: 'main', label: 'hingegen / dagegen / jedoch (verb second)', emoji: '2️⃣' },
          { id: 'prep', label: 'im Gegensatz zu + Dativ', emoji: '🔀' },
        ],
        items: sortItems('c', [
          ['Er liebt Berge, wohingegen sie das Meer bevorzugt.', 'sub'],
          ['Während der Süden ländlich ist, ist der Norden städtisch.', 'sub'],
          ['Sie lernt Latein, während er Griechisch lernt.', 'sub'],
          ['Der Süden ist ländlich, der Norden dagegen städtisch.', 'main'],
          ['Er liebt Berge, sie bevorzugt hingegen das Meer.', 'main'],
          ['Ich spreche Dialekt, meine Kinder jedoch sprechen Hochdeutsch.', 'main'],
          ['Im Gegensatz zu Wien ist Graz ruhig.', 'prep'],
          ['Im Gegensatz zu ihrem Bruder spricht sie leise.', 'prep'],
        ]),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build the sentence',
        'Participle phrases and contrast.',
        ['grammar', 'extended-participle', 'adversative-connectors'],
        3,
        7,
      ),
      {
        items: [
          sent('s1', 'The product ordered by the customer was delivered yesterday.', [
            'Das',
            'vom',
            'Kunden',
            'bestellte',
            'Produkt',
            'wurde',
            'gestern',
            'geliefert.',
          ]),
          sent('s2', 'The ever-growing number of anglicisms worries many people.', [
            'Die',
            'ständig',
            'wachsende',
            'Zahl',
            'der',
            'Anglizismen',
            'beunruhigt',
            'viele',
            'Menschen.',
          ]),
          sent('s3', 'The dialect spoken in this region is dying out.', [
            'Der',
            'in',
            'dieser',
            'Region',
            'gesprochene',
            'Dialekt',
            'stirbt',
            'aus.',
          ]),
          sent('s4', 'He likes mountains, whereas she loves the sea.', [
            'Er',
            'mag',
            'Berge,',
            'wohingegen',
            'sie',
            'das',
            'Meer',
            'liebt.',
          ]),
          sent(
            's5',
            'The older ones speak dialect, the younger ones however speak standard German.',
            [
              'Die',
              'Älteren',
              'sprechen',
              'Dialekt,',
              'die',
              'Jüngeren',
              'hingegen',
              'sprechen',
              'Hochdeutsch.',
            ],
          ),
          sent(
            's6',
            'In contrast to Vienna, Graz is quieter.',
            ['Im', 'Gegensatz', 'zu', 'Wien', 'ist', 'Graz', 'ruhiger.'],
            { alsoAccept: ['Graz ist im Gegensatz zu Wien ruhiger.'] },
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-talk',
      'listen',
      meta(
        'People talk about language',
        'Listen to opinions about dialects and learning.',
        ['listening', 'language-regions'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Die Mundart ist im Süden noch lebendig, im Norden hingegen kaum noch zu hören.',
            'Dialect is still alive in the south, but hardly heard any more in the north.',
            [
              'Dialect is dying out in the south and thriving in the north.',
              'Dialect is equally common everywhere.',
              'People in the north have never spoken dialect.',
            ],
          ),
          heard(
            'l2',
            'Das von vielen Jugendlichen benutzte Vokabular ändert sich ständig.',
            'The vocabulary used by many young people keeps changing.',
            [
              'Young people no longer use any vocabulary.',
              'Many young people use old vocabulary.',
              'The vocabulary was banned by the school.',
            ],
          ),
          heard(
            'l3',
            'Wegen ihrer Legasthenie braucht sie beim Lesen mehr Zeit.',
            'Because of her dyslexia she needs more time for reading.',
            [
              'Because of her speed she reads more than others.',
              'She has stopped reading altogether.',
              'She needs more time because she is learning a new language.',
            ],
          ),
          heard(
            'l4',
            'Der Dolmetscher übersetzt nicht nur Wörter, sondern auch den Tonfall.',
            'The interpreter translates not only words but also the tone.',
            [
              'The interpreter only translates written texts.',
              'The interpreter refused to translate the tone.',
              'The interpreter works only with technical words.',
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
        'Dialect and bilingual children',
        'Talk about dialects and about growing up with two languages.',
        ['communication', 'language-regions', 'adversative-connectors'],
        2,
        7,
      ),
      {
        scenes: [
          {
            id: 'dialect',
            title: 'Dialekt oder Hochdeutsch?',
            emoji: '🏔️',
            setting: 'Anna has just moved to a region with a strong dialect.',
            turns: [
              say(
                'Anna',
                'Ich verstehe den Dialekt hier kaum. Die Älteren sprechen fast nur Mundart.',
                'I hardly understand the dialect here. The older people speak almost only dialect.',
              ),
              you(
                'Die Jüngeren hingegen sprechen meistens Hochdeutsch.',
                [
                  'Die Jüngeren hingegen meistens sprechen Hochdeutsch.',
                  'The verb comes right after hingegen (position 2 of the clause).',
                ],
                [
                  'Die Jüngeren wohingegen sprechen meistens Hochdeutsch.',
                  'wohingegen starts a subordinate clause: the verb would go to the end.',
                ],
              ),
              say(
                'Anna',
                'Stimmt. Aber die hier gesprochene Mundart ist auch für Muttersprachler schwer.',
                'True. But the dialect spoken here is hard even for native speakers.',
              ),
              you(
                'Ja, die in der Region gesprochene Mundart ändert sich ständig.',
                [
                  'Ja, die in der Region sprechende Mundart ändert sich ständig.',
                  'A dialect is spoken – Partizip II (gesprochene), not Partizip I.',
                ],
                [
                  'Ja, die in der Region gesprochen Mundart ändert sich ständig.',
                  'Before a noun the participle needs an ending: gesprochene.',
                ],
              ),
            ],
          },
          {
            id: 'bilingual',
            title: 'Zweisprachig aufwachsen',
            emoji: '👧',
            setting: 'A teacher asks about your daughter’s two languages.',
            turns: [
              say(
                'Lehrerin',
                'Ihre Tochter wächst zweisprachig auf. Wie klappt das?',
                'Your daughter is growing up bilingual. How is that going?',
              ),
              you(
                'Zu Hause sprechen wir Türkisch, in der Schule hingegen lernt sie Deutsch.',
                [
                  'Zu Hause sprechen wir Türkisch, in der Schule wohingegen lernt sie Deutsch.',
                  'wohingegen sends the verb to the end; use hingegen with the verb second.',
                ],
                [
                  'Zu Hause sprechen wir Türkisch, in der Schule hingegen sie lernt Deutsch.',
                  'After the first element (in der Schule hingegen) the verb follows: lernt sie.',
                ],
              ),
              say(
                'Lehrerin',
                'Und gibt es manchmal Verständigungsprobleme?',
                'And are there sometimes communication problems?',
              ),
              you(
                'Selten. Sie drückt sich inzwischen sehr gut aus.',
                [
                  'Selten. Sie drückt sich inzwischen sehr gut.',
                  'sich ausdrücken is separable: the prefix aus goes to the end.',
                ],
                [
                  'Selten. Sie ausdrückt sich inzwischen sehr gut.',
                  'The prefix is separated: drückt … aus.',
                ],
              ),
              say(
                'Lehrerin',
                'Schön. Die in der Schule angebotenen Sprachkurse helfen sicher zusätzlich.',
                'Nice. The language courses offered at school will surely help as well.',
              ),
              you(
                'Ja, die angebotenen Kurse sind eine große Hilfe.',
                [
                  'Ja, die angebotene Kurse sind eine große Hilfe.',
                  'After die + plural the ending is -en: die angebotenen Kurse.',
                ],
                [
                  'Ja, die angebotenden Kurse sind eine große Hilfe.',
                  'Partizip II of anbieten is angeboten (no -d-).',
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
        'Language blitz',
        'Participles, contrast and vocabulary – true or false?',
        ['grammar', 'extended-participle', 'adversative-connectors'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Das vom Kunden bestellte Produkt ist angekommen.', true),
          tf(
            'b2',
            'Das vom Kunden bestellt Produkt ist angekommen.',
            false,
            'The participle needs an ending: bestellte.',
          ),
          tf('b3', 'Die ständig wachsende Zahl bereitet Sorgen.', true),
          tf(
            'b4',
            'Der gesprochenen Dialekt ist schwer.',
            false,
            'After der (nominative masculine) the ending is -e.',
          ),
          tf('b5', 'Er mag Tee, wohingegen sie Kaffee trinkt.', true),
          tf(
            'b6',
            'Er mag Tee, wohingegen sie trinkt Kaffee.',
            false,
            'wohingegen sends the verb to the end.',
          ),
          tf('b7', 'Sie mag Tee, er hingegen trinkt Kaffee.', true),
          tf(
            'b8',
            'Im Gegensatz zu Wien Graz ist ruhig.',
            false,
            'The verb follows the first element: Im Gegensatz zu Wien ist Graz ruhig.',
          ),
          tf('b9', 'Ein Lehnwort kommt aus einer anderen Sprache.', true),
          tf(
            'b10',
            'Ein Dolmetscher übersetzt nur geschriebene Texte.',
            false,
            'Interpreters translate speech; translators work with texts.',
          ),
          tf('b11', 'Analphabetismus bedeutet, dass jemand nicht lesen und schreiben kann.', true),
          tf(
            'b12',
            'Die Schriftsprache ist die Sprache, die man im Alltag spricht.',
            false,
            'It is the language used in writing.',
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
        'Language words, participles and contrast in one round.',
        ['vocabulary', 'grammar', 'language-regions'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'der von Experten ___ Bericht', 'geschriebene', [
            'schreibende',
            'geschrieben',
            'schreibenden',
          ]),
          q('c2', 'die ständig ___ Preise', 'steigenden', ['steigende', 'steigend', 'steigender']),
          q('c3', 'Er trinkt Tee, ___ sie Kaffee bevorzugt.', 'wohingegen', [
            'hingegen',
            'dagegen',
            'jedoch',
          ]),
          q('c4', 'Er trinkt Tee, sie ___ trinkt Kaffee.', 'hingegen', [
            'wohingegen',
            'während',
            'obwohl',
          ]),
          q('c5', '___ Wien ist Graz kleiner.', 'Im Gegensatz zu', [
            'Im Gegensatz von',
            'Im Gegenteil zu',
            'Anstatt zu',
          ]),
          q('c6', 'einerseits … ___', 'andererseits', ['außerdem', 'deshalb', 'trotzdem']),
          q('c7', 'der Sprachwandel', 'language change', ['language border', 'dialect', 'stress']),
          q('c8', 'der Muttersprachler', 'native speaker', [
            'interpreter',
            'bilingual person',
            'linguist',
          ]),
          q('c9', 'die Sprachbarriere', 'language barrier', [
            'sentence melody',
            'youth slang',
            'illiteracy',
          ]),
          q('c10', 'sich verständigen', 'to communicate', [
            'to translate',
            'to memorise',
            'to explain',
          ]),
        ],
      },
    ),
  ],
};
