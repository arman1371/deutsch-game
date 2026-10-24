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

const U = 'b2-1-unterwegs';

const travel = vocabList(U, 'Travel and tourism', [
  ['Massentourismus', 'mass tourism', '🏖️', 'der'],
  ['Reiseveranstalter', 'tour operator', '🧳', 'der', 'Reiseveranstalter'],
  ['Stornierung', 'cancellation', '🚫', 'die', 'Stornierungen'],
  ['Hochsaison', 'peak season', '☀️', 'die'],
  ['Rundreise', 'round trip, tour', '🗺️', 'die', 'Rundreisen'],
  ['Reisewarnung', 'travel warning', '⚠️', 'die', 'Reisewarnungen'],
  ['Auslandsaufenthalt', 'stay abroad', '🌍', 'der', 'Auslandsaufenthalte'],
  ['erkunden', 'to explore', '🧭'],
  ['bereisen', 'to travel through (a country)', '🛤️'],
  ['zurückerstatten', 'to refund', '💸'],
  ['aufbrechen', 'to set off', '🎒'],
  ['entschleunigen', 'to slow down', '🐢'],
]);

const mobility = vocabList(U, 'City and mobility', [
  ['Verkehrsverbund', 'regional transport association', '🚇', 'der', 'Verkehrsverbünde'],
  ['Berufspendler', 'commuter', '🧍', 'der', 'Berufspendler'],
  ['Berufsverkehr', 'rush-hour traffic', '🚗', 'der'],
  ['Fahrgemeinschaft', 'carpool', '🚙', 'die', 'Fahrgemeinschaften'],
  ['Lastenrad', 'cargo bike', '🚲', 'das', 'Lastenräder'],
  ['Verkehrswende', 'shift in transport policy', '🔄', 'die'],
  ['Umweltzone', 'low-emission zone', '🌫️', 'die', 'Umweltzonen'],
  ['Radschnellweg', 'cycle superhighway', '🚴', 'der', 'Radschnellwege'],
  ['Parkgebühr', 'parking fee', '🅿️', 'die', 'Parkgebühren'],
  ['Mietwagen', 'rental car', '🚘', 'der', 'Mietwagen'],
  ['überfüllt', 'overcrowded', '🚌'],
  ['verkehrsberuhigt', 'traffic-calmed', '🛑'],
]);

const concession = vocabList(U, 'Concession and contrast', [
  ['Auch wenn es regnet, fahren wir los.', 'Even if it rains, we are setting off.', '🌧️'],
  [
    'Selbst wenn ich Zeit hätte, würde ich nicht mitkommen.',
    'Even if I had time, I would not come along.',
    '⏳',
  ],
  [
    'Die Reise ist zwar teuer, aber unvergesslich.',
    'The trip is expensive, but unforgettable.',
    '💶',
  ],
  [
    'Der Zug hatte Verspätung; dennoch kamen wir pünktlich an.',
    'The train was late; nevertheless we arrived on time.',
    '🚆',
  ],
  ['Es ist zwar anstrengend, aber es lohnt sich.', 'It is tiring, but it is worth it.', '💪'],
  [
    'Das Hotel ist einfach, allerdings sehr sauber.',
    'The hotel is simple, but very clean, though.',
    '🏨',
  ],
]);

const vocab = [...travel, ...mobility, ...concession];

