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

const U = 'b2-1-wohlbefinden';

const stress = vocabList(U, 'Sleep and stress', [
  ['Schlafmangel', 'lack of sleep', '😪', 'der'],
  ['Schlafstörung', 'sleep disorder', '🌙', 'die', 'Schlafstörungen'],
  ['Erschöpfung', 'exhaustion', '🪫', 'die'],
  ['Belastung', 'strain, burden', '🏋️', 'die', 'Belastungen'],
  ['Burnout', 'burnout', '🔥', 'der'],
  ['Achtsamkeit', 'mindfulness', '🧘', 'die'],
  ['Ausgleich', 'balance, compensation', '⚖️', 'der'],
  ['Reizüberflutung', 'sensory overload', '🌊', 'die'],
  ['Verspannung', 'muscle tension', '💆', 'die', 'Verspannungen'],
  ['abschalten', 'to switch off, unwind', '🔌'],
  ['durchschlafen', 'to sleep through the night', '🛌'],
  ['ausgelaugt', 'drained', '🍋'],
  ['grübeln', 'to brood', '🤔'],
]);

const fitness = vocabList(U, 'Fitness and health information', [
  ['Ausdauer', 'stamina, endurance', '🏃', 'die'],
  ['Krafttraining', 'strength training', '🏋️', 'das'],
  ['Beweglichkeit', 'flexibility, mobility', '🤸', 'die'],
  ['Fitnesstracker', 'fitness tracker', '⌚', 'der', 'Fitnesstracker'],
  ['Muskelkater', 'sore muscles', '💪', 'der'],
  ['Aufwärmphase', 'warm-up phase', '🧎', 'die', 'Aufwärmphasen'],
  ['Selbstdiagnose', 'self-diagnosis', '🔍', 'die', 'Selbstdiagnosen'],
  ['Symptom', 'symptom', '🌡️', 'das', 'Symptome'],
  ['Früherkennung', 'early detection', '🩺', 'die'],
  ['gesundheitsbewusst', 'health-conscious', '🛡️'],
  ['seriös', 'reputable, trustworthy', '✅'],
  ['bedenklich', 'questionable, worrying', '⚠️'],
]);

const reasons = vocabList(U, 'Giving reasons', [
  ['Aufgrund des Stresses kann ich nicht schlafen.', 'Because of the stress I cannot sleep.', '😫'],
  ['Dank der Pausen fühle ich mich besser.', 'Thanks to the breaks I feel better.', '☕'],
  ['Da ich Rückenschmerzen habe, mache ich Yoga.', 'Since I have back pain, I do yoga.', '🧘'],
  ['Infolge des Lärms wachte ich ständig auf.', 'As a result of the noise I kept waking up.', '🔊'],
  ['Vor lauter Arbeit habe ich nicht gegessen.', 'I did not eat because of all the work.', '💼'],
  [
    'Ich habe schlecht geschlafen. Deshalb bin ich müde.',
    'I slept badly. That is why I am tired.',
    '😴',
  ],
  [
    'Angesichts der vielen Aufgaben brauche ich eine Pause.',
    'In view of the many tasks I need a break.',
    '📋',
  ],
]);

const vocab = [...stress, ...fitness, ...reasons];

