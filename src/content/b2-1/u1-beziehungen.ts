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

const U = 'b2-1-beziehungen';

const bonds = vocabList(U, 'Bonds and feelings', [
  ['Vertrautheit', 'familiarity, closeness', '🫂', 'die'],
  ['Eifersucht', 'jealousy', '😒', 'die'],
  ['Zuneigung', 'affection', '🥰', 'die'],
  ['Verbundenheit', 'sense of connection', '🔗', 'die'],
  ['Bekanntenkreis', 'circle of acquaintances', '👥', 'der', 'Bekanntenkreise'],
  ['Einsamkeit', 'loneliness', '🌑', 'die'],
  ['Kränkung', 'hurt, insult to one’s feelings', '😞', 'die', 'Kränkungen'],
  ['Aufrichtigkeit', 'sincerity', '💬', 'die'],
  ['Taktgefühl', 'tact', '🎩', 'das'],
  ['Mitgefühl', 'compassion', '💗', 'das'],
  ['Versöhnung', 'reconciliation', '🕊️', 'die', 'Versöhnungen'],
  ['sich anvertrauen', 'to confide in someone', '🗝️'],
  ['sich distanzieren', 'to distance oneself', '🚶'],
]);

const traits = vocabList(U, 'Character traits', [
  ['einfühlsam', 'empathetic', '🤗'],
  ['verlässlich', 'reliable', '⚓'],
  ['nachtragend', 'resentful, unforgiving', '📒'],
  ['sprunghaft', 'erratic, changeable', '🎭'],
  ['bodenständig', 'down-to-earth', '🌱'],
  ['aufgeschlossen', 'open-minded', '🚪'],
  ['zurückhaltend', 'reserved', '🤫'],
  ['nachsichtig', 'lenient, forgiving', '🫶'],
]);

const phrases = vocabList(U, 'Talking about feelings and wishes', [
  ['Ich habe mich sehr über deinen Anruf gefreut.', 'I was really happy about your call.', '📞'],
  ['Es liegt mir viel an unserer Freundschaft.', 'Our friendship matters a lot to me.', '💞'],
  ['Auf dich kann ich mich immer verlassen.', 'I can always rely on you.', '⚓'],
  ['Das hat mich tief getroffen.', 'That hit me deeply.', '💔'],
  ['Lass uns die Sache in Ruhe klären.', 'Let’s sort this out calmly.', '🧘'],
  ['Ich wünsche mir mehr Zeit füreinander.', 'I wish we had more time for each other.', '⏳'],
  ['Mir fehlt der Kontakt zu alten Freunden.', 'I miss the contact with old friends.', '📵'],
]);

const vocab = [...bonds, ...traits, ...phrases];

