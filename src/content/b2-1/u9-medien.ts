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

const U = 'b2-1-medien';

const news = vocabList(U, 'News and media use', [
  ['Mediennutzung', 'media use', '📱', 'die'],
  ['Nachrichtenquelle', 'news source', '📰', 'die', 'Nachrichtenquellen'],
  ['Falschmeldung', 'fake news item', '🚨', 'die', 'Falschmeldungen'],
  ['Leitartikel', 'editorial', '🗞️', 'der', 'Leitartikel'],
  ['Berichterstattung', 'news coverage', '🎙️', 'die'],
  ['Mediathek', 'online media library', '🎞️', 'die', 'Mediatheken'],
  ['Videoplattform', 'video platform', '📺', 'die', 'Videoplattformen'],
  ['Filterblase', 'filter bubble', '🫧', 'die', 'Filterblasen'],
  ['Reichweite', 'reach', '📡', 'die'],
  ['Boulevardpresse', 'tabloid press', '🧻', 'die'],
  ['verbreiten', 'to spread', '📣'],
  ['recherchieren', 'to research', '🔍'],
  ['aufbauschen', 'to blow up, exaggerate', '🎈'],
]);

const digital = vocabList(U, 'Digital life and games', [
  ['Chatbot', 'chatbot', '🤖', 'der', 'Chatbots'],
  ['Algorithmus', 'algorithm', '🧮', 'der', 'Algorithmen'],
  ['Digitalisierung', 'digitalisation', '💾', 'die'],
  ['Onlinesucht', 'internet addiction', '📵', 'die'],
  ['Computerspiel', 'computer game', '🎮', 'das', 'Computerspiele'],
  ['Spielanleitung', 'game instructions', '📖', 'die', 'Spielanleitungen'],
  ['Mehrspielermodus', 'multiplayer mode', '👾', 'der'],
  ['Bezahlschranke', 'paywall', '💳', 'die', 'Bezahlschranken'],
  ['Nomade', 'nomad', '🏕️', 'der', 'Nomaden'],
  ['ortsunabhängig', 'location-independent', '🌍'],
  ['vernetzt', 'networked, connected', '🕸️'],
  ['automatisieren', 'to automate', '⚙️'],
]);

const links = vocabList(U, 'Linking sentences', [
  [
    'Viele Jugendliche spielen online. Darüber streiten sie oft mit ihren Eltern.',
    'Many young people play online. They often argue with their parents about it.',
    '🎮',
  ],
  [
    'Der Akku ist leer. Dadurch schaltet sich das Gerät aus.',
    'The battery is empty. As a result the device switches off.',
    '🔋',
  ],
  [
    'Sie hat einen Podcast gegründet. Damit erreicht sie viele Menschen.',
    'She founded a podcast. With it she reaches many people.',
    '🎧',
  ],
  [
    'Es gibt viele Falschmeldungen. Daran sind oft Algorithmen beteiligt.',
    'There are many fake news items. Algorithms are often involved in them.',
    '🚨',
  ],
  [
    'Er will Journalist werden. Dafür studiert er Medienwissenschaft.',
    'He wants to become a journalist. For that he studies media studies.',
    '🎓',
  ],
  [
    'Die Firma setzt Chatbots ein. Dabei sparen Kunden Zeit.',
    'The company uses chatbots. Customers save time doing so.',
    '💬',
  ],
  [
    'Er liest die Nachrichten. Danach schaltet er das Handy aus.',
    'He reads the news. Afterwards he switches off his phone.',
    '📴',
  ],
]);

const vocab = [...news, ...digital, ...links];

