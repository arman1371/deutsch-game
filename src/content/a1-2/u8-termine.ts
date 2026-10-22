import { byDe, flashcards, memory, quizEmoji, vocabList } from '../builders';
import {
  activity,
  customTable,
  dictation,
  gap,
  heard,
  meta,
  q,
  readRound,
  say,
  sent,
  setRound,
  sortItems,
  tf,
  unit12,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'a1-2-termine';

const contact = vocabList(U, 'Appointments & communication', [
  ['Termin', 'appointment', '📆', 'der', 'Termine'],
  ['Kalender', 'calendar', '🗓️', 'der', 'Kalender'],
  ['Telefon', 'telephone', '☎️', 'das', 'Telefone'],
  ['Handy', 'mobile phone', '📱', 'das', 'Handys'],
  ['Nachricht', 'message', '💬', 'die', 'Nachrichten'],
  ['E-Mail', 'e-mail', '📧', 'die', 'E-Mails'],
  ['Brief', 'letter', '✉️', 'der', 'Briefe'],
  ['Briefmarke', 'stamp', '🏵️', 'die', 'Briefmarken'],
  ['Anrufbeantworter', 'answering machine', '📟', 'der', 'Anrufbeantworter'],
  ['Uhrzeit', 'time of day', '⏰', 'die', 'Uhrzeiten'],
  ['Absender', 'sender', '📤', 'der', 'Absender'],
  ['Empfänger', 'recipient', '📥', 'der', 'Empfänger'],
  ['Anhang', 'attachment', '📎', 'der', 'Anhänge'],
  ['Betreff', 'subject line', '📌', 'der', 'Betreffe'],
  ['Adresse', 'address', '📍', 'die', 'Adressen'],
  ['Sprechstunde', 'consultation hours', '🩺', 'die', 'Sprechstunden'],
]);

const calls = vocabList(U, 'On the phone', [
  ['anrufen', 'to call', '📲'],
  ['zurückrufen', 'to call back', '🔁'],
  ['vereinbaren', 'to arrange', '🤝'],
  ['absagen', 'to cancel', '❌'],
  ['verschieben', 'to postpone', '↪️'],
  ['wiederholen', 'to repeat', '🔂'],
  ['Hier ist …', 'This is … speaking', '🙋'],
  ['Kann ich bitte … sprechen?', 'Can I speak to …, please?', '🗣️'],
  ['Einen Moment, bitte.', 'One moment, please.', '⏳'],
  ['Tut mir leid, er ist nicht da.', 'Sorry, he is not here.', '🙁'],
  ['Kann ich etwas ausrichten?', 'Can I pass on a message?', '📝'],
  ['Ich rufe später noch einmal an.', 'I’ll call again later.', '🔄'],
  ['Können Sie das bitte wiederholen?', 'Could you repeat that, please?', '🔂'],
  ['Auf Wiederhören!', 'Goodbye! (on the phone)', '👋'],
]);

const letters = vocabList(U, 'Letters & e-mails', [
  ['Sehr geehrte Frau …,', 'Dear Mrs …,', '👩‍💼'],
  ['Sehr geehrter Herr …,', 'Dear Mr …,', '👨‍💼'],
  ['Liebe Anna,', 'Dear Anna, (informal)', '💌'],
  ['Hallo Tom,', 'Hi Tom,', '👋'],
  ['Mit freundlichen Grüßen', 'Yours sincerely / Kind regards', '🤝'],
  ['Viele Grüße', 'Best wishes', '😊'],
  ['Vielen Dank für Ihre E-Mail.', 'Thank you for your e-mail.', '🙏'],
  ['Ich würde gern einen Termin vereinbaren.', 'I would like to make an appointment.', '📆'],
  ['Im Anhang finden Sie …', 'Please find attached …', '📎'],
  ['Ich freue mich auf Ihre Antwort.', 'I look forward to your reply.', '⏩'],
]);

const vocab = [...contact, ...calls, ...letters];

const phoneHeard = (id: string, speak: string, answer: string, wrong: string[]) =>
  heard(id, speak, answer, wrong);

export const termine: UnitContent = {
  unit: unit12({
    id: U,
    order: 8,
    title: 'Termine & Kommunikation',
    subtitle: 'Appointments, phone calls, letters and e-mails',
    emoji: '📞',
    goals: [
      'Make, change and cancel an appointment',
      'Phone politely and ask someone to repeat',
      'Write the opening and closing of a formal letter or e-mail',
    ],
    grammar: [
      'Polite forms: würde, könnte, hätte (Ich würde gern …, Könnten Sie …?)',
      'Time prepositions: am, um, von … bis, ab, in, vor, nach',
      'Possessive articles: mein, dein, Ihr (nominative and accusative)',
      'Separable verbs: anrufen, zurückrufen',
    ],
    vocabFields: ['Appointments & communication', 'On the phone', 'Letters & e-mails'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-contact',
      'flashcards',
      meta(
        'Appointments & communication',
        'Termin, E-Mail, Anhang – words for contact.',
        ['vocabulary', 'appointments'],
        1,
        4,
      ),
      flashcards(contact),
    ),

    activity(
      U,
      'quiz-contact',
      'quiz',
      meta(
        'What is this?',
        'Name the object or term – with the right article.',
        ['vocabulary', 'appointments', 'articles'],
        1,
        3,
      ),
      quizEmoji(contact, contact),
    ),

    activity(
      U,
      'flash-calls',
      'flashcards',
      meta(
        'On the phone',
        'Phrases for phone calls.',
        ['vocabulary', 'appointments', 'communication'],
        1,
        4,
      ),
      flashcards(calls),
    ),

    activity(
      U,
      'memory-letters',
      'memory',
      meta(
        'Letters & e-mails memory',
        'Match the German phrase with the English meaning.',
        ['vocabulary', 'appointments', 'communication'],
        1,
        4,
      ),
      memory(
        byDe(
          letters,
          'Sehr geehrte Frau …,',
          'Sehr geehrter Herr …,',
          'Liebe Anna,',
          'Hallo Tom,',
          'Mit freundlichen Grüßen',
          'Viele Grüße',
          'Vielen Dank für Ihre E-Mail.',
          'Im Anhang finden Sie …',
        ),
        'en',
      ),
    ),

    activity(
      U,
      'sort-register',
      'sortit',
      meta(
        'Formal or informal?',
        'Sie-style or du-style: sort the phrases.',
        ['communication', 'appointments', 'polite-forms'],
        2,
        4,
      ),
      {
        instruction:
          'Would you write or say this to a stranger (formal) or to a friend (informal)?',
        buckets: [
          { id: 'formal', label: 'formal (Sie)', emoji: '🎩' },
          { id: 'informal', label: 'informal (du)', emoji: '😊' },
        ],
        items: sortItems('r', [
          ['Sehr geehrte Frau Weber,', 'formal'],
          ['Sehr geehrter Herr Meier,', 'formal'],
          ['Mit freundlichen Grüßen', 'formal'],
          ['Könnten Sie mir bitte helfen?', 'formal'],
          ['Ich würde gern einen Termin vereinbaren.', 'formal'],
          ['Liebe Anna,', 'informal'],
          ['Hallo Tom,', 'informal'],
          ['Bis bald!', 'informal'],
          ['Kannst du mir helfen?', 'informal'],
          ['Tschüss und liebe Grüße', 'informal'],
        ]),
      },
    ),

    activity(
      U,
      'dictation',
      'spell',
      meta(
        'Dictation: words and e-mail',
        'Listen and type what you hear.',
        ['spelling', 'listening', 'appointments'],
        2,
        4,
      ),
      {
        items: [
          dictation('d1', 'Termin', 'appointment', 'der Termin'),
          dictation('d2', 'Nachricht', 'message', 'die Nachricht'),
          dictation('d3', 'Anhang', 'attachment', 'der Anhang'),
          dictation('d4', 'Sprechstunde', 'consultation hours', 'die Sprechstunde'),
          dictation(
            'd5',
            'anna.meier@web.de',
            'e-mail address',
            'anna Punkt meier ät web Punkt de',
          ),
        ],
      },
    ),

    activity(
      U,
      'listen-phone',
      'listen',
      meta(
        'On the phone',
        'Listen to short phone calls and pick the meaning.',
        ['listening', 'appointments', 'communication'],
        2,
        5,
      ),
      {
        items: [
          phoneHeard(
            'l1',
            'Hier ist Müller. Kann ich bitte Frau Weber sprechen?',
            'This is Müller. Can I speak to Mrs Weber, please?',
            [
              'This is Weber. Can I speak to Mr Müller, please?',
              'This is Müller. Is Mrs Weber at home?',
              'Müller here. I would like to speak to the manager.',
            ],
          ),
          phoneHeard(
            'l2',
            'Einen Moment, bitte. Ich verbinde Sie.',
            'One moment, please. I will put you through.',
            [
              'One moment, please. I will call you back.',
              'Please wait outside. I will fetch him.',
              'One moment. Please send an e-mail.',
            ],
          ),
          phoneHeard(
            'l3',
            'Tut mir leid, Herr Meier ist heute nicht da.',
            'Sorry, Mr Meier is not here today.',
            [
              'Sorry, Mr Meier is here tomorrow.',
              'Sorry, Mrs Meier is not here today.',
              'Sorry, Mr Meier is on the phone.',
            ],
          ),
          phoneHeard(
            'l4',
            'Können Sie bitte langsamer sprechen?',
            'Could you please speak more slowly?',
            [
              'Could you please speak more loudly?',
              'Could you please call back later?',
              'Can you speak German, please?',
            ],
          ),
          phoneHeard(
            'l5',
            'Ihr Termin ist am Dienstag um zehn Uhr.',
            'Your appointment is on Tuesday at ten.',
            [
              'Your appointment is on Tuesday at two.',
              'Your appointment is on Thursday at ten.',
              'Our appointment is on Tuesday at ten.',
            ],
          ),
          phoneHeard('l6', 'Ich rufe später noch einmal an.', 'I will call again later.', [
            'I called earlier.',
            'Please call me again later.',
            'I will write an e-mail later.',
          ]),
          phoneHeard(
            'l7',
            'Die Praxis ist von acht bis zwölf Uhr geöffnet.',
            'The surgery is open from eight to twelve.',
            [
              'The surgery is open from eight to two.',
              'The surgery is closed from eight to twelve.',
              'The surgery opens at twelve.',
            ],
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-polite',
      'gapfill',
      meta(
        'würde, könnte, hätte',
        'Polite requests: Könnten Sie …? Ich würde gern …',
        ['grammar', 'polite-forms', 'modal-verbs', 'appointments'],
        3,
        5,
      ),
      {
        items: [
          gap(
            'p1',
            '___ Sie mir bitte helfen? (could)',
            'Könnten',
            ['Könnten', 'Können', 'Konnten', 'Kann'],
            'Could you please help me?',
            'Könnten Sie …? is more polite than Können Sie …?',
          ),
          gap(
            'p2',
            'Ich ___ gern einen Termin vereinbaren. (would like to)',
            'würde',
            ['würde', 'werde', 'wurde', 'wird'],
            'I would like to make an appointment.',
            'würde + gern + infinitive = a polite wish.',
          ),
          gap(
            'p3',
            '___ Sie bitte langsamer sprechen? (would)',
            'Würden',
            ['Würden', 'Werden', 'Wurden', 'Würde'],
            'Would you please speak more slowly?',
          ),
          gap(
            'p4',
            'Ich ___ gern einen Kaffee. (would like to have)',
            'hätte',
            ['hätte', 'habe', 'hatte', 'hat'],
            'I would like a coffee.',
            'Ich hätte gern … = I would like …',
          ),
          gap(
            'p5',
            '___ ich kurz telefonieren? (could)',
            'Könnte',
            ['Könnte', 'Konnte', 'Kann', 'Könnten'],
            'Could I make a quick call?',
          ),
          gap(
            'p6',
            '___ du mir bitte das Salz geben? (could)',
            'Könntest',
            ['Könntest', 'Konntest', 'Kannst', 'Könnte'],
            'Could you pass me the salt, please?',
            'du → könntest.',
          ),
          gap(
            'p7',
            'Wir ___ gern früher kommen. (would like to)',
            'würden',
            ['würden', 'werden', 'wurden', 'würde'],
            'We would like to come earlier.',
          ),
        ],
      },
    ),

    activity(
      U,
      'conj-polite',
      'conjugation',
      meta(
        'würde, könnte, hätte, möchte',
        'The polite verb forms.',
        ['grammar', 'polite-forms', 'verb-conjugation'],
        3,
        5,
      ),
      {
        tables: [
          customTable(
            'wuerde',
            'werden → würde',
            'would',
            ['würde', 'würdest', 'würde', 'würden', 'würdet', 'würden'],
            ['ich', 'du', 'er/sie/es'],
          ),
          customTable(
            'koennte',
            'können → könnte',
            'could',
            ['könnte', 'könntest', 'könnte', 'könnten', 'könntet', 'könnten'],
            ['ich', 'du', 'wir'],
          ),
          customTable(
            'haette',
            'haben → hätte',
            'would have',
            ['hätte', 'hättest', 'hätte', 'hätten', 'hättet', 'hätten'],
            ['ich', 'du', 'ihr'],
          ),
          customTable(
            'moechte',
            'möchten',
            'would like',
            ['möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten'],
            ['ich', 'du', 'sie/Sie'],
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-time',
      'gapfill',
      meta(
        'am, um, von … bis, ab, in',
        'When is the appointment? Time prepositions.',
        ['grammar', 'prepositions-of-time', 'appointments'],
        2,
        5,
      ),
      {
        items: [
          gap(
            't1',
            'Ich habe einen Termin ___ Montag.',
            'am',
            ['am', 'um', 'im', 'vom'],
            'I have an appointment on Monday.',
            'Days: am.',
          ),
          gap(
            't2',
            'Der Termin ist ___ 10 Uhr.',
            'um',
            ['um', 'am', 'im', 'bis'],
            'The appointment is at 10 o’clock.',
            'Clock time: um.',
          ),
          gap(
            't3',
            'Die Praxis ist von 8 Uhr ___ 12 Uhr geöffnet.',
            'bis',
            ['bis', 'ab', 'seit', 'um'],
            'The surgery is open from 8 to 12.',
          ),
          gap(
            't4',
            'Der Termin ist ___ einer Woche. (in a week)',
            'in',
            ['in', 'seit', 'vor', 'nach'],
            'The appointment is in a week.',
            'in + dative = a time from now.',
          ),
          gap(
            't5',
            'Rufen Sie bitte ___ Freitag zurück. (by)',
            'bis',
            ['bis', 'ab', 'seit', 'vor'],
            'Please call back by Friday.',
          ),
          gap(
            't6',
            'Ich komme ___ dem Termin zu dir. (after)',
            'nach',
            ['nach', 'vor', 'seit', 'ab'],
            'I will come to you after the appointment.',
          ),
          gap(
            't7',
            'Die Sprechstunde ist ___ 14 Uhr. (from)',
            'ab',
            ['ab', 'bis', 'seit', 'vor'],
            'Consultation hours are from 2 p.m.',
          ),
          gap(
            't8',
            'Ich bin ___ Mittwoch im Urlaub.',
            'ab',
            ['ab', 'am', 'um', 'nach'],
            'I am on holiday from Wednesday.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-possessive',
      'gapfill',
      meta(
        'mein, dein, Ihr …',
        'Possessive articles in questions and e-mails.',
        ['grammar', 'possessives', 'accusative', 'appointments'],
        3,
        5,
      ),
      {
        items: [
          gap(
            'q1',
            'Ist das ___ Telefonnummer? (your, formal)',
            'Ihre',
            ['Ihre', 'Ihr', 'Ihren', 'Ihrem'],
            'Is that your phone number?',
            'die Telefonnummer → Ihre (feminine, no change).',
          ),
          gap(
            'q2',
            'Wie ist ___ E-Mail-Adresse? (your, informal)',
            'deine',
            ['deine', 'dein', 'deinen', 'deiner'],
            'What is your e-mail address?',
          ),
          gap(
            'q3',
            'Haben Sie ___ Brief bekommen? (my)',
            'meinen',
            ['meinen', 'mein', 'meine', 'meinem'],
            'Did you receive my letter?',
            'der Brief in the accusative → meinen (like einen).',
          ),
          gap(
            'q4',
            'Ich schicke Ihnen ___ Nummer. (my)',
            'meine',
            ['meine', 'mein', 'meinen', 'meiner'],
            'I will send you my number.',
          ),
          gap(
            'q5',
            'Das ist ___ Termin. (your, formal)',
            'Ihr',
            ['Ihr', 'Ihre', 'Ihren', 'Ihrem'],
            'That is your appointment.',
            'der Termin in the nominative → Ihr (like ein).',
          ),
          gap(
            'q6',
            'Wir haben ___ Anruf bekommen. (his)',
            'seinen',
            ['seinen', 'sein', 'seine', 'seinem'],
            'We received his call.',
          ),
          gap(
            'q7',
            'Ich rufe ___ Chefin an. (my)',
            'meine',
            ['meine', 'mein', 'meinen', 'meiner'],
            'I am calling my boss.',
          ),
          gap(
            'q8',
            'Wo ist ___ Handy? (your, informal)',
            'dein',
            ['dein', 'deine', 'deinen', 'deiner'],
            'Where is your mobile phone?',
          ),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Letters, e-mails and calls',
        'Build polite sentences.',
        ['grammar', 'word-order', 'appointments', 'polite-forms'],
        2,
        6,
      ),
      {
        items: [
          sent('s1', 'Dear Mrs Weber,', ['Sehr', 'geehrte', 'Frau', 'Weber,']),
          sent('s2', 'I would like to make an appointment.', [
            'Ich',
            'würde',
            'gern',
            'einen',
            'Termin',
            'vereinbaren.',
          ]),
          sent(
            's3',
            'Could you please call me back?',
            ['Könnten', 'Sie', 'mich', 'bitte', 'zurückrufen?'],
            {
              explanation: 'Könnten + infinitive at the end.',
            },
          ),
          sent('s4', 'Thank you very much for your e-mail.', [
            'Vielen',
            'Dank',
            'für',
            'Ihre',
            'E-Mail.',
          ]),
          sent(
            's5',
            'Please find the form attached.',
            ['Im', 'Anhang', 'finden', 'Sie', 'das', 'Formular.'],
            {
              alsoAccept: ['Sie finden das Formular im Anhang.'],
            },
          ),
          sent('s6', 'Kind regards', ['Mit', 'freundlichen', 'Grüßen']),
          sent(
            's7',
            'I cannot come to the appointment on Monday.',
            ['Ich', 'kann', 'am', 'Montag', 'nicht', 'zum', 'Termin', 'kommen.'],
            {
              alsoAccept: ['Am Montag kann ich nicht zum Termin kommen.'],
            },
          ),
          sent(
            's8',
            'Can I speak to Mr Meier, please?',
            ['Kann', 'ich', 'bitte', 'Herrn', 'Meier', 'sprechen?'],
            {
              explanation: 'Herr → Herrn in the accusative.',
            },
          ),
          sent('s9', 'Could you repeat that, please?', [
            'Könnten',
            'Sie',
            'das',
            'bitte',
            'wiederholen?',
          ]),
        ],
      },
    ),

    activity(
      U,
      'clock-appointments',
      'clock',
      meta(
        'Appointment times',
        'Read and set the time of the appointment.',
        ['vocabulary', 'time-clock', 'appointments'],
        2,
        5,
      ),
      {
        rounds: [
          readRound('09:30', 'informal'),
          readRound('10:15', 'informal'),
          readRound('14:00', 'formal'),
          readRound('16:45', 'informal'),
          readRound('11:30', 'formal'),
          setRound('08:15', 'informal'),
          setRound('15:30', 'formal'),
          setRound('17:45', 'informal'),
        ],
      },
    ),

    activity(
      U,
      'dialogues-phone',
      'dialogue',
      meta(
        'Phone calls',
        'Make an appointment, ask for someone, ask to repeat.',
        ['communication', 'appointments', 'polite-forms', 'separable-verbs'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'appointment',
            title: 'Making an appointment',
            emoji: '📆',
            setting: 'You call a doctor’s surgery.',
            turns: [
              say('Praxis', 'Praxis Dr. Weber, guten Tag.', 'Dr Weber’s surgery, hello.'),
              you(
                'Guten Tag, hier ist Anna Meier. Ich würde gern einen Termin vereinbaren.',
                [
                  'Guten Tag, hier ist Anna Meier. Ich werde gern einen Termin vereinbaren.',
                  'Polite wish: würde (not werde).',
                ],
                [
                  'Guten Tag, hier ist Anna Meier. Ich will einen Termin.',
                  'That sounds very blunt – use würde gern or möchte.',
                ],
              ),
              say(
                'Praxis',
                'Geht es am Dienstag um zehn Uhr?',
                'Is Tuesday at ten o’clock possible?',
              ),
              you(
                'Am Dienstag habe ich leider keine Zeit. Geht es auch am Mittwoch?',
                [
                  'Am Dienstag habe ich leider nicht Zeit. Geht es auch am Mittwoch?',
                  'Negate a noun with kein: keine Zeit.',
                ],
                [
                  'Am Dienstag habe ich leider keine Zeit. Geht es auch im Mittwoch?',
                  'Days of the week: am Mittwoch.',
                ],
              ),
              say(
                'Praxis',
                'Ja, Mittwoch um halb elf passt. Wie ist Ihr Name und Ihre Telefonnummer?',
                'Yes, Wednesday at half past ten works. What is your name and phone number?',
              ),
              you(
                'Mein Name ist Meier. Meine Nummer ist 0151 234567.',
                ['Mein Name ist Meier. Mein Nummer ist 0151 234567.', 'die Nummer → meine Nummer.'],
                [
                  'Ich Name ist Meier. Meine Nummer ist 0151 234567.',
                  'Possessive article: mein Name.',
                ],
              ),
              say('Praxis', 'Gut, dann bis Mittwoch!', 'Good, see you on Wednesday!'),
              you(
                'Vielen Dank. Auf Wiederhören!',
                ['Vielen Dank. Guten Morgen!', 'This is a goodbye, not a greeting.'],
                ['Vielen Dank. Hallo!', 'Hallo is a greeting, not a goodbye.'],
              ),
            ],
          },
          {
            id: 'company',
            title: 'Asking for someone',
            emoji: '🏢',
            setting: 'You call a company.',
            turns: [
              say('Firma Schmidt', 'Firma Schmidt, guten Tag.', 'Schmidt company, hello.'),
              you(
                'Guten Tag, kann ich bitte Herrn Meier sprechen?',
                [
                  'Guten Tag, kann ich bitte Herr Meier sprechen?',
                  'sprechen takes the accusative: Herrn Meier.',
                ],
                [
                  'Guten Tag, ich kann bitte Herrn Meier sprechen?',
                  'Questions put the verb first: Kann ich …?',
                ],
              ),
              say(
                'Firma Schmidt',
                'Tut mir leid, Herr Meier ist gerade nicht da. Kann ich etwas ausrichten?',
                'Sorry, Mr Meier is not here right now. Can I pass on a message?',
              ),
              you(
                'Nein danke, ich rufe später noch einmal an.',
                [
                  'Nein danke, ich anrufe später noch einmal.',
                  'anrufen is separable: ich rufe … an.',
                ],
                [
                  'Nein danke, ich rufe später noch einmal.',
                  'The prefix an goes to the end of the sentence.',
                ],
              ),
            ],
          },
          {
            id: 'repeat',
            title: 'I did not understand',
            emoji: '🙉',
            setting: 'The person speaks too fast.',
            turns: [
              say(
                'Anrufer',
                'Meine Nummer ist null drei null, vier fünf sechs, sieben acht neun.',
                'My number is 030 456 789.',
              ),
              you(
                'Entschuldigung, könnten Sie das bitte wiederholen?',
                [
                  'Entschuldigung, wiederholen Sie das bitte könnten?',
                  'Question: Könnten Sie das bitte wiederholen?',
                ],
                [
                  'Entschuldigung, ich wiederhole das bitte?',
                  'You want the other person to repeat – ask with Könnten Sie …?',
                ],
              ),
              say(
                'Anrufer',
                'Natürlich. Soll ich langsamer sprechen?',
                'Of course. Shall I speak more slowly?',
              ),
              you(
                'Ja, bitte sprechen Sie langsamer.',
                [
                  'Ja, bitte sprichst du langsamer.',
                  'With a stranger on the phone use Sie: sprechen Sie.',
                ],
                ['Ja, bitte sprechen langsamer Sie.', 'Imperative: Sprechen Sie … (verb first).'],
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
        'Appointments blitz',
        'Polite forms, possessives and word order – true or false?',
        ['grammar', 'polite-forms', 'possessives'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Ich würde gern einen Termin vereinbaren.', true),
          tf('b2', 'Ich werde gern einen Termin vereinbaren.', false, 'Polite wish: würde.'),
          tf('b3', 'Könnten Sie mir bitte helfen?', true),
          tf(
            'b4',
            'Könnten Sie mir bitte geholfen?',
            false,
            'After a modal verb: infinitive helfen.',
          ),
          tf('b5', 'Sehr geehrte Frau Weber,', true),
          tf('b6', 'Sehr geehrter Frau Weber,', false, 'Frau → geehrte.'),
          tf('b7', 'Mit freundlichen Grüßen', true),
          tf('b8', 'Ich rufe Sie später an.', true),
          tf('b9', 'Ich anrufe Sie später.', false, 'anrufen is separable.'),
          tf('b10', 'Der Termin ist am Montag um zehn Uhr.', true),
          tf('b11', 'Der Termin ist im Montag um zehn Uhr.', false, 'Days: am Montag.'),
          tf('b12', 'Haben Sie meinen Brief bekommen?', true),
          tf('b13', 'Haben Sie mein Brief bekommen?', false, 'Accusative masculine: meinen Brief.'),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Phone, letters, polite forms and possessives in one final round.',
        ['vocabulary', 'grammar', 'appointments'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', '___ Sie mir bitte helfen? (could)', 'Könnten', ['Können', 'Konnten', 'Kann']),
          q('c2', 'Ich ___ gern einen Termin vereinbaren.', 'würde', ['werde', 'wurde', 'wird']),
          q('c3', 'Letter opening to a woman you do not know:', 'Sehr geehrte Frau Weber,', [
            'Liebe Frau Weber,',
            'Sehr geehrter Frau Weber,',
            'Hallo Weber,',
          ]),
          q('c4', 'Closing a formal e-mail:', 'Mit freundlichen Grüßen', [
            'Bis bald!',
            'Tschüss!',
            'Liebe Grüße',
          ]),
          q('c5', 'Ich habe ___ Montag einen Termin.', 'am', ['im', 'um', 'vom']),
          q('c6', 'Haben Sie ___ E-Mail bekommen? (my)', 'meine', ['mein', 'meinen', 'meiner']),
          q('c7', 'Ich rufe Sie später ___.', 'an', ['zu', 'auf', 'ein']),
          q('c8', 'Wie ist ___ Telefonnummer? (your, formal)', 'Ihre', ['Ihr', 'Ihren', 'Ihrem']),
          q('c9', 'On the phone you say goodbye with:', 'Auf Wiederhören!', [
            'Guten Morgen!',
            'Hallo!',
            'Gute Besserung!',
          ]),
          q('c10', 'What does “im Anhang” mean?', 'in the attachment', [
            'in the subject line',
            'in the address',
            'at the end of the letter',
          ]),
        ],
      },
    ),
  ],
};
