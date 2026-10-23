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

const U = 'b2-2-service';

const claims = vocabList(U, 'Complaints & guarantees', [
  ['Gewährleistung', 'statutory warranty', '🛡️', 'die'],
  ['Kulanz', 'goodwill (as a gesture)', '🤝', 'die'],
  ['Lieferverzug', 'delay in delivery', '🚚', 'der'],
  ['Mahnung', 'reminder (for payment)', '🔔', 'die', 'Mahnungen'],
  ['Beanstandung', 'complaint, objection', '🧐', 'die', 'Beanstandungen'],
  ['Schadenersatz', 'compensation for damages', '⚖️', 'der'],
  ['Entschädigung', 'compensation', '💶', 'die', 'Entschädigungen'],
  ['Stellungnahme', 'statement, response', '📝', 'die', 'Stellungnahmen'],
  ['Unannehmlichkeit', 'inconvenience', '😣', 'die', 'Unannehmlichkeiten'],
  ['beanstanden', 'to complain about, to object to', '☝️'],
  ['bemängeln', 'to criticise, to find fault with', '🔍'],
  ['nachbessern', 'to rectify, to improve', '🔧'],
  ['zusichern', 'to assure, to guarantee', '🤞'],
  ['kulant', 'accommodating, generous', '😊'],
  ['mangelhaft', 'faulty, deficient', '📉'],
  ['unzumutbar', 'unreasonable, unacceptable', '🙅'],
]);

const service = vocabList(U, 'Services & enquiries', [
  ['Dienstleister', 'service provider', '🧰', 'der', 'Dienstleister'],
  ['Kundendienst', 'customer service', '🎧', 'der'],
  ['Anfrage', 'enquiry, request', '📨', 'die', 'Anfragen'],
  ['Ansprechpartner', 'contact person', '🙋', 'der', 'Ansprechpartner'],
  ['Anliegen', 'concern, request', '💬', 'das', 'Anliegen'],
  ['Auskunft', 'information', 'ℹ️', 'die', 'Auskünfte'],
  ['Servicehotline', 'service hotline', '📞', 'die', 'Servicehotlines'],
  ['Wartezeit', 'waiting time', '⏱️', 'die', 'Wartezeiten'],
  ['Bearbeitung', 'processing', '⚙️', 'die'],
  ['Gebrauchsanweisung', 'instructions for use', '📖', 'die', 'Gebrauchsanweisungen'],
  ['Benutzerordnung', 'rules of use', '📋', 'die', 'Benutzerordnungen'],
  ['Kassenbon', 'receipt', '🧾', 'der', 'Kassenbons'],
  ['Rücksendung', 'return (of goods)', '📦', 'die', 'Rücksendungen'],
  ['Verzögerung', 'delay', '🐌', 'die', 'Verzögerungen'],
  ['sich erkundigen', 'to enquire', '❓'],
  ['bearbeiten', 'to process, to handle', '🗂️'],
]);

const vocab = [...claims, ...service];