export const wohlbefinden: UnitContent = {
  unit: unitB21({
    id: U,
    order: 3,
    title: 'Gesund & ausgeglichen',
    subtitle: 'Sleep, stress, fitness and health information online – and giving reasons',
    emoji: '😴',
    goals: [
      'Talk about sleep, stress and balance',
      'Judge health information on the internet',
      'Give reasons in many ways and advise a colleague who is being bullied',
    ],
    grammar: [
      'Reasons with prepositions: aufgrund / infolge / angesichts + genitive, dank, aus, vor.',
      'Reasons with da, deshalb and daher; review: weil, denn, wegen.',
    ],
    vocabFields: ['Sleep and stress', 'Fitness and health information', 'Giving reasons'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-stress',
      'flashcards',
      meta(
        'Sleep and stress',
        'Schlafmangel, Erschöpfung, Achtsamkeit – words for body and mind.',
        ['vocabulary', 'wellbeing'],
        1,
        5,
      ),
      flashcards(stress),
    ),
    activity(
      U,
      'flash-fitness',
      'flashcards',
      meta(
        'Fitness and health information',
        'Ausdauer, Symptom, seriös – training and online health advice.',
        ['vocabulary', 'wellbeing'],
        1,
        5,
      ),
      flashcards(fitness),
    ),
    activity(
      U,
      'flash-reasons',
      'flashcards',
      meta(
        'Giving reasons',
        'aufgrund, dank, da, infolge – reasons in full sentences.',
        ['vocabulary', 'communication', 'wellbeing'],
        1,
        4,
      ),
      flashcards(reasons),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Body and fitness', 'Name what you see.', ['vocabulary', 'wellbeing'], 1, 4),
      quizEmoji(
        byDe(
          [...stress, ...fitness],
          'Schlafmangel',
          'Burnout',
          'Verspannung',
          'abschalten',
          'Fitnesstracker',
          'Muskelkater',
          'Krafttraining',
          'Symptom',
        ),
      ),
    ),
    activity(
      U,
      'listen-reasons',
      'listen',
      meta('Hear the reasons', 'Listen and pick the meaning.', ['listening', 'wellbeing'], 2, 4),
      listen(reasons),
    ),
    activity(
      U,
      'memory-explain',
      'memory',
      meta(
        'Say it differently',
        'Match each word with its explanation in German.',
        ['vocabulary', 'wellbeing'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'die Verspannung', b: 'steifer Nacken oder Rücken' },
          { id: 'm2', a: 'die Achtsamkeit', b: 'bewusst im Moment leben' },
          { id: 'm3', a: 'der Ausgleich', b: 'ein Hobby gegen den Stress' },
          { id: 'm4', a: 'die Früherkennung', b: 'Krankheiten früh entdecken' },
          { id: 'm5', a: 'seriös', b: 'vertrauenswürdig' },
          { id: 'm6', a: 'grübeln', b: 'lange über Probleme nachdenken' },
        ],
      },
    ),
    activity(
      U,
      'spell-stress',
      'spell',
      meta(
        'Spell the health words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'wellbeing'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(stress, 'Burnout', 'Ausgleich', 'grübeln'), 'unscramble').items,
          ...spell(byDe(fitness, 'Ausdauer', 'Selbstdiagnose', 'Beweglichkeit'), 'type').items,
          dictation(
            'd1',
            'Aufgrund des Stresses kann ich nicht schlafen.',
            'because of the stress I cannot sleep',
          ),
          dictation(
            'd2',
            'Dank der Pausen fühle ich mich besser.',
            'thanks to the breaks I feel better',
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-reasons',
      'sortit',
      meta(
        'How is the reason built?',
        'Sort the words by what follows them.',
        ['grammar', 'causal-expressions'],
        2,
        4,
      ),
      {
        instruction:
          'Does the word start a clause (verb at the end), take a noun, or start a main clause?',
        buckets: [
          { id: 'clause', label: 'Nebensatz (Verb am Ende)', emoji: '1️⃣' },
          { id: 'noun', label: '+ Nomen', emoji: '2️⃣' },
          { id: 'main', label: 'Hauptsatz (Verb direkt danach)', emoji: '3️⃣' },
        ],
        items: sortItems('r', [
          ['da', 'clause'],
          ['weil', 'clause'],
          ['aufgrund', 'noun'],
          ['dank', 'noun'],
          ['infolge', 'noun'],
          ['angesichts', 'noun'],
          ['deshalb', 'main'],
          ['daher', 'main'],
        ]),
      },
    ),
    activity(
      U,
      'gap-reasons',
      'gapfill',
      meta(
        'Because of …',
        'Choose the word that gives the reason correctly.',
        ['grammar', 'causal-expressions'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'g1',
              '___ des Lärms konnte ich nicht schlafen.',
              'Aufgrund',
              ['Aufgrund', 'Weil', 'Deshalb', 'Da'],
              'Because of the noise I could not sleep.',
              'aufgrund + genitive (des Lärms).',
            ),
            {
              Weil: 'weil needs a clause with its own verb; des Lärms is only a noun phrase.',
              Deshalb: 'deshalb starts a main clause with a verb, not a noun phrase.',
              Da: 'da needs a clause with its own verb; des Lärms is only a noun phrase.',
            },
          ),
          hint(
            gap(
              'g2',
              '___ der Pausen fühle ich mich besser.',
              'Dank',
              ['Dank', 'Trotz', 'Da', 'Deshalb'],
              'Thanks to the breaks I feel better.',
              'dank names a positive cause and takes the genitive.',
            ),
            {
              Trotz: 'trotz means despite; the breaks are the reason I feel better.',
              Da: 'da needs a clause with its own verb.',
              Deshalb: 'deshalb starts a main clause with a verb.',
            },
          ),
          hint(
            gap(
              'g3',
              '___ ich Rückenschmerzen habe, mache ich jeden Morgen Yoga.',
              'Da',
              ['Da', 'Aufgrund', 'Deshalb', 'Dank'],
              'Since I have back pain, I do yoga every morning.',
              'da starts a subordinate clause: the verb habe is at the end.',
            ),
            {
              Aufgrund: 'aufgrund needs a noun in the genitive, not a clause.',
              Deshalb: 'deshalb would need the verb right after it: Deshalb habe ich …',
              Dank: 'dank needs a noun and names a positive cause.',
            },
          ),
          hint(
            gap(
              'g4',
              'Ich habe Rückenschmerzen. ___ mache ich jeden Morgen Yoga.',
              'Deshalb',
              ['Deshalb', 'Da', 'Weil', 'Dank'],
              'I have back pain. That is why I do yoga every morning.',
              'deshalb is an adverb: the verb follows directly (position 2).',
            ),
            {
              Da: 'da would send the verb to the end: Da ich … mache.',
              Weil: 'weil would send the verb to the end: Weil ich … mache.',
              Dank: 'dank needs a noun, not a main clause.',
            },
          ),
          hint(
            gap(
              'g5',
              'Er schlief ___ Erschöpfung sofort ein.',
              'vor',
              ['vor', 'aus', 'für', 'mit'],
              'He fell asleep immediately from exhaustion.',
              'vor + noun without article names a physical or emotional cause.',
            ),
            {
              aus: 'aus is for motives (aus Liebe, aus Neugier); exhaustion is a physical state: vor.',
              für: 'für does not give a reason in this sentence.',
              mit: 'mit does not give a reason in this sentence.',
            },
          ),
          hint(
            typed(
              'g6',
              'Dank ___ Trainings fühle ich mich fitter. (das Training)',
              'des',
              'Thanks to the training I feel fitter.',
              'dank + genitive: des Trainings.',
              ['dem'],
            ),
            { das: 'dank takes the genitive (des), not the nominative.' },
          ),
          hint(
            typed(
              'g7',
              'Aufgrund ___ Schlafmangels war er unkonzentriert. (der Schlafmangel)',
              'des',
              'Because of a lack of sleep he could not concentrate.',
              'aufgrund + genitive: des Schlafmangels.',
            ),
            { dem: 'aufgrund takes the genitive: des Schlafmangels.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences-reasons',
      'sentence',
      meta(
        'Because …',
        'Build sentences that give a reason.',
        ['grammar', 'word-order', 'causal-expressions'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'Because of the stress I cannot sleep.', [
            'Aufgrund',
            'des',
            'Stresses',
            'kann',
            'ich',
            'nicht',
            'schlafen.',
          ]),
          sent('s2', 'Since I slept badly, I am exhausted.', [
            'Da',
            'ich',
            'schlecht',
            'geschlafen',
            'habe,',
            'bin',
            'ich',
            'erschöpft.',
          ]),
          sent('s3', 'I have a lot of work, so I take a break.', [
            'Ich',
            'habe',
            'viel',
            'Arbeit,',
            'deshalb',
            'mache',
            'ich',
            'eine',
            'Pause.',
          ]),
          sent('s4', 'Thanks to regular walks he feels more relaxed.', [
            'Dank',
            'regelmäßiger',
            'Spaziergänge',
            'fühlt',
            'er',
            'sich',
            'entspannter.',
          ]),
          sent('s5', 'He fell asleep from exhaustion.', [
            'Er',
            'schlief',
            'vor',
            'Erschöpfung',
            'ein.',
          ]),
        ],
      },
    ),
    activity(
      U,
      'listen-health',
      'listen',
      meta(
        'Health talk',
        'Listen to short statements and pick what they mean.',
        ['listening', 'wellbeing'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Aufgrund einer Schlafstörung wache ich jede Nacht gegen drei Uhr auf und kann nicht mehr einschlafen.',
            'She wakes up around three every night and cannot fall asleep again.',
            [
              'She sleeps well every night until seven.',
              'She goes to bed at three every night.',
              'She wakes up at three because of her neighbours.',
            ],
          ),
          heard(
            'l2',
            'Wer seine Symptome im Internet sucht, sollte nur seriöse Seiten nutzen und im Zweifel zum Arzt gehen.',
            'People should use only reputable sites for symptoms and see a doctor when in doubt.',
            [
              'Searching symptoms online is always better than going to the doctor.',
              'Every website gives reliable medical advice.',
              'You should never read about health at all.',
            ],
          ),
          heard(
            'l3',
            'Mein Fitnesstracker zeigt mir, dass mein Puls in Ruhe niedriger geworden ist. Das liegt an der besseren Ausdauer.',
            'The tracker shows his resting pulse has dropped thanks to better stamina.',
            [
              'The tracker is broken because the pulse is too low.',
              'His pulse has risen because of stress.',
              'He has stopped training and his pulse has dropped.',
            ],
          ),
          heard(
            'l4',
            'Viele Beschäftigte fühlen sich ausgelaugt, weil sie auch nach Feierabend noch E-Mails beantworten.',
            'Many employees feel drained because they answer e-mails after work.',
            [
              'Many employees feel fit because they answer e-mails after work.',
              'Employees are drained because they have no e-mails.',
              'Employees answer e-mails only in the morning.',
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
        'At the doctor and at work',
        'Talk about sleep problems and advise a bullied colleague.',
        ['communication', 'wellbeing'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'doctor',
            title: 'Schlafprobleme beim Arzt',
            emoji: '🩺',
            setting: 'You tell the doctor that you sleep badly and ask for advice.',
            turns: [
              say('Ärztin', 'Guten Tag. Was führt Sie zu mir?', 'Hello. What brings you to me?'),
              you(
                'Ich kann seit Wochen nicht durchschlafen. Ich glaube, das liegt am Stress im Büro.',
                [
                  'Ich kann seit Wochen nicht durchschlafen. Ich glaube, das liegt am Stress im Büro bin.',
                  'The sentence is already complete; do not add a second verb.',
                ],
                [
                  'Nichts. Ich bin nur gekommen, weil es draußen regnet.',
                  'Describe your problem honestly.',
                ],
              ),
              say(
                'Ärztin',
                'Verstehe. Dank einer festen Abendroutine schlafen viele Patienten besser. Möchten Sie das probieren?',
                'I see. Thanks to a fixed evening routine many patients sleep better. Would you like to try it?',
              ),
              you('Ja, gern. Was empfehlen Sie mir, um abzuschalten?', [
                'Nein, ich möchte lieber Tabletten, da ich keine Zeit habe, sie zu nehmen.',
                'That makes little sense – ask for concrete tips instead.',
              ]),
            ],
          },
          {
            id: 'mobbing',
            title: 'Eine Kollegin wird gemobbt',
            emoji: '🫂',
            setting:
              'Your colleague Mia tells you that she is being excluded and mocked by the team.',
            turns: [
              say(
                'Mia',
                'Ich kann nachts nicht mehr schlafen. Im Team lachen alle über mich, und niemand lädt mich zum Mittagessen ein.',
                'I cannot sleep at night any more. In the team everyone laughs at me and nobody invites me to lunch.',
              ),
              you(
                'Das tut mir leid. Ich finde, du solltest mit dem Betriebsrat sprechen. Dort bekommst du Unterstützung.',
                [
                  'Das ist normal. Stell dich nicht so an.',
                  'That is dismissive – show empathy and give advice.',
                ],
                [
                  'Ich finde, du solltest mit dem Betriebsrat sprechen. Dort du bekommst Unterstützung.',
                  'After dort the verb comes second: Dort bekommst du Unterstützung.',
                ],
              ),
              say(
                'Mia',
                'Danke. Ich habe Angst, dass es noch schlimmer wird.',
                'Thanks. I am afraid it will get even worse.',
              ),
              you('Ich begleite dich gern, wenn du möchtest. Du bist nicht allein.', [
                'Dann sagst du besser nichts.',
                'Offer support rather than telling her to be silent.',
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
        'Reasons blitz',
        'Reason words and health vocabulary – true or false?',
        ['grammar', 'causal-expressions'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Aufgrund des Regens fällt das Fest aus.', true),
          tf(
            'b2',
            'Aufgrund dem Regen fällt das Fest aus.',
            false,
            'aufgrund takes the genitive: des Regens.',
          ),
          tf('b3', 'Da ich müde bin, gehe ich früh ins Bett.', true),
          tf(
            'b4',
            'Da ich bin müde, gehe ich früh ins Bett.',
            false,
            'da sends the verb to the end: Da ich müde bin.',
          ),
          tf('b5', 'Ich bin müde. Deshalb gehe ich früh ins Bett.', true),
          tf(
            'b6',
            'Ich bin müde. Deshalb ich gehe früh ins Bett.',
            false,
            'After deshalb the verb comes second: Deshalb gehe ich …',
          ),
          tf('b7', 'Dank der Hilfe meiner Kollegen habe ich es geschafft.', true),
          tf(
            'b8',
            'Dank des Unfalls konnte er seine Ferien genießen.',
            false,
            'dank names a positive cause; an accident is not one.',
          ),
          tf('b9', 'Muskelkater bekommt man nach ungewohnter Anstrengung.', true),
          tf(
            'b10',
            'Eine seriöse Quelle ist nicht vertrauenswürdig.',
            false,
            'seriös means reputable and trustworthy.',
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
        'Health words and ways to give reasons in one round.',
        ['vocabulary', 'grammar', 'wellbeing'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', '___ des starken Verkehrs kam er zu spät.', 'Infolge', [
              'Da',
              'Weil',
              'Deshalb',
            ]),
            {
              Da: 'da needs a clause with its own verb; des starken Verkehrs is a noun phrase.',
              Weil: 'weil needs a clause with its own verb.',
              Deshalb: 'deshalb starts a main clause with a verb.',
            },
            'causal-expressions',
          ),
          hint(
            q('c2', 'Er konnte ___ Aufregung nicht schlafen.', 'vor', ['dank', 'da', 'deshalb']),
            {
              dank: 'dank names a positive cause; the excitement kept him awake.',
              da: 'da needs a clause with its own verb.',
              deshalb: 'deshalb starts a main clause; here a noun follows.',
            },
            'causal-expressions',
          ),
          hint(
            q('c3', 'Es regnet stark. ___ bleiben wir zu Hause.', 'Deshalb', [
              'Da',
              'Weil',
              'Dank',
            ]),
            {
              Da: 'da would send the verb to the end.',
              Weil: 'weil would send the verb to the end.',
              Dank: 'dank needs a noun.',
            },
            'causal-expressions',
          ),
          q('c4', 'die Erschöpfung', 'exhaustion', ['balance', 'strain', 'mindfulness']),
          q('c5', 'abschalten', 'to switch off, unwind', [
            'to brood',
            'to prevent',
            'to sleep through the night',
          ]),
          q('c6', 'seriös', 'reputable, trustworthy', [
            'questionable, worrying',
            'drained',
            'frugal',
          ]),
          q('c7', 'der Muskelkater', 'sore muscles', ['muscle tension', 'stamina', 'symptom']),
          q('c8', 'vorbeugen', 'to prevent', [
            'to brood',
            'to recover',
            'to sleep through the night',
          ]),
          q(
            'c9',
            'You want to say that you need a break because of many tasks.',
            'Angesichts der vielen Aufgaben brauche ich eine Pause.',
            [
              'Dank der vielen Aufgaben brauche ich eine Pause.',
              'Trotz der vielen Aufgaben brauche ich eine Pause.',
              'Vor den vielen Aufgaben brauche ich eine Pause.',
            ],
          ),
          q('c10', 'die Selbstdiagnose', 'self-diagnosis', [
            'preventive care',
            'strength training',
            'sleep disorder',
          ]),
        ],
      },
    ),
  ],
};
