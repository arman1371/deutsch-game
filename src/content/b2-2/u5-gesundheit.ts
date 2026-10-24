import {
  byDe,
  flashcards,
  listen,
  memory,
  quizDeEn,
  quizEmoji,
  spell,
  vocabList,
} from '../builders';
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

const U = 'b2-2-gesundheit';

const fitness = vocabList(U, 'Fitness & wellbeing', [
  ['Kondition', 'stamina, fitness', '🏃', 'die'],
  ['Kraftsport', 'strength training', '🏋️', 'der'],
  ['Dehnung', 'stretching', '🤸', 'die', 'Dehnungen'],
  ['Muskelzerrung', 'pulled muscle', '🩹', 'die', 'Muskelzerrungen'],
  ['Haltungsschaden', 'postural damage', '🧍', 'der', 'Haltungsschäden'],
  ['Fitnessarmband', 'fitness tracker', '⌚', 'das', 'Fitnessarmbänder'],
  ['Schrittzähler', 'step counter', '👟', 'der', 'Schrittzähler'],
  ['Selbstoptimierung', 'self-optimisation', '📈', 'die'],
  ['Wellness', 'wellness', '🧖', 'die'],
  ['Stressabbau', 'stress relief', '🧘', 'der'],
  ['Wirbelsäule', 'spine', '🦴', 'die'],
  ['Rückenschule', 'back school', '🪑', 'die'],
  ['dehnen', 'to stretch', '🙆'],
  ['ganzheitlich', 'holistic', '☯️'],
  ['chronisch', 'chronic', '⏳'],
]);

const medicine = vocabList(U, 'Medicine & insurance', [
  ['Facharzt', 'specialist doctor', '👨‍⚕️', 'der', 'Fachärzte'],
  ['Diagnose', 'diagnosis', '📋', 'die', 'Diagnosen'],
  ['Befund', 'test result, findings', '🔬', 'der', 'Befunde'],
  ['Therapie', 'therapy', '💆', 'die', 'Therapien'],
  ['Physiotherapie', 'physiotherapy', '🦵', 'die'],
  ['Rehabilitation', 'rehabilitation', '🩼', 'die'],
  ['Heilmethode', 'method of healing', '🌿', 'die', 'Heilmethoden'],
  ['Akupunktur', 'acupuncture', '📍', 'die'],
  ['Homöopathie', 'homeopathy', '💧', 'die'],
  ['Verstauchung', 'sprain', '🦶', 'die', 'Verstauchungen'],
  ['Dosierung', 'dosage', '💊', 'die', 'Dosierungen'],
  ['Schmerzmittel', 'painkiller', '🩹', 'das', 'Schmerzmittel'],
  ['Zusatzversicherung', 'supplementary insurance', '🛡️', 'die', 'Zusatzversicherungen'],
  ['behandeln', 'to treat', '🩺'],
  ['lindern', 'to relieve, to ease', '😌'],
  ['wirksam', 'effective', '✅'],
]);

const vocab = [...fitness, ...medicine];

