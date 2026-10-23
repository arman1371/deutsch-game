import { conjugatePreterite } from '@/lib/german/conjugation';
import { verbForms, type HintOverlay } from '../hints';

/**
 * Mini lessons for A1.2 items whose activity mixes grammar points (unit challenges and mixed gap
 * fills). Vocabulary and meaning questions are left out on purpose: they get no lesson.
 */
export const hints: HintOverlay = {
  'a1-2-stadt-challenge': {
    c1: 'two-way-prepositions',
    c3: 'imperative',
    c4: 'ordinal-numbers',
    c5: 'two-way-prepositions',
    c6: {
      lesson: 'dative-prepositions',
      why: {
        in: 'Cities and countries without an article take nach: nach Berlin.',
        zu: 'zu is for people and places like zum Bahnhof – cities take nach.',
        ins: 'ins (in das) is for places with an article like ins Kino – cities take nach.',
      },
    },
    c7: 'separable-verbs',
    c9: {
      lesson: 'dative-prepositions',
      why: {
        zum: 'zum = zu dem, for masculine and neuter nouns – die Apotheke is feminine: zur (zu der).',
        nach: 'nach is for cities and countries – for a place like die Apotheke use zu: zur.',
        im: 'im (in dem) answers Wo? – you are going somewhere: zur Apotheke.',
      },
    },
    c10: 'two-way-prepositions',
  },
  'a1-2-wohnen-challenge': {
    c1: 'two-way-prepositions',
    c2: 'two-way-prepositions',
    c3: {
      lesson: 'two-way-prepositions',
      why: {
        stellt: 'stellen is the movement (Wohin?) – for the position (Wo?) use stehen.',
        legt: 'legen is the movement (Wohin?) – a lamp on a table stands: steht.',
        hängt: 'Things on a table stand or lie – hängen is for a wall or a ceiling.',
      },
    },
    c7: 'accusative',
    c8: {
      lesson: 'dative',
      why: {
        Zimmer: 'After mit (dative) a plural noun adds -n: mit zwei Zimmern.',
        Zimmers: 'German plurals never add -s to Zimmer; after mit the dative plural is Zimmern.',
      },
    },
    c9: {
      lesson: 'two-way-prepositions',
      why: {
        stehe: 'stehen is the position (Wo?) – putting something somewhere (Wohin?) is stellen.',
        liege: 'liegen is a position – putting something somewhere is stellen or legen.',
      },
    },
    c10: 'modal-verbs',
  },
  'a1-2-arbeit-gap-time': { '*': 'prepositions-of-time' },
  'a1-2-arbeit-challenge': {
    c1: 'past-tense',
    c2: verbForms(conjugatePreterite('haben'), 'er/sie/es', 'past-tense'),
    c3: 'prepositions-of-time',
    c4: {
      lesson: 'perfekt',
      why: { hat: 'fahren is a movement to a place, so the Perfekt uses sein: er ist gefahren.' },
    },
    c5: 'perfekt',
    c6: 'word-formation',
    c8: 'perfekt',
    c9: verbForms(conjugatePreterite('sein'), 'du', 'past-tense'),
  },
  'a1-2-gesundheit-challenge': {
    c1: 'object-pronouns',
    c2: 'object-pronouns',
    c3: 'object-pronouns',
    c6: 'imperative',
    c7: 'imperative',
    c8: 'imperative',
  },
  'a1-2-kleidung-challenge': {
    c1: 'object-pronouns',
    c2: {
      lesson: 'object-pronouns',
      why: {
        ihr: 'ihr is dative (to her) – nehmen needs the accusative, and die Jacke is feminine: sie.',
        es: 'es replaces a neuter noun – die Jacke is feminine: sie.',
        ihn: 'ihn replaces a masculine noun – die Jacke is feminine: sie.',
      },
    },
    c3: {
      lesson: 'object-pronouns',
      why: {
        ihn: 'ihn replaces a masculine noun – das Hemd is neuter: es.',
        sie: 'sie replaces a feminine or plural noun – das Hemd is neuter: es.',
        ihm: 'ihm is dative – kaufen needs the accusative: es.',
      },
    },
    c4: 'comparison',
    c5: 'comparison',
    c6: 'object-pronouns',
    c7: 'comparison',
    c9: 'ordinal-numbers',
  },
  'a1-2-reisen-challenge': {
    c1: {
      lesson: 'perfekt',
      why: {
        haben: 'fahren to a place is a movement, so the Perfekt uses sein: wir sind gefahren.',
      },
    },
    c2: { lesson: 'perfekt', why: { bin: 'buchen has an object (ein Hotel), so it takes haben.' } },
    c3: 'conjunctions',
    c4: 'conjunctions',
    c5: 'perfekt',
    c6: 'past-tense',
    c9: 'perfekt',
  },
  'a1-2-feste-gap-prepositions': {
    v1: 'prepositions-of-time',
    v2: 'prepositions-of-time',
    v3: 'prepositions-of-time',
    v4: 'prepositions-of-time',
    v5: 'dative-prepositions',
    v6: 'prepositions-of-time',
    v7: 'dative-prepositions',
    v8: 'dative-prepositions',
  },
  'a1-2-feste-challenge': {
    c1: 'ordinal-numbers',
    c2: 'ordinal-numbers',
    c3: 'object-pronouns',
    c4: 'object-pronouns',
    c5: 'dative-prepositions',
    c8: 'prepositions-of-time',
    c9: 'separable-verbs',
    c10: 'prepositions-of-time',
  },
  'a1-2-termine-gap-polite': { '*': 'polite-forms' },
  'a1-2-termine-challenge': {
    c1: 'polite-forms',
    c2: 'polite-forms',
    c3: {
      lesson: 'adjective-endings',
      why: {
        'Sehr geehrter Frau Weber,':
          'geehrter is for a man (Sehr geehrter Herr …) – for a woman it is geehrte.',
      },
    },
    c5: 'prepositions-of-time',
    c6: 'possessives',
    c7: 'separable-verbs',
    c8: 'possessives',
  },
  'a1-2-aemter-gap-imperative': { '*': 'imperative' },
  'a1-2-aemter-challenge': {
    c1: 'object-pronouns',
    c2: {
      lesson: 'object-pronouns',
      why: {
        ihr: 'ihr is dative (to her) – schicken needs the accusative of die Rechnung: sie.',
        es: 'es replaces a neuter noun – die Rechnung is feminine: sie.',
        ihn: 'ihn replaces a masculine noun – die Rechnung is feminine: sie.',
      },
    },
    c3: 'possessives',
    c4: {
      lesson: 'separable-verbs',
      why: {
        ausfüllen: 'ausfüllen is separable: the prefix goes to the end – füllen Sie … aus.',
      },
    },
    c5: 'conjunctions',
    c8: 'object-pronouns',
    c10: {
      lesson: 'negation',
      why: {
        kein: 'kein negates a noun – here the verb (angekommen) is negated: nicht.',
        keine: 'keine negates a noun – here the verb (angekommen) is negated: nicht.',
        nichts: 'nichts means “nothing” – to negate the verb use nicht.',
      },
    },
  },
  'a1-2-alltag-challenge': {
    c2: 'comparison',
    c3: 'comparison',
    c4: 'polite-forms',
    c5: 'conjunctions',
    c6: {
      lesson: 'adjective-endings',
      why: {
        langen:
          'Without an article, -en in the plural is only for the dative – Haare here is accusative: lange.',
        langer:
          '-er without an article is masculine nominative (or feminine dative) – Haare is plural: lange.',
        lang: 'Before a noun the adjective needs an ending: lange Haare.',
      },
    },
    c7: 'separable-verbs',
    c8: 'conjunctions',
  },
};