export const beziehungen: UnitContent = {
  unit: unitB21({
    id: U,
    order: 1,
    title: 'Beziehungen & Gefühle',
    subtitle: 'Friends, closeness and distance, character – and words that need a preposition',
    emoji: '💞',
    goals: [
      'Talk about relationships, feelings and wishes in detail',
      'Describe a person’s character',
      'Use the right preposition after nouns and adjectives',
    ],
    grammar: [
      'Nouns and adjectives with prepositions: Angst vor, Interesse an, stolz auf, zufrieden mit.',
      'Order in the Mittelfeld: time – reason – manner – place; pronouns before nouns.',
    ],
    vocabFields: ['Bonds and feelings', 'Character traits', 'Talking about feelings and wishes'],
  }),
  vocab,
  activities: [
    activity(
      U,
      'flash-bonds',
      'flashcards',
      meta(
        'Bonds and feelings',
        'Vertrautheit, Zuneigung, Taktgefühl – words for close relationships.',
        ['vocabulary', 'relationships'],
        1,
        5,
      ),
      flashcards(bonds),
    ),
    activity(
      U,
      'flash-traits',
      'flashcards',
      meta(
        'Character traits',
        'einfühlsam, verlässlich, nachtragend – describe a person.',
        ['vocabulary', 'relationships'],
        1,
        4,
      ),
      flashcards(traits),
    ),
    activity(
      U,
      'flash-phrases',
      'flashcards',
      meta(
        'Talking about feelings and wishes',
        'Say how you feel and what you wish for.',
        ['vocabulary', 'communication', 'relationships'],
        1,
        4,
      ),
      flashcards(phrases),
    ),
    activity(
      U,
      'quiz-pictures',
      'quiz',
      meta('Feelings in pictures', 'Name what you see.', ['vocabulary', 'relationships'], 1, 4),
      quizEmoji(
        byDe(
          bonds,
          'Eifersucht',
          'Zuneigung',
          'Einsamkeit',
          'Kränkung',
          'Mitgefühl',
          'Versöhnung',
          'Bekanntenkreis',
          'Verbundenheit',
        ),
      ),
    ),
    activity(
      U,
      'listen-phrases',
      'listen',
      meta(
        'Hear the phrases',
        'Listen and pick the meaning.',
        ['listening', 'relationships'],
        2,
        4,
      ),
      listen(phrases),
    ),
    activity(
      U,
      'memory-prepositions',
      'memory',
      meta(
        'Word + preposition',
        'Match the noun or adjective with its fixed preposition.',
        ['vocabulary', 'nouns-with-prepositions', 'relationships'],
        2,
        4,
      ),
      {
        pairs: [
          { id: 'm1', a: 'die Angst', b: 'vor + Dativ' },
          { id: 'm2', a: 'das Interesse', b: 'an + Dativ' },
          { id: 'm3', a: 'die Sehnsucht', b: 'nach + Dativ' },
          { id: 'm4', a: 'stolz', b: 'auf + Akkusativ' },
          { id: 'm5', a: 'zufrieden', b: 'mit + Dativ' },
          { id: 'm6', a: 'die Rücksicht', b: 'auf + Akkusativ' },
        ],
      },
    ),
    activity(
      U,
      'spell-bonds',
      'spell',
      meta(
        'Spell the feeling words',
        'Unscramble, type and write what you hear.',
        ['spelling', 'relationships'],
        2,
        5,
      ),
      {
        items: [
          ...spell(byDe(bonds, 'Eifersucht', 'Zuneigung', 'Einsamkeit'), 'unscramble').items,
          ...spell(byDe(bonds, 'Aufrichtigkeit', 'Verbundenheit', 'Kränkung'), 'type').items,
          dictation(
            'd1',
            'Ich habe große Angst vor dem Alleinsein.',
            'I am very afraid of being alone',
          ),
          dictation('d2', 'Sie ist stolz auf ihre Tochter.', 'she is proud of her daughter'),
        ],
      },
    ),
    activity(
      U,
      'sort-prepositions',
      'sortit',
      meta(
        'Which preposition?',
        'Sort the words by the preposition that belongs to them.',
        ['grammar', 'nouns-with-prepositions'],
        2,
        4,
      ),
      {
        instruction: 'Which preposition follows the word?',
        buckets: [
          { id: 'an', label: 'an', emoji: '1️⃣' },
          { id: 'auf', label: 'auf', emoji: '2️⃣' },
          { id: 'vor', label: 'vor', emoji: '3️⃣' },
          { id: 'mit', label: 'mit', emoji: '4️⃣' },
        ],
        items: sortItems('p', [
          ['das Interesse …', 'an'],
          ['der Mangel …', 'an'],
          ['stolz …', 'auf'],
          ['eifersüchtig …', 'auf'],
          ['die Angst …', 'vor'],
          ['der Respekt …', 'vor'],
          ['zufrieden …', 'mit'],
          ['verheiratet …', 'mit'],
        ]),
      },
    ),
    activity(
      U,
      'gap-prepositions',
      'gapfill',
      meta(
        'Fixed prepositions',
        'Complete the sentences with the right preposition.',
        ['grammar', 'nouns-with-prepositions'],
        3,
        6,
      ),
      {
        items: [
          hint(
            gap(
              'n1',
              'Ich habe große Angst ___ dem Alleinsein.',
              'vor',
              ['vor', 'an', 'auf', 'über'],
              'I am very afraid of being alone.',
              'die Angst vor + dative.',
            ),
            {
              an: 'die Angst is always followed by vor, not an.',
              auf: 'auf goes with stolz or eifersüchtig; Angst takes vor.',
              über: 'über belongs to verbs like sich ärgern; Angst takes vor.',
            },
          ),
          hint(
            gap(
              'n2',
              'Sie ist sehr stolz ___ ihre Tochter.',
              'auf',
              ['auf', 'an', 'für', 'mit'],
              'She is very proud of her daughter.',
              'stolz auf + accusative.',
            ),
            {
              an: 'stolz is followed by auf, not an.',
              für: 'für does not go with stolz; it is stolz auf.',
              mit: 'mit does not go with stolz; it is stolz auf.',
            },
          ),
          hint(
            gap(
              'n3',
              'Er ist sehr zufrieden ___ seinem neuen Freund.',
              'mit',
              ['mit', 'auf', 'an', 'von'],
              'He is very happy with his new friend.',
              'zufrieden mit + dative.',
            ),
            {
              auf: 'zufrieden always takes mit.',
              an: 'zufrieden always takes mit.',
              von: 'von is not used after zufrieden; it is zufrieden mit.',
            },
          ),
          hint(
            gap(
              'n4',
              'Mein Interesse ___ Kunst wächst.',
              'an',
              ['an', 'für', 'auf', 'bei'],
              'My interest in art is growing.',
              'das Interesse an + dative. (sich interessieren für is the verb.)',
            ),
            {
              für: 'The verb is sich interessieren für, but the noun takes an: das Interesse an.',
              auf: 'das Interesse takes an.',
              bei: 'das Interesse takes an.',
            },
          ),
          hint(
            gap(
              'n5',
              'Die Sehnsucht ___ Nähe ist groß.',
              'nach',
              ['nach', 'auf', 'zu', 'von'],
              'The longing for closeness is great.',
              'die Sehnsucht nach + dative.',
            ),
            {
              auf: 'auf is used for Vorfreude auf; Sehnsucht takes nach.',
              zu: 'zu is not used after Sehnsucht; it is nach.',
              von: 'von is not used after Sehnsucht; it is nach.',
            },
          ),
          hint(
            gap(
              'n6',
              'Sie ist eifersüchtig ___ ihre Schwester.',
              'auf',
              ['auf', 'an', 'über', 'vor'],
              'She is jealous of her sister.',
              'eifersüchtig auf + accusative.',
            ),
            {
              an: 'eifersüchtig takes auf.',
              über: 'eifersüchtig takes auf.',
              vor: 'vor goes with Angst, not with eifersüchtig.',
            },
          ),
          hint(
            typed(
              'n7',
              'Wir haben viel Respekt ___ unseren Großeltern.',
              'vor',
              'We have a lot of respect for our grandparents.',
              'der Respekt vor + dative.',
            ),
            { für: 'It is der Respekt vor, not für.' },
          ),
        ],
      },
    ),
    activity(
      U,
      'sentences-mittelfeld',
      'sentence',
      meta(
        'Order in the middle',
        'Time, reason, manner, place – build the sentences.',
        ['grammar', 'word-order', 'middle-field'],
        3,
        6,
      ),
      {
        items: [
          sent('s1', 'I am meeting my friend in the café tomorrow because of her birthday.', [
            'Ich',
            'treffe',
            'meine',
            'Freundin',
            'morgen',
            'wegen',
            'ihres',
            'Geburtstags',
            'im',
            'Café.',
          ]),
          sent(
            's2',
            'Yesterday he gave her the book.',
            ['Er', 'hat', 'ihr', 'gestern', 'das', 'Buch', 'geschenkt.'],
            {
              alsoAccept: ['Gestern hat er ihr das Buch geschenkt.'],
            },
          ),
          sent(
            's3',
            'Yesterday he gave it to her.',
            ['Er', 'hat', 'es', 'ihr', 'gestern', 'geschenkt.'],
            {
              alsoAccept: ['Gestern hat er es ihr geschenkt.'],
            },
          ),
          sent(
            's4',
            'On Sundays we often go to the lake with friends.',
            ['Wir', 'fahren', 'sonntags', 'oft', 'mit', 'Freunden', 'an', 'den', 'See.'],
            { alsoAccept: ['Sonntags fahren wir oft mit Freunden an den See.'] },
          ),
          sent(
            's5',
            'Yesterday she honestly told her best friend the truth.',
            [
              'Sie',
              'hat',
              'gestern',
              'ihrer',
              'besten',
              'Freundin',
              'ehrlich',
              'die',
              'Wahrheit',
              'gesagt.',
            ],
            { alsoAccept: ['Gestern hat sie ihrer besten Freundin ehrlich die Wahrheit gesagt.'] },
          ),
        ],
      },
    ),
    activity(
      U,
      'listen-people',
      'listen',
      meta(
        'People talk about relationships',
        'Listen and pick what they mean.',
        ['listening', 'relationships'],
        3,
        5,
      ),
      {
        items: [
          heard(
            'l1',
            'Seit dem Umzug fehlt mir der Kontakt zu meinen alten Freunden. Ich fühle mich oft einsam.',
            'Since moving she misses her old friends and often feels lonely.',
            [
              'She moved to be closer to her old friends.',
              'She prefers being alone after the move.',
              'She has made many new friends since the move.',
            ],
          ),
          heard(
            'l2',
            'Mein Bruder ist ziemlich sprunghaft, aber auf ihn kann ich mich immer verlassen.',
            'His brother is changeable, but he can always rely on him.',
            [
              'His brother is reliable and never changes.',
              'He cannot trust his brother at all.',
              'His brother is changeable and he avoids him.',
            ],
          ),
          heard(
            'l3',
            'Nach dem Streit hat sie sich bei ihm entschuldigt, und die beiden haben sich versöhnt.',
            'After the argument she apologised and they made up.',
            [
              'After the argument they stopped talking to each other.',
              'He apologised and she stayed angry.',
              'They argued again after her apology.',
            ],
          ),
          heard(
            'l4',
            'Meinen engsten Freunden vertraue ich mehr als meinem Bekanntenkreis.',
            'He trusts his closest friends more than his acquaintances.',
            [
              'He trusts his acquaintances more than his closest friends.',
              'He trusts everybody equally.',
              'He has no friends and no acquaintances.',
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
        'A difficult conversation',
        'Cancel a date honestly and talk about feelings with a friend.',
        ['communication', 'relationships'],
        2,
        8,
      ),
      {
        scenes: [
          {
            id: 'cancel',
            title: 'Eine Verabredung absagen',
            emoji: '📵',
            setting:
              'You must cancel a meeting with your friend Lena, and you want to stay honest and kind.',
            turns: [
              say(
                'Lena',
                'Hey, bist du schon unterwegs? Ich warte seit zehn Minuten vor dem Kino auf dich.',
                'Hey, are you on your way? I have been waiting in front of the cinema for ten minutes.',
              ),
              you(
                'Es tut mir sehr leid. Ich muss heute leider absagen, weil ich total erschöpft bin.',
                [
                  'Ach, ich habe keine Lust mehr auf dich.',
                  'That is hurtful – explain your reason instead of rejecting her.',
                ],
                [
                  'Es tut mir sehr leid. Ich muss heute leider absagen, weil ich bin total erschöpft.',
                  'weil sends the verb to the end: … weil ich total erschöpft bin.',
                ],
              ),
              say(
                'Lena',
                'Schade! Aber gut, dann ruhst du dich aus. Wann hast du Zeit?',
                'Pity! But okay, rest then. When do you have time?',
              ),
              you('Wie wäre es am Samstag? Ich lade dich zum Essen ein.', [
                'Keine Ahnung. Ich melde mich vielleicht nie.',
                'That sounds uncaring – suggest a new date.',
              ]),
            ],
          },
          {
            id: 'feelings',
            title: 'Über Gefühle sprechen',
            emoji: '💬',
            setting: 'Your friend Tim has not called for weeks. You want to tell him how you feel.',
            turns: [
              say(
                'Tim',
                'Du wolltest mir doch etwas sagen. Was ist denn los?',
                'You wanted to tell me something. What is going on?',
              ),
              you(
                'Mir fehlt der Kontakt zu dir. Ich wünsche mir mehr Zeit füreinander.',
                [
                  'Du bist ein schlechter Freund.',
                  'Say how you feel (Ich-Botschaft) instead of blaming him.',
                ],
                [
                  'Mir fehlt der Kontakt auf dir. Ich wünsche mir mehr Zeit füreinander.',
                  'The noun Kontakt takes zu: der Kontakt zu + dative.',
                ],
              ),
              say(
                'Tim',
                'Du hast recht. Ich hatte viel Stress, aber das ist keine Entschuldigung.',
                'You are right. I was very stressed, but that is no excuse.',
              ),
              you('Danke für deine Aufrichtigkeit. Lass uns einen festen Abend ausmachen.', [
                'Na gut, dann vergessen wir das Thema eben.',
                'You want to repair the friendship – suggest something concrete.',
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
        'Feelings blitz',
        'Prepositions and relationship words – true or false?',
        ['grammar', 'nouns-with-prepositions'],
        3,
        2,
      ),
      {
        seconds: 60,
        statements: [
          tf('b1', 'Sie hat Angst vor Spinnen.', true),
          tf('b2', 'Er hat Angst an Spinnen.', false, 'die Angst takes vor.'),
          tf('b3', 'Ich bin stolz auf meinen Bruder.', true),
          tf('b4', 'Ich bin stolz für meinen Bruder.', false, 'stolz is followed by auf.'),
          tf('b5', 'Wir sind mit unserer Wohnung zufrieden.', true),
          tf('b6', 'Wir sind auf unserer Wohnung zufrieden.', false, 'zufrieden takes mit.'),
          tf(
            'b7',
            'Er hat ihr es gestern gegeben.',
            false,
            'Two pronouns: accusative first – Er hat es ihr gestern gegeben.',
          ),
          tf('b8', 'Er hat es ihr gestern gegeben.', true),
          tf('b9', 'Wer sprunghaft ist, ändert oft seine Meinung oder Stimmung.', true),
          tf(
            'b10',
            'Ein nachtragender Mensch vergibt schnell.',
            false,
            'nachtragend means unforgiving – he holds a grudge.',
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
        'Relationship words, prepositions and word order in one round.',
        ['vocabulary', 'grammar', 'relationships'],
        3,
        5,
      ),
      {
        questions: [
          hint(
            q('c1', 'Ich warte schon lange ___ deinen Anruf.', 'auf', ['an', 'für', 'nach']),
            {
              an: 'warten takes auf: warten auf + accusative.',
              für: 'warten takes auf: warten auf + accusative.',
              nach: 'warten takes auf: warten auf + accusative.',
            },
            'nouns-with-prepositions',
          ),
          hint(
            q('c2', 'Die Freude ___ der Arbeit ist wichtig.', 'an', ['auf', 'vor', 'zu']),
            {
              auf: 'Vorfreude auf means looking forward; die Freude an means enjoying.',
              vor: 'vor goes with Angst and Respekt.',
              zu: 'zu is not used after Freude.',
            },
            'nouns-with-prepositions',
          ),
          hint(
            q('c3', 'Er schenkt ___ gestern einen Ring.', 'ihr', ['ihn ihr', 'einen ihr', 'ihrer']),
            {
              'ihn ihr': 'einen Ring is already the accusative object.',
              'einen ihr': 'The dative pronoun comes first: ihr … einen Ring.',
              ihrer: 'The dative of sie is ihr.',
            },
            'middle-field',
          ),
          hint(
            q('c4', 'Welche Reihenfolge ist richtig?', 'Er hat es ihr gestern geschenkt.', [
              'Er hat ihr es gestern geschenkt.',
              'Er hat gestern ihr es geschenkt.',
              'Er hat es gestern ihr geschenkt.',
            ]),
            {
              'Er hat ihr es gestern geschenkt.':
                'With two pronouns the accusative es comes before the dative ihr.',
              'Er hat gestern ihr es geschenkt.':
                'Pronouns stand directly after the verb, before time expressions.',
              'Er hat es gestern ihr geschenkt.': 'Pronouns stay together: es ihr, then gestern.',
            },
            'middle-field',
          ),
          q('c5', 'die Eifersucht', 'jealousy', ['loneliness', 'affection', 'tact']),
          q('c6', 'einfühlsam', 'empathetic', ['reserved', 'erratic, changeable', 'reliable']),
          q('c7', 'nachtragend', 'resentful, unforgiving', [
            'lenient',
            'down-to-earth',
            'open-minded',
          ]),
          q('c8', 'das Taktgefühl', 'tact', ['reconciliation', 'compassion', 'sincerity']),
          q(
            'c9',
            'You want to say you can rely on a friend.',
            'Auf dich kann ich mich immer verlassen.',
            [
              'Mir fehlt der Kontakt zu dir.',
              'Das hat mich tief getroffen.',
              'Ich muss heute leider absagen.',
            ],
          ),
          q('c10', 'sich anvertrauen', 'to confide in someone', [
            'to distance oneself',
            'to make up',
            'to complain',
          ]),
        ],
      },
    ),
  ],
};
