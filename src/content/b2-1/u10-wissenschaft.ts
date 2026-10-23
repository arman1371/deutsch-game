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

const U = 'b2-1-wissenschaft';

const research = vocabList(U, 'Research and evidence', [
  ['Erkenntnis', 'insight, finding', '💡', 'die', 'Erkenntnisse'],
  ['Hypothese', 'hypothesis', '❓', 'die', 'Hypothesen'],
  ['Fachzeitschrift', 'scientific journal', '📚', 'die', 'Fachzeitschriften'],
  ['Doktorand', 'doctoral student', '🧑‍🎓', 'der', 'Doktoranden'],
  ['Stichprobe', 'sample', '🧪', 'die', 'Stichproben'],
  ['Auswertung', 'evaluation, analysis', '📊', 'die', 'Auswertungen'],
  ['Nachweis', 'evidence, proof', '🧾', 'der', 'Nachweise'],
  ['Messung', 'measurement', '📏', 'die', 'Messungen'],
  ['Forschungsförderung', 'research funding', '💰', 'die'],
  ['nachweisen', 'to prove, demonstrate', '✅'],
  ['widerlegen', 'to disprove', '❌'],
  ['auswerten', 'to evaluate', '🔬'],
  ['belegen', 'to give evidence for', '📎'],
]);

const progress = vocabList(U, 'Technology and progress', [
  ['Errungenschaft', 'achievement', '🚀', 'der', 'Errungenschaften'],
  ['Entdeckung', 'discovery', '💡', 'die', 'Entdeckungen'],
  ['Patent', 'patent', '📜', 'das', 'Patente'],
  ['Gentechnik', 'genetic engineering', '🧬', 'die'],
  ['Hirnforschung', 'brain research', '🧠', 'die'],
  ['Leistungssteigerung', 'performance enhancement', '📈', 'die'],
  ['Nebenwirkung', 'side effect', '💊', 'die', 'Nebenwirkungen'],
  ['Durchbruch', 'breakthrough', '🎯', 'der', 'Durchbrüche'],
  ['Machbarkeit', 'feasibility', '🛠️', 'die'],
  ['umstritten', 'controversial', '⚔️'],
  ['bahnbrechend', 'groundbreaking', '⛏️'],
  ['ausgereift', 'mature, well-developed', '🍎'],
]);

const alternatives = vocabList(U, 'Passive alternatives', [
  ['Das Problem lässt sich lösen.', 'The problem can be solved.', '🧩'],
  ['Die Aufgabe ist leicht zu lösen.', 'The task is easy to solve.', '✅'],
  ['Der Antrag ist bis Freitag abzugeben.', 'The application must be handed in by Friday.', '📥'],
  ['Das Gerät ist nicht reparierbar.', 'The device cannot be repaired.', '🔧'],
  ['Die Ergebnisse lassen sich nicht wiederholen.', 'The results cannot be repeated.', '🔁'],
  ['Daran ist nicht zu zweifeln.', 'There is no doubt about that.', '🤝'],
  ['Die Daten lassen sich einfach auswerten.', 'The data can be evaluated easily.', '📈'],
]);

const vocab = [...research, ...progress, ...alternatives];

