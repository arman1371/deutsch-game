import { conjugate } from '@/lib/german/conjugation';
import { verbForms, type HintOverlay } from '../hints';

/**
 * Mini lessons for A1.1 items whose activity mixes grammar points (unit challenges, sentence
 * builders). Vocabulary and meaning questions are left out on purpose: they get no lesson.
 */
export const hints: HintOverlay = {
  'a1-1-hallo-sentences': { s1: 'questions', s2: 'questions', s3: 'word-order' },
  'a1-1-hallo-challenge': { c2: 'pronouns', c6: 'questions' },
  'a1-1-wer-sentences': {
    s1: 'questions',
    s2: 'word-order',
    s3: 'questions',
    s4: 'word-order',
    s5: 'questions',
    s6: 'word-order',
    s7: 'questions',
  },
  'a1-1-woher-sentences': {
    s1: 'questions',
    s2: 'word-order',
    s3: 'questions',
    s4: 'questions',
    s5: 'word-order',
    s6: 'questions',
    s7: 'word-order',
    s8: 'word-order',
  },
  'a1-1-woher-challenge': {
    c2: verbForms(conjugate('sprechen'), 'er/sie/es'),
    c4: verbForms(conjugate('wohnen'), 'wir'),
    c5: 'questions',
    c7: verbForms(conjugate('kommen'), 'ihr'),
  },
  'a1-1-zahlen-sentences': {
    s1: 'questions',
    s2: 'word-order',
    s3: 'questions',
    s4: 'word-order',
    s5: 'questions',
    s7: 'questions',
    s8: 'word-order',
  },
  'a1-1-familie-challenge': {
    c1: verbForms(conjugate('haben'), 'wir'),
    c2: 'plurals',
    c3: 'possessives',
    c5: verbForms(conjugate('haben'), 'er/sie/es'),
    c6: {
      lesson: 'possessives',
      why: {
        Sein: 'sein has no ending for masculine and neuter nouns – die Schwester is feminine: seine.',
        Ihr: 'ihr means her or their – “his” is sein-.',
        Meine: 'meine means my – “his” is sein-.',
      },
    },
    c8: verbForms(conjugate('haben'), 'ihr'),
  },
  'a1-1-freizeit-challenge': {
    c1: verbForms(conjugate('können'), 'ich', 'modal-verbs'),
    c2: 'modal-verbs',
    c3: verbForms(conjugate('lesen'), 'er/sie/es'),
    c5: verbForms(conjugate('können'), 'ihr', 'modal-verbs'),
    c6: 'negation',
    c7: verbForms(conjugate('wollen'), 'du', 'modal-verbs'),
  },
  'a1-1-tag-sentences': {
    s1: 'separable-verbs',
    s2: 'separable-verbs',
    s3: 'separable-verbs',
    s4: 'separable-verbs',
    s5: 'prepositions-of-time',
    s6: 'prepositions-of-time',
    s7: 'separable-verbs',
    s8: 'questions',
  },
  'a1-1-tag-challenge': {
    c2: 'prepositions-of-time',
    c3: 'separable-verbs',
    c5: 'separable-verbs',
    c6: 'prepositions-of-time',
  },
  'a1-1-einkaufen-challenge': {
    c1: 'accusative',
    c2: 'articles',
    c3: {
      lesson: 'negation',
      why: {
        keine: 'keine is for feminine and plural nouns – das Brot is neuter: kein.',
        keinen: 'keinen is masculine accusative – das Brot is neuter: kein.',
        nicht: 'A noun without an article (Brot) is negated with kein, not nicht.',
      },
    },
    c5: 'accusative',
    c8: 'plurals',
  },
};
