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

const U = 'b1-2-kunst';

const theatre = vocabList(U, 'Theatre & art', [
  ['Bühne', 'stage', '🎭', 'die', 'Bühnen'],
  ['Bühnenbild', 'stage set', '🖼️', 'das', 'Bühnenbilder'],
  ['Theaterstück', 'play', '📜', 'das', 'Theaterstücke'],
  ['Probe', 'rehearsal', '🔁', 'die', 'Proben'],
  ['Premiere', 'premiere, opening night', '🌟', 'die', 'Premieren'],
  ['Regisseurin', 'director (f)', '🎬', 'die', 'Regisseurinnen'],
  ['Applaus', 'applause', '👏', 'der'],
  ['Improvisation', 'improvisation', '🎲', 'die', 'Improvisationen'],
  ['Chor', 'choir', '🎶', 'der', 'Chöre'],
  ['Volkslied', 'folk song', '🪕', 'das', 'Volkslieder'],
  ['Kunstwerk', 'work of art', '🖌️', 'das', 'Kunstwerke'],
  ['Fälschung', 'forgery, fake', '🕵️', 'die', 'Fälschungen'],
  ['proben', 'to rehearse', '🗣️'],
]);

const reviews = vocabList(U, 'Saying what you think of art', [
  ['Das spricht mich nicht an.', 'That doesn’t appeal to me.', '😐'],
  ['Das hat mich sehr berührt.', 'That moved me deeply.', '🥹'],
  ['Ich kann damit nichts anfangen.', 'It doesn’t mean anything to me.', '🤷'],
  ['Die Schauspieler waren großartig.', 'The actors were great.', '🌟'],
  ['Das Ende war nicht überzeugend.', 'The ending wasn’t convincing.', '👎'],
  ['Ist das echt oder eine Fälschung?', 'Is that real or a fake?', '🔍'],
]);

const vocab = [...theatre, ...reviews];

