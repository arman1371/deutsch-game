import { byDe, flashcards, memory, quizEmoji, spell, vocabList } from '../builders';
import {
  activity,
  customTable,
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
  unit21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'a2-1-online';

const devices = vocabList(U, 'Devices & internet', [
  ['Handy', 'mobile phone', '📱', 'das', 'Handys'],
  ['Computer', 'computer', '🖥️', 'der', 'Computer'],
  ['Laptop', 'laptop', '💻', 'der', 'Laptops'],
  ['Tastatur', 'keyboard', '⌨️', 'die', 'Tastaturen'],
  ['Maus', 'mouse', '🖱️', 'die', 'Mäuse'],
  ['Drucker', 'printer', '🖨️', 'der', 'Drucker'],
  ['Kopfhörer', 'headphones', '🎧', 'der', 'Kopfhörer'],
  ['Kamera', 'camera', '📷', 'die', 'Kameras'],
  ['Akku', 'battery', '🔋', 'der', 'Akkus'],
  ['Ladekabel', 'charging cable', '🔌', 'das', 'Ladekabel'],
  ['WLAN', 'Wi-Fi', '📶', 'das'],
  ['Internet', 'the internet', '🌐', 'das'],
  ['App', 'app', '📲', 'die', 'Apps'],
  ['E-Mail', 'e-mail', '📧', 'die', 'E-Mails'],
  ['Nachricht', 'message', '💬', 'die', 'Nachrichten'],
  ['Passwort', 'password', '🔑', 'das', 'Passwörter'],
  ['Datei', 'file', '📁', 'die', 'Dateien'],
  ['Link', 'link', '🔗', 'der', 'Links'],
]);

const web = vocabList(U, 'Websites & e-mail', [
  ['Webseite', 'website', '🌍', 'die', 'Webseiten'],
  ['Startseite', 'home page', '🏠', 'die', 'Startseiten'],
  ['Suchmaschine', 'search engine', '🔍', 'die', 'Suchmaschinen'],
  ['Menü', 'menu', '📋', 'das', 'Menüs'],
  ['Anmeldung', 'login / registration', '🔐', 'die', 'Anmeldungen'],
  ['Warenkorb', 'shopping basket', '🛒', 'der', 'Warenkörbe'],
  ['Einstellungen', 'settings', '⚙️', 'die'],
  ['Impressum', 'legal notice', '⚖️', 'das'],
  ['Hilfe', 'help', '🆘', 'die'],
  ['Anhang', 'attachment', '📎', 'der', 'Anhänge'],
  ['Betreff', 'subject line', '🏷️', 'der', 'Betreffs'],
  ['Posteingang', 'inbox', '📥', 'der'],
  ['Absender', 'sender', '📤', 'der', 'Absender'],
  ['Empfänger', 'recipient', '📬', 'der', 'Empfänger'],
  ['Spam', 'spam', '🗑️', 'der'],
]);

const actions = vocabList(U, 'Online verbs', [
  ['chatten', 'to chat', '💬'],
  ['einloggen', 'to log in', '🔓'],
  ['ausloggen', 'to log out', '🔒'],
  ['herunterladen', 'to download', '⬇️'],
  ['hochladen', 'to upload', '⬆️'],
  ['anklicken', 'to click on', '👆'],
  ['ausdrucken', 'to print out', '🖨️'],
  ['speichern', 'to save', '💾'],
  ['löschen', 'to delete', '❌'],
  ['weiterleiten', 'to forward', '↪️'],
  ['installieren', 'to install', '🧩'],
  ['antworten', 'to reply', '↩️'],
  ['surfen', 'to surf', '🏄'],
  ['telefonieren', 'to phone', '📞'],
]);

const vocab = [...devices, ...web, ...actions];

export const online: UnitContent = {
  unit: unit21({
    id: U,
    order: 1,
    title: 'Online & Apps',
    subtitle: 'Internet, chatting, e-mail and apps',
    emoji: '💻',
    goals: [
      'Find your way around a website and name its parts',
      'Write and answer messages and e-mails',
      'Say what you have downloaded, installed or sent',
    ],
    grammar: [
      'Separable verbs: Ich lade die App herunter.',
      'Perfekt of separable verbs: heruntergeladen, ausgedruckt, eingeloggt',
      'Perfekt without ge-: installiert, bekommen, vergessen, besucht',
    ],
    vocabFields: ['Devices & internet', 'Websites & e-mail', 'Online verbs'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-devices',
      'flashcards',
      meta(
        'Devices & internet',
        'Phone, laptop, Wi-Fi, password – the words of everyday online life.',
        ['vocabulary', 'internet-media'],
        1,
        5,
      ),
      flashcards(devices),
    ),

    activity(
      U,
      'quiz-devices',
      'quiz',
      meta(
        'What is this?',
        'Name the device or online word – with the right article.',
        ['vocabulary', 'internet-media', 'articles'],
        1,
        4,
      ),
      quizEmoji(devices, devices),
    ),

    activity(
      U,
      'flash-web',
      'flashcards',
      meta(
        'Websites & e-mail',
        'Home page, menu, attachment, inbox – find your way around.',
        ['vocabulary', 'internet-media'],
        1,
        4,
      ),
      flashcards(web),
    ),

    activity(
      U,
      'flash-actions',
      'flashcards',
      meta(
        'Online verbs',
        'Download, log in, forward – what you do online.',
        ['vocabulary', 'internet-media', 'separable-verbs'],
        1,
        4,
      ),
      flashcards(actions),
    ),

    activity(
      U,
      'memory-devices',
      'memory',
      meta(
        'Device memory',
        'Match the German word with the picture.',
        ['vocabulary', 'internet-media'],
        1,
        3,
      ),
      memory(
        byDe(
          devices,
          'Handy',
          'Laptop',
          'Tastatur',
          'Maus',
          'Drucker',
          'Kopfhörer',
          'Kamera',
          'Akku',
        ),
        'emoji',
      ),
    ),

    activity(
      U,
      'sort-parts',
      'sortit',
      meta(
        'Hardware, website or e-mail?',
        'Where do you find it?',
        ['vocabulary', 'internet-media'],
        2,
        4,
      ),
      {
        instruction: 'Where does it belong?',
        buckets: [
          { id: 'hardware', label: 'Hardware', emoji: '🖥️' },
          { id: 'webseite', label: 'Webseite', emoji: '🌍' },
          { id: 'email', label: 'E-Mail', emoji: '📧' },
        ],
        items: sortItems('p', [
          ['die Tastatur', 'hardware'],
          ['der Drucker', 'hardware'],
          ['die Maus', 'hardware'],
          ['die Startseite', 'webseite'],
          ['die Suchmaschine', 'webseite'],
          ['das Menü', 'webseite'],
          ['der Warenkorb', 'webseite'],
          ['der Anhang', 'email'],
          ['der Betreff', 'email'],
          ['der Posteingang', 'email'],
          ['der Absender', 'email'],
        ]),
      },
    ),

    activity(
      U,
      'spell-online',
      'spell',
      meta(
        'Spell the online words',
        'Unscramble the letters and type the words.',
        ['spelling', 'internet-media'],
        2,
        4,
      ),
      {
        items: [
          ...spell(byDe(devices, 'Passwort', 'Drucker', 'Laptop'), 'unscramble').items,
          ...spell(byDe(devices, 'Tastatur', 'Kopfhörer', 'Datei'), 'type').items,
          ...spell(byDe(web, 'Suchmaschine'), 'type').items,
        ],
      },
    ),

    activity(
      U,
      'listen-online',
      'listen',
      meta(
        'Messages and instructions',
        'Listen to the short messages and pick the meaning.',
        ['listening', 'internet-media', 'perfekt'],
        2,
        4,
      ),
      {
        items: [
          heard('l1', 'Ich habe dir eine Nachricht geschickt.', 'I sent you a message.', [
            'I received a message from you.',
            'I will send you a message tomorrow.',
            'I wrote you a letter.',
          ]),
          heard(
            'l2',
            'Bitte loggen Sie sich mit Ihrem Passwort ein.',
            'Please log in with your password.',
            [
              'Please log out with your password.',
              'Please change your password.',
              'Please log in with your e-mail address.',
            ],
          ),
          heard(
            'l3',
            'Die Datei finden Sie im Anhang.',
            'You will find the file in the attachment.',
            [
              'You will find the file on the website.',
              'The attachment is missing.',
              'Please send the file again.',
            ],
          ),
          heard(
            'l4',
            'Die App kann man kostenlos herunterladen.',
            'You can download the app for free.',
            [
              'The app costs ten euros.',
              'You can only use the app online.',
              'You must install the app first.',
            ],
          ),
          heard('l5', 'Das WLAN funktioniert heute nicht.', 'The Wi-Fi is not working today.', [
            'The Wi-Fi is very fast today.',
            'The phone is not working today.',
            'There is no internet café here.',
          ]),
          heard('l6', 'Ich habe das Passwort vergessen.', 'I have forgotten the password.', [
            'I have changed the password.',
            'I do not need a password.',
            'I have lost my phone.',
          ]),
          heard('l7', 'Klicken Sie oben links auf „Hilfe“.', 'Click on “Help” at the top left.', [
            'Click on “Help” at the bottom right.',
            'Call the help line.',
            'Press the menu button.',
          ]),
        ],
      },
    ),

    activity(
      U,
      'gap-separable',
      'gapfill',
      meta(
        'Separable verbs online',
        'Prefix at the end: ich lade … herunter.',
        ['grammar', 'separable-verbs', 'internet-media'],
        2,
        5,
      ),
      {
        items: [
          gap(
            's1',
            'Ich lade die App heute ___.',
            'herunter',
            ['herunter', 'hoch', 'ein', 'aus'],
            'I am downloading the app today.',
            'herunterladen is separable: ich lade … herunter.',
          ),
          gap(
            's2',
            'Du ___ dich mit deinem Passwort ein.',
            'loggst',
            ['loggst', 'logge', 'loggt', 'loggen'],
            'You log in with your password.',
            'einloggen: du loggst dich … ein.',
          ),
          gap(
            's3',
            'Wir drucken den Brief ___.',
            'aus',
            ['aus', 'an', 'ein', 'hoch'],
            'We are printing the letter out.',
          ),
          gap(
            's4',
            'Er ___ die Datei auf die Webseite hoch.',
            'lädt',
            ['lädt', 'ladet', 'lade', 'lädst'],
            'He uploads the file to the website.',
            'laden has an umlaut: er lädt.',
          ),
          gap(
            's5',
            'Klickst du den Link bitte ___?',
            'an',
            ['an', 'auf', 'aus', 'ein'],
            'Will you click on the link, please?',
            'anklicken: klickst du … an?',
          ),
          gap(
            's6',
            'Sie ___ die E-Mail an alle Kollegen weiter.',
            'leitet',
            ['leitet', 'leite', 'leiten', 'leitest'],
            'She forwards the e-mail to all colleagues.',
          ),
          gap(
            's7',
            'Ich bin fertig. Ich schalte den Computer ___.',
            'aus',
            ['aus', 'an', 'mit', 'zu'],
            'I am done. I switch the computer off.',
          ),
          gap(
            's8',
            'Ich rufe dich später ___.',
            'an',
            ['an', 'auf', 'aus', 'ein'],
            'I will call you later.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-perfekt-sep',
      'gapfill',
      meta(
        'Perfekt of separable verbs',
        'The ge- goes between prefix and verb: herunter-ge-laden.',
        ['grammar', 'perfekt', 'separable-verbs', 'internet-media'],
        3,
        6,
      ),
      {
        items: [
          typed(
            'p1',
            'Ich habe die App gestern ___. (herunterladen)',
            'heruntergeladen',
            'I downloaded the app yesterday.',
            'prefix + ge + verb: herunter-ge-laden.',
          ),
          typed(
            'p2',
            'Hast du das Dokument schon ___? (ausdrucken)',
            'ausgedruckt',
            'Have you printed the document yet?',
          ),
          typed(
            'p3',
            'Sie hat die Fotos ___. (hochladen)',
            'hochgeladen',
            'She uploaded the photos.',
          ),
          typed(
            'p4',
            'Wir haben die Nachricht an alle ___. (weiterleiten)',
            'weitergeleitet',
            'We forwarded the message to everyone.',
          ),
          typed(
            'p5',
            'Ich habe mich gerade ___. (einloggen)',
            'eingeloggt',
            'I have just logged in.',
          ),
          typed('p6', 'Er hat den Link ___. (anklicken)', 'angeklickt', 'He clicked on the link.'),
          typed(
            'p7',
            'Hast du den Computer ___? (ausschalten)',
            'ausgeschaltet',
            'Did you switch the computer off?',
          ),
          typed(
            'p8',
            'Ich habe dich gestern ___. (anrufen)',
            'angerufen',
            'I called you yesterday.',
          ),
        ],
      },
    ),

    activity(
      U,
      'gap-perfekt-noge',
      'gapfill',
      meta(
        'Perfekt without ge-',
        'Verbs on -ieren and with be-, ver- or ent- have no ge-.',
        ['grammar', 'perfekt', 'internet-media'],
        3,
        6,
      ),
      {
        items: [
          gap(
            'n1',
            'Ich habe die neue App ___. (installieren)',
            'installiert',
            ['installiert', 'geinstalliert', 'installieren', 'installierte'],
            'I have installed the new app.',
            'Verbs on -ieren have no ge-.',
          ),
          gap(
            'n2',
            'Hast du meine E-Mail ___? (bekommen)',
            'bekommen',
            ['bekommen', 'gebekommen', 'bekommt', 'gekommen'],
            'Did you get my e-mail?',
            'be- is an inseparable prefix: no ge-.',
          ),
          gap(
            'n3',
            'Ich habe lange mit ihr ___. (telefonieren)',
            'telefoniert',
            ['telefoniert', 'getelefoniert', 'telefoniere', 'telefonieren'],
            'I spoke to her on the phone for a long time.',
          ),
          gap(
            'n4',
            'Wir haben das Problem ___. (verstehen)',
            'verstanden',
            ['verstanden', 'geverstanden', 'verstehen', 'verstehnt'],
            'We have understood the problem.',
          ),
          gap(
            'n5',
            'Leider habe ich das Passwort ___. (vergessen)',
            'vergessen',
            ['vergessen', 'gevergessen', 'vergisst', 'vergessene'],
            'Unfortunately I have forgotten the password.',
          ),
          gap(
            'n6',
            'Er hat die Webseite ___. (besuchen)',
            'besucht',
            ['besucht', 'gesucht', 'gebesucht', 'besuchen'],
            'He has visited the website.',
          ),
          gap(
            'n7',
            'Sie hat die Rechnung online ___. (bezahlen)',
            'bezahlt',
            ['bezahlt', 'gezahlt', 'gebezahlt', 'bezahlen'],
            'She paid the invoice online.',
          ),
          gap(
            'n8',
            'Habt ihr das Foto ___? (speichern)',
            'gespeichert',
            ['gespeichert', 'speichert', 'gespeicher', 'speichern'],
            'Have you saved the photo?',
            'speichern is a normal verb: ge-…-t.',
          ),
        ],
      },
    ),

    activity(
      U,
      'conj-online',
      'conjugation',
      meta(
        'herunterladen, einloggen, anklicken …',
        'Separable and reflexive verbs for online life.',
        ['grammar', 'separable-verbs', 'verb-conjugation', 'internet-media'],
        2,
        5,
      ),
      {
        tables: [
          sepTable('herunter', 'laden', 'to download', ['ich', 'du', 'er/sie/es']),
          sepTable('an', 'klicken', 'to click on', ['ich', 'du', 'wir']),
          customTable(
            'sich-einloggen',
            'sich einloggen',
            'to log in',
            [
              'logge mich ein',
              'loggst dich ein',
              'loggt sich ein',
              'loggen uns ein',
              'loggt euch ein',
              'loggen sich ein',
            ],
            ['ich', 'du', 'sie/Sie'],
          ),
          sepTable('aus', 'drucken', 'to print out', ['er/sie/es', 'ihr', 'wir']),
          table('installieren', 'to install', ['ich', 'du', 'er/sie/es']),
        ],
      },
    ),

    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Online sentences',
        'Build sentences with separable verbs and the Perfekt.',
        ['grammar', 'word-order', 'perfekt', 'separable-verbs', 'internet-media'],
        2,
        6,
      ),
      {
        items: [
          sent('s1', 'I have downloaded the app.', [
            'Ich',
            'habe',
            'die',
            'App',
            'heruntergeladen.',
          ]),
          sent(
            's2',
            'Please log in with your password.',
            ['Bitte', 'loggen', 'Sie', 'sich', 'mit', 'Ihrem', 'Passwort', 'ein.'],
            { explanation: 'einloggen is separable: loggen Sie sich … ein.' },
          ),
          sent('s3', 'She forwarded the e-mail to me.', [
            'Sie',
            'hat',
            'mir',
            'die',
            'E-Mail',
            'weitergeleitet.',
          ]),
          sent('s4', 'Have you installed the new app?', [
            'Hast',
            'du',
            'die',
            'neue',
            'App',
            'installiert?',
          ]),
          sent(
            's5',
            'I wrote you a message yesterday.',
            ['Ich', 'habe', 'dir', 'gestern', 'eine', 'Nachricht', 'geschrieben.'],
            { alsoAccept: ['Gestern habe ich dir eine Nachricht geschrieben.'] },
          ),
          sent('s6', 'We have not received the password.', [
            'Wir',
            'haben',
            'das',
            'Passwort',
            'nicht',
            'bekommen.',
          ]),
          sent('s7', 'I print the ticket out.', ['Ich', 'drucke', 'das', 'Ticket', 'aus.']),
          sent('s8', 'He has forgotten his password.', [
            'Er',
            'hat',
            'sein',
            'Passwort',
            'vergessen.',
          ]),
          sent('s9', 'Can you send me the link?', [
            'Kannst',
            'du',
            'mir',
            'den',
            'Link',
            'schicken?',
          ]),
        ],
      },
    ),

    activity(
      U,
      'dialogues-online',
      'dialogue',
      meta(
        'Help, chat and e-mail',
        'Forgotten password, a chat about an app, a missing attachment.',
        ['communication', 'internet-media', 'perfekt', 'separable-verbs'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'password',
            title: 'Forgotten password',
            emoji: '🔑',
            setting: 'You call the support line of an online shop.',
            turns: [
              say(
                'Support',
                'Support, guten Tag. Wie kann ich helfen?',
                'Support, hello. How can I help?',
              ),
              you(
                'Guten Tag, ich habe mein Passwort vergessen.',
                [
                  'Guten Tag, ich habe mein Passwort gevergessen.',
                  'vergessen starts with ver-: no ge- in the Perfekt.',
                ],
                [
                  'Guten Tag, ich bin mein Passwort vergessen.',
                  'The Perfekt of vergessen uses haben.',
                ],
              ),
              say(
                'Support',
                'Kein Problem. Wie ist Ihre E-Mail-Adresse? Ich schicke Ihnen einen Link.',
                'No problem. What is your e-mail address? I will send you a link.',
              ),
              you(
                'Meine E-Mail-Adresse ist anna@web.de.',
                ['Mein E-Mail-Adresse ist anna@web.de.', 'die E-Mail-Adresse → meine.'],
                ['Meine E-Mail-Adresse bin anna@web.de.', 'Use ist for things.'],
              ),
              say(
                'Support',
                'Haben Sie die E-Mail schon bekommen?',
                'Have you received the e-mail yet?',
              ),
              you(
                'Ja, ich habe sie bekommen. Ich logge mich jetzt ein.',
                ['Ja, ich habe sie gebekommen. Ich logge mich jetzt ein.', 'bekommen has no ge-.'],
                [
                  'Ja, ich habe sie bekommen. Ich einlogge mich jetzt.',
                  'einloggen is separable: ich logge mich … ein.',
                ],
              ),
            ],
          },
          {
            id: 'chat',
            title: 'Chat with a friend',
            emoji: '💬',
            setting: 'Lisa writes to you about a new app.',
            turns: [
              say(
                'Lisa',
                'Hast du die neue App schon installiert?',
                'Have you installed the new app yet?',
              ),
              you(
                'Ja, ich habe sie gestern installiert.',
                ['Ja, ich habe sie gestern geinstalliert.', 'Verbs on -ieren have no ge-.'],
                ['Ja, ich habe es gestern installiert.', 'die App → sie.'],
              ),
              say('Lisa', 'Super! Schick mir bitte ein Foto.', 'Great! Please send me a photo.'),
              you(
                'Mache ich. Ich lade es gleich hoch.',
                ['Mache ich. Ich hochlade es gleich.', 'hochladen is separable: ich lade … hoch.'],
                [
                  'Mache ich. Ich lade es gleich ein.',
                  'einladen means “to invite”; the prefix here is hoch-.',
                ],
              ),
            ],
          },
          {
            id: 'attachment',
            title: 'The missing attachment',
            emoji: '📎',
            setting: 'A colleague asks about his e-mail.',
            turns: [
              say(
                'Kollege',
                'Hast du meine E-Mail mit dem Anhang bekommen?',
                'Did you get my e-mail with the attachment?',
              ),
              you(
                'Nein, ich habe nur die E-Mail bekommen. Der Anhang fehlt.',
                [
                  'Nein, ich habe nur die E-Mail gebekommen. Der Anhang fehlt.',
                  'bekommen has no ge-.',
                ],
                [
                  'Nein, ich habe nur die E-Mail bekommen. Die Anhang fehlt.',
                  'der Anhang is masculine.',
                ],
              ),
              say(
                'Kollege',
                'Entschuldigung! Ich schicke ihn noch einmal.',
                'Sorry! I will send it again.',
              ),
              you(
                'Danke. Ich drucke ihn dann gleich aus.',
                [
                  'Danke. Ich ausdrucke ihn dann gleich.',
                  'ausdrucken is separable: ich drucke … aus.',
                ],
                ['Danke. Ich drucke sie dann gleich aus.', 'der Anhang → ihn.'],
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
        'Perfekt blitz',
        'Separable verbs and the Perfekt – true or false?',
        ['grammar', 'perfekt', 'separable-verbs'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Ich habe die App heruntergeladen.', true),
          tf('b2', 'Ich habe die App herunterladen.', false, 'The Perfekt needs the participle.'),
          tf('b3', 'Er hat das Foto hochgeladen.', true),
          tf(
            'b4',
            'Er hat das Foto gehochgeladen.',
            false,
            'The ge- sits between prefix and verb: hoch-ge-laden.',
          ),
          tf('b5', 'Ich habe die Datei installiert.', true),
          tf('b6', 'Ich habe die Datei geinstalliert.', false, 'Verbs on -ieren have no ge-.'),
          tf('b7', 'Wir haben den Brief ausgedruckt.', true),
          tf(
            'b8',
            'Wir haben den Brief gedruckt aus.',
            false,
            'The prefix stays in front of the participle.',
          ),
          tf('b9', 'Sie hat mir die Nachricht weitergeleitet.', true),
          tf('b10', 'Ich logge mich ein.', true),
          tf('b11', 'Ich einlogge mich.', false, 'Separable: ich logge mich ein.'),
          tf('b12', 'Hast du die E-Mail gebekommen?', false, 'bekommen has no ge-.'),
        ],
      },
    ),

    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Online vocabulary, separable verbs and the Perfekt in one round.',
        ['vocabulary', 'grammar', 'perfekt', 'internet-media'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Ich lade die App ___.', 'herunter', ['hoch', 'heraus', 'ein']),
          q('c2', 'Wir haben das Foto ___. (hochladen)', 'hochgeladen', [
            'gehochladen',
            'hochladen',
            'hochgeladet',
          ]),
          q('c3', 'Er hat die App ___. (installieren)', 'installiert', [
            'geinstalliert',
            'installieren',
            'installierte',
          ]),
          q('c4', 'Du ___ dich ein.', 'loggst', ['logge', 'loggt', 'einloggst']),
          q('c5', 'das Passwort', 'password', ['username', 'attachment', 'link']),
          q('c6', 'der Anhang', 'attachment', ['inbox', 'sender', 'subject line']),
          q(
            'c7',
            'You are finished and want to leave your account. You say:',
            'Ich logge mich aus.',
            ['Ich logge mich ein.', 'Ich lade mich herunter.', 'Ich speichere mich.'],
          ),
          q('c8', 'Hast du meine Nachricht ___?', 'bekommen', ['gebekommen', 'bekommt', 'bekam']),
          q('c9', 'Ich habe die Datei ___. (löschen)', 'gelöscht', [
            'löscht',
            'gelöschen',
            'gelöschet',
          ]),
          q('c10', 'Which verb is NOT separable?', 'installieren', [
            'herunterladen',
            'ausdrucken',
            'einloggen',
          ]),
        ],
      },
    ),
  ],
};
