import { byDe, flashcards, memory, quizEmoji, spell, vocabList } from '../builders';
import { numberToGerman } from '@/lib/german/numbers';
import {
  activity,
  gap,
  heard,
  meta,
  q,
  say,
  sent,
  sepTable,
  sortItems,
  table,
  tf,
  typed,
  unit12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'a1-2-aemter';

const forms = vocabList(U, 'Offices & forms', [
  ['Amt', 'office / authority', '🏛️', 'das', 'Ämter'],
  ['Formular', 'form', '📋', 'das', 'Formulare'],
  ['Antrag', 'application', '📄', 'der', 'Anträge'],
  ['Ausweis', 'ID card', '🆔', 'der', 'Ausweise'],
  ['Unterschrift', 'signature', '✍️', 'die', 'Unterschriften'],
  ['Geburtsdatum', 'date of birth', '🎂', 'das', 'Geburtsdaten'],
  ['Staatsangehörigkeit', 'nationality', '🌍', 'die', 'Staatsangehörigkeiten'],
  ['Familienstand', 'marital status', '💍', 'der'],
  ['Postleitzahl', 'postcode', '📮', 'die', 'Postleitzahlen'],
  ['Hausnummer', 'house number', '#️⃣', 'die', 'Hausnummern'],
  ['Wartenummer', 'waiting number', '🔢', 'die', 'Wartenummern'],
  ['Schalter', 'counter', '🪟', 'der', 'Schalter'],
  ['Gebühr', 'fee', '💶', 'die', 'Gebühren'],
  ['Bescheinigung', 'certificate', '📃', 'die', 'Bescheinigungen'],
  ['Öffnungszeiten', 'opening hours', '🕘', 'die'],
  ['Foto', 'photo', '📸', 'das', 'Fotos'],
  ['Stempel', 'stamp', '🔏', 'der', 'Stempel'],
  ['Unterlagen', 'documents', '🗂️', 'die'],
]);

const formWords = vocabList(U, 'Filling in a form', [
  ['ausfüllen', 'to fill in', '🖊️'],
  ['unterschreiben', 'to sign', '✍️'],
  ['ankreuzen', 'to tick', '✅'],
  ['anmelden', 'to register', '📝'],
  ['abgeben', 'to hand in', '📥'],
  ['Vorname', 'first name', '🔤', 'der', 'Vornamen'],
  ['Nachname', 'surname', '🔠', 'der', 'Nachnamen'],
  ['ledig', 'single', '🙋'],
  ['verheiratet', 'married', '💑'],
  ['geschieden', 'divorced', '💔'],
  ['geöffnet', 'open', '🟢'],
  ['geschlossen', 'closed', '🔴'],
]);

const service = vocabList(U, 'Customer service', [
  ['Kunde', 'customer (f. Kundin)', '🧑‍💼', 'der', 'Kunden'],
  ['Kundenservice', 'customer service', '🎧', 'der'],
  ['Beschwerde', 'complaint', '😠', 'die', 'Beschwerden'],
  ['Rechnung', 'invoice / bill', '🧾', 'die', 'Rechnungen'],
  ['Quittung', 'receipt', '🏷️', 'die', 'Quittungen'],
  ['Paket', 'parcel', '📦', 'das', 'Pakete'],
  ['Lieferung', 'delivery', '🚚', 'die', 'Lieferungen'],
  ['Umtausch', 'exchange', '🔄', 'der'],
  ['Garantie', 'warranty', '🛡️', 'die', 'Garantien'],
  ['Problem', 'problem', '⚠️', 'das', 'Probleme'],
  ['Bestellung', 'order', '🛒', 'die', 'Bestellungen'],
  ['Gerät', 'device', '🔌', 'das', 'Geräte'],
  ['kaputt', 'broken', '💥'],
  ['falsch', 'wrong', '❌'],
  ['Das funktioniert nicht.', 'That does not work.', '🚫'],
  ['Ich möchte mich beschweren.', 'I would like to complain.', '😤'],
  ['Ich habe ein Problem.', 'I have a problem.', '🆘'],
]);

const vocab = [...forms, ...formWords, ...service];

const feeHeard = (cents: number, wrong: number[]) =>
  heard(
    `fee-${cents}`,
    `Die Gebühr beträgt ${numberToGerman(cents)} Euro.`,
    `${cents} €`,
    wrong.map((w) => `${w} €`),
  );

export const aemter: UnitContent = {
  unit: unit12({
    id: U,
    order: 9,
    title: 'Ämter & Service',
    subtitle: 'Offices, forms and customer service',
    emoji: '🏛️',
    goals: [
      'Understand and fill in a simple form',
      'Register at an office and ask what a word means',
      'Report a problem and ask customer service for help',
    ],
    grammar: [
      'Accusative pronouns: ihn, sie, es (Ich suche ihn / Ich habe sie)',
      'Possessive articles: mein, Ihr, unser, ihr',
      'Polite requests with Bitte + Sie-imperative; separable verbs',
      'Conjunctions aber, denn, oder, und',
    ],
    vocabFields: ['Offices & forms', 'Filling in a form', 'Customer service'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-forms',
      'flashcards',
      meta(
        'Offices & forms',
        'The words you meet at every German office.',
        ['vocabulary', 'offices-services'],
        1,
        5,
      ),
      flashcards(forms),
    ),

    activity(
      U,
      'quiz-forms',
      'quiz',
      meta(
        'What is this?',
        'Name the item – with the right article.',
        ['vocabulary', 'offices-services', 'articles'],
        1,
        3,
      ),
      quizEmoji(forms, forms),
    ),

    activity(
      U,
      'flash-service',
      'flashcards',
      meta(
        'Customer service',
        'Complaints, parcels, receipts and useful phrases.',
        ['vocabulary', 'offices-services'],
        1,
        4,
      ),
      flashcards(service),
    ),

    activity(
      U,
      'memory-forms',
      'memory',
      meta(
        'Form memory',
        'Match the German word with the picture.',
        ['vocabulary', 'offices-services'],
        1,
        3,
      ),
      memory(
        byDe(
          forms,
          'Formular',
          'Ausweis',
          'Unterschrift',
          'Geburtsdatum',
          'Postleitzahl',
          'Foto',
          'Stempel',
          'Wartenummer',
        ),
        'emoji',
      ),
    ),

    activity(
      U,
      'sort-fields',
      'sortit',
      meta(
        'Where does it go on the form?',
        'Person, address or contact?',
        ['vocabulary', 'offices-services'],
        2,
        4,
      ),
      {
        instruction: 'Which part of the form is it?',
        buckets: [
          { id: 'person', label: 'Person', emoji: '🧑' },
          { id: 'adresse', label: 'Adresse', emoji: '🏠' },
          { id: 'kontakt', label: 'Kontakt', emoji: '📞' },
        ],
        items: sortItems('f', [
          ['Vorname', 'person'],
          ['Nachname', 'person'],
          ['Geburtsdatum', 'person'],
          ['Staatsangehörigkeit', 'person'],
          ['Familienstand', 'person'],
          ['Straße', 'adresse'],
          ['Hausnummer', 'adresse'],
          ['Postleitzahl', 'adresse'],
          ['Wohnort', 'adresse'],
          ['Telefonnummer', 'kontakt'],
          ['E-Mail-Adresse', 'kontakt'],
        ]),
      },
    ),

    activity(
      U,
      'spell-forms',
      'spell',
      meta(
        'Spell the office words',
        'Unscramble the letters and type the words.',
        ['spelling', 'offices-services'],
        2,
        4,
      ),
      {
        items: [
          ...spell(byDe(forms, 'Antrag', 'Ausweis', 'Schalter'), 'unscramble').items,
          ...spell(byDe(forms, 'Unterschrift', 'Postleitzahl', 'Staatsangehörigkeit'), 'type')
            .items,
        ],
      },
    ),

    activity(
      U,
      'listen-office',
      'listen',
      meta(
        'At the office',
        'Listen to the clerk and pick the meaning.',
        ['listening', 'offices-services', 'numbers'],
        2,
        4,
      ),
      {
        items: [
          heard('l1', 'Bitte nehmen Sie eine Wartenummer.', 'Please take a waiting number.', [
            'Please give me your phone number.',
            'Please wait outside.',
            'Please take a seat in the corridor.',
          ]),
          heard(
            'l2',
            'Das Amt ist von acht bis zwölf Uhr geöffnet.',
            'The office is open from eight to twelve.',
            [
              'The office is closed from eight to twelve.',
              'The office is open from eight to two.',
              'The office opens at twelve.',
            ],
          ),
          heard('l3', 'Füllen Sie bitte dieses Formular aus.', 'Please fill in this form.', [
            'Please hand in this form.',
            'Please sign this form.',
            'Please read this form later.',
          ]),
          heard('l4', 'Bitte unterschreiben Sie hier.', 'Please sign here.', [
            'Please write your name here.',
            'Please wait here.',
            'Please pay here.',
          ]),
          heard('l5', 'Sie brauchen Ihren Ausweis und ein Foto.', 'You need your ID and a photo.', [
            'You need your passport and a photo.',
            'You need your ID and a receipt.',
            'You do not need any documents.',
          ]),
          feeHeard(15, [50, 5, 25]),
          heard('l7', 'Schalter drei ist frei.', 'Counter three is free.', [
            'Counter three is closed.',
            'Counter two is free.',
            'Counter thirteen is free.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'gap-pronouns',
      'gapfill',
      meta(
        'ihn, sie, es – replace the noun',
        'Accusative pronouns in service situations.',
        ['grammar', 'accusative', 'object-pronouns', 'offices-services'],
        3,
        6,
      ),
      {
        items: [
          gap(
            'a1',
            'Das Formular ist lang. Ich fülle ___ jetzt aus.',
            'es',
            ['es', 'ihn', 'sie', 'ihm'],
            'The form is long. I’ll fill it in now.',
            'das Formular (neuter) → es.',
          ),
          gap(
            'a2',
            'Wo ist mein Ausweis? Ich suche ___.',
            'ihn',
            ['ihn', 'er', 'ihm', 'es'],
            'Where is my ID? I’m looking for it.',
            'der Ausweis (masculine) → ihn.',
          ),
          gap(
            'a3',
            'Die Rechnung ist falsch. Bitte schicken Sie ___ noch einmal.',
            'sie',
            ['sie', 'ihr', 'es', 'ihn'],
            'The invoice is wrong. Please send it again.',
            'die Rechnung (feminine) → sie.',
          ),
          gap(
            'a4',
            'Das Paket ist nicht gekommen. Ich habe ___ nicht bekommen.',
            'es',
            ['es', 'er', 'ihm', 'ihr'],
            'The parcel did not arrive. I did not receive it.',
          ),
          gap(
            'a5',
            'Herr Meier, wir rufen ___ morgen an. (you, formal)',
            'Sie',
            ['Sie', 'Ihnen', 'Ihr', 'Ihre'],
            'Mr Meier, we will call you tomorrow.',
            'anrufen takes the accusative: Sie.',
          ),
          gap(
            'a6',
            'Ich verstehe ___ nicht. (you, informal)',
            'dich',
            ['dich', 'dir', 'du', 'dein'],
            'I do not understand you.',
            'verstehen takes the accusative: dich.',
          ),
          gap(
            'a7',
            'Der Mitarbeiter hilft ___. (me)',
            'mir',
            ['mir', 'mich', 'ich', 'mein'],
            'The employee helps me.',
            'helfen takes the dative: mir.',
          ),
          gap(
            'a8',
            'Die Kunden sind unzufrieden. Der Chef ruft ___ an. (them)',
            'sie',
            ['sie', 'ihnen', 'ihr', 'es'],
            'The customers are unhappy. The boss calls them.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-possessive',
      'gapfill',
      meta(
        'mein, Ihr, unser, ihr',
        'Possessive articles on forms and at the counter.',
        ['grammar', 'possessives', 'offices-services'],
        3,
        5,
      ),
      {
        items: [
          gap(
            'p1',
            'Bitte zeigen Sie ___ Ausweis. (your)',
            'Ihren',
            ['Ihren', 'Ihr', 'Ihre', 'Ihrem'],
            'Please show your ID.',
            'accusative masculine: Ihren.',
          ),
          gap(
            'p2',
            'Wie ist ___ Geburtsdatum? (your, formal)',
            'Ihr',
            ['Ihr', 'Ihre', 'Ihren', 'Ihrem'],
            'What is your date of birth?',
            'nominative neuter: Ihr.',
          ),
          gap(
            'p3',
            'Bitte schreiben Sie ___ Adresse hier. (your)',
            'Ihre',
            ['Ihre', 'Ihr', 'Ihren', 'Ihrem'],
            'Please write your address here.',
          ),
          gap(
            'p4',
            'Ich brauche ___ Reisepass. (my)',
            'meinen',
            ['meinen', 'mein', 'meine', 'meinem'],
            'I need my passport.',
          ),
          gap(
            'p5',
            'Das ist ___ Antrag. (my)',
            'mein',
            ['mein', 'meine', 'meinen', 'meinem'],
            'This is my application.',
          ),
          gap(
            'p6',
            'Hier sind ___ Unterlagen. (my)',
            'meine',
            ['meine', 'mein', 'meinen', 'meiner'],
            'Here are my documents.',
            'Plural → meine.',
          ),
          gap(
            'p7',
            'Wo ist ___ Termin? (our)',
            'unser',
            ['unser', 'unsere', 'unseren', 'unserem'],
            'Where is our appointment?',
          ),
          gap(
            'p8',
            'Ich kenne ___ Namen. (their)',
            'ihren',
            ['ihren', 'ihr', 'ihre', 'ihrem'],
            'I know their name.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-conjunctions',
      'gapfill',
      meta(
        'aber, denn, oder, und',
        'Join the sentences with the right conjunction.',
        ['grammar', 'conjunctions', 'offices-services'],
        2,
        5,
      ),
      {
        items: [
          gap(
            'c1',
            'Ich möchte das Gerät umtauschen, ___ es ist kaputt.',
            'denn',
            ['denn', 'aber', 'oder', 'und'],
            'I would like to exchange the device because it is broken.',
            'denn = because.',
          ),
          gap(
            'c2',
            'Das Amt ist geöffnet, ___ der Schalter ist geschlossen.',
            'aber',
            ['aber', 'denn', 'oder', 'und'],
            'The office is open, but the counter is closed.',
            'aber = but.',
          ),
          gap(
            'c3',
            'Möchten Sie bar ___ mit Karte zahlen?',
            'oder',
            ['oder', 'denn', 'aber', 'und'],
            'Would you like to pay in cash or by card?',
          ),
          gap(
            'c4',
            'Ich fülle das Formular aus ___ unterschreibe es.',
            'und',
            ['und', 'denn', 'aber', 'oder'],
            'I fill in the form and sign it.',
          ),
          gap(
            'c5',
            'Ich rufe an, ___ ich habe ein Problem.',
            'denn',
            ['denn', 'und', 'oder', 'aber'],
            'I am calling because I have a problem.',
          ),
          gap(
            'c6',
            'Der Service ist freundlich, ___ langsam.',
            'aber',
            ['aber', 'denn', 'oder', 'und'],
            'The service is friendly but slow.',
          ),
          gap(
            'c7',
            'Brauchen Sie einen Ausweis ___ einen Reisepass?',
            'oder',
            ['oder', 'und', 'denn', 'aber'],
            'Do you need an ID card or a passport?',
          ),
          gap(
            'c8',
            'Ich komme morgen wieder, ___ heute habe ich keine Zeit.',
            'denn',
            ['denn', 'und', 'oder', 'aber'],
            'I’ll come back tomorrow because I have no time today.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-imperative',
      'gapfill',
      meta(
        'Bitte + Sie-imperative',
        'Instructions at the office: type the verb.',
        ['grammar', 'imperative', 'separable-verbs', 'offices-services'],
        3,
        5,
      ),
      {
        items: [
          typed(
            'i1',
            'Bitte ___ Sie hier! (unterschreiben)',
            'unterschreiben',
            'Please sign here!',
            'Sie-imperative = infinitive + Sie.',
          ),
          typed(
            'i2',
            'Bitte ___ Sie Ihren Namen! (schreiben)',
            'schreiben',
            'Please write your name!',
          ),
          typed('i3', 'Bitte ___ Sie eine Nummer! (ziehen)', 'ziehen', 'Please take a number!'),
          typed(
            'i4',
            'Bitte ___ Sie das Formular aus! (ausfüllen)',
            'füllen',
            'Please fill in the form!',
            'Separable verb: füllen Sie … aus.',
            ['fuellen'],
          ),
          typed(
            'i5',
            'Bitte ___ Sie hier an! (ankreuzen)',
            'kreuzen',
            'Please tick here!',
            'Separable verb: kreuzen Sie … an.',
          ),
          typed('i6', 'Bitte ___ Sie einen Moment! (warten)', 'warten', 'Please wait a moment!'),
          typed(
            'i7',
            'Bitte ___ Sie Ihren Ausweis mit! (mitbringen)',
            'bringen',
            'Please bring your ID!',
            'Separable verb: bringen Sie … mit.',
          ),
          typed(
            'i8',
            'Bitte ___ Sie mich zurück! (zurückrufen)',
            'rufen',
            'Please call me back!',
            'Separable verb: rufen Sie … zurück.',
          ),
        ],
      },
    ),

    activity(
      U,
      'conj-office',
      'conjugation',
      meta(
        'ausfüllen, anmelden, umtauschen …',
        'Verbs for forms and service – many are separable.',
        ['grammar', 'separable-verbs', 'verb-conjugation', 'offices-services'],
        2,
        5,
      ),
      {
        tables: [
          sepTable('aus', 'füllen', 'to fill in', ['ich', 'du', 'er/sie/es']),
          table('unterschreiben', 'to sign', ['ich', 'du', 'ihr']),
          sepTable('an', 'melden', 'to register', ['ich', 'du', 'wir']),
          sepTable('um', 'tauschen', 'to exchange', ['er/sie/es', 'ihr', 'sie/Sie']),
          table('bekommen', 'to get / receive', ['ich', 'du', 'er/sie/es']),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'At the counter',
        'Build the sentences you need at an office or on the phone.',
        ['grammar', 'word-order', 'offices-services', 'polite-forms'],
        2,
        6,
      ),
      {
        items: [
          sent('s1', 'I would like to register my address.', [
            'Ich',
            'möchte',
            'meine',
            'Adresse',
            'anmelden.',
          ]),
          sent(
            's2',
            'Please fill in the form.',
            ['Bitte', 'füllen', 'Sie', 'das', 'Formular', 'aus.'],
            { explanation: 'ausfüllen is separable: füllen … aus.' },
          ),
          sent('s3', 'Where is counter three?', ['Wo', 'ist', 'Schalter', 'drei?']),
          sent(
            's4',
            'I need an appointment at the registration office.',
            ['Ich', 'brauche', 'einen', 'Termin', 'im', 'Bürgeramt.'],
            { explanation: 'im = in dem.' },
          ),
          sent('s5', 'I did not receive the parcel.', [
            'Ich',
            'habe',
            'das',
            'Paket',
            'nicht',
            'bekommen.',
          ]),
          sent('s6', 'I would like to exchange the device.', [
            'Ich',
            'möchte',
            'das',
            'Gerät',
            'umtauschen.',
          ]),
          sent('s7', 'The invoice is wrong.', ['Die', 'Rechnung', 'ist', 'falsch.']),
          sent('s8', 'Could you help me, please?', ['Könnten', 'Sie', 'mir', 'bitte', 'helfen?']),
          sent('s9', 'I would like to make a complaint.', ['Ich', 'möchte', 'mich', 'beschweren.']),
        ],
      },
    ),

    activity(
      U,
      'dialogues-service',
      'dialogue',
      meta(
        'Office and customer service',
        'Register, complain and return a broken device.',
        ['communication', 'offices-services', 'object-pronouns', 'possessives'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'register',
            title: 'Registering at the office',
            emoji: '🏛️',
            setting: 'You have moved to a new town.',
            turns: [
              say('Beamtin', 'Guten Tag. Wie kann ich Ihnen helfen?', 'Hello. How can I help you?'),
              you(
                'Guten Tag, ich möchte meinen Wohnsitz anmelden.',
                [
                  'Guten Tag, ich anmelden möchte meinen Wohnsitz.',
                  'The modal verb is in second position, the infinitive at the end.',
                ],
                [
                  'Guten Tag, ich möchte meine Wohnsitz anmelden.',
                  'der Wohnsitz is masculine: meinen (accusative).',
                ],
              ),
              say('Beamtin', 'Haben Sie Ihren Ausweis dabei?', 'Do you have your ID with you?'),
              you(
                'Ja, hier ist mein Reisepass.',
                ['Ja, hier ist meine Reisepass.', 'der Reisepass → mein Reisepass.'],
                ['Ja, hier ist mir Reisepass.', 'Possessive article: mein.'],
              ),
              say(
                'Beamtin',
                'Bitte füllen Sie dieses Formular aus und unterschreiben Sie hier.',
                'Please fill in this form and sign here.',
              ),
              you(
                'Entschuldigung, was bedeutet „Familienstand“?',
                [
                  'Entschuldigung, wer bedeutet „Familienstand“?',
                  'Wer asks about people; ask for a meaning with was.',
                ],
                ['Entschuldigung, wo bedeutet „Familienstand“?', 'Ask: Was bedeutet …?'],
              ),
              say(
                'Beamtin',
                'Das bedeutet: ledig, verheiratet oder geschieden.',
                'That means: single, married or divorced.',
              ),
              you(
                'Danke, ich bin ledig.',
                ['Danke, ich habe ledig.', 'Use sein with a status: ich bin ledig.'],
                ['Danke, ich ledig bin.', 'The verb is in second position.'],
              ),
            ],
          },
          {
            id: 'complaint',
            title: 'Customer service hotline',
            emoji: '🎧',
            setting: 'Your parcel has not arrived.',
            turns: [
              say(
                'Kundenservice',
                'Kundenservice, guten Tag. Was kann ich für Sie tun?',
                'Customer service, hello. What can I do for you?',
              ),
              you(
                'Guten Tag, ich habe ein Problem. Mein Paket ist nicht angekommen.',
                [
                  'Guten Tag, ich habe ein Problem. Mein Paket hat nicht angekommen.',
                  'ankommen (movement) uses sein.',
                ],
                [
                  'Guten Tag, ich habe ein Problem. Meine Paket ist nicht angekommen.',
                  'das Paket → mein Paket.',
                ],
              ),
              say(
                'Kundenservice',
                'Das tut mir leid. Haben Sie Ihre Bestellnummer?',
                'I am sorry. Do you have your order number?',
              ),
              you(
                'Ja, einen Moment bitte. Ich suche sie.',
                ['Ja, einen Moment bitte. Ich suche es.', 'die Bestellnummer → sie.'],
                ['Ja, einen Moment bitte. Ich suche ihr.', 'suchen takes the accusative: sie.'],
              ),
              say(
                'Kundenservice',
                'Wir schicken Ihnen das Paket noch einmal. Ist das in Ordnung?',
                'We will send you the parcel again. Is that all right?',
              ),
              you(
                'Ja, das ist gut. Können Sie es mir bitte bis Freitag schicken?',
                [
                  'Ja, das ist gut. Können Sie es mir bitte bis Freitag schicke?',
                  'After a modal verb: infinitive schicken.',
                ],
                [
                  'Ja, das ist gut. Können Sie es mir bitte seit Freitag schicken?',
                  'bis = by / until; seit looks back.',
                ],
              ),
            ],
          },
          {
            id: 'return',
            title: 'Returning a broken device',
            emoji: '🔌',
            setting: 'Your new kettle does not work.',
            turns: [
              say('Verkäufer', 'Guten Tag, kann ich helfen?', 'Hello, can I help?'),
              you(
                'Guten Tag, ich möchte dieses Gerät umtauschen. Es ist kaputt.',
                [
                  'Guten Tag, ich umtausche dieses Gerät. Es ist kaputt.',
                  'umtauschen is separable: ich tausche … um.',
                ],
                [
                  'Guten Tag, ich möchte dieses Gerät umtauschen. Es hat kaputt.',
                  'Es ist kaputt (sein + adjective).',
                ],
              ),
              say('Verkäufer', 'Haben Sie die Quittung?', 'Do you have the receipt?'),
              you(
                'Ja, hier ist sie.',
                ['Ja, hier ist es.', 'die Quittung → sie.'],
                ['Ja, hier ist ihn.', 'After “ist” use the nominative: sie.'],
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
        'Office blitz',
        'Pronouns, possessives and word order – true or false?',
        ['grammar', 'object-pronouns', 'possessives'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Wo ist mein Ausweis? Ich suche ihn.', true),
          tf('b2', 'Wo ist mein Ausweis? Ich suche er.', false, 'Accusative: ihn.'),
          tf('b3', 'Die Rechnung ist falsch. Bitte schicken Sie sie noch einmal.', true),
          tf(
            'b4',
            'Die Rechnung ist falsch. Bitte schicken Sie es noch einmal.',
            false,
            'die Rechnung → sie.',
          ),
          tf('b5', 'Bitte füllen Sie das Formular aus.', true),
          tf('b6', 'Bitte ausfüllen Sie das Formular.', false, 'ausfüllen is separable.'),
          tf('b7', 'Bitte zeigen Sie Ihren Ausweis.', true),
          tf('b8', 'Bitte zeigen Sie Ihr Ausweis.', false, 'Accusative masculine: Ihren Ausweis.'),
          tf('b9', 'Das Amt ist geöffnet, aber der Schalter ist geschlossen.', true),
          tf('b10', 'Ich habe das Paket nicht bekommen.', true),
          tf('b11', 'Der Mitarbeiter hilft mich.', false, 'helfen takes the dative: mir.'),
          tf('b12', 'Der Kunde schreibt eine Beschwerde.', true),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Forms, service, pronouns and possessives in one final round.',
        ['vocabulary', 'grammar', 'offices-services'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Wo ist mein Ausweis? Ich suche ___.', 'ihn', ['er', 'ihm', 'es']),
          q('c2', 'Die Rechnung ist falsch. Bitte schicken Sie ___ noch einmal.', 'sie', [
            'ihr',
            'es',
            'ihn',
          ]),
          q('c3', 'Bitte zeigen Sie ___ Ausweis. (your)', 'Ihren', ['Ihr', 'Ihre', 'Ihrem']),
          q('c4', 'Bitte ___ Sie das Formular aus.', 'füllen', ['ausfüllen', 'füllt', 'fülle']),
          q('c5', 'Ich möchte das Gerät umtauschen, ___ es ist kaputt.', 'denn', [
            'aber',
            'oder',
            'und',
          ]),
          q('c6', 'What do you do at a “Schalter”?', 'You talk to a clerk at the counter', [
            'You sit in a café',
            'You buy a ticket for the bus only',
            'You wait in the garden',
          ]),
          q('c7', 'der Familienstand', 'marital status', [
            'nationality',
            'date of birth',
            'house number',
          ]),
          q('c8', 'Der Mitarbeiter hilft ___. (me)', 'mir', ['mich', 'ich', 'mein']),
          q('c9', 'You want to complain. You say:', 'Ich möchte mich beschweren.', [
            'Ich möchte mich anmelden.',
            'Ich möchte mich ausfüllen.',
            'Ich möchte mich bezahlen.',
          ]),
          q('c10', 'Das Paket ist ___ angekommen. (not)', 'nicht', ['kein', 'keine', 'nichts']),
        ],
      },
    ),
  ],
};
