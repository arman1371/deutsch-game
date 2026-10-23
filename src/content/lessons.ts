import type { TagId } from './tags';

/**
 * Mini grammar lessons shown after a wrong answer (never after a vocabulary/meaning mistake).
 * One lesson per grammar tag: the id is the tag id, so an activity tagged `accusative` gets the
 * accusative lesson without any extra authoring. Items can point at a lesson explicitly with
 * `lesson: '…'` when their activity mixes several grammar points.
 */
export interface Lesson {
  title: string;
  /** one to three short sentences, in English */
  rule: string;
  /** two or three German examples; "→" separates a form from its use */
  examples: readonly string[];
}

export const LESSONS = {
  'word-order': {
    title: 'Verb in position 2',
    rule: 'In a German statement the conjugated verb is always the second element. If something else (time, place, an object) comes first, the subject moves behind the verb. Other verb parts (infinitive, participle, separable prefix) go to the very end.',
    examples: [
      'Ich gehe heute ins Kino.',
      'Heute gehe ich ins Kino.',
      'Am Montag muss ich früh aufstehen.',
    ],
  },
  questions: {
    title: 'Asking questions',
    rule: 'W-questions start with the question word and the verb comes second: Wo wohnst du? Yes/no questions start with the verb: Wohnst du in Berlin?',
    examples: ['Woher kommst du?', 'Was machst du am Wochenende?', 'Hast du Zeit?'],
  },
  pronouns: {
    title: 'Personal pronouns',
    rule: 'The pronoun decides the verb ending. du is for one person you know well, ihr for several, Sie (capital S) is the polite form for one or more people and takes the same verb form as sie (they).',
    examples: ['ich bin · du bist · er/sie/es ist', 'wir sind · ihr seid · sie/Sie sind'],
  },
  'verb-conjugation': {
    title: 'Present tense endings',
    rule: 'Take the stem (infinitive minus -en) and add the ending for the person: -e, -st, -t, -en, -t, -en. Stems ending in -t/-d add an e (du arbeitest), and many strong verbs change their vowel in the du and er/sie/es forms (du fährst, er liest).',
    examples: [
      'ich spiele · du spielst · er spielt',
      'wir spielen · ihr spielt · sie spielen',
      'fahren → du fährst, er fährt',
    ],
  },
  articles: {
    title: 'der, die, das',
    rule: 'Every noun has a gender: der (masculine), die (feminine) or das (neuter); the plural is always die. Learn each noun with its article. Some endings help: -ung, -heit, -keit, -schaft, -ion → die; -chen, -lein, -um → das; -ling, -ismus → der.',
    examples: ['die Zeitung, die Freiheit, die Station', 'das Mädchen, das Museum', 'der Frühling'],
  },
  negation: {
    title: 'nicht or kein?',
    rule: 'kein negates a noun that would have ein or no article (kein Auto, keine Zeit). nicht negates everything else: verbs, adjectives, names and nouns with der/die/das. kein takes the same endings as ein.',
    examples: [
      'Ich habe ein Auto. → Ich habe kein Auto.',
      'Ich habe Zeit. → Ich habe keine Zeit.',
      'Das ist nicht mein Auto. · Ich komme nicht.',
    ],
  },
  plurals: {
    title: 'Plural forms',
    rule: 'German has several plural patterns, so learn the plural with the noun. Common ones: feminine nouns in -e/-ung add -(e)n, many masculine nouns add -e (often with umlaut), neuter one-syllable nouns often add -er with umlaut, foreign words add -s. The plural article is always die.',
    examples: [
      'die Lampe → die Lampen · die Zeitung → die Zeitungen',
      'der Stuhl → die Stühle · das Buch → die Bücher',
      'das Auto → die Autos',
    ],
  },
  possessives: {
    title: 'mein, dein, sein, ihr …',
    rule: 'The stem shows the owner (mein = my, sein = his, ihr = her/their, Ihr = your, polite). The ending agrees with the thing owned and works like ein/kein: -e for feminine and plural, -en for masculine accusative.',
    examples: [
      'mein Bruder · meine Schwester · meine Eltern',
      'Ich besuche meinen Bruder.',
      'Das ist ihr Hund. (her / their dog)',
    ],
  },
  'prepositions-of-time': {
    title: 'Time words: um, am, im, seit, vor …',
    rule: 'um for clock times, am for days and parts of the day, im for months and seasons. seit = since/for (still going on), vor = ago or before, ab = from (a start in the future), bis = until, nach = after. seit, vor, nach and ab take the dative.',
    examples: [
      'um 8 Uhr · am Freitag · im Juli',
      'Ich wohne seit einem Jahr hier. · Ich bin vor einem Jahr gekommen.',
      'Ab Montag arbeite ich bis 17 Uhr.',
    ],
  },
  'separable-verbs': {
    title: 'Separable verbs',
    rule: 'In a main clause and in the imperative the prefix splits off and goes to the end: aufstehen → Ich stehe um 7 Uhr auf. With a modal verb or in a weil-clause the verb stays together at the end. In the Perfekt, ge- goes between prefix and verb: eingekauft, angerufen.',
    examples: [
      'Der Zug fährt um 9 Uhr ab.',
      'Ich muss früh aufstehen.',
      'Perfekt: Ich habe eingekauft.',
    ],
  },
  accusative: {
    title: 'Accusative (Wen? Was?)',
    rule: 'The direct object is in the accusative. Only the masculine changes: der → den, ein → einen, kein → keinen. Feminine, neuter and plural look like the nominative.',
    examples: [
      'Der Tisch ist neu. → Ich kaufe den Tisch.',
      'Ich habe einen Bruder.',
      'Ich nehme die Suppe und das Wasser.',
    ],
  },
  'modal-verbs': {
    title: 'Modal verbs',
    rule: 'The modal verb is conjugated in position 2 and the main verb goes to the end in the infinitive. ich and er/sie/es have the same form, with no ending: ich kann, er kann.',
    examples: [
      'Ich kann heute nicht kommen.',
      'Er muss morgen arbeiten.',
      'ich will · du willst · er will',
    ],
  },
  dative: {
    title: 'Dative (Wem?)',
    rule: 'The dative shows the receiver and follows dative prepositions. Articles: der/das → dem, die → der, plural → den (+ -n on the noun). ein → einem/einer.',
    examples: ['Ich gebe dem Mann das Buch.', 'Sie hilft der Frau.', 'mit den Kindern'],
  },
  'object-pronouns': {
    title: 'mich or mir?',
    rule: 'Accusative pronouns are direct objects: mich, dich, ihn, sie, es, uns, euch, Sie. Dative pronouns are receivers and follow verbs like helfen, gefallen, gehören, danken: mir, dir, ihm, ihr, ihm, uns, euch, Ihnen.',
    examples: ['Ich sehe ihn. (accusative)', 'Ich helfe ihm. (dative)', 'Das Kleid gefällt mir.'],
  },
  'two-way-prepositions': {
    title: 'Wo? or Wohin?',
    rule: 'in, an, auf, über, unter, vor, hinter, neben, zwischen take the dative for a location (Wo?) and the accusative for a movement to a place (Wohin?). in dem → im, in das → ins, an dem → am.',
    examples: [
      'Wo? Ich bin im Kino. (dative)',
      'Wohin? Ich gehe ins Kino. (accusative)',
      'Das Bild hängt an der Wand. · Ich hänge das Bild an die Wand.',
    ],
  },
  imperative: {
    title: 'The imperative',
    rule: 'du-form: stem without -st and without du (Komm! Nimm!). ihr-form: like the present tense without ihr (Kommt!). Sie-form: verb first, then Sie (Kommen Sie!). Vowel change a→ä does not happen in the du-imperative: Fahr!',
    examples: ['du kommst → Komm!', 'ihr kommt → Kommt!', 'Sie kommen → Kommen Sie bitte!'],
  },
  'past-tense': {
    title: 'Präteritum',
    rule: 'Regular verbs add -te (ich wohnte), strong verbs change their vowel (fahren → fuhr, lesen → las). ich and er/sie/es have the same form; the other persons add -st, -en, -t, -en. In speaking, sein, haben and the modal verbs use it most.',
    examples: [
      'ich war · du warst · wir waren',
      'ich wohnte · wir wohnten',
      'er fuhr · wir fuhren · sie las',
    ],
  },
  perfekt: {
    title: 'The Perfekt',
    rule: 'haben or sein in position 2 + the participle at the end. Verbs of movement or change (gehen, fahren, kommen, aufstehen) and sein/bleiben use sein. Regular participles: ge-…-t (gespielt), strong ones: ge-…-en (gefahren). Verbs in -ieren and with be-/ver-/er- have no ge-.',
    examples: [
      'Ich habe Fußball gespielt.',
      'Wir sind nach Berlin gefahren.',
      'Er hat telefoniert. · Ich habe das Buch bezahlt.',
    ],
  },
  comparison: {
    title: 'Comparing: -er als, am -sten',
    rule: 'Comparative: adjective + -er + als (schneller als). Superlative: am + adjective + -sten (am schnellsten). Equal: so … wie. Short adjectives often add an umlaut (alt → älter); gut, viel, gern are irregular.',
    examples: [
      'Der Zug ist schneller als der Bus.',
      'Er ist so groß wie ich.',
      'gut → besser → am besten · gern → lieber → am liebsten',
    ],
  },
  'ordinal-numbers': {
    title: 'Ordinal numbers and dates',
    rule: 'Up to 19 add -te (der zweite), from 20 add -ste (der zwanzigste). Exceptions: erste, dritte, siebte, achte. For dates use am + -ten: am ersten Mai.',
    examples: [
      'der erste, der dritte, der siebte',
      'Heute ist der zwanzigste März.',
      'am 3. (dritten) Juni',
    ],
  },
  conjunctions: {
    title: 'und, oder, aber, denn, sondern',
    rule: 'These conjunctions join two main clauses and do not change the word order: the verb stays in position 2 after them. denn gives a reason (like weil, but without the verb at the end); sondern corrects a negative (nicht …, sondern …).',
    examples: [
      'Ich bleibe zu Hause, denn ich bin krank.',
      'Ich komme mit, aber ich habe wenig Zeit.',
      'Ich trinke nicht Tee, sondern Kaffee.',
    ],
  },
  'polite-forms': {
    title: 'Polite requests',
    rule: 'Use Konjunktiv II forms to sound polite: Könnten Sie …? Würden Sie …? Ich hätte gern … Ich möchte … The main verb goes to the end.',
    examples: [
      'Könnten Sie mir bitte helfen?',
      'Würden Sie das Fenster öffnen?',
      'Ich hätte gern einen Kaffee.',
    ],
  },
  'reflexive-verbs': {
    title: 'Reflexive verbs',
    rule: 'The reflexive pronoun refers back to the subject: mich, dich, sich, uns, euch, sich. If the sentence already has an accusative object, the pronoun is dative: mir, dir (Ich wasche mir die Hände).',
    examples: [
      'Ich freue mich. · Er freut sich.',
      'Wir treffen uns um 8.',
      'Ich putze mir die Zähne.',
    ],
  },
  genitive: {
    title: 'Possession with names',
    rule: 'Add -s to a name without an apostrophe: Annas Auto. In spoken German, von + dative is common: das Auto von Anna. With articles the genitive uses des/der: das Auto des Vaters.',
    examples: ['Peters Schwester', 'die Wohnung von meiner Mutter', 'das Ende des Films'],
  },
  'indefinite-pronouns': {
    title: 'man, jemand, einer, welche',
    rule: 'man (one/people) takes the er/sie/es verb form. jemand/niemand are people, etwas/nichts are things. To replace a noun use einer/eins/eine (accusative masculine: einen), keiner/keins/keine, and welche for plurals without an article.',
    examples: [
      'Hier darf man nicht rauchen.',
      'Brauchen Sie einen Termin? – Ja, ich brauche einen.',
      'Hast du Fotos? – Ja, ich habe welche. · Nein, ich habe keine.',
    ],
  },
  'subordinate-clauses': {
    title: 'Verb at the end',
    rule: 'After weil, wenn, dass, ob, obwohl and other subordinating words the conjugated verb goes to the end of the clause. If the sentence starts with this clause, the main clause starts with its verb.',
    examples: [
      'Ich komme nicht, weil ich krank bin.',
      'Wenn es regnet, bleibe ich zu Hause.',
      'Ich glaube, dass er morgen kommt.',
    ],
  },
  connectors: {
    title: 'deshalb, trotzdem, dann',
    rule: 'These words take position 1 in their clause, so the verb comes right after them and the subject follows: deshalb gehe ich. They are not like weil – the verb does not go to the end.',
    examples: [
      'Ich bin müde, deshalb gehe ich ins Bett.',
      'Es regnet, trotzdem gehen wir spazieren.',
      'Zuerst esse ich, dann lerne ich.',
    ],
  },
  superlative: {
    title: 'The superlative',
    rule: 'After a verb use am + -sten (Er läuft am schnellsten). Before a noun use the article + -ste/-sten with an adjective ending (der schnellste Läufer). Adjectives in -t, -d, -s, -z add -esten (am ältesten).',
    examples: ['Sie singt am schönsten.', 'Das ist der höchste Berg.', 'gut → am besten'],
  },
  'dative-prepositions': {
    title: 'mit, von, zu, seit …',
    rule: 'aus, bei, mit, nach, seit, von, zu (and gegenüber) always take the dative. zu dem → zum, zu der → zur, von dem → vom, bei dem → beim.',
    examples: [
      'Ich fahre mit dem Bus.',
      'Ich gehe zur Ärztin. · Ich gehe zum Bahnhof.',
      'seit einem Jahr',
    ],
  },
  'konjunktiv-2': {
    title: 'Konjunktiv II',
    rule: 'Use it for wishes, unreal situations and advice. sein, haben and modal verbs have their own forms (wäre, hätte, könnte, müsste, sollte); most other verbs use würde + infinitive at the end.',
    examples: [
      'Wenn ich Zeit hätte, würde ich reisen.',
      'Ich wäre gern am Meer.',
      'An deiner Stelle würde ich mehr schlafen.',
    ],
  },
  'relative-clauses': {
    title: 'Relative clauses',
    rule: 'The relative pronoun takes its gender and number from the noun it describes and its case from its role in the relative clause. The forms are like der/die/das, except dative plural denen. The verb goes to the end.',
    examples: [
      'Der Mann, der dort steht, ist mein Chef.',
      'Der Film, den ich gesehen habe, war gut.',
      'Die Freunde, denen ich helfe, wohnen hier.',
    ],
  },
  'indirect-questions': {
    title: 'Indirect questions',
    rule: 'Inside a sentence (Können Sie mir sagen, …? Ich weiß nicht, …) a W-question keeps its question word and a yes/no question uses ob. In both cases the verb goes to the end.',
    examples: [
      'Wann fährt der Zug? → Wissen Sie, wann der Zug fährt?',
      'Kommt er? → Ich weiß nicht, ob er kommt.',
    ],
  },
  'temporal-clauses': {
    title: 'als, wenn, bis, seitdem',
    rule: 'als is for one event in the past, wenn for repeated events or the present/future. bis = until, seitdem = since then. All of them send the verb to the end.',
    examples: [
      'Als ich klein war, wohnten wir in Köln.',
      'Immer wenn es regnet, lese ich.',
      'Warte, bis ich komme.',
    ],
  },
  'purpose-clauses': {
    title: 'damit or um … zu?',
    rule: 'Use um … zu + infinitive when both parts have the same subject. Use damit with a conjugated verb at the end when the subjects are different.',
    examples: [
      'Ich lerne Deutsch, um in Berlin zu arbeiten.',
      'Ich erkläre es langsam, damit du es verstehst.',
    ],
  },
  passive: {
    title: 'The passive',
    rule: 'werden (conjugated, position 2) + participle at the end. The focus is on what happens, not on who does it; the person can be added with von + dative.',
    examples: [
      'Das Paket wird morgen geliefert.',
      'Die Briefe werden sortiert.',
      'Präteritum: Das Haus wurde 1900 gebaut.',
    ],
  },
  'verbs-with-prepositions': {
    title: 'Verbs with fixed prepositions',
    rule: 'Many verbs need a fixed preposition with a fixed case – learn them together: warten auf + Akk., sich freuen auf/über + Akk., träumen von + Dat., sich interessieren für + Akk. Questions and pointing words use wo(r)-/da(r)- + preposition: Worauf? Darauf.',
    examples: [
      'Ich warte auf den Bus.',
      'Sie interessiert sich für Kunst.',
      'Wovon träumst du? – Davon, …',
    ],
  },
  'adjective-endings': {
    title: 'Adjective endings',
    rule: 'After der/die/das the ending is -e in the nominative singular (and feminine/neuter accusative), otherwise -en. After ein/kein/mein the adjective shows the gender where the article does not: -er (m), -es (n). With no article the adjective takes the article ending itself.',
    examples: [
      'der neue Mantel · den neuen Mantel · mit dem neuen Mantel',
      'ein neuer Mantel · ein neues Hemd · eine neue Jacke',
      'heißer Kaffee · mit kaltem Wasser',
    ],
  },
  'n-declension': {
    title: 'n-Deklination',
    rule: 'Some masculine nouns (many people and animals ending in -e, and words like Herr, Mensch, Student, Kollege) add -n or -en in every case except the nominative singular.',
    examples: [
      'der Kollege → Ich frage den Kollegen.',
      'der Herr → Sehr geehrter Herr … · mit Herrn Weber',
      'der Student → dem Studenten',
    ],
  },
  'word-formation': {
    title: 'Building words',
    rule: 'In a compound noun the last word decides the article and the meaning: die Tür + der Schlüssel → der Türschlüssel. Suffixes also fix the gender: -ung, -heit, -keit → die; -chen → das; -er (person) → der.',
    examples: ['das Haus + die Tür → die Haustür', 'wohnen → die Wohnung', 'frei → die Freiheit'],
  },
  lassen: {
    title: 'lassen',
    rule: 'lassen + infinitive means having something done by someone else (or allowing it). lassen is conjugated in position 2 (du lässt, er lässt), the infinitive goes to the end.',
    examples: [
      'Ich lasse mein Auto reparieren.',
      'Er lässt sich die Haare schneiden.',
      'Lass mich das machen!',
    ],
  },
  'route-prepositions': {
    title: 'durch, entlang, vorbei',
    rule: 'durch + accusative = through, den Fluss entlang (accusative, after the noun) = along, an … vorbei + dative = past. They describe a route, not a destination.',
    examples: [
      'Wir gehen durch den Park.',
      'Fahren Sie die Straße entlang.',
      'Gehen Sie an der Kirche vorbei.',
    ],
  },
  plusquamperfekt: {
    title: 'Plusquamperfekt',
    rule: 'Use it for something that happened before another past event. Form: hatte/war (simple past of haben/sein) + participle at the end. After nachdem the clause is in the Plusquamperfekt and the main clause in the Präteritum or Perfekt.',
    examples: [
      'Ich hatte schon gegessen. · Sie war schon gegangen.',
      'Nachdem er gefrühstückt hatte, ging er zur Arbeit.',
    ],
  },
  'concessive-clauses': {
    title: 'obwohl and trotzdem',
    rule: 'Both express a contrast you would not expect. obwohl starts a subordinate clause, so the verb goes to the end. trotzdem is an adverb that links two main clauses: it takes position 1 and the verb follows directly.',
    examples: ['Obwohl es regnet, gehe ich spazieren.', 'Es regnet. Trotzdem gehe ich spazieren.'],
  },
  'genitive-prepositions': {
    title: 'wegen, trotz, während',
    rule: 'These prepositions take the genitive: des/eines + noun with -s or -es for masculine and neuter, der/einer for feminine and plural. In everyday speech you often hear the dative, but in writing use the genitive.',
    examples: ['wegen des Wetters · trotz der Kälte', 'während der Arbeit · innerhalb einer Woche'],
  },
  'infinitive-zu': {
    title: 'Infinitive with zu',
    rule: 'After many verbs and expressions (versuchen, vergessen, anfangen, Lust haben, es ist wichtig) the second verb is an infinitive with zu at the end of the clause. With separable verbs zu goes between prefix and verb. statt … zu and ohne … zu work the same way.',
    examples: [
      'Ich versuche, mehr Sport zu machen.',
      'Vergiss nicht, die Tür abzuschließen.',
      'Er ging, ohne Tschüss zu sagen.',
    ],
  },
  'two-part-conjunctions': {
    title: 'Two-part conjunctions',
    rule: 'Some conjunctions come in pairs: nicht nur … sondern auch (not only … but also), sowohl … als auch (both … and), entweder … oder (either … or), weder … noch (neither … nor), zwar … aber (admittedly … but).',
    examples: [
      'Sie spricht nicht nur Deutsch, sondern auch Spanisch.',
      'Wir fahren entweder mit dem Zug oder mit dem Bus.',
      'Ich habe weder Zeit noch Geld.',
    ],
  },
  'adjectives-as-nouns': {
    title: 'Adjectives as nouns',
    rule: 'An adjective can become a noun for a person: it is written with a capital letter but keeps its adjective ending, which depends on the article and the case, just like before a noun.',
    examples: [
      'der Bekannte · ein Bekannter · eine Bekannte',
      'die Erwachsenen · mit einem Verwandten',
    ],
  },
  'futur-1': {
    title: 'Futur I',
    rule: 'werden (conjugated, position 2) + infinitive at the end. It is used for plans, promises and predictions; for simple plans Germans usually prefer the present tense with a time word.',
    examples: [
      'Ich werde nächstes Jahr in Berlin studieren.',
      'Es wird morgen regnen.',
      'Wirst du mir helfen?',
    ],
  },
  'konjunktiv-2-past': {
    title: 'Konjunktiv II of the past',
    rule: 'For unreal situations and regrets in the past: hätte or wäre + participle at the end. Use wäre with verbs that form the Perfekt with sein. With a modal verb: hätte + infinitive + modal infinitive.',
    examples: [
      'Ich hätte früher aufstehen sollen.',
      'Wenn ich das gewusst hätte, wäre ich gekommen.',
    ],
  },
  // ---- B2.2 ----
  'noun-prepositions': {
    title: 'Nouns with fixed prepositions',
    rule: 'Many nouns take a fixed preposition that has to be learnt with the noun and its case: die Angst vor + Dat., die Hoffnung auf + Akk., das Interesse an + Dat., der Streit um + Akk. In questions the preposition joins wo(r)-: Worauf hoffst du?',
    examples: [
      'die Angst vor dem Versagen',
      'die Hoffnung auf einen Neuanfang',
      'das Interesse an Kunst',
    ],
  },
  'comparative-clauses': {
    title: 'Comparing with als and wie',
    rule: 'Equal: so / genauso … wie. Unequal: comparative + als. Both can introduce a whole clause with the verb at the end, often in the Plusquamperfekt: schöner, als ich gedacht hatte. anders als and ganz anders, als … compare unlike things; je nachdem, ob … says it depends.',
    examples: [
      'Es war genauso teuer, wie ich erwartet hatte.',
      'Das Studium war schwerer, als ich gedacht hatte.',
      'Sie ist ganz anders, als man sagt.',
    ],
  },
  'modal-hearsay': {
    title: 'sollen and wollen: reporting claims',
    rule: 'sollen = “it is said that” (you heard it from others), wollen = “claims that” (the subject says it of themselves). For things in the past use the infinitive Perfekt: haben / sein at the end after the participle.',
    examples: [
      'Der Koch soll sehr berühmt sein.',
      'Er will das nie gesagt haben.',
      'Die Suppe soll sehr gesund sein.',
    ],
  },
  nominalisation: {
    title: 'From verbs and clauses to nouns',
    rule: 'Written German often turns verbs into nouns: infinitive (das Rauchen), -ung (die Entscheidung), -en-stem (der Verzicht). A clause becomes a noun phrase with a preposition: weil er krank war → wegen seiner Krankheit; wenn man liest → beim Lesen; indem man spart → durch Sparen.',
    examples: [
      'Wenn man isst, soll man nicht lesen. → Beim Essen soll man nicht lesen.',
      'Weil das Obst teuer ist → wegen der hohen Obstpreise',
      'entscheiden → die Entscheidung',
    ],
  },
  'consecutive-connectors': {
    title: 'Expressing consequences',
    rule: 'sodass / so … dass start a clause with the verb at the end. In a new main clause folglich, infolgedessen, somit and daher are followed by the verb. zu … , als dass + Konjunktiv II means “too … to”: Es ist zu spät, als dass wir noch helfen könnten.',
    examples: [
      'Er hatte kaum Zeit, folglich musste er absagen.',
      'Es regnete so stark, dass das Fest ausfiel.',
      'Die Miete ist zu hoch, als dass ich sie zahlen könnte.',
    ],
  },
  'noun-verb-phrases': {
    title: 'Noun-verb phrases',
    rule: 'Formal German prefers fixed combinations of a noun and a verb: eine Entscheidung treffen, in Anspruch nehmen, zur Verfügung stehen, in Frage stellen, Bescheid geben. The noun carries the meaning, the verb is fixed and has to be learnt with it.',
    examples: [
      'eine Entscheidung treffen (= entscheiden)',
      'Rücksicht auf jemanden nehmen',
      'Das Angebot steht zur Verfügung.',
    ],
  },
  'passive-alternatives': {
    title: 'Alternatives to the passive',
    rule: 'Instead of the passive you can use man + active verb, sich lassen + infinitive (Das lässt sich lösen), sein + zu + infinitive (Das ist zu lösen) or an adjective in -bar / -lich (lösbar). The impersonal passive has no subject: Hier wird gearbeitet. Heute wird getanzt.',
    examples: [
      'Das Problem lässt sich lösen.',
      'Der Antrag ist bis Freitag einzureichen.',
      'Hier darf nicht geraucht werden.',
    ],
  },
  'irgend-pronouns': {
    title: 'irgend-, manche, sämtliche',
    rule: 'irgend- makes a word indefinite: irgendwer, irgendetwas, irgendwo, irgendein. For quantities use einige, manche, mehrere, etliche, sämtliche (all) or jeglich-; after them adjectives take plural endings: manche junge Leute, einige gute Ideen.',
    examples: [
      'Hat irgendjemand meinen Schlüssel gesehen?',
      'Manche Menschen trainieren täglich.',
      'Sämtliche Kosten werden erstattet.',
    ],
  },
  'modal-clauses': {
    title: 'How? By what means?',
    rule: 'indem (by …ing) and dadurch, dass give the means in a clause with the verb at the end. Short forms: durch + accusative, mithilfe von + dative, mittels + genitive. ohne … zu / ohne dass name what is missing.',
    examples: [
      'Man bleibt fit, indem man regelmäßig trainiert.',
      'Er verbesserte sich dadurch, dass er jeden Tag übte.',
      'Mithilfe einer App zählt sie ihre Schritte.',
    ],
  },
  'extended-participle': {
    title: 'The extended participle',
    rule: 'Before a noun a participle can carry extra information: article + information + participle with adjective ending + noun. Partizip I (-d) = at the same time (die lachenden Kinder), Partizip II = finished or passive (das in Köln gegründete Unternehmen). Check by turning it into a relative clause.',
    examples: [
      'das vom Kunden bestellte Produkt',
      'die an der Uni studierenden Frauen',
      'ein seit Jahren geplantes Projekt',
    ],
  },
  'adversative-connectors': {
    title: 'Expressing contrast',
    rule: 'während and wohingegen start a clause with the verb at the end. dagegen, hingegen, jedoch and demgegenüber begin a main clause, so the verb follows them directly. im Gegensatz zu takes the dative; einerseits … andererseits weighs two sides.',
    examples: [
      'Er mag Berge, wohingegen sie das Meer liebt.',
      'Sie lebt in der Stadt, er hingegen wohnt auf dem Land.',
      'Im Gegensatz zu Wien ist Graz ruhiger.',
    ],
  },
  'concessive-advanced': {
    title: 'Despite that: concessive connectors',
    rule: 'obwohl, obgleich, wenngleich and auch wenn start clauses with the verb at the end. dennoch and trotzdem open a main clause: verb second. zwar … aber / jedoch concede a point before the counter-argument. trotz and ungeachtet take the genitive.',
    examples: [
      'Wenngleich es teuer ist, kaufe ich es.',
      'Es regnete, dennoch gingen wir spazieren.',
      'Er ist zwar jung, aber sehr erfahren.',
    ],
  },
  'relative-wer': {
    title: 'wer, wen, wem … as relative pronouns',
    rule: 'wer / wen / wem / wessen introduce a clause about unspecified people (“whoever”), was about things. The case follows the verb of the relative clause; the main clause often starts with der / den / dem. The verb of the relative clause goes to the end.',
    examples: [
      'Wer zu spät kommt, muss draußen warten.',
      'Wem es nicht gefällt, der kann gehen.',
      'Was glänzt, ist nicht immer Gold.',
    ],
  },
  'stative-passive': {
    title: 'werden or sein with the participle?',
    rule: 'werden + participle describes the process (Das Bild wird restauriert). sein + participle describes the result (Das Bild ist restauriert). The Zustandspassiv answers “What state is it in?”, so it is only possible when the action can be finished.',
    examples: [
      'Das Fenster wird geöffnet. (process)',
      'Das Fenster ist geöffnet. (state)',
      'Die Ausstellung ist täglich geöffnet.',
    ],
  },
  'perfekt-double-infinitive': {
    title: 'Perfekt with a double infinitive',
    rule: 'With modal verbs and with hören, sehen, lassen + infinitive the Perfekt uses the infinitive instead of the participle: Ich habe ihn kommen hören. In a subordinate clause haben stands before the two infinitives: …, weil ich ihn habe kommen hören.',
    examples: [
      'Wir haben das Auto reparieren lassen.',
      'Ich habe sie singen hören.',
      'Er sagte, dass er hat gehen müssen.',
    ],
  },
  'adjective-prepositions': {
    title: 'Adjectives with fixed prepositions',
    rule: 'Many adjectives need a fixed preposition and case: stolz auf + Akk., zufrieden mit + Dat., abhängig von + Dat., verantwortlich für + Akk., interessiert an + Dat., bereit zu + Dat. Questions use wo(r)-: Worauf bist du stolz?',
    examples: [
      'Sie ist stolz auf ihre Tochter.',
      'Wir sind mit dem Service zufrieden.',
      'Er ist von seinen Eltern abhängig.',
    ],
  },
  'konjunktiv-1': {
    title: 'Indirect speech with Konjunktiv I',
    rule: 'Konjunktiv I is built from the infinitive stem + -e (er gehe, sie habe, er sei). If it looks like the indicative (ich, wir, sie plural), use Konjunktiv II or würde + infinitive. Past: sei / habe + participle. The tense of the original is not kept: only the verb mood shows that someone is quoting.',
    examples: [
      'Sie sagte, sie sei müde.',
      'Er behauptet, er habe nichts gewusst.',
      'Sie meinten, sie hätten keine Zeit.',
    ],
  },
  'modal-assumption': {
    title: 'Assumptions with modal verbs',
    rule: 'Present: muss (sure), dürfte (probably), könnte (maybe) + infinitive. Past: modal + infinitive Perfekt: Er muss es vergessen haben. kann nicht … sein means it is impossible. Add wohl or vielleicht for a weaker guess.',
    examples: [
      'Er muss krank sein.',
      'Sie dürfte schon abgereist sein.',
      'Das kann nicht stimmen.',
    ],
  },
} as const satisfies Record<string, Lesson>;

