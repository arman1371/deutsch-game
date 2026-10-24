import { byDe, flashcards, memory, quizDeEn, spell, vocabList } from '../builders';
import {
  activity,
  dictation,
  gap,
  heard,
  k1PerfectTable,
  k1Table,
  meta,
  q,
  say,
  sortItems,
  sw,
  tf,
  unitC21,
  withWhy,
  you,
} from './helpers';
import type { UnitContent } from './types';

const U = 'c2-1-ki';

const ai = vocabList(U, 'Artificial intelligence', [
  ['Sprachmodell', 'language model', '💬', 'das', 'Sprachmodelle'],
  ['maschinelles Lernen', 'machine learning', '🤖', 'das'],
  ['Trainingsdaten', 'training data', '📚', 'die'],
  ['Voreingenommenheit', 'bias', '⚖️', 'die'],
  ['Urheberrecht', 'copyright', '©️', 'das'],
  ['Automatisierung', 'automation', '🏭', 'die'],
  ['Entscheidungsfindung', 'decision-making', '🧭', 'die'],
  ['Haftung', 'liability', '📄', 'die'],
  ['Transparenz', 'transparency', '🔍', 'die'],
  ['Rechenleistung', 'computing power', '🖥️', 'die'],
  ['Mustererkennung', 'pattern recognition', '🧩', 'die'],
  ['lernfähig', 'capable of learning', '🎓'],
  ['nachvollziehbar', 'comprehensible, traceable', '🧵'],
  ['täuschend echt', 'deceptively real', '🎭'],
]);

const research = vocabList(U, 'Research & reporting', [
  ['Forschungsergebnis', 'research finding', '🔬', 'das', 'Forschungsergebnisse'],
  ['Hypothese', 'hypothesis', '💡', 'die', 'Hypothesen'],
  ['Versuchsreihe', 'series of experiments', '🧪', 'die', 'Versuchsreihen'],
  ['Stichprobe', 'sample', '🎲', 'die', 'Stichproben'],
  ['Nachweis', 'evidence, proof', '📎', 'der', 'Nachweise'],
  ['Fachzeitschrift', 'scientific journal', '📰', 'die', 'Fachzeitschriften'],
  ['Zusammenhang', 'connection, correlation', '🔗', 'der', 'Zusammenhänge'],
  ['Erkenntnis', 'insight, finding', '🧠', 'die', 'Erkenntnisse'],
  ['belegen', 'to prove, to document', '✅'],
  ['widerlegen', 'to refute', '🚫'],
  ['behaupten', 'to claim', '🗯️'],
  ['einräumen', 'to concede', '🤝'],
  ['betonen', 'to emphasise', '❗'],
  ['anmerken', 'to remark', '📝'],
  ['bestreiten', 'to deny, to dispute', '🙅'],
]);

const vocab = [...ai, ...research];

const whyK1 = {
  k7: {
    hat: 'hat is the indicative; a report uses Konjunktiv I (sie habe).',
    hätte:
      'hätte is Konjunktiv II – only a substitute when Konjunktiv I looks like the indicative.',
    haben: 'haben is the plural; the subject sie (one person) needs habe.',
  },
  k1: {
    hat: 'hat is the indicative; a report uses Konjunktiv I (er habe).',
    hätte:
      'hätte is Konjunktiv II – only a substitute when Konjunktiv I looks like the indicative.',
    haben: 'haben is the plural; the subject er needs habe.',
  },
  k2: {
    ist: 'ist is the indicative; a report uses Konjunktiv I (sei).',
    wäre: 'wäre (Konjunktiv II) is only needed when Konjunktiv I equals the indicative – sei is distinct from ist.',
    war: 'war is Präteritum; reported speech uses Konjunktiv I.',
  },
  k3: {
    ist: 'ist is the indicative; with gewesen the report needs sei.',
    wäre: 'sei is distinct from ist, so Konjunktiv II is not needed.',
    war: 'war … gewesen mixes tenses; use sei … gewesen.',
  },
  k4: {
    startet: 'startet is the indicative (-t); Konjunktiv I has no -t: starte.',
    starten: 'starten is the plural; er/sie/es → starte.',
    gestartet: 'The participle does not fit here: the finite verb is missing.',
  },
  k5: {
    sind: 'sind is the indicative; the plural Konjunktiv I is seien.',
    seid: 'seid is the ihr form.',
    sei: 'sei is singular; the subject is plural (die Systeme).',
  },
  k6: {
    haben:
      'haben (plural) is identical to the indicative, so it does not mark a report – use Konjunktiv II hätten.',
    hatten: 'hatten is Präteritum, not a Konjunktiv form.',
    habe: 'habe is singular; the subject is plural (die Entwickler).',
  },
};