export const unterwegs: UnitContent = {
  unit: unitB21({
    id: U,
    order: 11,
    title: 'Unterwegs: Reisen, Städte & Mobilität',
    subtitle: 'Travel, cities and transport – and conceding a point without giving up your view',
    emoji: '🧳',
    goals: [
      'Talk about travel plans, bookings and problems on the way',
      'Discuss traffic and mobility in a city',
      'Concede a point and still keep your view: auch wenn, selbst wenn, zwar … aber, dennoch',
    ],
    grammar: [
      'auch wenn / selbst wenn (verb at the end), zwar … aber, dennoch / allerdings (verb in second position).',
      'Review: Konjunktiv II for unreal cases (Selbst wenn ich Zeit hätte, würde ich …).',
    ],
    vocabFields: ['Travel and tourism', 'City and mobility', 'Concession and contrast'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-travel',
      'flashcards',
      meta(
        'Travel and tourism',
        'Hochsaison, Rundreise, Stornierung – planning and problems.',
        ['vocabulary', 'travel-mobility'],
        1,
        5,
      ),
      flashcards(travel),
    ),
    activity(
      U,
      'flash-mobility',
      'flashcards',
      meta(
        'City and mobility',
        'Berufspendler, Lastenrad, Verkehrswende – how people move in a city.',
        ['vocabulary', 'travel-mobility'],
        1,
        5,
      ),
      flashcards(mobility),
    ),
    activity(
      U,
      'flash-concession',
      'flashcards',
      meta(
        'Concession and contrast',
        'auch wenn, selbst wenn, zwar … aber, dennoch – in whole sentences.',
        ['vocabulary', 'communication', 'travel-mobility'],
        1,
        4,
      ),
      flashcards(concession),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Travel in pictures', 'Name what you see.', ['vocabulary', 'travel-mobility'], 1, 4),
      quizEmoji(
        byDe(
          [...travel, ...mobility],
          'Rundreise',
          'Reisewarnung',
          'Lastenrad',
          'Radschnellweg',
          'Parkgebühr',
          'Mietwagen',
          'Verkehrsverbund',
          'Hochsaison',
        ),
      ),
    ),
    activity(
      U,
      'listen-concession',
      'listen',
      meta(
        'Hear the sentences',
        'Listen and pick the meaning.',
        ['listening', 'travel-mobility'],
        2,
        4,
      ),
      listen(concession),
    ),
    activity(
      U,
      'memory-concession',
      'memory',
      meta(
        'Same meaning, other words',
        'Match the sentences that concede a point in different ways.',
        ['vocabulary', 'auch-wenn', 'travel-mobility'],
        2,
        4,
      ),
      {
        pairs: [
          {
            id: 'm1',
            a: 'Es regnet, trotzdem fahren wir los.',
            b: 'Auch wenn es regnet, fahren wir los.',
          },
          {
            id: 'm2',
            a: 'Der Flug ist teuer, aber bequem.',
            b: 'Der Flug ist zwar teuer, aber bequem.',
          },
          {
            id: 'm3',
            a: 'Ich bin müde, dennoch gehe ich noch aus.',
            b: 'Selbst wenn ich müde bin, gehe ich noch aus.',
          },
          {
            id: 'm4',
            a: 'Das Zimmer ist klein, aber sauber.',
            b: 'Das Zimmer ist klein, allerdings sauber.',
          },
          {
            id: 'm5',
            a: 'Du hast recht, trotzdem bleibe ich dabei.',
            b: 'Auch wenn du recht hast, bleibe ich dabei.',
          },
          {
            id: 'm6',
            a: 'Die Stadt ist laut, aber lebendig.',
            b: 'Die Stadt ist zwar laut, aber lebendig.',
          },
        ],
      },
    ),
    activity(
      U,
      'spell-travel',
      'spell',
      meta(
        'Spell the new words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'travel-mobility'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(travel, 'Hochsaison', 'Rundreise', 'Stornierung'), 'unscramble').items,
          ...spell(byDe(mobility, 'Verkehrsverbund', 'Berufsverkehr', 'Verkehrswende'), 'type')
            .items,
          dictation('d1', 'Auch wenn es regnet, fahren wir los.', 'even if it rains, we set off'),
          dictation(
            'd2',
            'Die Reise ist zwar teuer, aber unvergesslich.',
            'the trip is expensive, but unforgettable',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-word-order',
      'sortit',
      meta(
        'Verb at the end or second?',
        'Where does the verb stand after the connector?',
        ['grammar', 'word-order', 'auch-wenn'],
        2,
        4,
      ),
      {
        instruction: 'Is the verb at the end of the clause (Nebensatz) or in second position?',
        buckets: [
          { id: 'end', label: 'Verb am Ende', emoji: '🔚' },
          { id: 'second', label: 'Verb an Position 2', emoji: '2️⃣' },
        ],
        items: sortItems('w', [
          ['Auch wenn es regnet, fahren wir los.', 'end'],
          ['Selbst wenn ich Zeit hätte, käme ich nicht mit.', 'end'],
          ['Auch wenn der Zug spät kommt, warten wir.', 'end'],
          ['Der Zug ist spät, dennoch warten wir.', 'second'],
          ['Das Hotel ist einfach, allerdings ist es sauber.', 'second'],
          ['Es regnet. Trotzdem fahren wir los.', 'second'],
          ['Die Reise ist zwar anstrengend, aber sie lohnt sich.', 'second'],
        ]),
      },
    ),
    activity(
      U,
      'gap-concession',
      'gapfill',
      meta(
        'Giving a point, keeping a view',
        'Complete the sentences with the right connector or verb.',
        ['grammar', 'auch-wenn'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'a1',
              'Auch ___ es regnet, fahren wir ans Meer.',
              'wenn',
              ['wenn', 'als', 'ob', 'dass'],
              'Even if it rains, we are going to the sea.',
              'auch wenn = even if.',
            ),
            {
              als: 'als refers to one situation in the past; auch wenn is the fixed phrase for “even if”.',
              ob: 'ob means “whether”.',
              dass: 'dass means “that”; “even if” is auch wenn.',
            },
          ),
          hint(
            gap(
              'a2',
              'Die Stadt ist ___ teuer, aber wunderschön.',
              'zwar',
              ['zwar', 'auch', 'dennoch', 'nur'],
              'The city is expensive, but beautiful.',
              'zwar … aber concedes the first point and adds the contrast.',
            ),
            {
              auch: 'auch alone does not concede; it needs wenn (auch wenn) or zwar … aber.',
              dennoch: 'dennoch means “nevertheless” and does not pair with aber.',
              nur: 'nur means “only”.',
            },
          ),
          hint(
            gap(
              'a3',
              'Der Zug hatte Verspätung. Wir sind ___ pünktlich angekommen.',
              'dennoch',
              ['dennoch', 'deshalb', 'sonst', 'also'],
              'The train was late. We arrived on time nevertheless.',
              'dennoch = nevertheless; it expresses an unexpected result.',
            ),
            {
              deshalb:
                'deshalb gives a reason; a late train is not the reason for arriving on time.',
              sonst: 'sonst means “otherwise”.',
              also: 'also means “so, therefore”.',
            },
          ),
          hint(
            gap(
              'a4',
              'Selbst wenn ich mehr Urlaub ___, würde ich nicht verreisen.',
              'hätte',
              ['hätte', 'habe', 'hatte', 'hat'],
              'Even if I had more holiday, I would not go away.',
              'Unreal case (würde in the main clause) → Konjunktiv II of haben: hätte.',
            ),
            {
              habe: 'habe is a real present; the würde in the main clause shows an unreal case.',
              hatte: 'hatte is the Präteritum, not the Konjunktiv II.',
              hat: 'hat is the real present; the unreal case needs hätte.',
            },
            'konjunktiv-2',
          ),
          hint(
            typed(
              'a5',
              'Auch wenn die Reise lang ___, freue ich mich. (sein)',
              'ist',
              'Even if the trip is long, I am looking forward to it.',
              'In the subordinate clause the verb goes to the end.',
            ),
            { sei: 'sei is the Konjunktiv I; the real present is ist.' },
          ),
          hint(
            gap(
              'a6',
              'Es ist zwar anstrengend, ___ es lohnt sich.',
              'aber',
              ['aber', 'weil', 'obwohl', 'dass'],
              'It is tiring, but it is worth it.',
              'zwar … aber: aber stands in position 0 and does not change the verb order.',
            ),
            {
              weil: 'weil gives a reason and sends the verb to the end.',
              obwohl: 'obwohl would send the verb to the end: obwohl es sich lohnt.',
              dass: 'dass starts a clause with the verb at the end.',
            },
          ),
          hint(
            gap(
              'a7',
              'Dennoch ___ wir die Reise gebucht.',
              'haben',
              ['haben', 'wir', 'gebucht', 'buchen'],
              'Nevertheless we booked the trip.',
              'dennoch in position 1, so the conjugated verb comes next.',
            ),
            {
              wir: 'The verb must come directly after dennoch; wir follows it.',
              gebucht: 'gebucht is the participle and belongs at the end.',
              buchen: 'The perfect tense needs a form of haben in position 2.',
            },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences-concession',
      'sentence',
      meta(
        'Build the concession',
        'Put the words in order.',
        ['grammar', 'word-order', 'auch-wenn'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'Even if it rains, we are going to the lake.', [
            'Auch',
            'wenn',
            'es',
            'regnet,',
            'fahren',
            'wir',
            'an',
            'den',
            'See.',
          ]),
          sent('s2', 'The city is expensive, but beautiful.', [
            'Die',
            'Stadt',
            'ist',
            'zwar',
            'teuer,',
            'aber',
            'wunderschön.',
          ]),
          sent('s3', 'The train was late, yet we arrived on time.', [
            'Der',
            'Zug',
            'hatte',
            'Verspätung,',
            'dennoch',
            'sind',
            'wir',
            'pünktlich',
            'angekommen.',
          ]),
          sent('s4', 'Even if I had more time, I would not travel.', [
            'Selbst',
            'wenn',
            'ich',
            'mehr',
            'Zeit',
            'hätte,',
            'würde',
            'ich',
            'nicht',
            'verreisen.',
          ]),
          sent('s5', 'Even if the ticket is expensive, I will buy it.', [
            'Auch',
            'wenn',
            'das',
            'Ticket',
            'teuer',
            'ist,',
            'kaufe',
            'ich',
            'es.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-travel',
      'listen',
      meta(
        'Travel announcements',
        'Listen to short reports and pick what they say.',
        ['listening', 'travel-mobility'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Obwohl die Hochsaison begonnen hat, bietet der Reiseveranstalter noch günstige Rundreisen an.',
            'Although peak season has started, the tour operator still offers cheap tours.',
            [
              'The tour operator has cancelled all tours.',
              'Peak season is over.',
              'The tours are more expensive than ever.',
            ],
          ),
          heard(
            'l2',
            'Wegen der Reisewarnung können Urlauber ihre Reise kostenlos stornieren.',
            'Because of the travel warning, holidaymakers can cancel their trip for free.',
            [
              'The travel warning does not allow any cancellation.',
              'Holidaymakers must pay a high cancellation fee.',
              'There is no travel warning.',
            ],
          ),
          heard(
            'l3',
            'In der Innenstadt gibt es bald mehr Fußgängerzonen, und Autos müssen Parkgebühren zahlen.',
            'The city centre will soon have more pedestrian zones, and cars will have to pay parking fees.',
            [
              'Cars are allowed everywhere without paying.',
              'There will be fewer pedestrian zones.',
              'The city centre will be closed to bikes.',
            ],
          ),
          heard(
            'l4',
            'Die meisten Pendler fahren morgens im überfüllten Nahverkehr zur Arbeit.',
            'Most commuters ride to work in overcrowded local transport in the morning.',
            [
              'Most commuters work from home.',
              'Local transport is almost empty in the morning.',
              'Commuters prefer to take the plane.',
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
        'Travel agency and city council',
        'Solve a booking problem and discuss traffic in your city.',
        ['communication', 'travel-mobility'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'agency',
            title: 'Im Reisebüro',
            emoji: '🧳',
            setting: 'You want to change a booking at a travel agency.',
            turns: [
              say(
                'Reiseberaterin',
                'Leider ist Ihre Rundreise ausgebucht. Das ist gerade Hochsaison.',
                'Unfortunately your tour is fully booked. It is peak season right now.',
              ),
              you(
                'Auch wenn gerade Hochsaison ist, gibt es vielleicht einen anderen Termin?',
                [
                  'Auch wenn gerade Hochsaison ist, es gibt vielleicht einen anderen Termin?',
                  'After auch wenn the verb goes to the end; the main clause then starts with the verb: gibt es.',
                ],
                ['Dann fahre ich nie wieder weg.', 'Stay polite and ask about an alternative.'],
              ),
              say(
                'Reiseberaterin',
                'Im September wäre noch etwas frei, allerdings ist es dann etwas teurer.',
                'In September something would still be free, although it is a little more expensive then.',
              ),
              you('Das ist zwar teurer, aber ich nehme den Termin.', [
                'Das ist zwar teurer, ich aber nehme den Termin.',
                'aber stands in position 0: Das ist zwar teurer, aber ich nehme den Termin.',
              ]),
            ],
          },
          {
            id: 'council',
            title: 'Bürgerversammlung: Verkehr in der Innenstadt',
            emoji: '🚲',
            setting: 'At a public meeting you give your opinion on a car-free city centre.',
            turns: [
              say(
                'Moderator',
                'Die Stadt plant eine verkehrsberuhigte Innenstadt. Wie sehen Sie das?',
                'The city plans a traffic-calmed centre. What do you think?',
              ),
              you(
                'Selbst wenn die Parkplätze weniger würden, wäre das eine gute Idee.',
                [
                  'Selbst wenn die Parkplätze weniger werden, wäre das eine gute Idee.',
                  'The wäre in the main clause shows an unreal case, so the first clause needs Konjunktiv II: würden.',
                ],
                [
                  'Ich fahre sowieso nie in die Stadt.',
                  'Give a reasoned opinion with selbst wenn.',
                ],
              ),
              say(
                'Moderator',
                'Viele Pendler sind aber auf das Auto angewiesen.',
                'But many commuters depend on the car.',
              ),
              you('Das stimmt, dennoch sollte der Nahverkehr besser ausgebaut werden.', [
                'Das stimmt, dennoch der Nahverkehr sollte besser ausgebaut werden.',
                'After dennoch in position 1 the verb follows: dennoch sollte der Nahverkehr …',
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
        'Concession blitz',
        'Connectors and word order – true or false?',
        ['grammar', 'auch-wenn'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Auch wenn es regnet, gehen wir spazieren.', true),
          tf(
            'b2',
            'Auch wenn es regnet, wir gehen spazieren.',
            false,
            'After the subordinate clause the main clause starts with the verb: gehen wir.',
          ),
          tf('b3', 'Die Reise ist zwar teuer, aber schön.', true),
          tf(
            'b4',
            'Selbst wenn ich Zeit habe, würde ich nicht mitkommen.',
            false,
            'The würde in the main clause shows an unreal case: Selbst wenn ich Zeit hätte, …',
          ),
          tf('b5', 'Es ist spät, dennoch bleiben wir noch.', true),
          tf(
            'b6',
            'Es ist spät, dennoch wir bleiben noch.',
            false,
            'dennoch is in position 1, so the verb comes next: dennoch bleiben wir noch.',
          ),
          tf(
            'b7',
            'dennoch bedeutet „deshalb“.',
            false,
            'dennoch means “nevertheless”; deshalb means “therefore”.',
          ),
          tf('b8', 'Eine Stornierung bedeutet, dass man eine Buchung absagt.', true),
          tf('b9', 'Ein Pendler fährt täglich zur Arbeit in eine andere Stadt.', true),
          tf(
            'b10',
            'In einer Fußgängerzone fahren viele Autos.',
            false,
            'A Fußgängerzone is an area reserved for pedestrians.',
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
        'Travel words and concessions in one round.',
        ['vocabulary', 'grammar', 'travel-mobility'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Auch wenn das Wetter schlecht ___, fahren wir.', 'ist', [
              'sind',
              'bin',
              'seid',
            ]),
            {
              sind: 'Wetter is singular: ist.',
              bin: 'bin goes with ich; Wetter takes ist.',
              seid: 'seid goes with ihr; Wetter takes ist.',
            },
            'auch-wenn',
          ),
          hint(
            q('c2', 'Es ist zwar kalt, ___ ich gehe joggen.', 'aber', ['weil', 'dass', 'obwohl']),
            {
              weil: 'weil would give a reason and send the verb to the end.',
              dass: 'dass starts a clause with the verb at the end.',
              obwohl: 'obwohl would send the verb to the end.',
            },
            'auch-wenn',
          ),
          hint(
            q('c3', 'Selbst wenn ich reich ___, würde ich arbeiten.', 'wäre', [
              'bin',
              'war',
              'werde',
            ]),
            {
              bin: 'bin is real; the würde in the main clause needs an unreal clause.',
              war: 'war is the Präteritum, not the Konjunktiv II.',
              werde: 'werde is a future form and does not fit the unreal case.',
            },
            'konjunktiv-2',
          ),
          hint(
            q('c4', 'Der Bus war voll. ___ sind wir mitgefahren.', 'Dennoch', [
              'Deshalb',
              'Weil',
              'Falls',
            ]),
            {
              Deshalb: 'Deshalb gives a reason; here the result is unexpected.',
              Weil: 'Weil would start a subordinate clause.',
              Falls: 'Falls means “in case”.',
            },
            'auch-wenn',
          ),
          q('c5', 'die Hochsaison', 'peak season', ['cancellation', 'tour', 'travel warning']),
          q('c6', 'der Berufspendler', 'commuter', ['tourist', 'driver', 'tour operator']),
          q('c7', 'verkehrsberuhigt', 'traffic-calmed', ['overcrowded', 'rush-hour', 'expensive']),
          q('c8', 'zurückerstatten', 'to refund', ['to explore', 'to set off', 'to slow down']),
          q(
            'c9',
            'You want to say: Even if the ticket is expensive, I will buy it.',
            'Auch wenn das Ticket teuer ist, kaufe ich es.',
            [
              'Auch wenn das Ticket teuer ist, ich kaufe es.',
              'Auch wenn das Ticket ist teuer, kaufe ich es.',
              'Auch wenn teuer ist das Ticket, kaufe ich es.',
            ],
          ),
          q('c10', 'die Verkehrswende', 'shift in transport policy', [
            'parking fee',
            'local public transport',
            'carpool',
          ]),
        ],
      },
    ),
  ],
};