export type LessonId = keyof typeof LESSONS;
export const LESSON_IDS = Object.keys(LESSONS) as LessonId[];

export function isLessonId(value: string): value is LessonId {
  return Object.hasOwn(LESSONS, value);
}

/** Tags that only describe a broad area; a more specific grammar tag on the same activity wins. */
const BROAD: readonly TagId[] = [
  'verb-conjugation',
  'word-order',
  'questions',
  'pronouns',
  'articles',
];

/** A tag whose lesson already explains the listed tags (e.g. Wo?/Wohin? covers dative and accusative). */
const COVERS: Partial<Record<TagId, readonly TagId[]>> = {
  'two-way-prepositions': ['dative', 'accusative'],
  'dative-prepositions': ['dative', 'prepositions-of-time'],
  'adjective-endings': ['accusative', 'dative', 'comparison'],
  'object-pronouns': ['accusative', 'dative'],
  'reflexive-verbs': ['accusative', 'dative'],
  'n-declension': ['accusative', 'dative'],
  'konjunktiv-2': ['polite-forms'],
  comparison: ['superlative'],
  'relative-clauses': ['subordinate-clauses'],
  'indirect-questions': ['subordinate-clauses', 'questions'],
  'temporal-clauses': ['subordinate-clauses'],
  'purpose-clauses': ['subordinate-clauses'],
  'route-prepositions': ['two-way-prepositions'],
  possessives: ['accusative'],
  'separable-verbs': ['verb-conjugation'],
  'modal-verbs': ['verb-conjugation'],
  'verbs-with-prepositions': ['accusative', 'dative'],
  'verb-conjugation': ['pronouns'],
  'konjunktiv-1': ['konjunktiv-2'],
  'modal-hearsay': ['modal-verbs', 'perfekt'],
  'modal-assumption': ['modal-verbs', 'perfekt'],
  'perfekt-double-infinitive': ['perfekt', 'modal-verbs'],
  'concessive-advanced': ['concessive-clauses', 'subordinate-clauses', 'connectors'],
  'consecutive-connectors': ['subordinate-clauses', 'connectors'],
  'adversative-connectors': ['subordinate-clauses', 'connectors'],
  'modal-clauses': ['subordinate-clauses', 'infinitive-zu'],
  'comparative-clauses': ['comparison', 'subordinate-clauses'],
  'relative-wer': ['relative-clauses', 'subordinate-clauses'],
  'stative-passive': ['passive'],
  'passive-alternatives': ['passive'],
  'extended-participle': ['adjective-endings'],
  'adjective-prepositions': ['verbs-with-prepositions'],
  'noun-prepositions': ['verbs-with-prepositions'],
};

/**
 * The lesson for a set of activity tags, or undefined when the activity mixes several grammar
 * points (then items must name their lesson) or is not a grammar activity at all. Only activities
 * with the `grammar` skill qualify, so vocabulary games that merely mention articles stay quiet.
 */
export function lessonForTags(tags: readonly TagId[]): LessonId | undefined {
  if (!tags.includes('grammar')) return undefined;
  const points = tags.filter((t): t is TagId & LessonId => isLessonId(t));
  const covered = new Set(points.flatMap((t) => COVERS[t] ?? []));
  const left = points.filter((t) => !covered.has(t));
  const specific = left.filter((t) => !BROAD.includes(t));
  if (specific.length === 1) return specific[0];
  if (specific.length === 0 && left.length === 1) return left[0];
  return undefined;
}
