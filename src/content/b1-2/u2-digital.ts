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

const U = 'b1-2-digital';

const computer = vocabList(U, 'Computer problems', [
  ['Festplatte', 'hard drive', '💽', 'die', 'Festplatten'],
  ['Sicherungskopie', 'backup', '🗂️', 'die', 'Sicherungskopien'],
  ['Speicherkarte', 'memory card', '💾', 'die', 'Speicherkarten'],
  ['Virus', 'virus', '🦠', 'das', 'Viren'],
  ['Fehlermeldung', 'error message', '⚠️', 'die', 'Fehlermeldungen'],
  ['Neustart', 'restart', '🔄', 'der', 'Neustarts'],
  ['Datenschutz', 'data protection', '🔐', 'der'],
  ['Bildschirmzeit', 'screen time', '📱', 'die'],
  ['Mediensucht', 'media addiction', '🫠', 'die'],
  ['wiederherstellen', 'to restore', '♻️'],
  ['sichern', 'to back up, to save', '🛟'],
  ['aktualisieren', 'to update', '🆙'],
  ['sich einloggen', 'to log in', '🔑'],
]);

const help = vocabList(U, 'Getting technical help', [
  ['Das Programm reagiert nicht.', 'The program isn’t responding.', '🥶'],
  ['Der Rechner hängt.', 'The computer has frozen.', '🧊'],
  ['Was genau wird angezeigt?', 'What exactly is shown?', '🔎'],
  ['Haben Sie es schon mit einem Neustart versucht?', 'Have you tried restarting it?', '🔁'],
  ['Ich komme nicht weiter.', 'I’m stuck.', '🚧'],
  ['Könnten Sie mir das Schritt für Schritt erklären?', 'Could you explain it step by step?', '🪜'],
]);

const vocab = [...computer, ...help];