export const service2: UnitContent = {
  unit: unitB22({
    id: U,
    order: 4,
    title: 'Service & Beschwerden',
    subtitle: 'Formal enquiries, complaints, guarantees and customer service',
    emoji: '🛎️',
    goals: [
      'Write and answer formal enquiries and complaints',
      'Name defects, demand a remedy and set a deadline',
      'Understand rules and instructions that avoid the passive',
    ],
    grammar: [
      'Alternatives to the passive: man, sich lassen + infinitive, sein + zu + infinitive, -bar / -lich',
      'Impersonal passive without subject: Hier wird gearbeitet. Es wurde getanzt.',
      'Formal phrases: Ich wende mich an Sie, weil …; Ich bitte Sie, … zu …; Andernfalls …',
    ],
    vocabFields: ['Complaints & guarantees', 'Services & enquiries'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-claims',
      'flashcards',
      meta(
        'Complaints & guarantees',
        'Gewährleistung, Kulanz, Beanstandung – complaining correctly.',
        ['vocabulary', 'service-complaints'],
        1,
        5,
      ),
      flashcards(claims),
    ),
    activity(
      U,
      'flash-service',
      'flashcards',
      meta(
        'Services & enquiries',
        'Dienstleister, Anfrage, Ansprechpartner – dealing with providers.',
        ['vocabulary', 'service-complaints'],
        1,
        5,
      ),
      flashcards(service),
    ),
    activity(
      U,
      'quiz-words',
      'quiz',
      meta(
        'What does it mean?',
        'Service and complaint words in English.',
        ['vocabulary', 'service-complaints'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'Lieferverzug',
          'Mahnung',
          'Schadenersatz',
          'Stellungnahme',
          'nachbessern',
          'zusichern',
          'unzumutbar',
          'Anliegen',
          'Rücksendung',
          'Verzögerung',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'memory-claims',
      'memory',
      meta(
        'Match the complaint words',
        'Pair German complaint words with their meaning.',
        ['vocabulary', 'service-complaints'],
        2,
        4,
      ),
      memory(
        byDe(claims, 'Kulanz', 'Entschädigung', 'beanstanden', 'bemängeln', 'kulant', 'mangelhaft'),
      ),
    ),
    activity(
      U,
      'listen-words',
      'listen',
      meta(
        'Hear the service words',
        'Listen and pick the meaning.',
        ['listening', 'service-complaints'],
        2,
        4,
      ),
      listen(
        byDe(
          vocab,
          'Gewährleistung',
          'Dienstleister',
          'Kundendienst',
          'Ansprechpartner',
          'Gebrauchsanweisung',
          'sich erkundigen',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'spell-words',
      'spell',
      meta(
        'Spell the service words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'service-complaints'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(claims, 'Mahnung', 'Kulanz'), 'unscramble').items,
          ...spell(byDe(service, 'Anfrage'), 'unscramble').items,
          ...spell(byDe(claims, 'Beanstandung', 'bemängeln'), 'type').items,
          ...spell(byDe(service, 'Kassenbon'), 'type').items,
          dictation(
            'd1',
            'Ich bitte Sie, den Mangel bis Freitag zu beheben.',
            'I ask you to remedy the defect by Friday.',
          ),
          dictation(
            'd2',
            'Wir bedauern die Unannehmlichkeiten sehr.',
            'We very much regret the inconvenience.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-alternatives',
      'gapfill',
      meta(
        'lässt sich, ist zu, -bar',
        'Express “can be / must be done” without the passive.',
        ['grammar', 'passive-alternatives', 'service-complaints'],
        3,
        7,
      ),
      {
        items: [
          hint(
            gap(
              'p1',
              'Das Problem ___ sich schnell lösen.',
              'lässt',
              ['lässt', 'kann', 'wird', 'ist'],
              'The problem can be solved quickly.',
              'sich lassen + infinitive = can be done',
            ),
            {
              kann: 'kann sich would mean the problem solves itself. For “can be solved” use lässt sich + infinitive.',
              wird: 'wird would need the participle: wird gelöst.',
              ist: 'ist would need zu + infinitive: ist zu lösen.',
            },
          ),
          hint(
            gap(
              'p2',
              'Der Antrag ist bis Freitag ___.',
              'einzureichen',
              ['einzureichen', 'eingereicht', 'einreichen', 'zu einreichen'],
              'The application must be submitted by Friday.',
              'sein + zu + infinitive; with separable verbs zu goes in the middle',
            ),
            {
              eingereicht: 'ist eingereicht would mean it has already been submitted (state).',
              einreichen: 'sein + infinitive without zu does not exist here.',
              'zu einreichen':
                'With separable verbs zu stands between prefix and verb: einzureichen.',
            },
          ),
          hint(
            gap(
              'p3',
              'Die Rechnung ist sofort ___ bezahlen.',
              'zu',
              ['zu', 'um', 'nach', 'für'],
              'The invoice must be paid immediately.',
              'ist … zu + infinitive = must be done',
            ),
            {
              um: 'um … zu expresses a purpose. Here ist … zu means “must be”.',
              nach: 'nach is a preposition and does not combine with an infinitive here.',
              für: 'für is a preposition and does not combine with an infinitive here.',
            },
          ),
          hint(
            gap(
              'p4',
              'Dieser Mangel ist leicht ___.',
              'behebbar',
              ['behebbar', 'behebend', 'behoben', 'behebt'],
              'This defect can easily be remedied.',
              '-bar = can be done',
            ),
            {
              behebend: 'The Partizip I behebend means “remedying” (active).',
              behoben: 'behoben means “has been remedied” (already done).',
              behebt: 'behebt is a verb form, not an adjective.',
            },
          ),
          hint(
            gap(
              'p5',
              'Hier ___ nicht geraucht.',
              'wird',
              ['wird', 'ist', 'werden', 'worden'],
              'Smoking is not allowed here.',
              'impersonal passive: werden + participle, no subject',
            ),
            {
              ist: 'ist geraucht would be the Zustandspassiv and does not fit a prohibition.',
              werden: 'The impersonal passive has no plural subject, so use wird.',
              worden: 'worden only appears in the Perfekt passive (ist … worden).',
            },
          ),
          hint(
            gap(
              'p6',
              'Gestern ___ im Servicecenter bis spät gearbeitet.',
              'wurde',
              ['wurde', 'wird', 'ist', 'war'],
              'Yesterday people worked until late at the service centre.',
              'impersonal passive in the past: wurde + participle',
            ),
            {
              wird: 'The sentence is in the past, so use wurde.',
              ist: 'ist gearbeitet would need worden for the Perfekt passive.',
              war: 'war gearbeitet is not possible.',
            },
          ),
          typed(
            'p7',
            'Die Reklamation lässt ___ online einreichen.',
            'sich',
            'The complaint can be submitted online.',
            'lässt sich + infinitive',
          ),
          hint(
            gap(
              'p8',
              'Hier ___ nicht geparkt werden.',
              'darf',
              ['darf', 'ist', 'wird', 'lässt'],
              'Parking is not allowed here.',
              'passive with modal verb: darf … werden',
            ),
            {
              ist: 'ist would not combine with geparkt werden.',
              wird: 'wird geparkt werden is not possible; the modal carries the conjugation.',
              lässt: 'lässt sich needs an infinitive, not geparkt werden.',
            },
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-structures',
      'sortit',
      meta(
        'Which structure is it?',
        'Sort sentences by the way they avoid or use the passive.',
        ['grammar', 'passive-alternatives', 'service-complaints'],
        3,
        5,
      ),
      {
        instruction: 'Which structure does the sentence use?',
        buckets: [
          { id: 'man', label: 'man + active', emoji: '🧍' },
          { id: 'lassen', label: 'sich lassen', emoji: '🔁' },
          { id: 'zu', label: 'sein + zu', emoji: '📌' },
          { id: 'passiv', label: 'werden-Passiv', emoji: '🔄' },
        ],
        items: sortItems('s', [
          ['Man erledigt das online.', 'man'],
          ['Man bearbeitet Anfragen innerhalb von zwei Tagen.', 'man'],
          ['Der Fehler lässt sich beheben.', 'lassen'],
          ['Das lässt sich nicht beweisen.', 'lassen'],
          ['Die Rechnung ist bis Montag zu bezahlen.', 'zu'],
          ['Der Schaden ist umgehend zu melden.', 'zu'],
          ['Die Anfrage wird bearbeitet.', 'passiv'],
          ['Der Fehler wurde behoben.', 'passiv'],
        ]),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build the sentence',
        'Alternatives to the passive in service situations.',
        ['grammar', 'passive-alternatives', 'service-complaints'],
        3,
        7,
      ),
      {
        items: [
          sent('s1', 'The mistake can be corrected easily.', [
            'Der',
            'Fehler',
            'lässt',
            'sich',
            'leicht',
            'beheben.',
          ]),
          sent('s2', 'The invoice must be paid by Friday.', [
            'Die',
            'Rechnung',
            'ist',
            'bis',
            'Freitag',
            'zu',
            'bezahlen.',
          ]),
          sent('s3', 'Smoking is not allowed here.', [
            'Hier',
            'darf',
            'nicht',
            'geraucht',
            'werden.',
          ]),
          sent('s4', 'Complaints are processed within three days.', [
            'Beschwerden',
            'werden',
            'innerhalb',
            'von',
            'drei',
            'Tagen',
            'bearbeitet.',
          ]),
          sent('s5', 'Yesterday people worked until late at the service centre.', [
            'Gestern',
            'wurde',
            'im',
            'Servicecenter',
            'bis',
            'spät',
            'gearbeitet.',
          ]),
          sent('s6', 'The defect is easy to remedy.', [
            'Der',
            'Mangel',
            'ist',
            'leicht',
            'behebbar.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-talk',
      'listen',
      meta(
        'On the hotline',
        'Listen to customers and service staff.',
        ['listening', 'service-complaints'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Leider ist die Lieferung im Verzug, wir bitten um Entschuldigung.',
            'Unfortunately the delivery is delayed, we apologise.',
            [
              'The delivery arrived a day early.',
              'We are not able to deliver at all.',
              'The delivery is free of charge from now on.',
            ],
          ),
          heard(
            'l2',
            'Das Gerät ist mangelhaft. Ich bestehe auf einer Rückerstattung.',
            'The device is defective. I insist on a refund.',
            [
              'The device is perfect. I would like a gift voucher.',
              'I would like to exchange the device for a cheaper one.',
              'I do not know whether the device is defective.',
            ],
          ),
          heard(
            'l3',
            'Die Anfrage wird innerhalb von zwei Werktagen bearbeitet.',
            'The enquiry will be dealt with within two working days.',
            [
              'The enquiry was lost two days ago.',
              'The enquiry has to be repeated every two days.',
              'Enquiries are only answered on weekends.',
            ],
          ),
          heard(
            'l4',
            'Der Fehler lässt sich nur vom Kundendienst beheben.',
            'The fault can only be fixed by customer service.',
            [
              'The fault can be fixed by yourself in two minutes.',
              'Customer service is closed because of the fault.',
              'The fault was caused by the customer service.',
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
        'Complaint and enquiry',
        'Report a defect by phone and ask a provider for an offer.',
        ['communication', 'service-complaints', 'passive-alternatives'],
        2,
        7,
      ),
      {
        scenes: [
          {
            id: 'hotline',
            title: 'Beim Kundendienst',
            emoji: '🎧',
            setting: 'Your washing machine has stopped working and you call customer service.',
            turns: [
              say(
                'Kundendienst',
                'Guten Tag, Kundendienst Hellmann. Was kann ich für Sie tun?',
                'Hello, Hellmann customer service. How can I help?',
              ),
              you(
                'Guten Tag, ich möchte einen Mangel beanstanden. Die Waschmaschine funktioniert nicht mehr.',
                [
                  'Guten Tag, ich möchte einen Mangel beanstanden. Die Waschmaschine funktioniert mehr nicht.',
                  'The phrase is nicht mehr (no longer), not mehr nicht.',
                ],
                [
                  'Guten Tag, ich möchte einen Mangel beanstanden. Die Waschmaschine nicht mehr funktioniert.',
                  'In a main clause the verb stays in second position: funktioniert nicht mehr.',
                ],
              ),
              say(
                'Kundendienst',
                'Das tut mir leid. Können Sie den Fehler selbst beheben?',
                'I am sorry. Can you fix the fault yourself?',
              ),
              you(
                'Nein, der Fehler lässt sich nicht selbst beheben.',
                [
                  'Nein, der Fehler lässt nicht selbst beheben.',
                  'lassen needs the reflexive pronoun: lässt sich.',
                ],
                [
                  'Nein, der Fehler lässt sich nicht selbst zu beheben.',
                  'After lassen the infinitive has no zu.',
                ],
              ),
              say(
                'Kundendienst',
                'Wir schicken morgen einen Techniker. Das Gerät steht noch unter Gewährleistung.',
                'We will send a technician tomorrow. The device is still under warranty.',
              ),
              you(
                'Gut. Dann bestehe ich darauf, dass der Mangel bis Freitag behoben wird.',
                [
                  'Gut. Dann bestehe ich darauf, dass der Mangel bis Freitag wird behoben.',
                  'In a dass-clause the conjugated verb goes to the end: behoben wird.',
                ],
                [
                  'Gut. Dann bestehe ich darauf, dass der Mangel bis Freitag behoben werden.',
                  'Mangel is singular: wird.',
                ],
              ),
            ],
          },
          {
            id: 'enquiry',
            title: 'Eine Anfrage',
            emoji: '📨',
            setting: 'You ask a removal company about its service.',
            turns: [
              say(
                'Frau Roth',
                'Sie haben eine Anfrage zu unserem Umzugsservice gestellt. Was möchten Sie wissen?',
                'You sent an enquiry about our removal service. What would you like to know?',
              ),
              you(
                'Ich würde gern wissen, ob die Möbel auch abgebaut werden.',
                [
                  'Ich würde gern wissen, ob die Möbel auch abgebaut wird.',
                  'Möbel is plural here: werden.',
                ],
                [
                  'Ich würde gern wissen, ob die Möbel auch werden abgebaut.',
                  'In an ob-clause the conjugated verb goes to the end.',
                ],
              ),
              say(
                'Frau Roth',
                'Ja, das wird von unseren Mitarbeitern erledigt. Alles lässt sich an einem Tag schaffen.',
                'Yes, our staff does that. Everything can be done in one day.',
              ),
              you(
                'Wunderbar. Ich bitte um ein schriftliches Angebot.',
                ['Wunderbar. Ich bitte auf ein schriftliches Angebot.', 'bitten um + Akkusativ.'],
                [
                  'Wunderbar. Ich bitte um ein schriftlichen Angebot.',
                  'ein schriftliches Angebot – neuter: -es.',
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
        'Service blitz',
        'Passive alternatives and vocabulary – true or false?',
        ['grammar', 'passive-alternatives', 'service-complaints'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Das Problem lässt sich lösen.', true),
          tf('b2', 'Das Problem lässt lösen.', false, 'lassen needs sich: lässt sich lösen.'),
          tf('b3', 'Der Antrag ist bis Montag einzureichen.', true),
          tf(
            'b4',
            'Der Antrag ist bis Montag zu einreichen.',
            false,
            'einzureichen – zu goes in the middle.',
          ),
          tf('b5', 'Hier wird nicht geraucht.', true),
          tf('b6', 'Hier werden nicht geraucht.', false, 'The impersonal passive uses wird.'),
          tf('b7', 'Behebbar bedeutet: Es kann behoben werden.', true),
          tf(
            'b8',
            'Lässt sich + Infinitiv bedeutet: Es muss unbedingt getan werden.',
            false,
            'It means “can be done”.',
          ),
          tf('b9', 'Mit Kulanz bearbeitet eine Firma eine Beschwerde großzügig.', true),
          tf(
            'b10',
            'Eine Mahnung bekommt man, wenn man pünktlich bezahlt hat.',
            false,
            'A reminder comes when payment is overdue.',
          ),
          tf('b11', 'Ein Dienstleister bietet eine Dienstleistung an.', true),
          tf(
            'b12',
            'Der Kassenbon ist eine Art Vertrag zwischen zwei Firmen.',
            false,
            'It is the receipt.',
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
        'Service words and the passive alternatives in one round.',
        ['vocabulary', 'grammar', 'service-complaints'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Die Rechnung ist bis Freitag ___.', 'zu bezahlen', [
            'bezahlen zu',
            'zu bezahlt',
            'bezahlen',
          ]),
          q('c2', 'Das Ticket ___ sich online kaufen.', 'lässt', ['kann', 'wird', 'ist']),
          q('c3', 'Im Büro ___ den ganzen Tag telefoniert.', 'wird', ['ist', 'werden', 'hat']),
          q('c4', 'Man kann den Schaden ersetzen. = Der Schaden ist ___.', 'ersetzbar', [
            'ersetzend',
            'ersetzt',
            'ersetzlos',
          ]),
          q('c5', 'Dieses Formular ___ bis Montag abzugeben.', 'ist', ['wird', 'lässt', 'darf']),
          q('c6', 'der Kundendienst', 'customer service', [
            'contact person',
            'waiting time',
            'warranty',
          ]),
          q('c7', 'der Schadenersatz', 'compensation for damages', [
            'inconvenience',
            'receipt',
            'return',
          ]),
          q('c8', 'sich erkundigen', 'to enquire', ['to complain', 'to process', 'to guarantee']),
          q('c9', 'unzumutbar', 'unacceptable', ['accommodating', 'delayed', 'free of charge']),
          q('c10', 'das Anliegen', 'concern, request', [
            'instructions',
            'delay',
            'service hotline',
          ]),
        ],
      },
    ),
  ],
};