export const gesundheit: UnitContent = {
  unit: unitB22({
    id: U,
    order: 5,
    title: 'Gesundheit & Fitness',
    subtitle: 'Sport trends, doctor and insurance, alternative healing and how things are done',
    emoji: '💪',
    goals: [
      'Talk about sport, fitness trends and wellbeing',
      'Describe symptoms, treatments and costs to a doctor or insurer',
      'Say how something is done or achieved (by …ing)',
    ],
    grammar: [
      'Indefinite words: irgendjemand, irgendetwas, irgendein; einige, manche, mehrere, sämtliche',
      'Means and manner: indem, dadurch, dass, durch + Akk., mithilfe + Gen., ohne dass',
      'Adjective endings after manche, einige, mehrere (plural endings)',
    ],
    vocabFields: ['Fitness & wellbeing', 'Medicine & insurance'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-fitness',
      'flashcards',
      meta(
        'Fitness & wellbeing',
        'Kondition, Muskelzerrung, Selbstoptimierung – talking about sport and stress.',
        ['vocabulary', 'health-fitness'],
        1,
        5,
      ),
      flashcards(fitness),
    ),
    activity(
      U,
      'flash-medicine',
      'flashcards',
      meta(
        'Medicine & insurance',
        'Facharzt, Diagnose, Nebenwirkung – at the doctor’s.',
        ['vocabulary', 'health-fitness'],
        1,
        5,
      ),
      flashcards(medicine),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Fitness in pictures', 'Name what you see.', ['vocabulary', 'health-fitness'], 1, 4),
      quizEmoji(
        byDe(
          fitness,
          'Kraftsport',
          'Muskelzerrung',
          'Fitnessarmband',
          'Schrittzähler',
          'Rückenschule',
          'Wellness',
          'Wirbelsäule',
          'Kondition',
        ),
        fitness,
      ),
    ),
    activity(
      U,
      'quiz-words',
      'quiz',
      meta(
        'What does it mean?',
        'Medical words in English.',
        ['vocabulary', 'health-fitness'],
        2,
        4,
      ),
      quizDeEn(
        byDe(
          vocab,
          'Dehnung',
          'Befund',
          'Rehabilitation',
          'Heilmethode',
          'Verstauchung',
          'Dosierung',
          'Zusatzversicherung',
          'lindern',
          'wirksam',
          'chronisch',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'memory-medicine',
      'memory',
      meta(
        'Match the medical words',
        'Pair German medical words with their meaning.',
        ['vocabulary', 'health-fitness'],
        2,
        4,
      ),
      memory(
        byDe(
          medicine,
          'Facharzt',
          'Diagnose',
          'Akupunktur',
          'Homöopathie',
          'Schmerzmittel',
          'behandeln',
        ),
      ),
    ),
    activity(
      U,
      'listen-words',
      'listen',
      meta(
        'Hear the health words',
        'Listen and pick the meaning.',
        ['listening', 'health-fitness'],
        2,
        4,
      ),
      listen(
        byDe(
          vocab,
          'Haltungsschaden',
          'Stressabbau',
          'Therapie',
          'Physiotherapie',
          'dehnen',
          'ganzheitlich',
        ),
        vocab,
      ),
    ),
    activity(
      U,
      'spell-words',
      'spell',
      meta(
        'Spell the health words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'health-fitness'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(fitness, 'Kondition', 'Rückenschule'), 'unscramble').items,
          ...spell(byDe(medicine, 'Diagnose'), 'unscramble').items,
          ...spell(byDe(fitness, 'Haltungsschaden', 'Wirbelsäule'), 'type').items,
          ...spell(byDe(medicine, 'Therapie'), 'type').items,
          dictation('d1', 'Mit Yoga baue ich Stress ab.', 'I reduce stress with yoga.'),
          dictation(
            'd2',
            'Die Zusatzversicherung übernimmt die Kosten für die Physiotherapie.',
            'The supplementary insurance covers the costs of the physiotherapy.',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-irgend',
      'gapfill',
      meta(
        'irgendwer, manche, sämtliche',
        'Pick the indefinite word that fits.',
        ['grammar', 'irgend-pronouns', 'health-fitness'],
        3,
        7,
      ),
      {
        items: [
          hint(
            gap(
              'i1',
              'Hat ___ mein Fitnessarmband gesehen?',
              'irgendjemand',
              ['irgendjemand', 'jemals', 'irgendwann', 'niemand'],
              'Has anyone seen my fitness tracker?',
              'irgendjemand = anyone at all',
            ),
            {
              jemals: 'jemals means “ever” and is not a person.',
              irgendwann: 'irgendwann means “at some time”, not “anyone”.',
              niemand: 'niemand means “nobody” and would make the question odd.',
            },
          ),
          hint(
            gap(
              'i2',
              'Ich habe ___ Schmerzen, aber ich weiß nicht, wo genau.',
              'irgendwo',
              ['irgendwo', 'irgendwie', 'irgendwann', 'irgendwohin'],
              'I have pain somewhere, but I do not know where exactly.',
              'irgendwo = somewhere (place)',
            ),
            {
              irgendwie: 'irgendwie means “somehow”.',
              irgendwann: 'irgendwann means “sometime”.',
              irgendwohin: 'irgendwohin is a direction (to somewhere).',
            },
          ),
          hint(
            gap(
              'i3',
              '___ Menschen trainieren täglich, andere nur am Wochenende.',
              'Manche',
              ['Manche', 'Irgendwelche', 'Sämtliche', 'Jeder'],
              'Some people train every day, others only at weekends.',
              'manche … andere = some … others',
            ),
            {
              Irgendwelche: 'irgendwelche is vague, but the contrast with andere calls for manche.',
              Sämtliche: 'sämtliche means “all”.',
              Jeder: 'jeder is singular (“each”); the verb trainieren is plural.',
            },
          ),
          hint(
            gap(
              'i4',
              '___ Kosten der Behandlung werden von der Kasse übernommen.',
              'Sämtliche',
              ['Sämtliche', 'Irgendwelche', 'Manche', 'Etwas'],
              'All costs of the treatment are covered by the insurer.',
              'sämtliche = all, without exception',
            ),
            {
              Irgendwelche: 'irgendwelche means “any (unspecified)”, not “all”.',
              Manche: 'manche means “some” – the statement is about all costs.',
              Etwas: 'etwas is singular and used with uncountable things.',
            },
          ),
          hint(
            gap(
              'i5',
              'Es muss doch ___ Mittel gegen die Verspannung geben.',
              'irgendein',
              ['irgendein', 'irgendeine', 'irgendwelche', 'irgendwo'],
              'There must be some remedy for the tension.',
              'irgendein + neuter noun (das Mittel)',
            ),
            {
              irgendeine: 'irgendeine is feminine; Mittel is neuter.',
              irgendwelche: 'irgendwelche is plural.',
              irgendwo: 'irgendwo is an adverb of place.',
            },
          ),
          hint(
            gap(
              'i6',
              'Mehrere ___ Ärzte haben diese Therapie empfohlen.',
              'erfahrene',
              ['erfahrene', 'erfahrenen', 'erfahrener', 'erfahrenes'],
              'Several experienced doctors recommended this therapy.',
              'after mehrere, einige, manche: plural ending -e',
            ),
            {
              erfahrenen:
                'After mehrere / einige the adjective ends in -e in the nominative plural, as without an article.',
              erfahrener: 'Ärzte is plural nominative, so -e.',
              erfahrenes: '-es is for singular neuter.',
            },
          ),
          typed(
            'i7',
            'Ich habe mich ___ verletzt, aber ich weiß nicht mehr, wie.',
            'irgendwie',
            'I hurt myself somehow, but I do not remember how.',
            'irgendwie = somehow',
          ),
        ],
      },
    ),
    activity(
      U,
      'gap-means',
      'gapfill',
      meta(
        'Indem, dadurch, durch',
        'Say how something is achieved.',
        ['grammar', 'modal-clauses', 'health-fitness'],
        3,
        7,
      ),
      {
        items: [
          hint(
            gap(
              'm1',
              'Man bleibt fit, ___ man regelmäßig trainiert.',
              'indem',
              ['indem', 'damit', 'obwohl', 'nachdem'],
              'You stay fit by exercising regularly.',
              'indem = by doing',
            ),
            {
              damit: 'damit expresses a purpose (“so that”), not the means.',
              obwohl: 'obwohl means “although”.',
              nachdem: 'nachdem means “after”.',
            },
          ),
          hint(
            gap(
              'm2',
              'Er hat seine Ausdauer ___ verbessert, dass er täglich gelaufen ist.',
              'dadurch',
              ['dadurch', 'dafür', 'davon', 'damit'],
              'He improved his stamina by running every day.',
              'dadurch … , dass = by (the fact that)',
            ),
            {
              dafür: 'dafür means “for it”.',
              davon: 'davon means “of it”.',
              damit: 'damit would need a clause with a different meaning (purpose).',
            },
          ),
          hint(
            gap(
              'm3',
              '___ eine Umstellung der Ernährung lassen sich Entzündungen lindern.',
              'Durch',
              ['Durch', 'Mit', 'Für', 'Von'],
              'Inflammation can be eased by changing your diet.',
              'durch + Akkusativ = by means of',
            ),
            {
              Mit: 'mit names a tool or companion; for an abstract means durch is more natural.',
              Für: 'für expresses a purpose or a recipient.',
              Von: 'von is not used for means.',
            },
          ),
          hint(
            gap(
              'm4',
              '___ einer App zählt sie ihre Schritte.',
              'Mithilfe',
              ['Mithilfe', 'Trotz', 'Wegen', 'Anstelle'],
              'She counts her steps with the help of an app.',
              'mithilfe + Genitiv (or mithilfe von + Dativ)',
            ),
            {
              Trotz: 'trotz means “despite”.',
              Wegen: 'wegen gives a reason.',
              Anstelle: 'anstelle means “instead of”.',
            },
          ),
          typed(
            'm5',
            'Er hat Gewicht verloren, ohne ___ er Sport getrieben hat.',
            'dass',
            'He lost weight without doing any sport.',
            'ohne dass + clause (different subjects or a full clause)',
          ),
          hint(
            gap(
              'm6',
              'Sie reduziert ihren Stress, ___ sie jeden Abend eine Stunde spazieren geht.',
              'indem',
              ['indem', 'sodass', 'ob', 'während'],
              'She reduces her stress by going for a walk for an hour every evening.',
              'indem + verb at the end',
            ),
            {
              sodass: 'sodass expresses a result, not the means.',
              ob: 'ob means “whether”.',
              während: 'während only says that two things happen at the same time.',
            },
          ),
        ],
      },
    ),
    activity(
      U,
      'sort-means-purpose',
      'sortit',
      meta(
        'Means, purpose or reason?',
        'indem, um … zu / damit or weil?',
        ['grammar', 'modal-clauses', 'purpose-clauses'],
        3,
        5,
      ),
      {
        instruction: 'What does the clause express?',
        buckets: [
          { id: 'means', label: 'Means (indem)', emoji: '🛠️' },
          { id: 'purpose', label: 'Purpose (um … zu / damit)', emoji: '🎯' },
          { id: 'reason', label: 'Reason (weil)', emoji: '❓' },
        ],
        items: sortItems('t', [
          ['Sie bleibt fit, indem sie täglich läuft.', 'means'],
          ['Man senkt Stress, indem man Pausen macht.', 'means'],
          ['Er lernt, indem er viel wiederholt.', 'means'],
          ['Sie läuft täglich, um fit zu bleiben.', 'purpose'],
          ['Er macht Pausen, damit er nicht krank wird.', 'purpose'],
          ['Man dehnt sich, um Verspannungen vorzubeugen.', 'purpose'],
          ['Sie läuft täglich, weil sie fit bleiben will.', 'reason'],
          ['Er macht Pausen, weil er müde ist.', 'reason'],
        ]),
      },
    ),
    activity(
      U,
      'sentences',
      'sentence',
      meta(
        'Build the sentence',
        'Means with indem and indefinite words.',
        ['grammar', 'modal-clauses', 'irgend-pronouns'],
        3,
        7,
      ),
      {
        items: [
          sent('s1', 'You stay fit by exercising regularly.', [
            'Man',
            'bleibt',
            'fit,',
            'indem',
            'man',
            'regelmäßig',
            'trainiert.',
          ]),
          sent('s2', 'She improved her stamina by running every day.', [
            'Sie',
            'hat',
            'ihre',
            'Ausdauer',
            'verbessert,',
            'indem',
            'sie',
            'jeden',
            'Tag',
            'gelaufen',
            'ist.',
          ]),
          sent('s3', 'Has anyone seen my fitness tracker?', [
            'Hat',
            'irgendjemand',
            'mein',
            'Fitnessarmband',
            'gesehen?',
          ]),
          sent('s4', 'All costs are covered by the insurance.', [
            'Sämtliche',
            'Kosten',
            'werden',
            'von',
            'der',
            'Versicherung',
            'übernommen.',
          ]),
          sent('s5', 'Some people prefer alternative healing methods.', [
            'Manche',
            'Menschen',
            'bevorzugen',
            'alternative',
            'Heilmethoden.',
          ]),
          sent(
            's6',
            'He lost weight without doing any sport.',
            ['Er', 'hat', 'abgenommen,', 'ohne', 'dass', 'er', 'Sport', 'getrieben', 'hat.'],
            { alsoAccept: ['Er hat abgenommen, ohne Sport zu treiben.'] },
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-talk',
      'listen',
      meta(
        'At the doctor and the gym',
        'Listen to patients and trainers.',
        ['listening', 'health-fitness'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Der Facharzt hat mir ein Schmerzmittel mit wenigen Nebenwirkungen verschrieben.',
            'The specialist prescribed me a painkiller with few side effects.',
            [
              'The specialist forbade me to take any painkillers.',
              'The painkiller has many dangerous side effects.',
              'I bought the painkiller without a prescription.',
            ],
          ),
          heard(
            'l2',
            'Sie lindert ihre Verspannungen, indem sie jeden Morgen Yoga macht.',
            'She eases her tension by doing yoga every morning.',
            [
              'She has tension because she does yoga every morning.',
              'She wants to start yoga next year.',
              'She cannot do yoga because of her tension.',
            ],
          ),
          heard(
            'l3',
            'Sämtliche Kosten der Physiotherapie übernimmt die Zusatzversicherung.',
            'The supplementary insurance covers all the costs of the physiotherapy.',
            [
              'The patient has to pay all costs for the physiotherapy.',
              'The physiotherapy is free for everyone.',
              'Only some costs are covered by the basic insurance.',
            ],
          ),
          heard(
            'l4',
            'Hast du irgendeine Idee, wie ich meine Ausdauer verbessern kann?',
            'Do you have any idea how I can improve my stamina?',
            [
              'Do you know where the nearest gym is?',
              'I have no idea how to cook.',
              'Do you think my stamina is very good?',
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
        'Doctor and trainer',
        'Talk to a specialist about your back and plan training.',
        ['communication', 'health-fitness', 'modal-clauses'],
        2,
        7,
      ),
      {
        scenes: [
          {
            id: 'doctor',
            title: 'Beim Facharzt',
            emoji: '👨‍⚕️',
            setting: 'You see a specialist because of neck tension.',
            turns: [
              say('Dr. Weiß', 'Guten Tag. Was führt Sie zu mir?', 'Hello. What brings you to me?'),
              you(
                'Seit Wochen habe ich Verspannungen im Nacken. Irgendetwas stimmt nicht.',
                [
                  'Seit Wochen ich habe Verspannungen im Nacken. Irgendetwas stimmt nicht.',
                  'After an opening time phrase the verb comes second: habe ich.',
                ],
                [
                  'Seit Wochen habe ich Verspannungen im Nacken. Irgendetwas stimmen nicht.',
                  'irgendetwas is singular: stimmt.',
                ],
              ),
              say(
                'Dr. Weiß',
                'Ich überweise Sie zur Physiotherapie. Sie lindern die Beschwerden, indem Sie regelmäßig üben.',
                'I will refer you to physiotherapy. You ease the symptoms by practising regularly.',
              ),
              you(
                'Gut. Übernimmt die Krankenkasse sämtliche Kosten?',
                [
                  'Gut. Übernimmt die Krankenkasse sämtlicher Kosten?',
                  'Kosten is plural accusative: sämtliche Kosten.',
                ],
                [
                  'Gut. Übernimmt die Krankenkasse sämtliche Kosten übernommen?',
                  'One verb is enough: übernimmt.',
                ],
              ),
              say(
                'Dr. Weiß',
                'Das lässt sich nicht pauschal sagen. Fragen Sie bei Ihrer Kasse nach.',
                'That cannot be said in general. Ask your insurer.',
              ),
              you(
                'Dann erkundige ich mich dort. Vielen Dank!',
                [
                  'Dann erkundige mich ich dort. Vielen Dank!',
                  'Verb second, then the subject, then the reflexive pronoun: erkundige ich mich.',
                ],
                ['Dann erkundigt ich mich dort. Vielen Dank!', 'ich → erkundige.'],
              ),
            ],
          },
          {
            id: 'gym',
            title: 'Im Fitnessstudio',
            emoji: '🏋️',
            setting: 'A trainer asks about your goals.',
            turns: [
              say(
                'Trainer',
                'Wie möchten Sie Ihre Ausdauer verbessern?',
                'How would you like to improve your stamina?',
              ),
              you(
                'Ich will sie verbessern, indem ich dreimal pro Woche laufe.',
                [
                  'Ich will sie verbessern, indem ich laufe dreimal pro Woche.',
                  'In an indem-clause the verb goes to the end.',
                ],
                [
                  'Ich will sie verbessern, indem laufe ich dreimal pro Woche.',
                  'After indem the subject comes first, and the verb goes to the end.',
                ],
              ),
              say(
                'Trainer',
                'Sehr gut. Haben Sie manchmal Muskelkater?',
                'Very good. Do you sometimes get sore muscles?',
              ),
              you(
                'Ja, manchmal. Dann dehne ich mich ausgiebig.',
                [
                  'Ja, manche. Dann dehne ich mich ausgiebig.',
                  'manchmal = sometimes (time); manche = some (people/things).',
                ],
                [
                  'Ja, irgendwann. Dann dehne ich mich ausgiebig.',
                  'irgendwann = at some point; for “sometimes” use manchmal.',
                ],
              ),
              say(
                'Trainer',
                'Wie kontrollieren Sie Ihren Fortschritt?',
                'How do you monitor your progress?',
              ),
              you(
                'Mithilfe meines Fitnessarmbands zähle ich die Schritte.',
                [
                  'Mithilfe meinem Fitnessarmband zähle ich die Schritte.',
                  'mithilfe takes the genitive: meines Fitnessarmbands.',
                ],
                [
                  'Mithilfe meines Fitnessarmbands ich zähle die Schritte.',
                  'The verb must be in second position: zähle ich.',
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
        'Health blitz',
        'Indefinite words, means and vocabulary – true or false?',
        ['grammar', 'irgend-pronouns', 'modal-clauses'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Hat irgendjemand meinen Schlüssel gesehen?', true),
          tf(
            'b2',
            'Irgendjemand bedeutet: eine bestimmte Person.',
            false,
            'irgendjemand = someone (unspecified).',
          ),
          tf('b3', 'Manche Menschen trainieren täglich.', true),
          tf('b4', 'Manche Mensch trainiert täglich.', false, 'manche + plural: manche Menschen.'),
          tf('b5', 'Sämtliche Kosten werden übernommen.', true),
          tf('b6', 'Man bleibt fit, indem man trainiert.', true),
          tf(
            'b7',
            'Man bleibt fit, indem man trainiert regelmäßig.',
            false,
            'indem sends the verb to the end.',
          ),
          tf('b8', 'Durch Training verbessert man seine Ausdauer.', true),
          tf('b9', 'Mithilfe einer App zählt sie Schritte.', true),
          tf('b10', 'Eine Diagnose ist das Ergebnis einer Untersuchung.', true),
          tf(
            'b11',
            'Eine Nebenwirkung ist die Hauptwirkung eines Medikaments.',
            false,
            'It is an unwanted additional effect.',
          ),
          tf('b12', 'Muskelkater bekommt man oft nach ungewohntem Sport.', true),
        ],
      },
    ),
    activity(
      U,
      'challenge',
      'quiz',
      meta(
        'Unit challenge',
        'Health words, indefinite words and means in one round.',
        ['vocabulary', 'grammar', 'health-fitness'],
        3,
        5,
      ),
      {
        questions: [
          q('c1', 'Man erreicht viel, ___ man konsequent übt.', 'indem', [
            'damit',
            'obwohl',
            'sodass',
          ]),
          q('c2', 'Er hat sich ___ verbessert, dass er täglich lernt.', 'dadurch', [
            'dafür',
            'dazu',
            'damit',
          ]),
          q('c3', '___ Patienten klagen über Schlafmangel.', 'Einige', [
            'Irgendein',
            'Jeder',
            'Niemand',
          ]),
          q('c4', 'Hast du ___ gesehen? (an unknown person)', 'irgendwen', [
            'irgendwo',
            'irgendwann',
            'irgendwie',
          ]),
          q('c5', 'Es muss doch ___ Lösung geben. (feminine)', 'irgendeine', [
            'irgendein',
            'irgendwelche',
            'irgendwo',
          ]),
          q('c6', 'die Diagnose', 'diagnosis', ['dosage', 'side effect', 'therapy']),
          q('c7', 'der Haltungsschaden', 'postural damage', [
            'stamina',
            'sore muscles',
            'stress relief',
          ]),
          q('c8', 'wirksam', 'effective', ['chronic', 'holistic', 'cheap']),
          q('c9', 'lindern', 'to ease', ['to treat', 'to stretch', 'to heal completely']),
          q('c10', 'die Zusatzversicherung', 'supplementary insurance', [
            'health insurance card',
            'specialist',
            'rehabilitation',
          ]),
        ],
      },
    ),
  ],
};