export const ki: UnitContent = {
  unit: unitC21({
    id: U,
    order: 5,
    title: 'KI & Forschung',
    subtitle: 'AI debates, research news and Konjunktiv I in reported speech',
    emoji: '🧪',
    goals: [
      'Follow debates on artificial intelligence and research findings',
      'Report what others said, claimed or denied – and keep your distance',
      'Recognise Konjunktiv I in news reports and replace it when it looks like the indicative',
    ],
    grammar: [
      'Konjunktiv I: er habe, sie sei, man komme, es gebe',
      'Konjunktiv II as a substitute when Konjunktiv I equals the indicative: sie hätten',
      'Past reports: er sei gekommen, sie habe gesagt',
      'Time and place words shift: morgen → am nächsten Tag, hier → dort',
    ],
    vocabFields: ['Artificial intelligence', 'Research & reporting'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-ai',
      'flashcards',
      meta(
        'Artificial intelligence',
        'Sprachmodell, Voreingenommenheit, Haftung – the AI debate.',
        ['vocabulary', 'c21-ai-research'],
        1,
        6,
      ),
      flashcards(ai),
    ),
    activity(
      U,
      'flash-research',
      'flashcards',
      meta(
        'Research & reporting',
        'Hypothese, Nachweis, behaupten, einräumen – how research is reported.',
        ['vocabulary', 'c21-ai-research'],
        1,
        6,
      ),
      flashcards(research),
    ),
    activity(
      U,
      'quiz-meaning',
      'quiz',
      meta(
        'What does it mean?',
        'Pick the English meaning.',
        ['vocabulary', 'c21-ai-research'],
        2,
        5,
      ),
      quizDeEn(
        byDe(
          vocab,
          'Voreingenommenheit',
          'Urheberrecht',
          'Haftung',
          'Rechenleistung',
          'Stichprobe',
          'Nachweis',
          'widerlegen',
          'einräumen',
          'bestreiten',
          'nachvollziehbar',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'memory-research',
      'memory',
      meta(
        'Match the words',
        'German words and their meanings.',
        ['vocabulary', 'c21-ai-research'],
        2,
        4,
      ),
      memory(
        byDe(
          vocab,
          'Sprachmodell',
          'Trainingsdaten',
          'Hypothese',
          'Versuchsreihe',
          'Zusammenhang',
          'Erkenntnis',
          'behaupten',
          'betonen',
        ),
      ),
    ),
    activity(
      U,
      'spell-research',
      'spell',
      meta(
        'Spell the lab',
        'Unscramble, type and write what you hear.',
        ['spelling', 'c21-ai-research'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(vocab, 'Nachweis', 'Hypothese'), 'unscramble').items,
          ...spell(byDe(vocab, 'Haftung', 'Stichprobe'), 'unscramble').items,
          ...spell(byDe(vocab, 'Transparenz', 'Fachzeitschrift'), 'type').items,
          ...spell(byDe(vocab, 'nachvollziehbar'), 'type').items,
          dictation(
            'd1',
            'Die Forscher erklärten, die Methode sei sicher.',
            'The researchers explained that the method was safe.',
          ),
          dictation(
            'd2',
            'Er behauptet, er habe nichts davon gewusst.',
            'He claims he knew nothing about it.',
          ),
        ],
      },
    ),
    activity(
      U,
      'conj-k1',
      'conjugation',
      meta(
        'er habe, sie sei, man komme',
        'Konjunktiv I: stem + -e, -est, -e, -en, -et, -en.',
        ['grammar', 'c21-reported-speech'],
        2,
        5,
      ),
      {
        tables: [
          k1Table('haben', 'to have', ['du', 'er/sie/es', 'ihr']),
          k1Table('sein', 'to be', ['ich', 'du', 'er/sie/es']),
          k1Table('kommen', 'to come', ['du', 'er/sie/es', 'ihr']),
          k1Table('können', 'to be able to', ['du', 'er/sie/es', 'ihr']),
          k1Table('geben', 'to give', ['du', 'er/sie/es', 'ihr']),
          k1PerfectTable('gesagt', 'haben', 'had said (reported)', ['ich', 'er/sie/es']),
          k1PerfectTable('gekommen', 'sein', 'had come (reported)', ['ich', 'er/sie/es']),
        ],
      },
    ),
    activity(
      U,
      'gap-k1',
      'gapfill',
      meta(
        'Er sagte, er habe …',
        'Complete the reported speech.',
        ['grammar', 'c21-reported-speech'],
        3,
        6,
      ),
      {
        items: withWhy(
          [
            gap(
              'k1',
              'Der Minister sagte, er ___ keine Kenntnis davon.',
              'habe',
              ['habe', 'hat', 'hätte', 'haben'],
              'The minister said he had no knowledge of it.',
              'Konjunktiv I of haben: er habe.',
            ),
            gap(
              'k2',
              'Die Forscher erklärten, die Methode ___ sicher.',
              'sei',
              ['sei', 'ist', 'wäre', 'war'],
              'The researchers explained that the method was safe.',
              'Konjunktiv I of sein: sie sei (the only verb with its own ich form: ich sei).',
            ),
            gap(
              'k3',
              'Sie sagte, sie ___ gestern in Berlin gewesen.',
              'sei',
              ['sei', 'ist', 'wäre', 'war'],
              'She said she had been in Berlin yesterday.',
              'Past: sei + participle (gewesen).',
            ),
            gap(
              'k4',
              'Die Sprecherin teilte mit, das Projekt ___ im Herbst.',
              'starte',
              ['starte', 'startet', 'starten', 'gestartet'],
              'The spokeswoman announced that the project would start in autumn.',
              'er/sie/es: stem + -e (starte), without the -t of the indicative.',
            ),
            gap(
              'k5',
              'Die Experten warnten, die Systeme ___ nicht transparent.',
              'seien',
              ['seien', 'sind', 'seid', 'sei'],
              'The experts warned that the systems were not transparent.',
              'Plural of sein: seien (different from sind).',
            ),
            gap(
              'k6',
              'Die Kritiker sagten, die Entwickler ___ die Risiken nie ernst genommen.',
              'hätten',
              ['hätten', 'haben', 'hatten', 'habe'],
              'The critics said the developers had never taken the risks seriously.',
              'haben (plural) looks like the indicative, so use Konjunktiv II: hätten.',
            ),
            gap(
              'k7',
              'Er meinte, sie ___ Recht.',
              'habe',
              ['habe', 'hat', 'hätte', 'haben'],
              'He thought she was right.',
              'sie habe Recht – reported opinion, Konjunktiv I.',
            ),
          ],
          whyK1,
        ),
      },
    ),
    activity(
      U,
      'gap-shift',
      'gapfill',
      meta(
        'Morgen wird zu „am nächsten Tag“',
        'Time words change in reported speech.',
        ['grammar', 'c21-reported-speech'],
        3,
        5,
      ),
      {
        items: [
          gap(
            's1',
            'Er sagte: „Ich komme morgen.“ → Er sagte, er komme am ___ Tag.',
            'nächsten',
            ['nächsten', 'heutigen', 'gestrigen', 'letzten'],
            'He said he would come the next day.',
            'morgen (said then) becomes am nächsten Tag in a report.',
          ),
          gap(
            's2',
            'Sie sagte: „Ich war gestern krank.“ → Sie sagte, sie sei am ___ krank gewesen.',
            'Vortag',
            ['Vortag', 'Nachtag', 'Folgetag', 'Heute'],
            'She said she had been ill the day before.',
          ),
          gap(
            's3',
            'Er sagte: „Wir treffen uns hier.“ → Er sagte, sie träfen sich ___.',
            'dort',
            ['dort', 'hier', 'da', 'hierher'],
            'He said they were meeting there.',
          ),
          gap(
            's4',
            'Sie fragte: „Hast du die Studie gelesen?“ → Sie fragte, ___ er die Studie gelesen habe.',
            'ob',
            ['ob', 'dass', 'wenn', 'als'],
            'She asked whether he had read the study.',
            'Yes/no questions become ob-clauses.',
          ),
          gap(
            's5',
            'Er sagte: „Meine Studie ist neu.“ → Er sagte, ___ Studie sei neu.',
            'seine',
            ['seine', 'meine', 'ihre', 'unsere'],
            'He said his study was new.',
            'Possessives shift with the speaker: meine → seine.',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-mood',
      'sortit',
      meta(
        'Indicative, Konjunktiv I or II?',
        'Which form is it?',
        ['grammar', 'c21-reported-speech'],
        3,
        5,
      ),
      {
        instruction: 'Sort the verb forms.',
        buckets: [
          { id: 'k1', label: 'Konjunktiv I', emoji: '🗞️' },
          { id: 'k2', label: 'Konjunktiv II (substitute)', emoji: '💭' },
          { id: 'ind', label: 'Indikativ', emoji: '✔️' },
        ],
        items: sortItems('m', [
          ['er habe', 'k1'],
          ['sie komme', 'k1'],
          ['es gebe', 'k1'],
          ['man sei', 'k1'],
          ['sie hätten', 'k2'],
          ['sie kämen', 'k2'],
          ['sie wären', 'k2'],
          ['er hat', 'ind'],
          ['sie sind', 'ind'],
          ['man kommt', 'ind'],
        ]),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'News report',
        'Build reported-speech sentences.',
        ['grammar', 'word-order', 'c21-reported-speech'],
        3,
        7,
      ),
      {
        items: [
          sw(
            's1',
            'The minister said he had no knowledge of it.',
            'Der Minister sagte, er habe keine Kenntnis davon.',
          ),
          sw(
            's2',
            'The researchers explained that the method was safe.',
            'Die Forscher erklärten, die Methode sei sicher.',
          ),
          sw(
            's3',
            'She claims she has never seen the study.',
            'Sie behauptet, sie habe die Studie nie gesehen.',
          ),
          sw(
            's4',
            'The company announced that the data had been encrypted.',
            'Die Firma teilte mit, die Daten seien verschlüsselt worden.',
          ),
          sw(
            's5',
            'The spokeswoman stressed that all concerns were taken seriously.',
            'Die Sprecherin betonte, man nehme alle Bedenken ernst.',
          ),
          sw(
            's6',
            'Critics warn that the algorithms are not traceable.',
            'Kritiker warnen, die Algorithmen seien nicht nachvollziehbar.',
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-reports',
      'listen',
      meta(
        'Who said what?',
        'Understand what is reported and what is claimed.',
        ['listening', 'c21-ai-research', 'c21-reported-speech'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Die Herstellerin betont, das Sprachmodell sei vollständig sicher.',
            'The manufacturer stresses that the language model is completely safe – but it is only her claim.',
            [
              'The language model is proven to be completely safe.',
              'The manufacturer admits the model is dangerous.',
              'The language model was withdrawn from the market.',
            ],
          ),
          heard(
            'l2',
            'Der Forscher räumte ein, die Stichprobe sei zu klein gewesen.',
            'The researcher conceded that the sample had been too small.',
            [
              'The researcher denied that the sample was too small.',
              'The researcher will enlarge the sample next year.',
              'The sample was larger than planned.',
            ],
          ),
          heard(
            'l3',
            'Kritiker bestreiten, dass die Zahlen korrekt seien.',
            'Critics dispute that the figures are correct.',
            [
              'Critics confirm that the figures are correct.',
              'Critics have not seen the figures yet.',
              'The figures were corrected by critics.',
            ],
          ),
          heard(
            'l4',
            'Es heißt, die Entwickler hätten die Warnungen ignoriert.',
            'It is said that the developers ignored the warnings.',
            [
              'The developers published the warnings.',
              'It is certain that the developers took the warnings seriously.',
              'The developers will ignore the warnings in future.',
            ],
          ),
          heard(
            'l5',
            'Die Ministerin sagte, man prüfe derzeit neue Regeln für die Haftung.',
            'The minister said new liability rules were currently being examined.',
            [
              'The minister said the liability rules had been abolished.',
              'The minister said she had no opinion.',
              'The new liability rules came into force yesterday.',
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
        'Reporting back',
        'Pass on what others said, in a measured way.',
        ['communication', 'c21-ai-research', 'c21-reported-speech'],
        3,
        7,
      ),
      {
        scenes: [
          {
            id: 'report',
            title: 'Was hat die Chefin gesagt?',
            emoji: '🗞️',
            setting: 'You report on a meeting to a colleague who was absent.',
            turns: [
              say(
                'Tim',
                'Und, was hat die Chefin zum neuen Sprachmodell gesagt?',
                'So, what did the boss say about the new language model?',
              ),
              you(
                'Sie sagte, das Modell sei noch nicht ausgereift.',
                [
                  'Sie sagte, das Modell ist noch nicht ausgereift.',
                  'In a formal report Konjunktiv I (sei) shows you pass on her words.',
                ],
                [
                  'Sie sagte, dass das Modell sein noch nicht ausgereift.',
                  'sein is the infinitive; Konjunktiv I is sei – and dass sends the verb to the end.',
                ],
              ),
              say('Tim', 'Und die Kosten?', 'And the costs?'),
              you(
                'Sie meinte, die Kosten lägen deutlich über dem Plan.',
                [
                  'Sie meinte, die Kosten liegen deutlich über dem Plan.',
                  'liegen is the indicative plural, so it does not mark a report – use lägen (Konjunktiv II).',
                ],
                [
                  'Sie meinte, die Kosten sind gering.',
                  'This contradicts the report and is indicative.',
                ],
              ),
            ],
          },
          {
            id: 'press',
            title: 'Skepsis',
            emoji: '🤨',
            setting: 'A friend reads a headline about a miracle study.',
            turns: [
              say(
                'Nora',
                'Hier steht, die Studie beweise, dass Kaffee jung hält!',
                'It says here the study proves that coffee keeps you young!',
              ),
              you(
                'Das behaupten die Autoren; ob es stimmt, ist offen.',
                [
                  'Das ist sicher bewiesen, weil es in der Zeitung steht.',
                  'A newspaper claim is not proof.',
                ],
                [
                  'Das ist Unsinn, ohne es gelesen zu haben.',
                  'Dismissing it without reading is as unfounded as believing it.',
                ],
              ),
              say(
                'Nora',
                'Die Autoren schreiben, man habe über 5000 Personen untersucht.',
                'The authors write that over 5000 people were examined.',
              ),
              you(
                'Eine große Stichprobe ist gut, aber ein Zusammenhang ist noch kein Nachweis.',
                [
                  'Eine große Stichprobe ist schlecht, und das Ergebnis ist falsch.',
                  'A large sample is not a flaw.',
                ],
                ['Dann stimmt alles, was dort steht.', 'Correlation is not proof.'],
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
        'Reported speech blitz',
        'Konjunktiv I – true or false?',
        ['grammar', 'c21-reported-speech'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Er sagte, sie sei krank.', true),
          tf('b2', 'Er sagte, sie sein krank.', false, 'sie sei – one person.'),
          tf(
            'b3',
            'Sie sagten, sie haben keine Zeit.',
            false,
            'plural haben = indicative → hätten.',
          ),
          tf('b4', 'Sie sagten, sie hätten keine Zeit.', true),
          tf('b5', 'Er sagte, er komme morgen.', true),
          tf('b6', 'Es gibt im Konjunktiv I: es gebe.', true),
          tf('b7', 'Konjunktiv I wird oft in Nachrichtentexten verwendet.', true),
          tf('b8', 'Er sagte, er sei gestern gekommen.', true),
          tf(
            'b9',
            'Er sagte, er habe gestern gekommen.',
            false,
            'kommen forms the perfect with sein.',
          ),
          tf('b10', 'Behaupten bedeutet „sicher beweisen“.', false, 'It means to claim.'),
          tf('b11', 'Eine Hypothese ist eine vorläufige Annahme.', true),
          tf('b12', 'Widerlegen heißt „zeigen, dass etwas falsch ist“.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Research words and reported speech in one round.',
        ['vocabulary', 'grammar', 'c21-ai-research'],
        3,
        6,
      ),
      {
        questions: [
          q('c1', 'Er sagte, er ___ Hunger.', 'habe', ['hat', 'hätte', 'haben']),
          q('c2', 'Sie erklärte, das Ergebnis ___ eindeutig.', 'sei', ['ist', 'wäre', 'sein']),
          q('c3', 'Sie sagten, sie ___ nichts gewusst.', 'hätten', ['haben', 'habe', 'hatten']),
          q('c4', 'Er sagte, er komme am ___ Tag.', 'nächsten', [
            'morgigen',
            'heutigen',
            'letzten',
          ]),
          q('c5', 'Sie fragte, ___ er das Paper kenne.', 'ob', ['dass', 'wenn', 'als']),
          q('c6', 'der Nachweis', 'evidence', ['sample', 'insight', 'hypothesis']),
          q('c7', 'einräumen', 'to concede', ['to deny', 'to claim', 'to refute']),
          q('c8', 'widerlegen', 'to refute', ['to prove', 'to remark', 'to emphasise']),
          q('c9', 'die Haftung', 'liability', ['bias', 'transparency', 'automation']),
          q('c10', 'Welches Wort passt zu „nicht zu verstehen“?', 'nicht nachvollziehbar', [
            'lernfähig',
            'täuschend echt',
            'menschenähnlich',
          ]),
        ],
      },
    ),
  ],
};