export const digital: UnitContent = {
  unit: unitB12({
    id: U,
    order: 2,
    title: 'Digitale Welt',
    subtitle: 'Computer problems, technical support, backups and screen time',
    emoji: '🖥️',
    goals: [
      'Describe a computer problem and ask for technical help',
      'Follow and give step-by-step instructions',
      'Talk about screen time and media habits',
    ],
    grammar: [
      'als ob + Konjunktiv II: Er tut so, als ob er alles wüsste.',
      'Review: advice with würde / sollte – Ich würde eine Sicherungskopie machen.',
    ],
    vocabFields: ['Computer problems', 'Getting technical help'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-computer',
      'flashcards',
      meta(
        'Computer problems',
        'Festplatte, Virus, Sicherungskopie – when the computer acts up.',
        ['vocabulary', 'digital-world'],
        1,
        5,
      ),
      flashcards(computer),
    ),
    activity(
      U,
      'flash-help',
      'flashcards',
      meta(
        'Getting technical help',
        'Describe the problem and ask for clear steps.',
        ['vocabulary', 'communication', 'digital-world'],
        1,
        4,
      ),
      flashcards(help),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Tech words', 'Name what you see.', ['vocabulary', 'digital-world'], 1, 4),
      quizEmoji(
        byDe(
          computer,
          'Festplatte',
          'Speicherkarte',
          'Virus',
          'Fehlermeldung',
          'Neustart',
          'Datenschutz',
          'wiederherstellen',
          'sich einloggen',
        ),
      ),
    ),
    activity(
      U,
      'listen-help',
      'listen',
      meta('At the hotline', 'Listen and pick the meaning.', ['listening', 'digital-world'], 2, 4),
      listen(help),
    ),
    activity(
      U,
      'sort-melody',
      'sortit',
      meta(
        'Up or down?',
        'Satzmelodie: yes/no questions go up, statements and W-questions go down.',
        ['pronunciation', 'listening'],
        2,
        4,
      ),
      {
        instruction: 'Listen: does the melody go up or down at the end?',
        buckets: [
          { id: 'up', label: 'nach oben ↗', emoji: '⬆️' },
          { id: 'down', label: 'nach unten ↘', emoji: '⬇️' },
        ],
        items: sortItems('m', [
          ['Hast du die Datei gesichert?', 'up'],
          ['Funktioniert das WLAN wieder?', 'up'],
          ['Ist das ein Virus?', 'up'],
          ['Kannst du mir kurz helfen?', 'up'],
          ['Wo ist die Sicherungskopie?', 'down'],
          ['Wie lange dauert das Update?', 'down'],
          ['Der Rechner hängt schon wieder.', 'down'],
          ['Ich komme nicht weiter.', 'down'],
        ]).map((i) => ({ ...i, speak: i.text })),
      },
    ),
    activity(
      U,
      'spell-computer',
      'spell',
      meta(
        'Spell the tech words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'digital-world'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(computer, 'Virus', 'Neustart', 'sichern'), 'unscramble').items,
          ...spell(byDe(computer, 'Festplatte', 'Fehlermeldung', 'aktualisieren'), 'type').items,
          dictation('d1', 'Er tut so, als ob er alles wüsste.', 'he acts as if he knew everything'),
          dictation(
            'd2',
            'Haben Sie schon eine Sicherungskopie gemacht?',
            'have you made a backup yet',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-real-als-ob',
      'sortit',
      meta(
        'Really or only “as if”?',
        'als ob describes something that only seems to be true.',
        ['grammar', 'als-ob'],
        2,
        4,
      ),
      {
        instruction: 'Is it a fact, or does it only seem so?',
        buckets: [
          { id: 'fact', label: 'Das ist so.', emoji: '✅' },
          { id: 'seems', label: 'Es scheint nur so.', emoji: '🫥' },
        ],
        items: sortItems('a', [
          ['Er kennt sich mit Computern aus.', 'fact'],
          ['Er tut so, als ob er sich mit Computern auskennen würde.', 'seems'],
          ['Der Laptop ist neu.', 'fact'],
          ['Der Laptop sieht aus, als ob er neu wäre.', 'seems'],
          ['Sie hat die Datei gelöscht.', 'fact'],
          ['Sie tut so, als ob sie die Datei nicht gelöscht hätte.', 'seems'],
          ['Du hast zu wenig geschlafen.', 'fact'],
          ['Du siehst aus, als ob du die ganze Nacht gespielt hättest.', 'seems'],
        ]),
      },
    ),
    activity(
      U,
      'gap-als-ob',
      'gapfill',
      meta(
        'Er tut so, als ob …',
        'als ob with the Konjunktiv II, verb at the end.',
        ['grammar', 'als-ob'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'a1',
              'Er tut so, als ob er alles ___.',
              'wüsste',
              ['wüsste', 'weiß', 'wusste', 'wissen'],
              'He acts as if he knew everything.',
              'als ob + Konjunktiv II: wissen → wüsste.',
            ),
            {
              weiß: 'After als ob we use the Konjunktiv II, because it is not really true: wüsste.',
              wusste:
                'wusste (no umlaut) is the Präteritum; als ob takes the Konjunktiv II wüsste.',
              wissen: 'The verb must be conjugated: er wüsste.',
            },
          ),
          hint(
            gap(
              'a2',
              'Der alte Laptop sieht aus, als ob er neu ___.',
              'wäre',
              ['wäre', 'ist', 'war', 'sei'],
              'The old laptop looks as if it were new.',
            ),
            {
              ist: 'It is not really new, so use the Konjunktiv II: wäre.',
              war: 'war is the Präteritum; the comparison needs wäre.',
              sei: 'sei is used in reported speech; with als ob use wäre.',
            },
          ),
          hint(
            gap(
              'a3',
              'Du siehst aus, als ob du die ganze Nacht gespielt ___.',
              'hättest',
              ['hättest', 'wärst', 'hast', 'hattest'],
              'You look as if you had played all night.',
              'Past: hätte / wäre + participle at the end.',
            ),
            {
              wärst: 'spielen takes haben in the Perfekt, so: hättest gespielt.',
              hast: 'Use the Konjunktiv II for something that only seems so: hättest.',
              hattest: 'hattest (no umlaut) is the Präteritum; als ob takes hättest.',
            },
          ),
          hint(
            gap(
              'a4',
              'Sie tut so, als ob sie die Fehlermeldung nicht ___ würde.',
              'sehen',
              ['sehen', 'sieht', 'gesehen', 'sah'],
              'She acts as if she did not see the error message.',
              'würde + infinitive at the end.',
            ),
            {
              sieht: 'With würde the main verb is in the infinitive: sehen würde.',
              gesehen: 'würde takes the infinitive, not the participle.',
              sah: 'With würde the main verb is in the infinitive.',
            },
          ),
          hint(
            gap(
              'a5',
              'Es klingt, als ob der Rechner gleich ___.',
              'explodieren würde',
              ['explodieren würde', 'würde explodieren', 'explodiert', 'explodieren'],
              'It sounds as if the computer were about to explode.',
            ),
            {
              'würde explodieren':
                'als ob sends the conjugated verb to the end: explodieren würde.',
              explodiert: 'Use the Konjunktiv II (würde + infinitive) for an unreal comparison.',
              explodieren: 'The clause needs a conjugated verb: explodieren würde.',
            },
          ),
          hint(
            typed(
              'a6',
              'Mein Kollege redet, als ___ er ein IT-Profi wäre.',
              'ob',
              'My colleague talks as if he were an IT pro.',
            ),
            { wenn: 'The comparison is als ob (als wenn also exists, but here: ob).' },
          ),
          hint(
            gap(
              'a7',
              'An deiner Stelle ___ ich jeden Tag eine Sicherungskopie machen.',
              'würde',
              ['würde', 'werde', 'wäre', 'hätte'],
              'If I were you, I would make a backup every day.',
              'Advice: An deiner Stelle würde ich …',
            ),
            {
              werde: 'werde is Futur; advice uses the Konjunktiv II würde.',
              wäre: 'machen needs würde + infinitive, not wäre.',
              hätte: 'hätte + infinitive is not possible here: würde … machen.',
            },
            'konjunktiv-2',
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'As if …',
        'Build sentences with als ob and advice.',
        ['grammar', 'word-order', 'als-ob'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'He acts as if he knew everything.', [
            'Er',
            'tut',
            'so,',
            'als',
            'ob',
            'er',
            'alles',
            'wüsste.',
          ]),
          sent('s2', 'The laptop looks as if it were new.', [
            'Der',
            'Laptop',
            'sieht',
            'aus,',
            'als',
            'ob',
            'er',
            'neu',
            'wäre.',
          ]),
          sent('s3', 'The computer has frozen.', ['Der', 'Rechner', 'hängt.']),
          sent('s4', 'Have you tried restarting it?', [
            'Haben',
            'Sie',
            'es',
            'schon',
            'mit',
            'einem',
            'Neustart',
            'versucht?',
          ]),
          sent('s5', 'I would update the program.', [
            'Ich',
            'würde',
            'das',
            'Programm',
            'aktualisieren.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-support',
      'listen',
      meta(
        'Technical support',
        'Listen to the support line and pick what happens.',
        ['listening', 'digital-world', 'als-ob'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Ziehen Sie zuerst den Stecker, warten Sie zehn Sekunden und stecken Sie ihn dann wieder ein.',
            'Unplug it, wait ten seconds and plug it in again.',
            [
              'Plug it in and wait ten minutes.',
              'Buy a new plug and call again.',
              'Switch it on and off ten times.',
            ],
          ),
          heard(
            'l2',
            'Mein Sohn sitzt jeden Tag sechs Stunden vor dem Bildschirm. Ich mache mir Sorgen.',
            'She worries about her son’s screen time.',
            [
              'Her son never uses a screen.',
              'She works six hours a day at a screen.',
              'Her son repairs screens for a living.',
            ],
          ),
          heard(
            'l3',
            'Der Drucker macht Geräusche, als ob er kaputt wäre, aber er druckt ganz normal.',
            'The printer sounds broken but prints normally.',
            [
              'The printer is broken and does not print.',
              'The printer is new and silent.',
              'The printer only prints in colour.',
            ],
          ),
          heard(
            'l4',
            'Bevor Sie das Update installieren, sichern Sie bitte alle Dateien auf der Festplatte.',
            'Back up all files before installing the update.',
            [
              'Delete all files before the update.',
              'Install the update and then buy a hard drive.',
              'The update deletes the hard drive automatically.',
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
        'Call the hotline',
        'Describe a problem to technical support and help a friend.',
        ['communication', 'digital-world'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'hotline',
            title: 'Bei der Hotline',
            emoji: '☎️',
            setting: 'Your laptop shows an error message. You call technical support.',
            turns: [
              say(
                'Herr Weber',
                'Technischer Support, Weber. Was kann ich für Sie tun?',
                'Technical support, Weber speaking. What can I do for you?',
              ),
              you(
                'Mein Laptop zeigt eine Fehlermeldung, und das Programm reagiert nicht.',
                [
                  'Mein Laptop zeigt eine Fehlermeldung, und das Programm reagiert nichts.',
                  'reagiert nicht – nichts means nothing.',
                ],
                [
                  'Ich möchte einen Laptop kaufen.',
                  'You want help with a problem, not to buy one.',
                ],
              ),
              say(
                'Herr Weber',
                'Haben Sie es schon mit einem Neustart versucht?',
                'Have you tried restarting it?',
              ),
              you(
                'Ja, aber das hat nicht geholfen. Könnten Sie mir das Schritt für Schritt erklären?',
                [
                  'Ja, aber das hat nicht geholfen. Könnten Sie mir das Schritt für Schritt erklärt?',
                  'könnten + infinitive at the end: erklären.',
                ],
              ),
              say(
                'Herr Weber',
                'Natürlich. Klicken Sie zuerst unten links auf „Start“.',
                'Of course. First click on “Start” at the bottom left.',
              ),
            ],
          },
          {
            id: 'friend',
            title: 'Ein Rat unter Freunden',
            emoji: '💡',
            setting: 'Your friend Lea has lost all her holiday photos.',
            turns: [
              say(
                'Lea',
                'Mein Handy ist kaputt und alle Urlaubsfotos sind weg!',
                'My phone is broken and all my holiday photos are gone!',
              ),
              you('Oh nein! Hast du keine Sicherungskopie gemacht?', [
                'Oh nein! Hast du keine Sicherungskopie gemachen?',
                'The participle of machen is gemacht.',
              ]),
              say('Lea', 'Nein, leider nicht.', 'No, unfortunately not.'),
              you(
                'An deiner Stelle würde ich die Fotos ab jetzt immer in die Cloud hochladen.',
                [
                  'An deiner Stelle würde ich die Fotos ab jetzt immer in die Cloud hochgeladen.',
                  'würde + infinitive: hochladen.',
                ],
                [
                  'An deiner Stelle werde ich die Fotos ab jetzt immer in die Cloud hochladen.',
                  'Advice uses würde, not werde.',
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
        'Digital blitz',
        'als ob and computer words – true or false?',
        ['grammar', 'als-ob'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Er tut so, als ob er krank wäre.', true),
          tf(
            'b2',
            'Er tut so, als ob wäre er krank.',
            false,
            'als ob sends the verb to the end: als ob er krank wäre.',
          ),
          tf('b3', 'Du siehst aus, als ob du nicht geschlafen hättest.', true),
          tf(
            'b4',
            'Du siehst aus, als ob du nicht geschlafen wärst.',
            false,
            'schlafen takes haben: hättest geschlafen.',
          ),
          tf('b5', 'Es sieht aus, als ob es regnen würde.', true),
          tf(
            'b6',
            'Es sieht aus, als ob es würde regnen.',
            false,
            'Verb at the end: regnen würde.',
          ),
          tf('b7', 'Eine Sicherungskopie schützt vor Datenverlust.', true),
          tf(
            'b8',
            'Wenn der Rechner hängt, funktioniert alles perfekt.',
            false,
            'hängen = to freeze: nothing works.',
          ),
          tf('b9', 'Beim Hochladen schickt man Dateien ins Internet.', true),
          tf(
            'b10',
            'Ein Virus macht den Computer schneller.',
            false,
            'A virus damages the computer.',
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
        'Tech words, support phrases and als ob in one round.',
        ['vocabulary', 'grammar', 'digital-world'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Er redet, als ob er der Chef ___.', 'wäre', ['ist', 'war', 'sein']),
            {
              ist: 'He is not the boss: als ob takes the Konjunktiv II wäre.',
              war: 'war is the Präteritum; use the Konjunktiv II wäre.',
              sein: 'The verb must be conjugated: er wäre.',
            },
            'als-ob',
          ),
          hint(
            q('c2', 'Sie tut so, als ob sie nichts gehört ___.', 'hätte', ['wäre', 'hat', 'hatte']),
            {
              wäre: 'hören takes haben: hätte gehört.',
              hat: 'Use the Konjunktiv II after als ob: hätte.',
              hatte: 'hatte is the Präteritum; als ob takes hätte.',
            },
            'als-ob',
          ),
          hint(
            q('c3', 'Es klingt, als ob ___.', 'jemand an der Tür wäre', [
              'jemand wäre an der Tür',
              'wäre jemand an der Tür',
              'jemand ist an der Tür wäre',
            ]),
            {
              'jemand wäre an der Tür': 'als ob sends the verb to the end: … an der Tür wäre.',
              'wäre jemand an der Tür': 'als ob sends the verb to the end: … an der Tür wäre.',
              'jemand ist an der Tür wäre': 'One verb only: jemand an der Tür wäre.',
            },
            'als-ob',
          ),
          q('c4', 'die Festplatte', 'hard drive', ['memory card', 'backup', 'error message']),
          q('c5', 'sichern', 'to back up, to save', ['to restore', 'to update', 'to log in']),
          q('c6', 'die Bildschirmzeit', 'screen time', [
            'data protection',
            'media addiction',
            'restart',
          ]),
          q('c7', 'Your computer has frozen. You say …', 'Der Rechner hängt.', [
            'Der Rechner hängt an der Wand.',
            'Der Rechner ist schnell.',
            'Der Rechner ist neu.',
          ]),
          q('c8', 'You don’t know what to do next. You say …', 'Ich komme nicht weiter.', [
            'Ich komme gleich wieder.',
            'Ich komme mit.',
            'Ich komme aus Berlin.',
          ]),
          q('c9', 'aktualisieren', 'to update', ['to restore', 'to log in', 'to back up, to save']),
          q('c10', 'die Fehlermeldung', 'error message', ['restart', 'hard drive', 'virus']),
        ],
      },
    ),
  ],
};