export const medien: UnitContent = {
  unit: unitB21({
    id: U,
    order: 9,
    title: 'Medien & Digitales',
    subtitle: 'News, fake news, chatbots and games – and words that link sentences',
    emoji: '📰',
    goals: [
      'Talk about media use and judge news sources',
      'Discuss chatbots, algorithms and computer games',
      'Link sentences with reference words such as dadurch, damit, darüber',
    ],
    grammar: [
      'Reference words: dadurch, damit, dafür, darüber, daran, dabei – they must match the verb’s preposition.',
      'Linking sentences without repeating words.',
    ],
    vocabFields: ['News and media use', 'Digital life and games', 'Linking sentences'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-news',
      'flashcards',
      meta(
        'News and media use',
        'Leitartikel, Falschmeldung, Filterblase – how we read the news.',
        ['vocabulary', 'media-news'],
        1,
        5,
      ),
      flashcards(news),
    ),
    activity(
      U,
      'flash-digital',
      'flashcards',
      meta(
        'Digital life and games',
        'Chatbot, Algorithmus, Mehrspielermodus – words for the digital world.',
        ['vocabulary', 'media-news'],
        1,
        5,
      ),
      flashcards(digital),
    ),
    activity(
      U,
      'flash-links',
      'flashcards',
      meta(
        'Linking sentences',
        'Pairs of sentences linked with darüber, damit, dadurch …',
        ['vocabulary', 'communication', 'media-news'],
        1,
        4,
      ),
      flashcards(links),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Media in pictures', 'Name what you see.', ['vocabulary', 'media-news'], 1, 4),
      quizEmoji(
        byDe(
          [...news, ...digital],
          'Falschmeldung',
          'Leitartikel',
          'Mediathek',
          'Filterblase',
          'Chatbot',
          'Computerspiel',
          'Bezahlschranke',
          'Nomade',
        ),
      ),
    ),
    activity(
      U,
      'listen-links',
      'listen',
      meta('Hear the links', 'Listen and pick the meaning.', ['listening', 'media-news'], 2, 4),
      listen(links),
    ),
    activity(
      U,
      'memory-explain',
      'memory',
      meta(
        'Say it differently',
        'Match each word with its explanation in German.',
        ['vocabulary', 'media-news'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'die Filterblase', b: 'Man sieht nur Meinungen, die man schon kennt.' },
          { id: 'm2', a: 'die Reichweite', b: 'Wie viele Menschen eine Meldung erreicht' },
          { id: 'm3', a: 'die Falschmeldung', b: 'eine erfundene oder falsche Nachricht' },
          { id: 'm4', a: 'recherchieren', b: 'Informationen gezielt suchen' },
          { id: 'm5', a: 'aufbauschen', b: 'eine Sache größer machen, als sie ist' },
          { id: 'm6', a: 'die Bezahlschranke', b: 'Artikel nur gegen Geld lesen' },
        ],
      },
    ),
    activity(
      U,
      'spell-news',
      'spell',
      meta(
        'Spell the new words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'media-news'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(news, 'Reichweite', 'Leitartikel', 'verbreiten'), 'unscramble').items,
          ...spell(byDe(digital, 'Algorithmus', 'Spielanleitung', 'Digitalisierung'), 'type').items,
          dictation(
            'd1',
            'Der Akku ist leer. Dadurch schaltet sich das Gerät aus.',
            'the battery is empty; as a result the device switches off',
          ),
          dictation(
            'd2',
            'Sie hat einen Podcast gegründet. Damit erreicht sie viele Menschen.',
            'she founded a podcast; with it she reaches many people',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-reference',
      'sortit',
      meta(
        'Which reference word?',
        'Sort the verbs by the da-word that points back to them.',
        ['grammar', 'text-cohesion'],
        2,
        4,
      ),
      {
        instruction: 'Which da-word fits the preposition of the verb?',
        buckets: [
          { id: 'darueber', label: 'darüber', emoji: '1️⃣' },
          { id: 'daran', label: 'daran', emoji: '2️⃣' },
          { id: 'dafuer', label: 'dafür', emoji: '3️⃣' },
          { id: 'damit', label: 'damit', emoji: '4️⃣' },
        ],
        items: sortItems('d', [
          ['sich ärgern …', 'darueber'],
          ['sich unterhalten …', 'darueber'],
          ['teilnehmen …', 'daran'],
          ['sich beteiligen …', 'daran'],
          ['sorgen …', 'dafuer'],
          ['sich interessieren …', 'dafuer'],
          ['rechnen …', 'damit'],
          ['umgehen …', 'damit'],
        ]),
      },
    ),
    activity(
      U,
      'gap-reference',
      'gapfill',
      meta(
        'Pointing back',
        'Choose the reference word that links the two sentences.',
        ['grammar', 'text-cohesion'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'd1',
              'Viele Jugendliche spielen online. ___ streiten sie oft mit ihren Eltern.',
              'Darüber',
              ['Darüber', 'Darauf', 'Dafür', 'Daran'],
              'Many young people play online. They often argue with their parents about it.',
              'streiten über → darüber.',
            ),
            {
              Darauf: 'streiten takes über, not auf.',
              Dafür: 'streiten takes über, not für.',
              Daran: 'streiten takes über, not an.',
            },
          ),
          hint(
            gap(
              'd2',
              'Der Akku ist leer. ___ schaltet sich das Gerät aus.',
              'Dadurch',
              ['Dadurch', 'Dafür', 'Damit', 'Davon'],
              'The battery is empty. As a result the device switches itself off.',
              'dadurch = through that, as a result.',
            ),
            {
              Dafür: 'dafür means “for that”, not “as a result”.',
              Damit: 'damit means “with that”; the empty battery is the cause: dadurch.',
              Davon: 'davon means “of that” and does not express a result here.',
            },
          ),
          hint(
            gap(
              'd3',
              'Sie hat einen Podcast gegründet. ___ erreicht sie viele Menschen.',
              'Damit',
              ['Damit', 'Dazu', 'Davon', 'Darum'],
              'She founded a podcast. With it she reaches many people.',
              'damit = with that (means).',
            ),
            {
              Dazu: 'dazu means “in addition” or “for that”; the podcast is the means: damit.',
              Davon: 'davon means “of that”.',
              Darum: 'darum means “therefore”; the sentence names a means.',
            },
          ),
          hint(
            gap(
              'd4',
              'Es gibt viele Falschmeldungen. ___ sind oft Algorithmen beteiligt.',
              'Daran',
              ['Daran', 'Darüber', 'Dafür', 'Davon'],
              'There is a lot of fake news. Algorithms are often involved in it.',
              'beteiligt sein an → daran.',
            ),
            {
              Darüber: 'beteiligt sein takes an, not über.',
              Dafür: 'beteiligt sein takes an, not für.',
              Davon: 'beteiligt sein takes an, not von.',
            },
          ),
          hint(
            gap(
              'd5',
              'Er will Journalist werden. ___ studiert er Medienwissenschaft.',
              'Dafür',
              ['Dafür', 'Darauf', 'Daran', 'Davon'],
              'He wants to become a journalist. That is why he studies media studies.',
              'dafür = for that purpose.',
            ),
            {
              Darauf: 'darauf means “on that” or “after that”; the sentence names a purpose.',
              Daran: 'daran means “on that” and does not express a purpose.',
              Davon: 'davon means “of that”.',
            },
          ),
          hint(
            gap(
              'd6',
              'Die Firma setzt Chatbots ein. ___ sparen Kunden Zeit.',
              'Dabei',
              ['Dabei', 'Dazu', 'Davor', 'Darauf'],
              'The company uses chatbots. Customers save time in the process.',
              'dabei = while doing so.',
            ),
            {
              Dazu: 'dazu means “in addition”.',
              Davor: 'davor means “before that”.',
              Darauf: 'darauf means “after that” or “on that”.',
            },
          ),
          hint(
            typed(
              'd7',
              'Er hofft auf eine Antwort. ___ wartet er schon lange. (darauf)',
              'Darauf',
              'He hopes for an answer. He has been waiting for it for a long time.',
              'warten auf → darauf.',
            ),
            { Darüber: 'warten takes auf, so darauf.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences-links',
      'sentence',
      meta(
        'Linked sentences',
        'Build sentences with darüber, dadurch, damit and danach.',
        ['grammar', 'word-order', 'text-cohesion'],
        3,
        6,
      ),
      {
        items: [
          sent(
            's1',
            'Many young people play online; they often argue with their parents about it.',
            [
              'Viele',
              'Jugendliche',
              'spielen',
              'online,',
              'darüber',
              'streiten',
              'sie',
              'oft',
              'mit',
              'ihren',
              'Eltern.',
            ],
          ),
          sent('s2', 'The battery is empty; as a result the device switches itself off.', [
            'Der',
            'Akku',
            'ist',
            'leer,',
            'dadurch',
            'schaltet',
            'sich',
            'das',
            'Gerät',
            'aus.',
          ]),
          sent('s3', 'She founded a podcast and with it reaches many people.', [
            'Sie',
            'hat',
            'einen',
            'Podcast',
            'gegründet',
            'und',
            'erreicht',
            'damit',
            'viele',
            'Menschen.',
          ]),
          sent('s4', 'Algorithms also spread fake news.', [
            'Falschmeldungen',
            'werden',
            'auch',
            'durch',
            'Algorithmen',
            'verbreitet.',
          ]),
          sent('s5', 'He reads the news and switches his phone off afterwards.', [
            'Er',
            'liest',
            'die',
            'Nachrichten',
            'und',
            'schaltet',
            'danach',
            'das',
            'Handy',
            'aus.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-media',
      'listen',
      meta(
        'Media talk',
        'Listen to short statements and pick what they mean.',
        ['listening', 'media-news'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Wer nur Beiträge liest, die zu seiner Meinung passen, lebt in einer Filterblase und sieht andere Sichtweisen kaum noch.',
            'People who read only posts that match their opinion live in a filter bubble.',
            [
              'People in a filter bubble read all opinions equally.',
              'A filter bubble is a kind of water filter.',
              'Only young people live in a filter bubble.',
            ],
          ),
          heard(
            'l2',
            'Viele Zeitungen haben eine Bezahlschranke eingeführt. Dadurch lesen weniger Leute die Artikel kostenlos.',
            'Many papers introduced a paywall, so fewer people read articles for free.',
            [
              'Newspapers abolished all fees; more people read for free.',
              'Newspapers only publish pictures now.',
              'Paywalls were removed last year.',
            ],
          ),
          heard(
            'l3',
            'Der Chatbot beantwortet einfache Fragen rund um die Uhr, bei komplizierten Anliegen leitet er an einen Mitarbeiter weiter.',
            'The chatbot answers simple questions around the clock and forwards complicated ones to staff.',
            [
              'The chatbot answers only complicated questions.',
              'The chatbot replaces all employees.',
              'The chatbot is only available at night.',
            ],
          ),
          heard(
            'l4',
            'Im Mehrspielermodus spielt man mit Freunden zusammen, die an einem ganz anderen Ort sitzen können.',
            'In multiplayer mode you play with friends who may be somewhere else.',
            [
              'In multiplayer mode you must play alone.',
              'In multiplayer mode friends need to sit in the same room.',
              'Multiplayer mode is for reading the instructions.',
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
        'Checking news and talking about games',
        'Question a suspicious message and explain a game.',
        ['communication', 'media-news'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'check',
            title: 'Eine Meldung überprüfen',
            emoji: '🔍',
            setting: 'A friend sends you a shocking headline. You are not sure it is true.',
            turns: [
              say(
                'Freund',
                'Hast du das gelesen? Angeblich werden ab morgen alle Handys verboten!',
                'Did you read that? Supposedly all mobile phones will be banned from tomorrow!',
              ),
              you(
                'Das klingt nach einer Falschmeldung. Wer hat das berichtet? Ich würde zuerst die Quelle überprüfen.',
                [
                  'Echt? Dann gebe ich das sofort an alle weiter!',
                  'Do not spread it before you have checked the source.',
                ],
                [
                  'Das klingt nach einer Falschmeldung. Wer hat das berichtet? Ich würde zuerst die Quelle überprüft.',
                  'After würde the infinitive goes to the end: überprüfen.',
                ],
              ),
              say(
                'Freund',
                'Es stand in einem Blog, ohne Namen des Autors.',
                'It was on a blog, without the author’s name.',
              ),
              you(
                'Dann ist es keine seriöse Quelle. Lass uns bei einer Nachrichtenseite nachschauen.',
                [
                  'Dann stimmt es bestimmt.',
                  'A blog without an author is a reason to doubt, not to believe.',
                ],
              ),
            ],
          },
          {
            id: 'game',
            title: 'Ein Computerspiel erklären',
            emoji: '🎮',
            setting: 'You explain a game to a friend who has never played it.',
            turns: [
              say(
                'Freundin',
                'Kannst du mir kurz erklären, wie das Spiel funktioniert?',
                'Can you briefly explain how the game works?',
              ),
              you(
                'Klar. Im Mehrspielermodus spielen zwei Teams gegeneinander. Wer zuerst fünf Punkte hat, gewinnt.',
                [
                  'Keine Ahnung. Lies die Spielanleitung.',
                  'Explain the rules in a friendly way instead of sending her away.',
                ],
                [
                  'Klar. Im Mehrspielermodus zwei Teams spielen gegeneinander. Wer zuerst fünf Punkte hat, gewinnt.',
                  'After Im Mehrspielermodus the verb comes second: … spielen zwei Teams gegeneinander.',
                ],
              ),
              say(
                'Freundin',
                'Und wie lange dauert eine Runde?',
                'And how long does a round last?',
              ),
              you('Etwa zehn Minuten. Dabei muss man gut zusammenarbeiten.', [
                'Etwa zehn Jahre.',
                'Give a realistic answer and add one tip.',
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
        'Media blitz',
        'Reference words and media vocabulary – true or false?',
        ['grammar', 'text-cohesion'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Ich ärgere mich. Darüber habe ich gestern gesprochen.', true),
          tf('b2', 'Er interessiert sich für Politik. Dafür liest er jeden Tag Zeitung.', true),
          tf(
            'b3',
            'Sie wartet auf den Zug. Darüber wartet sie schon lange.',
            false,
            'warten takes auf: Darauf wartet sie schon lange.',
          ),
          tf('b4', 'Wir rechnen mit Regen. Damit haben wir nicht gerechnet.', true),
          tf('b5', 'Die Daten sind weg. Dadurch ist das Projekt gescheitert.', true),
          tf(
            'b6',
            'Dadurch heißt immer „deshalb“, aber nie „durch etwas“.',
            false,
            'dadurch can mean “through that” (means) or “as a result”.',
          ),
          tf('b7', 'Ein Leitartikel gibt die Meinung der Redaktion wieder.', true),
          tf(
            'b8',
            'Eine Falschmeldung ist immer geprüft und sicher.',
            false,
            'A Falschmeldung is false or invented.',
          ),
          tf(
            'b9',
            'Wer ortsunabhängig arbeitet, muss immer im Büro sitzen.',
            false,
            'ortsunabhängig means independent of a fixed place.',
          ),
          tf('b10', 'Ein Algorithmus ist eine Reihe von Rechenschritten.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Media words and reference words in one round.',
        ['vocabulary', 'grammar', 'media-news'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Die Zahl der Nutzer steigt. ___ wächst auch die Reichweite.', 'Dadurch', [
              'Darüber',
              'Dagegen',
              'Davor',
            ]),
            {
              Darüber: 'darüber means “about that” and does not express a result.',
              Dagegen: 'dagegen means “against that”.',
              Davor: 'davor means “before that”.',
            },
            'text-cohesion',
          ),
          hint(
            q('c2', 'Ich freue mich auf das Konzert. ___ spare ich schon lange.', 'Dafür', [
              'Darüber',
              'Daran',
              'Davon',
            ]),
            {
              Darüber: 'The sentence names a purpose; dafür fits (sparen für).',
              Daran: 'sparen takes für: dafür.',
              Davon: 'sparen takes für: dafür.',
            },
            'text-cohesion',
          ),
          hint(
            q(
              'c3',
              'Viele Menschen nehmen am Online-Kurs teil. ___ beteiligen sich auch Schulen.',
              'Daran',
              ['Darüber', 'Dafür', 'Damit'],
            ),
            {
              Darüber: 'sich beteiligen takes an: daran.',
              Dafür: 'sich beteiligen takes an: daran.',
              Damit: 'sich beteiligen takes an: daran.',
            },
            'text-cohesion',
          ),
          hint(
            q('c4', 'Wir haben viele Anrufe bekommen. ___ haben wir nicht gerechnet.', 'Damit', [
              'Daran',
              'Darüber',
              'Darauf',
            ]),
            {
              Daran: 'rechnen takes mit: damit.',
              Darüber: 'rechnen takes mit: damit.',
              Darauf: 'rechnen takes mit: damit.',
            },
            'text-cohesion',
          ),
          q('c5', 'der Leitartikel', 'editorial', ['paywall', 'news coverage', 'reach']),
          q('c6', 'die Filterblase', 'filter bubble', ['algorithm', 'tabloid press', 'chatbot']),
          q('c7', 'verbreiten', 'to spread', ['to research', 'to exaggerate', 'to automate']),
          q('c8', 'vernetzt', 'networked, connected', [
            'location-independent',
            'drained',
            'reserved',
          ]),
          q(
            'c9',
            'You doubt a rumour and want to check it.',
            'Das klingt nach einer Falschmeldung. Ich überprüfe zuerst die Quelle.',
            [
              'Das stimmt bestimmt. Ich verbreite es sofort.',
              'Das ist mir egal. Ich lese nie Nachrichten.',
              'Ich glaube alles, was im Netz steht.',
            ],
          ),
          q('c10', 'die Digitalisierung', 'digitalisation', [
            'reach',
            'internet addiction',
            'streaming service',
          ]),
        ],
      },
    ),
  ],
};
