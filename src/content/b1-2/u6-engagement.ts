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

const U = 'b1-2-engagement';

const help = vocabList(U, 'Volunteering', [
  ['Ehrenamt', 'voluntary position', '🙌', 'das', 'Ehrenämter'],
  ['ehrenamtlich', 'voluntary, unpaid', '💚'],
  ['Freiwillige', 'volunteer', '🙋', 'die', 'Freiwilligen'],
  ['Nachbarschaftshilfe', 'neighbourly help', '🏘️', 'die'],
  ['Tafel', 'food bank', '🥫', 'die', 'Tafeln'],
  ['Obdachlose', 'homeless person', '⛺', 'der', 'Obdachlosen'],
  ['Geflüchtete', 'refugee', '🧳', 'der', 'Geflüchteten'],
  ['Pflegeheim', 'care home', '👵', 'das', 'Pflegeheime'],
  ['Hausaufgabenhilfe', 'homework help', '📒', 'die'],
  ['Spende', 'donation', '💝', 'die', 'Spenden'],
  ['Aufwandsentschädigung', 'expense allowance', '💶', 'die', 'Aufwandsentschädigungen'],
  ['sich engagieren', 'to get involved', '✊'],
  ['sich einbringen', 'to contribute (oneself)', '🧩'],
]);

const phrases = vocabList(U, 'Offering your time', [
  ['Wie kann ich mich einbringen?', 'How can I get involved?', '🙋‍♀️'],
  ['Ich habe zwei Stunden pro Woche Zeit.', 'I have two hours a week.', '🕑'],
  ['Man bekommt viel zurück.', 'You get a lot back.', '🔄'],
  ['Jeder kann etwas tun.', 'Everyone can do something.', '🌱'],
  ['Wir suchen dringend Unterstützung.', 'We urgently need support.', '🆘'],
  ['Das ist eine sinnvolle Aufgabe.', 'That is a meaningful task.', '✨'],
]);

const vocab = [...help, ...phrases];

