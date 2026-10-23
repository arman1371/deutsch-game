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

const U = 'b2-2-geschichte';

const resistance = vocabList(U, 'Resistance & dictatorship', [
  ['Widerstand', 'resistance', '✊', 'der'],
  ['Widerstandsgruppe', 'resistance group', '🕊️', 'die', 'Widerstandsgruppen'],
  ['Regime', 'regime', '🏛️', 'das', 'Regime'],
  ['Verfolgung', 'persecution', '🚨', 'die', 'Verfolgungen'],
  ['Verhaftung', 'arrest', '⛓️', 'die', 'Verhaftungen'],
  ['Flugblatt', 'leaflet', '📄', 'das', 'Flugblätter'],
  ['Gewissen', 'conscience', '⚖️', 'das'],
  ['Zivilcourage', 'moral courage', '🦁', 'die'],
  ['Überzeugung', 'conviction', '💭', 'die', 'Überzeugungen'],
  ['Propaganda', 'propaganda', '📣', 'die'],
  ['Zensur', 'censorship', '🚫', 'die'],
  ['Meinungsfreiheit', 'freedom of opinion', '🗣️', 'die'],
  ['Urteil', 'verdict, judgement', '🔨', 'das', 'Urteile'],
  ['Exil', 'exile', '🧳', 'das'],
  ['verhaften', 'to arrest', '👮'],
  ['verurteilen', 'to sentence, to condemn', '⚖️'],
]);

const eras = vocabList(U, 'Eras & remembering', [
  ['Kaiserreich', 'German Empire', '👑', 'das'],
  ['Revolution', 'revolution', '🔥', 'die', 'Revolutionen'],
  ['Weltwirtschaftskrise', 'global economic crisis', '📉', 'die'],
  ['Nachkriegszeit', 'post-war period', '🧱', 'die'],
  ['Wiederaufbau', 'reconstruction', '🏗️', 'der'],
  ['Wirtschaftswunder', 'economic miracle', '🚗', 'das'],
  ['Teilung', 'division, partition', '↔️', 'die', 'Teilungen'],
  ['Studentenbewegung', 'student movement', '✊', 'die'],
  ['Zeitgeschichte', 'contemporary history', '🕰️', 'die'],
  ['Zeitalter', 'age, era', '🌅', 'das', 'Zeitalter'],
  ['Jahrzehnt', 'decade', '🔟', 'das', 'Jahrzehnte'],
  ['Umbruch', 'upheaval, radical change', '🌪️', 'der', 'Umbrüche'],
  ['Archiv', 'archive', '🗄️', 'das', 'Archive'],
  ['Gedenkstätte', 'memorial site', '🕯️', 'die', 'Gedenkstätten'],
  ['Erinnerungskultur', 'culture of remembrance', '🌹', 'die'],
  ['Stolperstein', 'Stolperstein (memorial plaque)', '🟡', 'der', 'Stolpersteine'],
  ['Biografie', 'biography', '📚', 'die', 'Biografien'],
  ['datieren', 'to date', '📅'],
]);

const vocab = [...resistance, ...eras];