export const wissenschaft: UnitContent = {
  unit: unitB21({
    id: U,
    order: 10,
    title: 'Wissenschaft & Forschung',
    subtitle: 'Research, evidence, progress and its risks – and alternatives to the passive',
    emoji: '🔬',
    goals: [
      'Present a researcher and a study',
      'Talk about progress, breakthroughs and controversial technologies',
      'Express possibility and necessity without a plain passive',
    ],
    grammar: [
      'Passive alternatives: sich lassen + infinitive, sein + zu + infinitive, adjectives in -bar.',
      'Review: the plain passive (wird gemessen, wurde bewiesen).',
    ],
    vocabFields: ['Research and evidence', 'Technology and progress', 'Passive alternatives'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-research',
      'flashcards',
      meta(
        'Research and evidence',
        'Hypothese, Stichprobe, Nachweis – the language of studies.',
        ['vocabulary', 'science'],
        1,
        5,
      ),
      flashcards(research),
    ),
    activity(
      U,
      'flash-progress',
      'flashcards',
      meta(
        'Technology and progress',
        'Errungenschaft, Durchbruch, umstritten – new ideas and their risks.',
        ['vocabulary', 'science'],
        1,
        5,
      ),
      flashcards(progress),
    ),
    activity(
      U,
      'flash-alternatives',
      'flashcards',
      meta(
        'Passive alternatives',
        'lässt sich, ist zu, -bar – sentences for possible and necessary things.',
        ['vocabulary', 'communication', 'science'],
        1,
        4,
      ),
      flashcards(alternatives),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Science in pictures', 'Name what you see.', ['vocabulary', 'science'], 1, 4),
      quizEmoji(
        byDe(
          [...research, ...progress],
          'Hypothese',
          'Fachzeitschrift',
          'Stichprobe',
          'Messung',
          'Gentechnik',
          'Hirnforschung',
          'Nebenwirkung',
          'Patent',
        ),
      ),
    ),
    activity(
      U,
      'listen-alternatives',
      'listen',
      meta('Hear the sentences', 'Listen and pick the meaning.', ['listening', 'science'], 2, 4),
      listen(alternatives),
    ),
    activity(
      U,
      'memory-passive',
      'memory',
      meta(
        'Passive and alternative',
        'Match the passive sentence with its alternative.',
        ['vocabulary', 'passive-alternatives', 'science'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'Das kann gelöst werden.', b: 'Das lässt sich lösen.' },
          { id: 'm2', a: 'Das muss erledigt werden.', b: 'Das ist zu erledigen.' },
          { id: 'm3', a: 'Das kann nicht gelesen werden.', b: 'Das ist nicht lesbar.' },
          { id: 'm4', a: 'Das kann man erklären.', b: 'Das lässt sich erklären.' },
          { id: 'm5', a: 'Das kann nicht repariert werden.', b: 'Das ist nicht reparierbar.' },
          { id: 'm6', a: 'Das muss beachtet werden.', b: 'Das ist zu beachten.' },
        ],
      },
    ),
    activity(
      U,
      'spell-research',
      'spell',
      meta(
        'Spell the new words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'science'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(research, 'Hypothese', 'Nachweis', 'Messung'), 'unscramble').items,
          ...spell(byDe(progress, 'Errungenschaft', 'Durchbruch', 'Machbarkeit'), 'type').items,
          dictation('d1', 'Das Problem lässt sich lösen.', 'the problem can be solved'),
          dictation(
            'd2',
            'Der Antrag ist bis Freitag abzugeben.',
            'the application must be handed in by Friday',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-possible',
      'sortit',
      meta(
        'Possible or necessary?',
        'Does the sentence say something can or must be done?',
        ['grammar', 'passive-alternatives'],
        2,
        4,
      ),
      {
        instruction: 'Is it possible (kann) or necessary (muss)?',
        buckets: [
          { id: 'can', label: 'möglich (kann)', emoji: '✅' },
          { id: 'must', label: 'nötig (muss)', emoji: '❗' },
        ],
        items: sortItems('p', [
          ['Das Problem lässt sich lösen.', 'can'],
          ['Das Gerät ist reparierbar.', 'can'],
          ['Die Aufgabe ist leicht zu lösen.', 'can'],
          ['Die Ergebnisse lassen sich überprüfen.', 'can'],
          ['Das Ziel ist erreichbar.', 'can'],
          ['Der Antrag ist bis Freitag abzugeben.', 'must'],
          ['Die Regeln sind einzuhalten.', 'must'],
          ['Das Formular ist vollständig auszufüllen.', 'must'],
        ]),
      },
    ),
    activity(
      U,
      'gap-alternatives',
      'gapfill',
      meta(
        'Instead of the passive',
        'Complete the sentences with the right form.',
        ['grammar', 'passive-alternatives'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'a1',
              'Das Problem ___ sich lösen.',
              'lässt',
              ['lässt', 'lasst', 'lassen', 'ließ'],
              'The problem can be solved.',
              'sich lassen + infinitive; singular subject: lässt.',
            ),
            {
              lasst: 'lasst is the ihr form; Problem takes the er/sie/es form lässt.',
              lassen: 'lassen is plural; Problem is singular.',
              ließ: 'ließ is the Präteritum; the sentence describes a general possibility in the present.',
            },
          ),
          hint(
            gap(
              'a2',
              'Die Aufgabe ist leicht ___ lösen.',
              'zu',
              ['zu', 'um', 'dass', 'ohne'],
              'The task is easy to solve.',
              'sein + zu + infinitive.',
            ),
            {
              um: 'um … zu expresses a purpose; here only zu + infinitive follows ist.',
              dass: 'dass would start a clause with a subject and a conjugated verb.',
              ohne: 'ohne … zu means “without …ing”.',
            },
          ),
          hint(
            typed(
              'a3',
              'Das Gerät ist nicht ___. (reparieren + -bar)',
              'reparierbar',
              'The device cannot be repaired.',
              'Verb stem + -bar = can be done.',
            ),
            { repariert: 'repariert is the participle; -bar gives reparierbar.' },
          ),
          hint(
            gap(
              'a4',
              'Die Ergebnisse ___ sich nicht wiederholen.',
              'lassen',
              ['lassen', 'lässt', 'lasst', 'ließ'],
              'The results cannot be repeated.',
              'Plural subject: lassen sich.',
            ),
            {
              lässt: 'lässt is singular; die Ergebnisse is plural.',
              lasst: 'lasst is the ihr form.',
              ließ: 'ließ is the Präteritum; the sentence states a present possibility.',
            },
          ),
          hint(
            gap(
              'a5',
              'Der Antrag ist bis Freitag ___.',
              'abzugeben',
              ['abzugeben', 'zu abgeben', 'abgeben zu', 'abgegeben'],
              'The application must be handed in by Friday.',
              'Separable verbs put zu between prefix and verb: ab·zu·geben.',
            ),
            {
              'zu abgeben':
                'With separable verbs zu goes between the prefix and the verb: abzugeben.',
              'abgeben zu': 'zu stands before or inside the verb, not after it.',
              abgegeben: 'abgegeben is the participle; sein + zu + infinitive needs abzugeben.',
            },
          ),
          hint(
            gap(
              'a6',
              'Daran ist nicht zu ___.',
              'zweifeln',
              ['zweifeln', 'gezweifelt', 'zweifelt', 'zweifel'],
              'There is no doubt about that.',
              'sein + zu + infinitive: zu zweifeln.',
            ),
            {
              gezweifelt: 'After zu comes the infinitive, not the participle.',
              zweifelt: 'After zu comes the infinitive zweifeln.',
              zweifel: 'The infinitive ends in -n: zweifeln.',
            },
          ),
          hint(
            typed(
              'a7',
              'Das lässt sich leicht ___. (erklären)',
              'erklären',
              'That can be explained easily.',
              'sich lassen + infinitive without zu.',
            ),
            { 'zu erklären': 'After lassen there is no zu.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences-alternatives',
      'sentence',
      meta(
        'Can be done',
        'Build sentences with lässt sich, ist zu and -bar.',
        ['grammar', 'word-order', 'passive-alternatives'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'The problem can be solved.', ['Das', 'Problem', 'lässt', 'sich', 'lösen.']),
          sent('s2', 'The task is easy to solve.', [
            'Die',
            'Aufgabe',
            'ist',
            'leicht',
            'zu',
            'lösen.',
          ]),
          sent('s3', 'The application must be handed in by Friday.', [
            'Der',
            'Antrag',
            'ist',
            'bis',
            'Freitag',
            'abzugeben.',
          ]),
          sent('s4', 'The device cannot be repaired.', [
            'Das',
            'Gerät',
            'ist',
            'nicht',
            'reparierbar.',
          ]),
          sent('s5', 'The results cannot be repeated.', [
            'Die',
            'Ergebnisse',
            'lassen',
            'sich',
            'nicht',
            'wiederholen.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-science',
      'listen',
      meta(
        'Science news',
        'Listen to short reports and pick what they say.',
        ['listening', 'science'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Die Forscherin hat ihre Hypothese durch eine Stichprobe mit tausend Teilnehmern belegt.',
            'The researcher supported her hypothesis with a sample of a thousand participants.',
            [
              'The researcher refuted her hypothesis with a sample of a thousand participants.',
              'The researcher has no hypothesis yet.',
              'The sample had only ten participants.',
            ],
          ),
          heard(
            'l2',
            'Der Durchbruch in der Hirnforschung ist umstritten, weil die Nebenwirkungen noch nicht ausreichend untersucht sind.',
            'The breakthrough in brain research is controversial because side effects are not studied enough.',
            [
              'Everyone agrees that the breakthrough is perfect.',
              'The side effects have been studied extensively.',
              'The research is about the stomach, not the brain.',
            ],
          ),
          heard(
            'l3',
            'Viele Studien lassen sich nicht wiederholen. Das ist ein Problem für die Wissenschaft.',
            'Many studies cannot be repeated, which is a problem for science.',
            [
              'All studies can be repeated without problems.',
              'Studies are repeated every day.',
              'Science no longer needs studies.',
            ],
          ),
          heard(
            'l4',
            'Die Doktorandin wertet die Messungen aus und schreibt darüber einen Artikel für eine Fachzeitschrift.',
            'The doctoral student evaluates the measurements and writes an article for a journal.',
            [
              'The doctoral student has lost her measurements.',
              'The doctoral student writes a novel.',
              'The doctoral student is looking for funding.',
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
        'Interview and discussion',
        'Ask a scientist about her work and discuss risks.',
        ['communication', 'science'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'interview',
            title: 'Interview mit einer Forscherin',
            emoji: '🎙️',
            setting: 'You interview a scientist about her latest study.',
            turns: [
              say(
                'Forscherin',
                'Wir haben untersucht, wie Schlafmangel das Gedächtnis beeinflusst.',
                'We investigated how lack of sleep affects memory.',
              ),
              you(
                'Das klingt spannend. Wie groß war die Stichprobe, und was lässt sich daraus ableiten?',
                ['Das ist doch langweilig.', 'Show interest – ask about the study.'],
                [
                  'Das klingt spannend. Wie groß war die Stichprobe, und was sich lässt daraus ableiten?',
                  'lässt sich: in a main clause the verb stays before sich – was lässt sich daraus ableiten?',
                ],
              ),
              say(
                'Forscherin',
                'Zweihundert Personen. Die Ergebnisse lassen sich so zusammenfassen: Wer zu wenig schläft, vergisst mehr.',
                'Two hundred people. The results can be summarised like this: whoever sleeps too little forgets more.',
              ),
              you('Danke. Und sind die Ergebnisse auf andere Altersgruppen zu übertragen?', [
                'Haben Sie das Ergebnis erfunden?',
                'Ask a respectful follow-up question about the results.',
              ]),
            ],
          },
          {
            id: 'risk',
            title: 'Chancen und Risiken der Gentechnik',
            emoji: '🧬',
            setting: 'In a seminar you discuss whether genetic engineering is acceptable.',
            turns: [
              say(
                'Dozent',
                'Die Gentechnik ist umstritten. Was meinen Sie?',
                'Genetic engineering is controversial. What do you think?',
              ),
              you(
                'Ich finde, ihr Nutzen lässt sich nicht bestreiten, aber die Risiken sind genau zu prüfen.',
                [
                  'Ich finde, ihr Nutzen lässt nicht sich bestreiten, aber die Risiken sind genau zu prüfen.',
                  'Word order: lässt sich nicht bestreiten.',
                ],
                ['Mir ist das egal.', 'Give an opinion with a reason.'],
              ),
              say(
                'Dozent',
                'Und wer soll das kontrollieren?',
                'And who is supposed to control that?',
              ),
              you('Unabhängige Experten, deren Ergebnisse öffentlich zu belegen sind.', [
                'Niemand.',
                'Give a reasoned and constructive answer.',
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
        'Science blitz',
        'Passive alternatives and research words – true or false?',
        ['grammar', 'passive-alternatives'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Das lässt sich ändern. = Das kann geändert werden.', true),
          tf('b2', 'Das ist zu ändern. = Das muss oder kann geändert werden.', true),
          tf(
            'b3',
            'Das lässt sich zu ändern.',
            false,
            'After lassen there is no zu: Das lässt sich ändern.',
          ),
          tf('b4', 'Das Formular ist auszufüllen.', true),
          tf(
            'b5',
            'Das Formular ist ausfüllen zu.',
            false,
            'zu stands between prefix and verb: auszufüllen.',
          ),
          tf('b6', 'Ein lesbarer Text kann gelesen werden.', true),
          tf(
            'b7',
            'Etwas Unbezahlbares kostet nichts.',
            false,
            'unbezahlbar means priceless or far too expensive.',
          ),
          tf('b8', 'Wer eine Hypothese widerlegt, zeigt, dass sie falsch ist.', true),
          tf(
            'b9',
            'Eine Stichprobe ist die Gesamtzahl aller Menschen.',
            false,
            'A sample is only a small part of the whole.',
          ),
          tf('b10', 'Ein Patent schützt eine Erfindung.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Research words and passive alternatives in one round.',
        ['vocabulary', 'grammar', 'science'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Der Fehler ___ sich beheben.', 'lässt', ['lassen', 'lasst', 'ließen']),
            {
              lassen: 'lassen is plural; der Fehler is singular.',
              lasst: 'lasst is the ihr form.',
              ließen: 'ließen is the plural Präteritum.',
            },
            'passive-alternatives',
          ),
          hint(
            q('c2', 'Das Ziel ist leicht ___.', 'zu erreichen', [
              'erreichen zu',
              'zu erreicht',
              'erreicht zu',
            ]),
            {
              'erreichen zu': 'zu comes before the infinitive: zu erreichen.',
              'zu erreicht': 'After zu comes the infinitive erreichen.',
              'erreicht zu': 'zu comes before the infinitive: zu erreichen.',
            },
            'passive-alternatives',
          ),
          hint(
            q('c3', 'Die Pflanze ist nicht mehr ___.', 'rettbar', ['rettet', 'retten', 'gerettet']),
            {
              rettet: 'With -bar the adjective is rettbar.',
              retten: 'The adjective needs -bar: rettbar.',
              gerettet: 'gerettet is the participle; “cannot be saved” is nicht mehr rettbar.',
            },
            'passive-alternatives',
          ),
          hint(
            q('c4', 'Die Unterlagen sind bis Montag ___.', 'einzureichen', [
              'einreichen zu',
              'zu einreichen',
              'eingereicht zu',
            ]),
            {
              'einreichen zu': 'zu goes between prefix and verb: einzureichen.',
              'zu einreichen': 'zu goes between prefix and verb: einzureichen.',
              'eingereicht zu': 'sein + zu needs the infinitive einzureichen.',
            },
            'passive-alternatives',
          ),
          q('c5', 'die Hypothese', 'hypothesis', ['evidence', 'sample', 'measurement']),
          q('c6', 'widerlegen', 'to disprove', ['to prove', 'to evaluate', 'to give evidence for']),
          q('c7', 'der Durchbruch', 'breakthrough', ['achievement', 'discovery', 'patent']),
          q('c8', 'umstritten', 'controversial', [
            'groundbreaking',
            'mature, well-developed',
            'networked',
          ]),
          q(
            'c9',
            'You want to say that results cannot be repeated.',
            'Die Ergebnisse lassen sich nicht wiederholen.',
            [
              'Die Ergebnisse lässt sich nicht wiederholen.',
              'Die Ergebnisse sind nicht wiederholen zu.',
              'Die Ergebnisse lassen nicht sich wiederholen.',
            ],
          ),
          q('c10', 'die Nebenwirkung', 'side effect', [
            'feasibility',
            'performance enhancement',
            'brain research',
          ]),
        ],
      },
    ),
  ],
};