export const engagement: UnitContent = {
  unit: unitB12({
    id: U,
    order: 6,
    title: 'Soziales Engagement',
    subtitle: 'Volunteering, neighbourly help, food banks and helping refugees',
    emoji: '🙌',
    goals: [
      'Talk about voluntary work and social projects',
      'Offer your help and ask how you can get involved',
      'Say how something is done and what happens without something',
    ],
    grammar: [
      'indem (by …ing): Man hilft, indem man Zeit spendet.',
      'ohne dass / ohne … zu, statt dass / statt … zu: Sie hilft, ohne Geld dafür zu bekommen.',
    ],
    vocabFields: ['Volunteering', 'Offering your time'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-help',
      'flashcards',
      meta(
        'Volunteering',
        'Ehrenamt, Tafel, Nachbarschaftshilfe – helping others.',
        ['vocabulary', 'volunteering'],
        1,
        5,
      ),
      flashcards(help),
    ),
    activity(
      U,
      'flash-phrases',
      'flashcards',
      meta(
        'Offering your time',
        'Ask how you can help and say how much time you have.',
        ['vocabulary', 'communication', 'volunteering'],
        1,
        4,
      ),
      flashcards(phrases),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Ways to help', 'Name what you see.', ['vocabulary', 'volunteering'], 1, 4),
      quizEmoji(
        byDe(
          help,
          'Ehrenamt',
          'Freiwillige',
          'Tafel',
          'Obdachlose',
          'Geflüchtete',
          'Pflegeheim',
          'Spende',
          'sich engagieren',
        ),
      ),
    ),
    activity(
      U,
      'listen-phrases',
      'listen',
      meta('Hear the phrases', 'Listen and pick the meaning.', ['listening', 'volunteering'], 2, 4),
      listen(phrases),
    ),
    activity(
      U,
      'spell-help',
      'spell',
      meta(
        'Spell the volunteering words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'volunteering'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(help, 'Tafel', 'Spende', 'Ehrenamt'), 'unscramble').items,
          ...spell(byDe(help, 'Pflegeheim', 'ehrenamtlich', 'Nachbarschaftshilfe'), 'type').items,
          dictation('d1', 'Man hilft, indem man Zeit spendet.', 'you help by giving time'),
          dictation('d2', 'Jeder kann etwas tun.', 'everyone can do something'),
        ],
      },
    ),
    activity(
      U,
      'sort-indem-ohne',
      'sortit',
      meta(
        'How, without or instead?',
        'indem = how, ohne dass = without, statt dass = instead of.',
        ['grammar', 'indem-ohne-dass'],
        2,
        5,
      ),
      {
        instruction: 'Which word starts the second part?',
        buckets: [
          { id: 'indem', label: 'indem (how?)', emoji: '🛠️' },
          { id: 'ohne', label: 'ohne dass (without)', emoji: '➖' },
          { id: 'statt', label: 'statt dass (instead of)', emoji: '🔀' },
        ],
        items: sortItems('i', [
          ['Er hilft, ___ er für Nachbarn einkauft.', 'indem'],
          ['Man lernt Deutsch schneller, ___ man viel spricht.', 'indem'],
          ['Wir sparen Geld, ___ wir Kleidung tauschen.', 'indem'],
          ['Sie hilft, ___ jemand sie darum bittet.', 'ohne'],
          ['Die Spende kam an, ___ wir den Namen erfuhren.', 'ohne'],
          ['Er ging, ___ es jemand merkte.', 'ohne'],
          ['___ die Stadt hilft, helfen die Bürger selbst.', 'statt'],
          ['___ die Kinder fernsehen, machen sie Hausaufgaben.', 'statt'],
          ['___ wir nur reden, sollten wir handeln.', 'statt'],
        ]),
      },
    ),
    activity(
      U,
      'gap-indem',
      'gapfill',
      meta(
        'Indem, ohne dass, statt … zu',
        'Choose the connector and the right verb form.',
        ['grammar', 'indem-ohne-dass'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'i1',
              'Man kann helfen, ___ man Kleidung an die Kleiderkammer spendet.',
              'indem',
              ['indem', 'ohne dass', 'statt dass', 'damit'],
              'You can help by donating clothes to the clothing bank.',
              'indem says how something is done.',
            ),
            {
              'ohne dass': 'ohne dass means without – but donating is how you help: indem.',
              'statt dass':
                'statt dass names an alternative; here it is the way of helping: indem.',
              damit: 'damit gives a purpose (so that); the way is indem.',
            },
          ),
          hint(
            gap(
              'i2',
              'Sie arbeitet bei der Tafel, ohne Geld dafür zu ___.',
              'bekommen',
              ['bekommen', 'bekommt', 'bekommen hat', 'zu bekommen'],
              'She works at the food bank without getting money for it.',
              'ohne … zu + infinitive when the subject is the same.',
            ),
            {
              bekommt: 'After ohne … zu the verb is an infinitive: zu bekommen.',
              'bekommen hat': 'ohne … zu takes the infinitive only.',
              'zu bekommen': 'zu is already in the sentence: ohne Geld dafür zu bekommen.',
            },
          ),
          hint(
            gap(
              'i3',
              'Die Kinder spielen draußen, ___ jemand aufpasst.',
              'ohne dass',
              ['ohne dass', 'ohne zu', 'indem', 'statt zu'],
              'The children play outside without anyone keeping an eye on them.',
              'Different subjects (Kinder / jemand): ohne dass.',
            ),
            {
              'ohne zu': 'ohne … zu needs the same subject; here there are two: ohne dass.',
              indem: 'indem says how – but nobody watching is not how they play.',
              'statt zu': 'statt … zu needs the same subject and an infinitive.',
            },
          ),
          hint(
            gap(
              'i4',
              'Statt nur zu ___, sollten wir etwas tun.',
              'reden',
              ['reden', 'redet', 'geredet', 'zu reden'],
              'Instead of just talking, we should do something.',
            ),
            {
              redet: 'statt … zu takes the infinitive: zu reden.',
              geredet: 'statt … zu takes the infinitive, not the participle.',
              'zu reden': 'zu is already in the sentence: statt nur zu reden.',
            },
          ),
          hint(
            gap(
              'i5',
              'Er unterstützt Geflüchtete, indem er mit ihnen zu Ämtern ___.',
              'geht',
              ['geht', 'gehen', 'zu gehen', 'ging zu'],
              'He supports refugees by going with them to the authorities.',
              'indem starts a subordinate clause: conjugated verb at the end.',
            ),
            {
              gehen: 'The verb must agree with er: geht.',
              'zu gehen': 'indem never takes zu: … zu Ämtern geht.',
              'ging zu': 'zu here belongs to “zu Ämtern”; the verb is geht, at the end.',
            },
          ),
          hint(
            typed(
              'i6',
              'Wir haben das Fest organisiert, ___ die Stadt uns geholfen hat. (without the city helping us)',
              'ohne dass',
              'We organised the party without the city helping us.',
            ),
            {
              'ohne zu': 'Two different subjects (wir / die Stadt): ohne dass.',
              indem: 'indem means by …ing; the city did not help: ohne dass.',
            },
          ),
          hint(
            typed(
              'i7',
              'Statt dass die Gemeinde einen Hausmeister bezahlt, ___ die Nachbarn den Garten selbst. (pflegen)',
              'pflegen',
              'Instead of the council paying a caretaker, the neighbours look after the garden themselves.',
            ),
            { pflegt: 'The subject is die Nachbarn (plural): pflegen.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'By helping …',
        'Build sentences with indem, ohne and statt.',
        ['grammar', 'word-order', 'indem-ohne-dass'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'You help by giving time.', [
            'Man',
            'hilft,',
            'indem',
            'man',
            'Zeit',
            'spendet.',
          ]),
          sent('s2', 'She works without getting money for it.', [
            'Sie',
            'arbeitet,',
            'ohne',
            'Geld',
            'dafür',
            'zu',
            'bekommen.',
          ]),
          sent('s3', 'Instead of just talking, we act.', [
            'Statt',
            'nur',
            'zu',
            'reden,',
            'handeln',
            'wir.',
          ]),
          sent('s4', 'How can I get involved?', ['Wie', 'kann', 'ich', 'mich', 'einbringen?']),
          sent('s5', 'We urgently need support.', ['Wir', 'suchen', 'dringend', 'Unterstützung.']),
        ],
      },
    ),
    activity(
      U,
      'listen-projects',
      'listen',
      meta(
        'Social projects',
        'Listen to volunteers and pick what they do.',
        ['listening', 'volunteering', 'indem-ohne-dass'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Ich helfe jeden Samstag bei der Tafel, indem ich Lebensmittel sortiere und verteile.',
            'She sorts and hands out food at the food bank every Saturday.',
            [
              'She buys food at the supermarket every Saturday.',
              'She cooks lunch for her family on Saturdays.',
              'She sells food at the market.',
            ],
          ),
          heard(
            'l2',
            'Unser Verein bietet Hausaufgabenhilfe an, ohne dass die Eltern etwas bezahlen müssen.',
            'The club offers free homework help.',
            [
              'Parents pay a monthly fee for homework help.',
              'The club only helps parents.',
              'Homework help is offered at school by teachers.',
            ],
          ),
          heard(
            'l3',
            'Für die Fahrten mit den Senioren bekomme ich eine kleine Aufwandsentschädigung.',
            'He gets a small allowance for driving the senior citizens.',
            [
              'He earns a full salary as a driver.',
              'He pays the senior citizens for the trips.',
              'He gets nothing at all for the trips.',
            ],
          ),
          heard(
            'l4',
            'Viele Geflüchtete brauchen am Anfang Hilfe bei Behördenbriefen und bei der Wohnungssuche.',
            'Many refugees need help with official letters and finding a flat.',
            [
              'Refugees write letters to help authorities.',
              'Refugees help others find flats.',
              'Most refugees need no help at all.',
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
        'I would like to help',
        'Offer your help at a food bank and tell a friend about your volunteering.',
        ['communication', 'volunteering'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'tafel',
            title: 'Bei der Tafel',
            emoji: '🥫',
            setting: 'You visit the local food bank to offer your help.',
            turns: [
              say(
                'Herr Demir',
                'Hallo! Schön, dass Sie da sind. Wir suchen dringend Unterstützung.',
                'Hello! Great that you are here. We urgently need support.',
              ),
              you('Ich würde mich gern engagieren. Wie kann ich mich einbringen?', [
                'Ich würde gern engagieren. Wie kann ich mich einbringen?',
                'sich engagieren is reflexive: ich würde mich engagieren.',
              ]),
              say(
                'Herr Demir',
                'Sie könnten samstags Lebensmittel sortieren. Wie viel Zeit haben Sie?',
                'You could sort food on Saturdays. How much time do you have?',
              ),
              you(
                'Ich habe zwei Stunden pro Woche Zeit.',
                ['Ich habe zwei Stunden für Woche Zeit.', 'pro Woche = per week.'],
                ['Ich habe keine Zeit.', 'You came to offer your time.'],
              ),
            ],
          },
          {
            id: 'friend',
            title: 'Warum machst du das?',
            emoji: '💚',
            setting: 'Your friend Paula asks why you work in a care home for free.',
            turns: [
              say(
                'Paula',
                'Du arbeitest im Pflegeheim, ohne Geld dafür zu bekommen? Warum?',
                'You work at the care home without getting paid? Why?',
              ),
              you('Weil es eine sinnvolle Aufgabe ist. Man bekommt viel zurück.', [
                'Weil es ist eine sinnvolle Aufgabe. Man bekommt viel zurück.',
                'weil sends the verb to the end: … eine sinnvolle Aufgabe ist.',
              ]),
              say('Paula', 'Und was machst du dort genau?', 'And what exactly do you do there?'),
              you('Ich helfe, indem ich mit den Bewohnern spazieren gehe und vorlese.', [
                'Ich helfe, indem ich gehe mit den Bewohnern spazieren und vorlese.',
                'indem sends the verbs to the end: … spazieren gehe und vorlese.',
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
        'Volunteering blitz',
        'indem, ohne dass, statt zu – true or false?',
        ['grammar', 'indem-ohne-dass'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Man hilft, indem man spendet.', true),
          tf('b2', 'Man hilft, indem man zu spenden.', false, 'indem never takes zu.'),
          tf('b3', 'Er geht, ohne sich zu verabschieden.', true),
          tf(
            'b4',
            'Er geht, ohne dass sich zu verabschieden.',
            false,
            'Either ohne … zu or ohne dass + full clause.',
          ),
          tf('b5', 'Statt fernzusehen, liest sie ein Buch.', true),
          tf(
            'b6',
            'Ich arbeite, ohne zu meine Kollegen helfen.',
            false,
            'zu goes right before the infinitive at the end: ohne meinen Kollegen zu helfen.',
          ),
          tf('b7', 'Ehrenamtliche Arbeit ist meistens unbezahlt.', true),
          tf(
            'b8',
            'Bei der Tafel kauft man teure Lebensmittel.',
            false,
            'A food bank gives food to people in need.',
          ),
          tf('b9', 'Eine Spende ist ein Geschenk für einen guten Zweck.', true),
          tf(
            'b10',
            'Ein Pflegeheim ist ein Heim für Haustiere.',
            false,
            'A Pflegeheim is a care home for people.',
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
        'Volunteering words and indem / ohne / statt in one round.',
        ['vocabulary', 'grammar', 'volunteering'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Man spart Energie, ___ man das Licht ausmacht.', 'indem', [
              'ohne dass',
              'statt dass',
              'damit',
            ]),
            {
              'ohne dass': 'Switching off the light is how you save energy: indem.',
              'statt dass': 'Switching off the light is how you save energy: indem.',
              damit: 'damit gives a purpose; the way is indem.',
            },
            'indem-ohne-dass',
          ),
          hint(
            q('c2', 'Sie half uns, ___ etwas dafür zu verlangen.', 'ohne', [
              'ohne dass',
              'indem',
              'statt dass',
            ]),
            {
              'ohne dass': 'With zu + infinitive it is ohne … zu, not ohne dass.',
              indem: 'indem never takes zu.',
              'statt dass': 'statt dass needs a full clause, not zu + infinitive.',
            },
            'indem-ohne-dass',
          ),
          hint(
            q('c3', 'Statt im Bett zu ___, hilft er bei der Tafel.', 'bleiben', [
              'bleibt',
              'geblieben',
              'blieb',
            ]),
            {
              bleibt: 'statt … zu takes the infinitive: zu bleiben.',
              geblieben: 'statt … zu takes the infinitive, not the participle.',
              blieb: 'statt … zu takes the infinitive.',
            },
            'indem-ohne-dass',
          ),
          q('c4', 'das Ehrenamt', 'voluntary position', ['donation', 'care home', 'food bank']),
          q('c5', 'die Tafel', 'food bank', ['care home', 'homework help', 'donation']),
          q('c6', 'sich engagieren', 'to get involved', ['to donate', 'to complain', 'to apply']),
          q('c7', 'You want to volunteer. You ask …', 'Wie kann ich mich einbringen?', [
            'Wie viel verdiene ich?',
            'Wann ist Feierabend?',
            'Wo ist die Kasse?',
          ]),
          q('c8', 'die Aufwandsentschädigung', 'expense allowance', [
            'donation',
            'salary',
            'neighbourly help',
          ]),
          q('c9', 'die Nachbarschaftshilfe', 'neighbourly help', [
            'homework help',
            'food bank',
            'volunteer',
          ]),
          q('c10', 'ehrenamtlich', 'voluntary, unpaid', ['meaningful', 'urgent', 'well paid']),
        ],
      },
    ),
  ],
};
