import { byDe, vocabList } from '../builders';
import {
  activity,
  gap,
  heard,
  meta,
  modalPerfectTable,
  q,
  say,
  sent,
  sortItems,
  tf,
  typed,
  unitC22,
  vocabPath,
  withLesson,
  withWhy,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'c2-2-literatur';
const LESSON = 'c22-subjective-modals' as const;

const buch = vocabList(U, 'Books & authors', [
  ['Chronist', 'chronicler', '🎙️', 'der', 'Chronisten'],
  ['Protagonist', 'protagonist', '🦸', 'der', 'Protagonisten'],
  ['Handlungsverlauf', 'course of the plot', '🧵', 'der', 'Handlungsverläufe'],
  ['Spielort', 'setting, venue', '📍', 'der', 'Spielorte'],
  ['Lyrik', 'poetry', '🪶', 'die'],
  ['Erstausgabe', 'first edition', '📚', 'die', 'Erstausgaben'],
  ['Lektor', 'editor (publishing)', '🏢', 'der', 'Lektoren'],
  ['Übersetzung', 'translation', '🔤', 'die', 'Übersetzungen'],
  ['Feuilleton', 'arts pages', '📰', 'das', 'Feuilletons'],
  ['Vorwort', 'foreword', '🏷️', 'das', 'Vorworte'],
  ['Nachlass', 'literary estate', '🗃️', 'der'],
  ['Nachwort', 'afterword', '🎤', 'das', 'Nachworte'],
  ['Zitat', 'quotation', '💭', 'das', 'Zitate'],
  ['Autobiografie', 'autobiography', '📓', 'die', 'Autobiografien'],
]);

const kritik = vocabList(U, 'Reviewing a book', [
  ['mitreißend', 'rousing, gripping', '🧲'],
  ['langatmig', 'long-winded', '🐌'],
  ['hintergründig', 'subtle, with hidden depth', '💞'],
  ['tiefgründig', 'profound', '🌊'],
  ['vorhersehbar', 'predictable', '🔮'],
  ['sprachgewaltig', 'linguistically powerful', '🦁'],
  ['konstruiert', 'contrived', '🧩'],
  ['schildern', 'to portray vividly', '🖌️'],
  ['anspielen auf', 'to allude to', '🎯'],
  ['abfassen', 'to draft, to compose', '✒️'],
  ['monieren', 'to criticise, to take issue with', '🧐'],
  ['Kurzfassung', 'abridged version', '🏁', 'die', 'Kurzfassungen'],
  ['Leseempfehlung', 'reading recommendation', '👍', 'die', 'Leseempfehlungen'],
]);

const vocab = [...buch, ...kritik];
const grammarTags = ['grammar', LESSON, 'c22-literature'] as const;

export const literatur: UnitContent = {
  unit: unitC22({
    id: U,
    order: 2,
    title: 'Literatur & Rezension',
    subtitle: 'Novels, authors and book reviews – what modal verbs say about sources and certainty',
    emoji: '📖',
    goals: [
      'Write and understand a book review',
      'Report hearsay, claims and assumptions with subjective modal verbs',
      'Refer to the past with modal verb + perfect infinitive',
    ],
    grammar: [
      'sollen = hearsay: Der Autor soll Millionär sein.',
      'wollen = a claim: Sie will das Buch nie gelesen haben.',
      'müssen / dürfte / könnte / kann nicht = certainty, probability, possibility, impossibility',
      'Past reference: modal + Partizip II + haben / sein',
      'Modality verbs: scheinen, drohen, pflegen + zu',
    ],
    vocabFields: ['Books & authors', 'Reviewing a book'],
  }),
  vocab,
  activities: [
    ...vocabPath({
      unitId: U,
      topic: 'c22-literature',
      lists: [
        {
          key: 'books',
          title: 'Books & authors',
          description: 'Chronist, Handlungsverlauf, Lektor – the world of literature.',
          vocab: buch,
        },
        {
          key: 'review',
          title: 'Reviewing a book',
          description: 'mitreißend, langatmig, Feuilleton – the vocabulary of a review.',
          vocab: kritik,
        },
      ],
      pictures: byDe(
        buch,
        'Lektor',
        'Übersetzung',
        'Feuilleton',
        'Vorwort',
        'Nachlass',
        'Nachwort',
        'Zitat',
        'Autobiografie',
      ),
      picturesTitle: 'On the bookshelf',
      picturesDescription: 'Name the literary word.',
      listening: kritik,
      listenTitle: 'Hear the reviewer',
      pairs: byDe(
        kritik,
        'mitreißend',
        'langatmig',
        'hintergründig',
        'tiefgründig',
        'vorhersehbar',
        'sprachgewaltig',
        'konstruiert',
        'schildern',
      ),
      memoryTitle: 'Reviewer’s memory',
      memoryDescription: 'Match each review word with its meaning.',
      unscramble: byDe(buch, 'Handlungsverlauf', 'Lektor', 'Zitat'),
      typeIn: byDe(buch, 'Feuilleton', 'Vorwort'),
      dictations: [
        [
          'd1',
          'Der Roman ist fesselnd, aber stellenweise langatmig.',
          'The novel is gripping but long-winded in places.',
        ],
        [
          'd2',
          'Die Übersetzung hat den Ton des Originals getroffen.',
          'The translation has captured the tone of the original.',
        ],
      ],
    }),
    activity(
      U,
      'conj-modal-perfect',
      'conjugation',
      meta(
        'er soll geschrieben haben',
        'Modal verb + perfect infinitive for the past.',
        [...grammarTags],
        2,
        5,
      ),
      {
        tables: [
          modalPerfectTable('sollen', 'geschrieben haben', 'is said to have written', [
            'er/sie/es',
            'wir',
            'sie/Sie',
          ]),
          modalPerfectTable('wollen', 'gelesen haben', 'claims to have read', [
            'ich',
            'er/sie/es',
            'ihr',
          ]),
          modalPerfectTable('müssen', 'gewesen sein', 'must have been', [
            'du',
            'er/sie/es',
            'sie/Sie',
          ]),
          modalPerfectTable('können', 'gelogen haben', 'can have lied', [
            'ich',
            'wir',
            'er/sie/es',
          ]),
        ],
      },
    ),
    activity(
      U,
      'sort-meaning',
      'sortit',
      meta(
        'Hearsay, claim, certainty or doubt?',
        'What does the modal verb tell you about the source?',
        [...grammarTags],
        2,
        5,
      ),
      {
        instruction: 'What does the speaker express?',
        buckets: [
          { id: 'hearsay', label: 'Hearsay (soll)', emoji: '🗣️' },
          { id: 'claim', label: 'The subject’s own claim (will)', emoji: '☝️' },
          { id: 'sure', label: 'Certainty (muss)', emoji: '✅' },
          { id: 'doubt', label: 'Probability or doubt (dürfte, könnte, kann nicht)', emoji: '🤔' },
        ],
        items: sortItems('m', [
          ['Der Autor soll Millionär sein.', 'hearsay'],
          ['Das Buch soll verfilmt werden.', 'hearsay'],
          ['Die Lektorin soll das Manuskript abgelehnt haben.', 'hearsay'],
          ['Sie will den Roman in einer Nacht gelesen haben.', 'claim'],
          ['Er will den Autor persönlich kennen.', 'claim'],
          ['Der Verlag will 100 000 Exemplare verkauft haben.', 'claim'],
          ['Das muss ein Missverständnis gewesen sein.', 'sure'],
          ['Er muss den Roman geliebt haben.', 'sure'],
          ['Sie muss das Zitat erfunden haben.', 'sure'],
          ['Das könnte ein Bestseller werden.', 'doubt'],
          ['Der Erzähler dürfte der Mörder sein.', 'doubt'],
          ['Er kann das Buch gar nicht gelesen haben.', 'doubt'],
        ]),
      },
    ),
    activity(
      U,
      'gap-subjective',
      'gapfill',
      meta(
        'soll, will, muss …',
        'Choose the modal verb that matches the meaning.',
        [...grammarTags],
        2,
        6,
      ),
      {
        items: [
          withWhy(
            gap(
              'm1',
              'Der Autor ___ an dem Roman zehn Jahre gearbeitet haben. (so people say)',
              'soll',
              ['soll', 'will', 'muss', 'kann'],
              'The author is said to have worked on the novel for ten years.',
              'soll + perfect infinitive = a report by others.',
            ),
            {
              will: 'will would mean that the author claims it himself.',
              muss: 'muss expresses the speaker’s certainty, not a report.',
              kann: 'kann expresses possibility, not hearsay.',
            },
          ),
          withWhy(
            gap(
              'm2',
              'Die Politikerin ___ das Buch nie gelesen haben – jedenfalls behauptet sie das.',
              'will',
              ['will', 'soll', 'muss', 'dürfte'],
              'The politician claims never to have read the book.',
              'will + perfect infinitive = the subject’s own claim.',
            ),
            {
              soll: 'soll reports what others say; here she herself makes the claim.',
              muss: 'muss would mean the speaker is sure she has not read it.',
              dürfte: 'dürfte means “probably”, not a claim.',
            },
          ),
          withWhy(
            gap(
              'm3',
              'Das Licht brennt noch – er ___ also noch wach sein. (I am sure)',
              'muss',
              ['muss', 'soll', 'will', 'kann'],
              'The light is still on, so he must still be awake.',
              'muss = the speaker is sure on the basis of evidence.',
            ),
            {
              soll: 'soll would be a report from other people.',
              will: 'will would mean that he claims to be awake.',
              kann: 'kann would only say that it is possible.',
            },
          ),
          withWhy(
            gap(
              'm4',
              'Der Roman ___ der Höhepunkt ihres Werkes sein. (probably)',
              'dürfte',
              ['dürfte', 'soll', 'will', 'darf'],
              'The novel is probably the high point of her work.',
              'dürfte (Konjunktiv II) = a cautious assumption.',
            ),
            {
              soll: 'soll would mean “is said to be”.',
              will: 'will would mean “claims to be”.',
              darf: 'darf means “is allowed to” – the assumption needs dürfte.',
            },
          ),
          withWhy(
            gap(
              'm5',
              'Sie ___ das Manuskript nicht gelesen haben – es lag noch ungeöffnet da.',
              'kann',
              ['kann', 'muss', 'soll', 'darf'],
              'She cannot have read the manuscript – it was still unopened.',
              'kann nicht + perfect infinitive = it is impossible that she did.',
            ),
            {
              muss: 'muss nicht … would not say that it is impossible.',
              soll: 'soll nicht … would only report that others deny it.',
              darf: 'darf nicht expresses a prohibition, not an impossibility.',
            },
          ),
          withWhy(
            gap(
              'm6',
              'Er ___ den Preis gewonnen haben, aber bestätigt ist das nicht.',
              'soll',
              ['soll', 'muss', 'will', 'kann'],
              'He is said to have won the prize, but it is not confirmed.',
              'Unconfirmed reports → soll.',
            ),
            {
              muss: 'muss expresses certainty – but nothing is confirmed.',
              will: 'will would mean that he claims it himself.',
              kann: 'kann means “is able to” or “possibly”.',
            },
          ),
          typed(
            'm7',
            'Laut Presse ___ die Schriftstellerin schwer erkrankt sein.',
            'soll',
            'According to the press the writer is said to be seriously ill.',
            'Laut + source → soll.',
          ),
          typed(
            'm8',
            'Der Verlag ___ 100 000 Exemplare verkauft haben – so steht es in der Pressemitteilung.',
            'will',
            'The publisher claims to have sold 100,000 copies – so the press release says.',
            'The publisher states it itself → will.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'quiz-past',
      'quiz',
      meta(
        'Say it with a modal verb',
        'Rephrase the sentence with a subjective modal verb in the past.',
        [...grammarTags],
        3,
        6,
      ),
      {
        questions: [
          q(
            'r1',
            'Man sagt, dass der Dichter seine Frau betrogen hat.',
            'Der Dichter soll seine Frau betrogen haben.',
            [
              'Der Dichter will seine Frau betrogen haben.',
              'Der Dichter soll seine Frau betrogen sein.',
              'Der Dichter soll seine Frau betrügen.',
            ],
            'Hearsay about the past: soll + Partizip II + haben.',
          ),
          q(
            'r2',
            'Sie behauptet, sie sei nie in Wien gewesen.',
            'Sie will nie in Wien gewesen sein.',
            [
              'Sie soll nie in Wien gewesen sein.',
              'Sie will nie in Wien gewesen haben.',
              'Sie muss nie in Wien gewesen sein.',
            ],
            'Her own claim: will; sein takes sein in the perfect infinitive: gewesen sein.',
          ),
          q(
            'r3',
            'Ich bin sicher, dass er das Buch gelesen hat.',
            'Er muss das Buch gelesen haben.',
            [
              'Er kann das Buch gelesen haben.',
              'Er muss das Buch gelesen sein.',
              'Er soll das Buch gelesen haben.',
            ],
            'Certainty about the past: muss + Partizip II + haben.',
          ),
          q(
            'r4',
            'Ich vermute, dass der Roman viel Erfolg hatte.',
            'Der Roman dürfte viel Erfolg gehabt haben.',
            [
              'Der Roman muss viel Erfolg gehabt sein.',
              'Der Roman darf viel Erfolg gehabt haben.',
              'Der Roman soll viel Erfolg gehabt sein.',
            ],
            'A cautious assumption: dürfte + perfect infinitive.',
          ),
          q(
            'r5',
            'Es ist ausgeschlossen, dass sie das Zitat erfunden hat.',
            'Sie kann das Zitat nicht erfunden haben.',
            [
              'Sie soll das Zitat nicht erfunden haben.',
              'Sie darf das Zitat nicht erfinden.',
              'Sie will das Zitat nicht erfinden.',
            ],
            'Impossibility about the past: kann nicht + perfect infinitive.',
          ),
          q(
            'r6',
            'Man erzählt, dass die Autorin nach Amerika ausgewandert ist.',
            'Die Autorin soll nach Amerika ausgewandert sein.',
            [
              'Die Autorin soll nach Amerika ausgewandert haben.',
              'Die Autorin will nach Amerika ausgewandert sein.',
              'Die Autorin ist nach Amerika ausgewandert sollen.',
            ],
            'auswandern forms its perfect with sein: ausgewandert sein.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'gap-modality',
      'gapfill',
      meta('scheinen, drohen, pflegen', 'Modality verbs with zu.', [...grammarTags], 3, 5),
      {
        items: [
          withWhy(
            gap(
              'v1',
              'Der Roman ___ ein Erfolg zu werden.',
              'scheint',
              ['scheint', 'droht', 'pflegt', 'vermag'],
              'The novel seems to be becoming a success.',
              'scheinen + zu + infinitive = it seems that.',
            ),
            {
              droht: 'drohen + zu means “threatens to” and sounds negative.',
              pflegt: 'pflegen + zu means “is in the habit of”.',
              vermag:
                'vermögen + zu means “is able to” and does not fit a success that is only seeming.',
            },
          ),
          withWhy(
            gap(
              'v2',
              'Der kleine Verlag ___ in finanzielle Schwierigkeiten zu geraten.',
              'droht',
              ['droht', 'scheint', 'pflegt', 'braucht'],
              'The small publisher is threatening to run into financial difficulties.',
              'drohen + zu = something bad is about to happen.',
            ),
            {
              scheint: 'scheinen is neutral (“seems”); here a danger is meant.',
              pflegt: 'pflegen would mean it habitually does so.',
              braucht: 'braucht would need nicht/kein and means “need”.',
            },
          ),
          withWhy(
            gap(
              'v3',
              'Die Autorin ___ morgens zu schreiben und nachmittags zu lesen.',
              'pflegt',
              ['pflegt', 'droht', 'scheint', 'vermag'],
              'The author usually writes in the morning and reads in the afternoon.',
              'pflegen + zu = to be in the habit of.',
            ),
            {
              droht: 'drohen means something bad is imminent.',
              scheint: 'scheinen means “seems”, not “habitually”.',
              vermag: 'vermögen means “be able to”.',
            },
          ),
          typed(
            'v4',
            'Er ___ nicht zu verstehen, warum das Buch so beliebt ist.',
            'scheint',
            'He does not seem to understand why the book is so popular.',
            'scheinen + zu + infinitive; the verb agrees with er.',
          ),
          typed(
            'v5',
            'Das kleine Theater ___ wegen der Kürzungen zu schließen.',
            'droht',
            'The small theatre is threatening to close because of the cuts.',
            'drohen + zu = is in danger of …',
          ),
          typed(
            'v6',
            'Sie ___ nach jeder Lesung Autogramme zu geben.',
            'pflegt',
            'She usually signs books after every reading.',
            'pflegen + zu = to be in the habit of.',
          ),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Reporting about books',
        'Build sentences with modal verbs and perfect infinitives.',
        [...grammarTags],
        3,
        7,
      ),
      {
        items: [
          sent('s1', 'The author is said to have lived in Prague for ten years.', [
            'Der',
            'Autor',
            'soll',
            'zehn',
            'Jahre',
            'in',
            'Prag',
            'gelebt',
            'haben.',
          ]),
          sent('s2', 'She claims to have written the novel in a week.', [
            'Sie',
            'will',
            'den',
            'Roman',
            'in',
            'einer',
            'Woche',
            'geschrieben',
            'haben.',
          ]),
          sent('s3', 'The manuscript must have got lost.', [
            'Das',
            'Manuskript',
            'muss',
            'verloren',
            'gegangen',
            'sein.',
          ]),
          sent('s4', 'The ending is likely to surprise the readers.', [
            'Das',
            'Ende',
            'dürfte',
            'die',
            'Leser',
            'überraschen.',
          ]),
          sent('s5', 'The new novel seems to hit the nerve of the times.', [
            'Der',
            'neue',
            'Roman',
            'scheint',
            'den',
            'Nerv',
            'der',
            'Zeit',
            'zu',
            'treffen.',
          ]),
          sent('s6', 'The publisher is said to be planning a second edition.', [
            'Der',
            'Verlag',
            'soll',
            'eine',
            'zweite',
            'Auflage',
            'planen.',
          ]),
        ].map((x) => withLesson(x, LESSON)),
      },
    ),
    activity(
      U,
      'listen-reviews',
      'listen',
      meta(
        'Literary gossip',
        'Listen to what is said about authors and books.',
        ['listening', 'c22-literature'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Der Schriftsteller soll sein Manuskript verbrannt haben.',
            'The writer is said to have burned his manuscript.',
            [
              'The writer burned his manuscript himself.',
              'The writer must burn his manuscript.',
              'The writer will publish his manuscript.',
            ],
          ),
          heard(
            'l2',
            'Die Autorin will von den Gerüchten nichts gewusst haben.',
            'The author claims to have known nothing about the rumours.',
            [
              'The author is said to have spread the rumours.',
              'The author knew everything about the rumours.',
              'The author wants to start rumours.',
            ],
          ),
          heard(
            'l3',
            'Der Schluss des Romans dürfte viele Leser enttäuschen.',
            'The ending of the novel is likely to disappoint many readers.',
            [
              'The ending of the novel has delighted many readers.',
              'Many readers must finish the novel.',
              'The ending is not known yet.',
            ],
          ),
          heard(
            'l4',
            'Das kann doch nicht der Täter gewesen sein!',
            'That cannot possibly have been the culprit!',
            [
              'That must have been the culprit!',
              'The culprit is said to have been there.',
              'The culprit may not come in.',
            ],
          ),
          heard(
            'l5',
            'Der Roman ist langatmig, aber sprachgewaltig.',
            'The novel is long-winded but linguistically powerful.',
            [
              'The novel is short and boring.',
              'The novel is gripping but badly written.',
              'The novel is predictable and contrived.',
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
        'Talking about books',
        'Use subjective modal verbs in bookshop and book-club talk.',
        ['communication', LESSON, 'c22-literature'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'buchladen',
            title: 'Im Buchladen',
            emoji: '📚',
            setting: 'A bookseller recommends a new novel to you.',
            turns: [
              say(
                'Buchhändlerin',
                'Haben Sie schon von dem neuen Roman von Lena Marx gehört?',
                'Have you heard of the new novel by Lena Marx?',
              ),
              you(
                'Ja, sie soll drei Jahre daran gearbeitet haben.',
                [
                  'Ja, sie will drei Jahre daran gearbeitet haben.',
                  'You are reporting what others say, so soll; will would be her own claim.',
                ],
                [
                  'Ja, sie soll drei Jahre daran gearbeitet.',
                  'The perfect infinitive needs haben at the end: gearbeitet haben.',
                ],
              ),
              say(
                'Buchhändlerin',
                'Er dürfte ein Bestseller werden. Die Kritiker sind begeistert.',
                'It is likely to become a bestseller. The critics are delighted.',
              ),
              you(
                'Dann muss ich ihn wohl lesen – obwohl er etwas langatmig zu sein scheint.',
                [
                  'Dann muss ich ihn wohl lesen – obwohl er etwas langatmig zu sein scheinen.',
                  'scheinen agrees with er: scheint.',
                ],
                [
                  'Dann muss ich ihn wohl lesen – obwohl er etwas langatmig scheint zu sein.',
                  'In a subordinate clause the finite verb goes last: zu sein scheint.',
                ],
              ),
            ],
          },
          {
            id: 'lesekreis',
            title: 'Im Lesekreis',
            emoji: '☕',
            setting: 'Katrin tells you about a review she has just read.',
            turns: [
              say(
                'Katrin',
                'Der Kritiker will das Buch in einer Stunde gelesen haben!',
                'The critic claims to have read the book in an hour!',
              ),
              you(
                'Das kann nicht stimmen – dafür ist es viel zu dick.',
                [
                  'Das soll nicht stimmen – dafür ist es viel zu dick.',
                  'soll nicht would only report that others deny it; impossibility is kann nicht.',
                ],
                [
                  'Das kann nicht stimmen haben – dafür ist es viel zu dick.',
                  'The statement is about the present, so no perfect infinitive: stimmen.',
                ],
              ),
              say(
                'Katrin',
                'Aber er soll Schnelllesen gelernt haben.',
                'But he is said to have learned speed reading.',
              ),
              you(
                'Dann dürfte er den Text kaum verstanden haben.',
                [
                  'Dann darf er den Text kaum verstanden haben.',
                  'dürfte (Konjunktiv II) = probably; darf means “is allowed to”.',
                ],
                [
                  'Dann dürfte er den Text kaum verstanden sein.',
                  'verstehen forms its perfect with haben: verstanden haben.',
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
      meta('Modal blitz', 'True or false: subjective modal verbs.', [...grammarTags], 3, 2),
      {
        seconds: 60,
        statements: [
          tf('b1', '„Er soll reich sein“ bedeutet: Man sagt, dass er reich ist.', true),
          tf(
            'b2',
            '„Er will reich sein“ bedeutet: Man sagt, dass er reich ist.',
            false,
            'will = he himself claims it.',
          ),
          tf('b3', '„Das muss ein Irrtum sein“ drückt Gewissheit aus.', true),
          tf(
            'b4',
            '„Sie kann das nicht gewusst haben“ bedeutet: Es ist unmöglich, dass sie es wusste.',
            true,
          ),
          tf('b5', '„Er dürfte schon da sein“ drückt eine Vermutung aus.', true),
          tf(
            'b6',
            'Für die Vergangenheit steht nach dem Modalverb Partizip II + haben oder sein.',
            true,
          ),
          tf(
            'b7',
            '„Sie soll angekommen haben“ ist richtig.',
            false,
            'ankommen forms its perfect with sein: angekommen sein.',
          ),
          tf('b8', '„Der Autor soll gestorben sein“ ist richtig.', true),
          tf('b9', '„scheinen“ steht mit „zu“ + Infinitiv.', true),
          tf(
            'b10',
            'Nach einem subjektiven „müssen“ steht „zu“ vor dem Infinitiv.',
            false,
            'Modal verbs never take zu.',
          ),
          tf('b11', 'Ein Klappentext steht auf dem Buchumschlag.', true),
          tf(
            'b12',
            'Ein Fazit steht meist am Anfang einer Rezension.',
            false,
            'A verdict normally comes at the end.',
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
        'Literature words and subjective modal verbs in one round.',
        ['vocabulary', 'grammar', 'c22-literature'],
        3,
        5,
      ),
      {
        questions: [
          withLesson(
            q('c1', 'Der Dichter ___ 1850 gestorben sein. (man sagt)', 'soll', [
              'will',
              'muss',
              'darf',
            ]),
            LESSON,
          ),
          withLesson(
            q('c2', 'Sie ___ das Buch nie gelesen haben. (sie behauptet es selbst)', 'will', [
              'soll',
              'kann',
              'darf',
            ]),
            LESSON,
          ),
          withLesson(
            q(
              'c3',
              'Er ___ den Roman gelesen haben – anders kann er das Zitat nicht kennen.',
              'muss',
              ['will', 'soll', 'darf'],
            ),
            LESSON,
          ),
          withLesson(
            q('c4', 'Der Roman ___ viele Leser enttäuschen. (Vermutung)', 'dürfte', [
              'wollte',
              'darf',
              'sollte',
            ]),
            LESSON,
          ),
          withLesson(
            q('c5', 'Sie ___ gestern in Wien ___. (soll … sein, Perfekt)', 'soll … gewesen sein', [
              'soll … gewesen haben',
              'soll … war',
              'sollte … gewesen',
            ]),
            LESSON,
          ),
          q('c6', 'langatmig', 'long-winded', ['gripping', 'profound', 'predictable']),
          q(
            'c7',
            'Der Text auf dem Buchumschlag, der zum Lesen verführen soll, heißt …',
            'Klappentext',
            ['Fazit', 'Nachlass', 'Zitat'],
          ),
          q('c8', 'ein Buch kritisch besprechen', 'rezensieren', [
            'schildern',
            'verfassen',
            'anspielen',
          ]),
          withLesson(
            q('c9', 'Das Buch ___ ein Erfolg zu werden. (es sieht so aus)', 'scheint', [
              'pflegt',
              'will',
              'muss',
            ]),
            LESSON,
          ),
          q('c10', 'die Handlung', 'plot', ['narrator', 'setting', 'blurb']),
        ],
      },
    ),
  ],
};