export const geschichte: UnitContent = {
  unit: unitB22({
    id: U,
    order: 9,
    title: 'Zeitgeschichte & Widerstand',
    subtitle: 'Eras of German history, resistance under dictatorship and remembering',
    emoji: '🕊️',
    goals: [
      'Follow a talk or text about German history from the Kaiserreich to reunification',
      'Report what you saw, heard or had done in the past',
      'Talk about resistance, conscience and how societies remember',
    ],
    grammar: [
      'Perfekt with double infinitive: Ich habe ihn kommen hören. Wir haben das Auto reparieren lassen.',
      'Subordinate clause word order: … dass er hat gehen müssen',
      'Narrating the past: Präteritum, Passiv Präteritum, Plusquamperfekt, nachdem / bevor',
    ],
    vocabFields: ['Resistance & dictatorship', 'Eras & remembering'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-resistance',
      'flashcards',
      meta(
        'Resistance & dictatorship',
        'Widerstand, Flugblatt, Gewissen – courage under a regime.',
        ['vocabulary', 'contemporary-history'],
        1,
        5,
      ),
      flashcards(resistance),
    ),
    activity(
      U,
      'flash-eras',
      'flashcards',
      meta(
        'Eras & remembering',
        'Kaiserreich, Wiederaufbau, Erinnerungskultur – words for history.',
        ['vocabulary', 'contemporary-history'],
        1,
        5,
      ),
      flashcards(eras),
    ),
    activity(
      U,
      'quiz-words',
      'quiz',
      meta(
        'What does it mean?',
        'History words in English.',
        ['vocabulary', 'contemporary-history'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'Widerstandsgruppe',
          'Zivilcourage',
          'Zensur',
          'Verfolgung',
          'Urteil',
          'Weltwirtschaftskrise',
          'Umbruch',
          'Gedenkstätte',
          'Stolperstein',
          'verurteilen',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'memory-eras',
      'memory',
      meta(
        'Match the history words',
        'Pair German words with their meaning.',
        ['vocabulary', 'contemporary-history'],
        2,
        4,
      ),
      memory(
        byDe(
          eras,
          'Kaiserreich',
          'Jahrzehnt',
          'Archiv',
          'Teilung',
          'Wirtschaftswunder',
          'Biografie',
        ),
      ),
    ),
    activity(
      U,
      'listen-words',
      'listen',
      meta(
        'Hear the history words',
        'Listen and pick the meaning.',
        ['listening', 'contemporary-history'],
        2,
        4,
      ),
      listen(
        byDe(
          vocab,
          'Widerstand',
          'Flugblatt',
          'Gewissen',
          'Propaganda',
          'Nachkriegszeit',
          'Erinnerungskultur',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'spell-words',
      'spell',
      meta(
        'Spell the history words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'contemporary-history'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(resistance, 'Regime', 'Exil'), 'unscramble').items,
          ...spell(byDe(eras, 'Archiv'), 'unscramble').items,
          ...spell(byDe(resistance, 'Flugblatt', 'Gewissen'), 'type').items,
          ...spell(byDe(eras, 'Wiederaufbau'), 'type').items,
          dictation(
            'd1',
            'Die Weiße Rose war eine Widerstandsgruppe von Münchner Studenten.',
            'The White Rose was a resistance group of Munich students.',
          ),
          dictation(
            'd2',
            'Nach dem Krieg begann der Wiederaufbau.',
            'After the war the reconstruction began.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-double-infinitive',
      'gapfill',
      meta(
        'Ich habe ihn kommen hören',
        'Use the infinitive instead of the participle.',
        ['grammar', 'perfekt-double-infinitive', 'contemporary-history'],
        3,
        7,
      ),
      {
        items: [
          hint(
            gap(
              'd1',
              'Ich habe ihn kommen ___.',
              'hören',
              ['hören', 'gehört', 'hörte', 'zu hören'],
              'I heard him coming.',
              'hören + another infinitive → double infinitive in the Perfekt',
            ),
            {
              gehört: 'After another infinitive, hören stays an infinitive: kommen hören.',
              hörte:
                'The Perfekt is formed with haben + infinitive here, not with the simple past.',
              'zu hören': 'No zu after haben … kommen.',
            },
          ),
          hint(
            gap(
              'd2',
              'Wir haben das Auto reparieren ___.',
              'lassen',
              ['lassen', 'gelassen', 'ließen', 'zu lassen'],
              'We had the car repaired.',
              'lassen + infinitive → double infinitive',
            ),
            {
              gelassen:
                'When lassen has a second infinitive it stays in the infinitive: reparieren lassen.',
              ließen: 'ließen is the simple past; the Perfekt needs haben … lassen.',
              'zu lassen': 'No zu after haben … reparieren.',
            },
          ),
          hint(
            gap(
              'd3',
              'Sie hat die Kinder im Park spielen ___.',
              'sehen',
              ['sehen', 'gesehen', 'sah', 'zu sehen'],
              'She saw the children playing in the park.',
              'sehen + infinitive → double infinitive',
            ),
            {
              gesehen:
                'With an infinitive before it, sehen stays in the infinitive: spielen sehen.',
              sah: 'The Perfekt needs hat … sehen, not the simple past.',
              'zu sehen': 'No zu after haben … spielen.',
            },
          ),
          hint(
            gap(
              'd4',
              'Er hat gestern nicht kommen ___.',
              'können',
              ['können', 'gekonnt', 'konnte', 'zu können'],
              'He could not come yesterday.',
              'modal verbs: double infinitive in the Perfekt',
            ),
            {
              gekonnt:
                'gekonnt is only used when the modal verb stands alone (Ich habe es gekonnt).',
              konnte: 'konnte is the simple past, so hat would be wrong.',
              'zu können': 'Modal verbs never take zu.',
            },
          ),
          hint(
            gap(
              'd5',
              'Er erzählte, dass er die Glocken hat läuten ___.',
              'hören',
              ['hören', 'gehört', 'hörte', 'zu hören'],
              'He said he had heard the bells ringing.',
              'in subordinate clauses hat stands before the two infinitives',
            ),
            {
              gehört: 'The double infinitive replaces the participle: läuten hören.',
              hörte: 'hat + hörte would not be a verb form.',
              'zu hören': 'No zu after läuten.',
            },
          ),
          typed(
            'd6',
            'Wir haben den Film leider nicht sehen ___ (wollen).',
            'wollen',
            'Unfortunately we did not want to see the film.',
            'modal in the Perfekt: sehen wollen',
          ),
          hint(
            gap(
              'd7',
              'Sie hat das Plakat drucken ___.',
              'lassen',
              ['lassen', 'gelassen', 'ließ', 'zu lassen'],
              'She had the poster printed.',
              'lassen + infinitive → double infinitive',
            ),
            {
              gelassen: 'lassen + infinitive → double infinitive: drucken lassen.',
              ließ: 'hat … ließ does not exist.',
              'zu lassen': 'No zu after drucken.',
            },
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-narrate',
      'gapfill',
      meta(
        'Telling history',
        'Choose the verb form or connector that fits the story.',
        ['grammar', 'past-tense', 'perfekt'],
        3,
        6,
        // mixes several tenses: no single mini lesson fits
      ),
      {
        items: [
          hint(
            gap(
              'n1',
              'Die Weiße Rose ___ 1942 von Münchner Studenten gegründet.',
              'wurde',
              ['wurde', 'war', 'ist', 'wird'],
              'The White Rose was founded in 1942 by Munich students.',
              'past passive: wurde + participle',
            ),
            {
              war: 'war gegründet would describe the state; the founding is an event.',
              ist: 'ist is present, but 1942 is in the past.',
              wird: 'wird is present.',
            },
            'passive',
          ),
          hint(
            gap(
              'n2',
              'Nachdem das Regime die Macht übernommen ___, wurden die Zeitungen zensiert.',
              'hatte',
              ['hatte', 'wurde', 'war', 'hat'],
              'After the regime had taken power, the newspapers were censored.',
              'nachdem + Plusquamperfekt',
            ),
            {
              wurde: 'wurde übernommen would be passive – the regime is the actor.',
              war: 'übernehmen forms the Perfekt with haben, not sein.',
              hat: 'hat is present; the story is in the past.',
            },
            'plusquamperfekt',
          ),
          hint(
            gap(
              'n3',
              'Die Studenten verteilten Flugblätter, ___ sie verhaftet wurden.',
              'bevor',
              ['bevor', 'nachdem', 'während', 'seitdem'],
              'The students distributed leaflets before they were arrested.',
              'first the leaflets, then the arrest → bevor',
            ),
            {
              nachdem: 'nachdem would reverse the order and needs the Plusquamperfekt.',
              während: 'während means at the same time.',
              seitdem: 'seitdem means “since then”.',
            },
            'temporal-clauses',
          ),
          hint(
            gap(
              'n4',
              '___ der Krieg zu Ende war, begann der Wiederaufbau.',
              'Nachdem',
              ['Nachdem', 'Bevor', 'Ehe', 'Seit'],
              'After the war was over, the reconstruction began.',
              'nachdem = after (first event)',
            ),
            {
              Bevor: 'bevor would say that the reconstruction began first.',
              Ehe: 'ehe means “before”, like bevor.',
              Seit: 'seit needs a state that continues until now.',
            },
            'temporal-clauses',
          ),
          hint(
            gap(
              'n5',
              'Die Mauer ___ 1961 gebaut und 1989 geöffnet.',
              'wurde',
              ['wurde', 'war', 'wurden', 'ist'],
              'The Wall was built in 1961 and opened in 1989.',
              'wurde … gebaut und geöffnet',
            ),
            {
              war: 'war gebaut describes the state, not the event of building.',
              wurden: 'Mauer is singular: wurde.',
              ist: 'ist is present; the years are past.',
            },
            'passive',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-ersatz',
      'sortit',
      meta(
        'Infinitive or participle?',
        'Which form does the Perfekt use here?',
        ['grammar', 'perfekt-double-infinitive', 'contemporary-history'],
        3,
        5,
      ),
      {
        instruction: 'Which verb form ends the Perfekt sentence?',
        buckets: [
          { id: 'inf', label: 'Double infinitive (… kommen hören)', emoji: '👂' },
          { id: 'part', label: 'Normal Partizip II', emoji: '✔️' },
        ],
        items: sortItems('e', [
          ['Ich habe ihn kommen hören.', 'inf'],
          ['Wir haben das Auto reparieren lassen.', 'inf'],
          ['Sie hat nicht kommen können.', 'inf'],
          ['Er hat die Kinder spielen sehen.', 'inf'],
          ['Du hast es doch tun wollen.', 'inf'],
          ['Ich habe ihn gehört.', 'part'],
          ['Er hat den Film gesehen.', 'part'],
          ['Sie hat die Tür geöffnet.', 'part'],
          ['Wir haben das Museum besucht.', 'part'],
          ['Ich habe das Flugblatt gelesen.', 'part'],
        ]),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build the sentence',
        'Perfekt with double infinitive and narrating the past.',
        ['grammar', 'perfekt-double-infinitive', 'contemporary-history'],
        3,
        7,
      ),
      {
        items: [
          sent('s1', 'I heard him coming.', ['Ich', 'habe', 'ihn', 'kommen', 'hören.']),
          sent('s2', 'We had the car repaired.', [
            'Wir',
            'haben',
            'das',
            'Auto',
            'reparieren',
            'lassen.',
          ]),
          sent('s3', 'She did not want to look at it.', [
            'Sie',
            'hat',
            'es',
            'nicht',
            'ansehen',
            'wollen.',
          ]),
          sent('s4', 'The witness said he had seen the soldiers march.', [
            'Der',
            'Zeitzeuge',
            'sagte,',
            'dass',
            'er',
            'die',
            'Soldaten',
            'hat',
            'marschieren',
            'sehen.',
          ]),
          sent('s5', 'After the war was over, the reconstruction began.', [
            'Nachdem',
            'der',
            'Krieg',
            'zu',
            'Ende',
            'war,',
            'begann',
            'der',
            'Wiederaufbau.',
          ]),
          sent('s6', 'The students distributed leaflets before they were arrested.', [
            'Die',
            'Studenten',
            'verteilten',
            'Flugblätter,',
            'bevor',
            'sie',
            'verhaftet',
            'wurden.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-talk',
      'listen',
      meta(
        'Witnesses and guides',
        'Listen to a guide and a witness of the time.',
        ['listening', 'contemporary-history'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Die Weiße Rose verteilte Flugblätter gegen das Regime.',
            'The White Rose distributed leaflets against the regime.',
            [
              'The White Rose supported the regime with leaflets.',
              'The White Rose sold flowers at the university.',
              'The White Rose printed newspapers for the government.',
            ],
          ),
          heard(
            'l2',
            'Wer damals widersprach, wurde oft verhaftet.',
            'Whoever objected at the time was often arrested.',
            [
              'Whoever objected was rewarded.',
              'Nobody was ever arrested.',
              'Whoever objected could leave the country at once.',
            ],
          ),
          heard(
            'l3',
            'Mein Großvater hat die Glocken läuten hören, als der Krieg endete.',
            'My grandfather heard the bells ringing when the war ended.',
            [
              'My grandfather rang the bells himself.',
              'My grandfather never heard anything about the end of the war.',
              'My grandfather had the bells repaired.',
            ],
          ),
          heard(
            'l4',
            'In der Gedenkstätte kann man Biografien von Zeitzeugen lesen.',
            'In the memorial site you can read the biographies of witnesses of the time.',
            [
              'The memorial site is closed to visitors.',
              'The memorial site has only maps and no texts.',
              'You can buy souvenirs in the memorial site.',
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
        'At the memorial and with grandpa',
        'Visit a memorial site and listen to a witness of the time.',
        ['communication', 'contemporary-history', 'perfekt-double-infinitive'],
        2,
        7,
      ),
      {
        scenes: [
          {
            id: 'memorial',
            title: 'In der Gedenkstätte',
            emoji: '🕯️',
            setting: 'A guide talks about a student resistance group in Munich.',
            turns: [
              say(
                'Führerin',
                'Die Weiße Rose war eine Widerstandsgruppe Münchner Studenten. Sie verteilten Flugblätter gegen das Regime.',
                'The White Rose was a resistance group of Munich students. They distributed leaflets against the regime.',
              ),
              you(
                'Ich habe schon im Radio davon erzählen hören.',
                [
                  'Ich habe schon im Radio davon erzählen gehört.',
                  'After another infinitive hören stays an infinitive: erzählen hören.',
                ],
                [
                  'Ich habe schon im Radio davon hören erzählen.',
                  'The order is erzählen hören (main verb first, then the Ersatzinfinitiv).',
                ],
              ),
              say(
                'Führerin',
                'Viele Menschen hatten damals Angst und schwiegen.',
                'Many people were afraid at the time and kept quiet.',
              ),
              you(
                'Wer damals widersprach, wurde verhaftet.',
                [
                  'Wen damals widersprach, wurde verhaftet.',
                  'The one who objects is the subject: wer (nominative).',
                ],
                [
                  'Wer damals widersprach, hatte verhaftet.',
                  'The passive is needed (he is arrested by others): wurde verhaftet.',
                ],
              ),
            ],
          },
          {
            id: 'grandpa',
            title: 'Opa erzählt',
            emoji: '👴',
            setting: 'Your grandfather talks about the post-war years.',
            turns: [
              say(
                'Opa',
                'Nach dem Krieg war vieles zerstört. Wir haben die Stadt wieder aufbauen müssen.',
                'After the war much was destroyed. We had to rebuild the town.',
              ),
              you(
                'Das war sicher schwer. Hast du damals selbst Häuser bauen müssen?',
                [
                  'Das war sicher schwer. Hast du damals selbst Häuser bauen gemusst?',
                  'A modal verb with another infinitive uses the double infinitive: bauen müssen.',
                ],
                [
                  'Das war sicher schwer. Hast du damals selbst Häuser müssen bauen?',
                  'The order is bauen müssen (main verb first).',
                ],
              ),
              say(
                'Opa',
                'Ja. Und bald konnten wir das Wirtschaftswunder kommen sehen.',
                'Yes. And soon we could see the economic miracle coming.',
              ),
              you(
                'Und Oma hat dich immer arbeiten sehen und nie klagen hören!',
                [
                  'Und Oma hat dich immer arbeiten gesehen und nie klagen gehört!',
                  'sehen and hören with another infinitive are used as infinitives in the Perfekt.',
                ],
                [
                  'Und Oma hat dich immer arbeiten sehen und nie hören klagen!',
                  'The order is klagen hören.',
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
        'History blitz',
        'Double infinitive and history vocabulary – true or false?',
        ['grammar', 'perfekt-double-infinitive', 'contemporary-history'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Ich habe ihn kommen hören.', true),
          tf(
            'b2',
            'Ich habe ihn kommen gehört.',
            false,
            'The participle is replaced by the infinitive: kommen hören.',
          ),
          tf('b3', 'Wir haben das Dach reparieren lassen.', true),
          tf(
            'b4',
            'Wir haben das Dach reparieren gelassen.',
            false,
            'lassen + infinitive: reparieren lassen.',
          ),
          tf('b5', 'Sie hat nicht kommen können.', true),
          tf(
            'b6',
            'Sie hat nicht kommen gekonnt.',
            false,
            'Modal verbs use the double infinitive: kommen können.',
          ),
          tf('b7', 'Er hat den Film gesehen.', true),
          tf('b8', 'Er sagt, dass er hat gehen müssen.', true),
          tf(
            'b9',
            'Er sagt, dass er gehen müssen hat.',
            false,
            'In a subordinate clause hat comes before the two infinitives.',
          ),
          tf('b10', 'Ein Flugblatt ist ein Blatt Papier mit einer Botschaft.', true),
          tf('b11', 'Das Wirtschaftswunder war eine Zeit des starken Wachstums.', true),
          tf(
            'b12',
            'Zivilcourage bedeutet, nie etwas zu sagen.',
            false,
            'It means having the courage to speak up.',
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
        'History words and the double infinitive in one round.',
        ['vocabulary', 'grammar', 'contemporary-history'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Ich habe sie singen ___.', 'hören', ['gehört', 'hörte', 'zu hören']),
          q('c2', 'Wir haben uns ein Haus bauen ___.', 'lassen', [
            'gelassen',
            'ließen',
            'zu lassen',
          ]),
          q('c3', 'Er hat nicht früher kommen ___.', 'können', ['gekonnt', 'konnte', 'zu können']),
          q('c4', 'Sie sagte, dass sie es nie hat sagen ___.', 'wollen', [
            'gewollt',
            'wollte',
            'zu wollen',
          ]),
          q('c5', 'Die Mauer ___ 1989 geöffnet.', 'wurde', ['war', 'ist', 'wird']),
          q('c6', 'Er floh, ___ man ihn verhaften konnte.', 'bevor', [
            'nachdem',
            'seitdem',
            'während',
          ]),
          q('c7', 'der Widerstand', 'resistance', ['propaganda', 'conscience', 'verdict']),
          q('c8', 'die Gedenkstätte', 'memorial site', ['archive', 'museum shop', 'town hall']),
          q('c9', 'das Jahrzehnt', 'decade', ['century', 'era', 'year']),
          q('c10', 'verhaften', 'to arrest', ['to sentence', 'to hide', 'to date']),
        ],
      },
    ),
  ],
};