export const kunst: UnitContent = {
  unit: unitB12({
    id: U,
    order: 11,
    title: 'Theater & Kunst',
    subtitle: 'On stage, improv theatre, choirs, art forgeries and reviews',
    emoji: '🎭',
    goals: [
      'Talk about a play, a rehearsal and a premiere',
      'Say what you like and do not like about a work of art',
      'Negate exactly the part of the sentence you mean',
    ],
    grammar: [
      'Position of nicht: whole sentence (Ich kenne den Künstler nicht.) or one part (Nicht das Bild, sondern der Rahmen …).',
      'nicht before the second verb part, adjectives and prepositional phrases: Das Stück hat mir nicht gefallen.',
    ],
    vocabFields: ['Theatre & art', 'Saying what you think of art'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-theatre',
      'flashcards',
      meta(
        'Theatre & art',
        'Bühne, Probe, Premiere – behind the scenes.',
        ['vocabulary', 'theatre-art'],
        1,
        5,
      ),
      flashcards(theatre),
    ),
    activity(
      U,
      'flash-reviews',
      'flashcards',
      meta(
        'Saying what you think of art',
        'Praise, criticise and admit when art leaves you cold.',
        ['vocabulary', 'communication', 'theatre-art'],
        1,
        4,
      ),
      flashcards(reviews),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Theatre words', 'Name what you see.', ['vocabulary', 'theatre-art'], 1, 4),
      quizEmoji(
        byDe(
          theatre,
          'Bühne',
          'Premiere',
          'Regisseurin',
          'Applaus',
          'Chor',
          'Volkslied',
          'Kunstwerk',
          'Fälschung',
        ),
      ),
    ),
    activity(
      U,
      'listen-reviews',
      'listen',
      meta('Hear the reviews', 'Listen and pick the meaning.', ['listening', 'theatre-art'], 2, 4),
      listen(reviews),
    ),
    activity(
      U,
      'spell-theatre',
      'spell',
      meta(
        'Spell the theatre words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'theatre-art'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(theatre, 'Bühne', 'Probe', 'Chor'), 'unscramble').items,
          ...spell(byDe(theatre, 'Premiere', 'Improvisation', 'Fälschung'), 'type').items,
          dictation('d1', 'Das Stück hat mir nicht gefallen.', 'I didn’t like the play'),
          dictation(
            'd2',
            'Nicht das Bild, sondern der Rahmen ist alt.',
            'not the picture but the frame is old',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-nicht',
      'sortit',
      meta(
        'All or one part?',
        'Does nicht negate the whole sentence or just one part?',
        ['grammar', 'nicht-position'],
        2,
        4,
      ),
      {
        instruction: 'What does nicht negate?',
        buckets: [
          { id: 'all', label: 'the whole sentence', emoji: '🌐' },
          { id: 'part', label: 'only one part', emoji: '🎯' },
        ],
        items: sortItems('n', [
          ['Ich kenne die Regisseurin nicht.', 'all'],
          ['Die Premiere hat nicht stattgefunden.', 'all'],
          ['Wir proben heute nicht.', 'all'],
          ['Das Stück hat mir nicht gefallen.', 'all'],
          ['Nicht ich, sondern Lena singt im Chor.', 'part'],
          ['Wir proben nicht heute, sondern morgen.', 'part'],
          ['Nicht das Bild ist falsch, sondern der Rahmen.', 'part'],
          ['Sie spielt nicht die Hauptrolle, sondern eine kleine Rolle.', 'part'],
        ]),
      },
    ),
    activity(
      U,
      'gap-nicht',
      'gapfill',
      meta(
        'Where does nicht go?',
        'Put nicht in the right place.',
        ['grammar', 'nicht-position'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'n1',
              'Das Theaterstück hat mir ___.',
              'nicht gefallen',
              ['nicht gefallen', 'gefallen nicht', 'nicht hat gefallen', 'kein gefallen'],
              'I did not like the play.',
              'nicht comes before the second verb part (the participle).',
            ),
            {
              'gefallen nicht': 'The participle goes to the very end; nicht stands before it.',
              'nicht hat gefallen': 'hat is already in position 2; at the end: nicht gefallen.',
              'kein gefallen': 'kein negates nouns; for a verb use nicht.',
            },
          ),
          hint(
            gap(
              'n2',
              'Ich kenne den Künstler ___.',
              'nicht',
              ['nicht', 'kein', 'keinen', 'nichts'],
              'I don’t know the artist.',
              'A noun with der/den is negated with nicht, at the end.',
            ),
            {
              kein: 'kein replaces ein or no article; den Künstler has den, so: nicht.',
              keinen: 'keinen would replace einen; with den Künstler use nicht.',
              nichts: 'nichts means nothing; here: nicht.',
            },
          ),
          hint(
            gap(
              'n3',
              'Wir proben ___, sondern am Freitag.',
              'nicht am Donnerstag',
              [
                'nicht am Donnerstag',
                'am Donnerstag nicht',
                'kein Donnerstag',
                'nicht Donnerstag am',
              ],
              'We are not rehearsing on Thursday but on Friday.',
              'With sondern, nicht stands right before the part it negates.',
            ),
            {
              'am Donnerstag nicht': 'With sondern, nicht goes directly before the negated part.',
              'kein Donnerstag': 'kein does not fit here; negate the time phrase with nicht.',
              'nicht Donnerstag am': 'The preposition comes first: nicht am Donnerstag.',
            },
          ),
          hint(
            gap(
              'n4',
              'Das Ende war ___ überzeugend.',
              'nicht',
              ['nicht', 'kein', 'nichts', 'keine'],
              'The ending was not convincing.',
              'Adjectives are negated with nicht, right before the adjective.',
            ),
            {
              kein: 'Adjectives are negated with nicht.',
              nichts: 'nichts means nothing; before an adjective use nicht.',
              keine: 'Adjectives are negated with nicht.',
            },
          ),
          hint(
            gap(
              'n5',
              'Leider konnte die Premiere ___.',
              'nicht stattfinden',
              ['nicht stattfinden', 'stattfinden nicht', 'nicht statt finden', 'stattnichtfinden'],
              'Unfortunately the premiere could not take place.',
              'nicht before the infinitive at the end.',
            ),
            {
              'stattfinden nicht': 'The infinitive goes to the very end; nicht before it.',
              'nicht statt finden': 'stattfinden is written as one word.',
              stattnichtfinden: 'nicht never goes inside the verb: nicht stattfinden.',
            },
          ),
          hint(
            typed(
              'n6',
              'Sie interessiert sich ___ für moderne Kunst.',
              'nicht',
              'She is not interested in modern art.',
              'nicht before a prepositional object (für …).',
            ),
            {
              kein: 'kein negates nouns with ein / no article; here: nicht für …',
              nichts: 'nichts means nothing; here: nicht.',
            },
          ),
          hint(
            typed(
              'n7',
              'Wir haben ___ Karten mehr bekommen. (no tickets)',
              'keine',
              'We didn’t get any tickets any more.',
              'A noun without an article (Karten) is negated with kein.',
            ),
            { nicht: 'Karten has no article, so it is negated with kein: keine Karten.' },
            'negation',
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Not this, but that',
        'Build sentences with nicht in the right place.',
        ['grammar', 'word-order', 'nicht-position'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'I didn’t like the play.', [
            'Das',
            'Stück',
            'hat',
            'mir',
            'nicht',
            'gefallen.',
          ]),
          sent('s2', 'We are not rehearsing today but tomorrow.', [
            'Wir',
            'proben',
            'nicht',
            'heute,',
            'sondern',
            'morgen.',
          ]),
          sent('s3', 'I don’t know the director.', [
            'Ich',
            'kenne',
            'die',
            'Regisseurin',
            'nicht.',
          ]),
          sent('s4', 'That doesn’t appeal to me.', ['Das', 'spricht', 'mich', 'nicht', 'an.']),
          sent('s5', 'Not the picture but the frame is old.', [
            'Nicht',
            'das',
            'Bild,',
            'sondern',
            'der',
            'Rahmen',
            'ist',
            'alt.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-stage',
      'listen',
      meta(
        'On and off stage',
        'Listen to interviews and pick what is right.',
        ['listening', 'theatre-art', 'nicht-position'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Beim Improtheater gibt es kein Drehbuch. Das Publikum ruft uns ein Thema zu und wir spielen sofort los.',
            'In improv theatre the audience suggests a topic and the actors start at once.',
            [
              'Improv actors learn a long script.',
              'The audience is not allowed to speak.',
              'The actors rehearse each scene for weeks.',
            ],
          ),
          heard(
            'l2',
            'Das Bild im Museum war nicht von Rembrandt, sondern eine sehr gute Fälschung.',
            'The painting was not by Rembrandt but a very good fake.',
            [
              'The painting was a real Rembrandt.',
              'Rembrandt painted a copy of the picture.',
              'The museum sold the Rembrandt.',
            ],
          ),
          heard(
            'l3',
            'Unser Chor probt jeden Mittwoch. Wir singen vor allem alte Volkslieder.',
            'The choir rehearses every Wednesday and mainly sings old folk songs.',
            [
              'The choir only sings pop songs.',
              'The choir meets once a month.',
              'The choir has stopped rehearsing.',
            ],
          ),
          heard(
            'l4',
            'Für das Bühnenbild haben wir drei Monate gebraucht – es besteht nur aus Holz und Papier.',
            'The stage set took three months and is made only of wood and paper.',
            [
              'The stage set was bought in a shop.',
              'The stage set is made of metal.',
              'The stage set was finished in three days.',
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
        'After the show',
        'Talk about a play after the premiere and about a painting in a gallery.',
        ['communication', 'theatre-art', 'nicht-position'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'premiere',
            title: 'Nach der Premiere',
            emoji: '🌟',
            setting: 'You and your friend Jana leave the theatre after a premiere.',
            turns: [
              say(
                'Jana',
                'Und? Wie hat dir das Stück gefallen?',
                'Well? How did you like the play?',
              ),
              you('Die Schauspieler waren großartig, aber das Ende war nicht überzeugend.', [
                'Die Schauspieler waren großartig, aber das Ende war kein überzeugend.',
                'Adjectives are negated with nicht.',
              ]),
              say(
                'Jana',
                'Echt? Mich hat das Ende sehr berührt.',
                'Really? The ending moved me deeply.',
              ),
              you('Das Bühnenbild hat mir auch nicht gefallen. Es war zu dunkel.', [
                'Das Bühnenbild hat mir auch gefallen nicht. Es war zu dunkel.',
                'nicht comes before the participle at the end: nicht gefallen.',
              ]),
            ],
          },
          {
            id: 'gallery',
            title: 'In der Galerie',
            emoji: '🖼️',
            setting: 'Your colleague Mehmet shows you a modern painting he loves.',
            turns: [
              say(
                'Mehmet',
                'Ist das nicht toll? Ich könnte stundenlang davor stehen.',
                'Isn’t it great? I could stand in front of it for hours.',
              ),
              you(
                'Ehrlich gesagt kann ich damit nichts anfangen.',
                [
                  'Ehrlich gesagt kann ich damit nicht anfangen.',
                  'The phrase is: mit etwas nichts anfangen können.',
                ],
                ['Ja, das hat mich sehr berührt.', 'That would say you love it too.'],
              ),
              say(
                'Mehmet',
                'Schade. Was gefällt dir denn nicht?',
                'Pity. What don’t you like about it?',
              ),
              you('Die Farben mag ich, aber die Formen sprechen mich nicht an.', [
                'Die Farben mag ich, aber die Formen sprechen mich an nicht.',
                'nicht comes before the separable prefix at the end: nicht an.',
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
        'Theatre blitz',
        'nicht in the right place – true or false?',
        ['grammar', 'nicht-position'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Das Stück hat mir nicht gefallen.', true),
          tf(
            'b2',
            'Das Stück hat mir gefallen nicht.',
            false,
            'nicht before the participle: nicht gefallen.',
          ),
          tf('b3', 'Ich kenne die Schauspielerin nicht.', true),
          tf(
            'b4',
            'Ich nicht kenne die Schauspielerin.',
            false,
            'The verb stays in position 2; nicht goes to the end.',
          ),
          tf('b5', 'Wir proben nicht heute, sondern morgen.', true),
          tf('b6', 'Das Ende war kein überzeugend.', false, 'Adjectives are negated with nicht.'),
          tf('b7', 'Bei einer Premiere wird ein Stück zum ersten Mal gespielt.', true),
          tf(
            'b8',
            'Eine Fälschung ist ein echtes Kunstwerk vom Künstler selbst.',
            false,
            'A Fälschung is a fake.',
          ),
          tf('b9', 'Am Ende einer guten Vorstellung gibt es Applaus.', true),
          tf(
            'b10',
            'Bei einer Probe sitzt immer das ganze Publikum im Saal.',
            false,
            'A rehearsal is usually without an audience.',
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
        'Theatre words, reviews and the position of nicht in one round.',
        ['vocabulary', 'grammar', 'theatre-art'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Die Vorstellung hat ___.', 'nicht stattgefunden', [
              'stattgefunden nicht',
              'nicht statt gefunden',
              'kein stattgefunden',
            ]),
            {
              'stattgefunden nicht': 'nicht goes before the participle at the end.',
              'nicht statt gefunden': 'stattgefunden is one word.',
              'kein stattgefunden': 'Verbs are negated with nicht.',
            },
            'nicht-position',
          ),
          hint(
            q('c2', '___ Paul, sondern Anna führt Regie.', 'Nicht', ['Kein', 'Nichts', 'Keine']),
            {
              Kein: 'Names are negated with nicht.',
              Nichts: 'nichts means nothing; before a name use nicht.',
              Keine: 'Names are negated with nicht.',
            },
            'nicht-position',
          ),
          hint(
            q('c3', 'Ich gehe heute ___.', 'nicht ins Theater', [
              'ins Theater nicht',
              'nicht in Theater',
              'kein Theater',
            ]),
            {
              'ins Theater nicht': 'nicht comes before a place phrase: nicht ins Theater.',
              'nicht in Theater': 'Direction needs the article: ins (in das) Theater.',
              'kein Theater': 'With a place phrase like ins Theater use nicht.',
            },
            'nicht-position',
          ),
          q('c4', 'die Probe', 'rehearsal', ['premiere, opening night', 'stage', 'applause']),
          q('c5', 'das Bühnenbild', 'stage set', ['play', 'work of art', 'folk song']),
          q('c6', 'proben', 'to rehearse', ['to improvise', 'to applaud', 'to direct']),
          q('c7', 'A painting leaves you cold. You say …', 'Ich kann damit nichts anfangen.', [
            'Das hat mich sehr berührt.',
            'Die Schauspieler waren großartig.',
            'Ist das echt oder eine Fälschung?',
          ]),
          q('c8', 'die Fälschung', 'forgery, fake', ['work of art', 'rehearsal', 'stage']),
          q('c9', 'der Chor', 'choir', ['folk song', 'applause', 'stage']),
          q('c10', 'die Premiere', 'premiere, opening night', ['rehearsal', 'play', 'applause']),
        ],
      },
    ),
  ],
};
