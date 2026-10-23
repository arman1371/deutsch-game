import { byDe, flashcards, listen, memory, quizDeEn, spell, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  heard,
  meta,
  q,
  say,
  sortItems,
  sw,
  tf,
  typed,
  unitC21,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'c2-1-debatte';

const talk = vocabList(U, 'Giving a talk', [
  ['Gliederung', 'outline, structure', '📑', 'die', 'Gliederungen'],
  ['Kernaussage', 'core message', '🎯', 'die', 'Kernaussagen'],
  ['Fazit', 'conclusion, summing up', '🏁', 'das', 'Fazits'],
  ['Überleitung', 'transition', '🌉', 'die', 'Überleitungen'],
  ['Veranschaulichung', 'illustration', '🖼️', 'die', 'Veranschaulichungen'],
  ['Zwischenfrage', 'question during a talk', '🙋', 'die', 'Zwischenfragen'],
  ['Zuhörerschaft', 'audience', '👥', 'die'],
  ['Stichwortzettel', 'cue card', '🗒️', 'der', 'Stichwortzettel'],
  ['Aufhänger', 'hook, opener', '🪝', 'der', 'Aufhänger'],
  ['darlegen', 'to set out, to explain in detail', '📐'],
  ['veranschaulichen', 'to illustrate', '🎨'],
  ['hervorheben', 'to highlight', '🔆'],
  ['abschweifen', 'to digress', '🌀'],
  ['zum Schluss kommen', 'to come to a close', '🔚'],
]);

const argue = vocabList(U, 'Arguing', [
  ['Gegenargument', 'counterargument', '↩️', 'das', 'Gegenargumente'],
  ['Schlussfolgerung', 'conclusion, inference', '🧩', 'die', 'Schlussfolgerungen'],
  ['Übereinkunft', 'agreement, settlement', '🤝', 'die', 'Übereinkünfte'],
  ['Zugeständnis', 'concession', '🎁', 'das', 'Zugeständnisse'],
  ['Abwägung', 'weighing up', '⚖️', 'die', 'Abwägungen'],
  ['Überzeugungskraft', 'persuasiveness', '💪', 'die'],
  ['Einschränkung', 'qualification, restriction', '⛔', 'die', 'Einschränkungen'],
  ['stichhaltig', 'sound, valid', '🧱'],
  ['schlüssig', 'conclusive, coherent', '🔗'],
  ['fragwürdig', 'questionable', '🤨'],
  ['einwenden', 'to object', '✋'],
  ['entkräften', 'to invalidate, to refute', '🪓'],
  ['untermauern', 'to underpin', '🏗️'],
  ['abwägen', 'to weigh up', '🔍'],
  ['einlenken', 'to give way', '🏳️'],
]);

const vocab = [...talk, ...argue];

export const debatte: UnitContent = {
  unit: unitC21({
    id: U,
    order: 9,
    title: 'Debatte & Referat',
    subtitle: 'Talks, weighing up, conceding a point and holding your ground',
    emoji: '🎤',
    goals: [
      'Structure a talk and respond to questions from the audience',
      'Concede a point before you disagree',
      'Weigh up several views and state your position',
    ],
    grammar: [
      'Concession with a clause: wenngleich, obgleich, wenn auch',
      'Concession with a connector: allerdings, freilich, indessen, zwar … aber',
      'so … auch: So gut die Idee auch klingt, …',
      'Fixed phrase: Wie dem auch sei, …',
    ],
    vocabFields: ['Giving a talk', 'Arguing'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-talk',
      'flashcards',
      meta(
        'Giving a talk',
        'Gliederung, Kernaussage, Fazit – structuring a Referat.',
        ['vocabulary', 'c21-debate'],
        1,
        5,
      ),
      flashcards(talk),
    ),
    activity(
      U,
      'flash-argue',
      'flashcards',
      meta(
        'Arguing',
        'Gegenargument, Zugeständnis, untermauern – the language of debate.',
        ['vocabulary', 'c21-debate'],
        1,
        6,
      ),
      flashcards(argue),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta('What does it mean?', 'Pick the English meaning.', ['vocabulary', 'c21-debate'], 2, 5),
      quizDeEn(
        byDe(
          vocab,
          'Kernaussage',
          'Überleitung',
          'Zuhörerschaft',
          'Aufhänger',
          'Zugeständnis',
          'Einschränkung',
          'stichhaltig',
          'fragwürdig',
          'entkräften',
          'einlenken',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'memory-debate',
      'memory',
      meta(
        'Match the words',
        'German words and their meanings.',
        ['vocabulary', 'c21-debate'],
        2,
        4,
      ),
      memory(
        byDe(
          vocab,
          'Gliederung',
          'Fazit',
          'Zwischenfrage',
          'Stichwortzettel',
          'Übereinkunft',
          'Abwägung',
          'schlüssig',
          'untermauern',
        ),
      ),
    ),
    activity(
      U,
      'listen-words',
      'listen',
      meta(
        'Hear the debate words',
        'Listen and pick the meaning.',
        ['listening', 'c21-debate'],
        2,
        4,
      ),
      listen(
        byDe(
          vocab,
          'Veranschaulichung',
          'Schlussfolgerung',
          'Überzeugungskraft',
          'darlegen',
          'hervorheben',
          'abschweifen',
          'einwenden',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'spell-debate',
      'spell',
      meta(
        'Spell the debate',
        'Unscramble, type and write what you hear.',
        ['spelling', 'c21-debate'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(vocab, 'Fazit', 'Übereinkunft'), 'unscramble').items,
          ...spell(byDe(vocab, 'Abwägung', 'Gliederung'), 'unscramble').items,
          ...spell(byDe(vocab, 'Zugeständnis', 'Einschränkung'), 'type').items,
          ...spell(byDe(vocab, 'stichhaltig'), 'type').items,
          dictation(
            'd1',
            'Wenngleich der Plan mutig ist, bleibt das Risiko hoch.',
            'Although the plan is bold, the risk remains high.',
          ),
          dictation(
            'd2',
            'Das Argument ist zwar richtig, greift aber zu kurz.',
            'The argument is admittedly right, but falls short.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-concession',
      'gapfill',
      meta(
        'wenngleich, allerdings, so … auch',
        'Concede a point and carry on.',
        ['grammar', 'c21-concession'],
        3,
        6,
      ),
      {
        items: [
          gap(
            'c1',
            '___ der Plan mutig ist, bleibt das Risiko hoch.',
            'Wenngleich',
            ['Wenngleich', 'Falls', 'Damit', 'Sodass'],
            'Although the plan is bold, the risk remains high.',
            'wenngleich / obgleich = although (formal); the verb goes to the end.',
          ),
          gap(
            'c2',
            'Das stimmt, ___ fehlen die Belege.',
            'allerdings',
            ['allerdings', 'obgleich', 'wenngleich', 'sodass'],
            'That is true; however, the evidence is missing.',
            'allerdings is an adverb: it is followed by the verb (fehlen).',
          ),
          gap(
            'c3',
            'So gut die Idee auch ___, sie ist zu teuer.',
            'klingt',
            ['klingt', 'klingen', 'klang', 'geklungen'],
            'However good the idea sounds, it is too expensive.',
            'so + adjective + auch + verb at the end of the first clause.',
          ),
          gap(
            'c4',
            'Er arbeitete weiter, ___ ihn niemand unterstützte.',
            'obgleich',
            ['obgleich', 'damit', 'sobald', 'indem'],
            'He carried on although nobody supported him.',
          ),
          gap(
            'c5',
            'Das Argument ist ___ richtig, aber es greift zu kurz.',
            'zwar',
            ['zwar', 'wenngleich', 'allerdings', 'sondern'],
            'The argument is admittedly right, but it falls short.',
            'zwar … aber: concede first, object afterwards.',
          ),
          gap(
            'c6',
            'Ich unterstütze den Plan, wenn ___ mit Vorbehalten.',
            'auch',
            ['auch', 'nicht', 'schon', 'nur'],
            'I support the plan, if with reservations.',
            'wenn auch + phrase = even if only …',
          ),
          typed(
            'c7',
            'So sehr er sich ___ bemühte, es gelang ihm nicht.',
            'auch',
            'However hard he tried, he did not succeed.',
          ),
          typed(
            'c8',
            'Wie dem ___ sei, wir müssen heute entscheiden.',
            'auch',
            'Be that as it may, we have to decide today.',
            'Fixed phrase: Wie dem auch sei.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-concession',
      'sortit',
      meta(
        'Clause, connector or fixed pattern?',
        'Sort the concessive sentences.',
        ['grammar', 'c21-concession'],
        3,
        5,
      ),
      {
        instruction: 'Which pattern is used?',
        buckets: [
          { id: 'clause', label: 'wenngleich / obgleich (verb last)', emoji: '🔚' },
          { id: 'conn', label: 'allerdings / freilich (verb second)', emoji: '2️⃣' },
          { id: 'so', label: 'so … auch / wie dem auch sei', emoji: '🔁' },
        ],
        items: sortItems('p', [
          ['Wenngleich der Plan mutig ist, bleibt das Risiko hoch.', 'clause'],
          ['Er blieb, obgleich es regnete.', 'clause'],
          ['Obgleich er müde war, arbeitete er weiter.', 'clause'],
          ['Das stimmt, allerdings fehlen die Belege.', 'conn'],
          ['Der Vorschlag ist gut; freilich ist er teuer.', 'conn'],
          ['Die Idee gefällt mir. Indessen bleiben Zweifel.', 'conn'],
          ['So klug er auch ist, er irrt sich.', 'so'],
          ['So sehr er sich auch bemühte, es misslang.', 'so'],
          ['Wie dem auch sei, wir machen weiter.', 'so'],
        ]),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Conceding a point',
        'Build sentences with concessions.',
        ['grammar', 'word-order', 'c21-concession'],
        3,
        7,
      ),
      {
        items: [
          sw(
            's1',
            'Although the plan is bold, the risk remains high.',
            'Wenngleich der Plan mutig ist, bleibt das Risiko hoch.',
          ),
          sw(
            's2',
            'The argument is admittedly right, but it falls short.',
            'Das Argument ist zwar richtig, greift aber zu kurz.',
          ),
          sw(
            's3',
            'However good the idea sounds, it is too expensive.',
            'So gut die Idee auch klingt, sie ist zu teuer.',
          ),
          sw(
            's4',
            'I admit the figures are correct; however, I draw different conclusions.',
            'Ich gebe zu, dass die Zahlen stimmen, allerdings ziehe ich andere Schlüsse.',
          ),
          sw(
            's5',
            'She gave way although she felt she was in the right.',
            'Sie lenkte ein, obgleich sie sich im Recht fühlte.',
          ),
          sw(
            's6',
            'Be that as it may, we have to decide today.',
            'Wie dem auch sei, wir müssen heute entscheiden.',
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-debate',
      'listen',
      meta(
        'In the debate',
        'Understand how speakers concede and object.',
        ['listening', 'c21-debate', 'c21-concession'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Ihr Argument ist stichhaltig, wenngleich ich die Schlussfolgerung nicht teile.',
            'Your argument is sound, although I do not share the conclusion.',
            [
              'Your argument is not sound, but I share the conclusion.',
              'I share both your argument and your conclusion.',
              'I do not understand your argument.',
            ],
          ),
          heard(
            'l2',
            'Das ist zwar ein Kompromiss, aber keiner, mit dem alle leben können.',
            'This is admittedly a compromise, but not one everyone can live with.',
            [
              'This is a compromise that makes everybody happy.',
              'This is not a compromise, but a victory.',
              'Everybody agrees on the compromise.',
            ],
          ),
          heard(
            'l3',
            'Ich möchte zum Schluss kommen und mein Fazit in drei Sätzen zusammenfassen.',
            'I would like to close and sum up my conclusion in three sentences.',
            [
              'I would like to begin and introduce my topic.',
              'I would like to answer a question from the audience.',
              'I would like to take a break.',
            ],
          ),
          heard(
            'l4',
            'So überzeugend die Zahlen auch wirken, sie lassen sich leicht entkräften.',
            'However convincing the figures seem, they are easily refuted.',
            [
              'The figures are convincing and cannot be refuted.',
              'The figures are unclear because they are too complicated.',
              'Nobody has examined the figures.',
            ],
          ),
          heard(
            'l5',
            'Gestatten Sie eine Zwischenfrage? Ich möchte kurz einwenden, dass die Stichprobe zu klein war.',
            'May I ask a question? I would like to object briefly that the sample was too small.',
            [
              'May I leave? The sample was far too large.',
              'May I thank you? The sample was perfect.',
              'May I repeat your point? The sample was not used.',
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
        'Discussion round',
        'Concede a point, then argue your case.',
        ['communication', 'c21-debate', 'c21-concession'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'debate',
            title: 'Vier-Tage-Woche',
            emoji: '🗓️',
            setting: 'A panel discussion about the four-day week.',
            turns: [
              say(
                'Moderator',
                'Frau Brandt, Ihr Hauptargument für die Vier-Tage-Woche?',
                'Ms Brandt, your main argument for the four-day week?',
              ),
              you(
                'Mehr Erholung führt zu höherer Produktivität; das belegen mehrere Pilotprojekte.',
                [
                  'Mehr Erholung führt zu höherer Produktivität, das belegt gar nichts.',
                  'You are contradicting your own claim.',
                ],
                ['Dazu habe ich keine Meinung.', 'A panellist is expected to take a position.'],
              ),
              say(
                'Herr Dietz',
                'Pilotprojekte sind keine Beweise. Branchen unterscheiden sich stark.',
                'Pilot projects are not proof. Industries differ greatly.',
              ),
              you(
                'Das stimmt, allerdings zeigen die Daten einen klaren Trend.',
                [
                  'Das stimmt, allerdings die Daten zeigen einen klaren Trend.',
                  'After allerdings the verb comes second.',
                ],
                [
                  'Das stimmt nicht, weil ich das sage.',
                  'No reason is given – weak argumentation.',
                ],
              ),
              say(
                'Herr Dietz',
                'Ein Trend ersetzt keine Abwägung der Kosten.',
                'A trend doesn’t replace a weighing up of the costs.',
              ),
              you(
                'Wenngleich die Kosten steigen können, sind die Folgekosten von Erschöpfung höher.',
                [
                  'Wenngleich die Kosten steigen können, die Folgekosten von Erschöpfung sind höher.',
                  'The main clause after a wenngleich-clause starts with the verb: sind die Folgekosten …',
                ],
                ['Kosten sind egal.', 'Brushes the objection aside.'],
              ),
            ],
          },
          {
            id: 'questions',
            title: 'Fragen nach dem Referat',
            emoji: '🙋',
            setting: 'You have just given a talk, now there are questions.',
            turns: [
              say(
                'Zuhörerin',
                'Ihre Stichprobe war recht klein. Wie belastbar sind die Ergebnisse?',
                'Your sample was quite small. How reliable are the results?',
              ),
              you(
                'Das ist ein berechtigter Einwand. Die Stichprobe ist zwar klein, aber die Tendenz ist eindeutig.',
                [
                  'Das ist ein berechtigter Einwand. Die Stichprobe ist zwar klein, aber die Tendenz eindeutig ist.',
                  'In a main clause aber is followed by the verb in second place: aber die Tendenz ist eindeutig.',
                ],
                ['Das war nicht meine Aufgabe.', 'Evades the question.'],
              ),
              say(
                'Zuhörerin',
                'Würden Sie eine größere Studie empfehlen?',
                'Would you recommend a larger study?',
              ),
              you(
                'Ja, so aussagekräftig die ersten Daten auch sind, eine Wiederholung wäre sinnvoll.',
                [
                  'Ja, so aussagekräftig die ersten Daten auch sind, eine Wiederholung ist wäre sinnvoll.',
                  'Wäre sinnvoll – one finite verb is enough.',
                ],
                ['Nein, die Daten sind perfekt.', 'Contradicts what you just conceded.'],
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
        'Concession blitz',
        'wenngleich, allerdings, so … auch – true or false?',
        ['grammar', 'c21-concession'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Wenngleich es regnet, gehen wir spazieren.', true),
          tf(
            'b2',
            'Wenngleich es regnet, wir gehen spazieren.',
            false,
            'The main clause starts with the verb: gehen wir.',
          ),
          tf('b3', 'Das stimmt, allerdings fehlen Belege.', true),
          tf(
            'b4',
            'Das stimmt, allerdings Belege fehlen.',
            false,
            'allerdings is followed by the verb.',
          ),
          tf('b5', 'So klug er auch ist, er irrt sich.', true),
          tf('b6', 'Wie dem auch sei, wir machen weiter.', true),
          tf('b7', 'Ein Zugeständnis ist ein Entgegenkommen.', true),
          tf('b8', 'Einlenken bedeutet „hartnäckig bleiben“.', false, 'It means to give way.'),
          tf('b9', 'Ein stichhaltiges Argument ist nicht überzeugend.', false),
          tf('b10', 'Ein Fazit steht meist am Ende eines Referats.', true),
          tf('b11', 'Wer abschweift, bleibt beim Thema.', false, 'abschweifen = to digress.'),
          tf('b12', 'Entkräften heißt, ein Argument zu widerlegen.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Debate words and concessions in one round.',
        ['vocabulary', 'grammar', 'c21-debate'],
        3,
        6,
      ),
      {
        questions: [
          q('c1', '___ er müde war, arbeitete er weiter.', 'Obgleich', [
            'Damit',
            'Sodass',
            'Falls',
          ]),
          q('c2', 'Die Idee ist gut, ___ ist sie teuer.', 'allerdings', [
            'wenngleich',
            'obgleich',
            'falls',
          ]),
          q('c3', 'So schwer es auch ___, wir schaffen das.', 'ist', ['sein', 'war', 'wäre']),
          q('c4', 'Er hat Recht, wenn auch mit ___.', 'Einschränkungen', [
            'Zugeständnis',
            'Übereinkunft',
            'Fazit',
          ]),
          q('c5', '___ dem auch sei, wir gehen weiter.', 'Wie', ['Was', 'So', 'Wenn']),
          q('c6', 'das Zugeständnis', 'concession', [
            'compromise',
            'conclusion',
            'counterargument',
          ]),
          q('c7', 'untermauern', 'to underpin', ['to digress', 'to give way', 'to object']),
          q('c8', 'schlüssig', 'conclusive', ['questionable', 'biased', 'sweeping']),
          q('c9', 'die Überleitung', 'transition', ['outline', 'audience', 'hook']),
          q('c10', 'Welches Wort passt zu „ein Argument widerlegen“?', 'entkräften', [
            'einlenken',
            'hervorheben',
            'veranschaulichen',
          ]),
        ],
      },
    ),
  ],
};
