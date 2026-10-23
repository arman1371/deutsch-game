export type TagGroup = 'skill' | 'topic' | 'grammar';

export interface TagInfo {
  label: string;
  group: TagGroup;
  emoji: string;
}

/**
 * Canonical tag vocabulary. Activities may only use ids from here (enforced by the content tests),
 * so filters stay consistent when new levels are added. Add new tags here first.
 */
export const TAGS = {
  // skills
  vocabulary: { label: 'Vocabulary', group: 'skill', emoji: '📚' },
  grammar: { label: 'Grammar', group: 'skill', emoji: '🧩' },
  listening: { label: 'Listening', group: 'skill', emoji: '🎧' },
  spelling: { label: 'Spelling', group: 'skill', emoji: '🔤' },
  communication: { label: 'Conversation', group: 'skill', emoji: '💬' },
  pronunciation: { label: 'Pronunciation', group: 'skill', emoji: '🗣️' },
  // topics
  greetings: { label: 'Greetings', group: 'topic', emoji: '👋' },
  introductions: { label: 'Introductions', group: 'topic', emoji: '🤝' },
  'countries-languages': { label: 'Countries & languages', group: 'topic', emoji: '🌍' },
  alphabet: { label: 'Alphabet & spelling', group: 'topic', emoji: '🔠' },
  numbers: { label: 'Numbers', group: 'topic', emoji: '🔢' },
  'phone-address': { label: 'Phone & address', group: 'topic', emoji: '📞' },
  family: { label: 'Family', group: 'topic', emoji: '👨‍👩‍👧' },
  hobbies: { label: 'Hobbies & free time', group: 'topic', emoji: '🎸' },
  weekdays: { label: 'Weekdays', group: 'topic', emoji: '📅' },
  'time-clock': { label: 'Clock time', group: 'topic', emoji: '🕒' },
  'daily-routine': { label: 'Daily routine', group: 'topic', emoji: '🌅' },
  'food-drinks': { label: 'Food & drinks', group: 'topic', emoji: '🥖' },
  shopping: { label: 'Shopping & prices', group: 'topic', emoji: '🛒' },
  // topics – A1.2
  'city-directions': { label: 'City & directions', group: 'topic', emoji: '🧭' },
  transport: { label: 'Public transport', group: 'topic', emoji: '🚌' },
  housing: { label: 'Housing', group: 'topic', emoji: '🏠' },
  'work-jobs': { label: 'Work & jobs', group: 'topic', emoji: '💼' },
  'health-body': { label: 'Health & body', group: 'topic', emoji: '🩺' },
  clothing: { label: 'Clothing', group: 'topic', emoji: '👕' },
  'weather-travel': { label: 'Weather & travel', group: 'topic', emoji: '🌦️' },
  celebrations: { label: 'Celebrations', group: 'topic', emoji: '🎉' },
  appointments: { label: 'Appointments & calls', group: 'topic', emoji: '📆' },
  'offices-services': { label: 'Offices & services', group: 'topic', emoji: '🏛️' },
  'describing-people': { label: 'Describing people', group: 'topic', emoji: '🧑' },
  'plans-wishes': { label: 'Plans & wishes', group: 'topic', emoji: '🌟' },
  household: { label: 'Household & rules', group: 'topic', emoji: '🧹' },
  // topics – A2.1
  'internet-media': { label: 'Internet & media', group: 'topic', emoji: '💻' },
  'events-plans': { label: 'Events & plans', group: 'topic', emoji: '🎭' },
  weather: { label: 'Weather', group: 'topic', emoji: '⛅' },
  'school-education': { label: 'School & education', group: 'topic', emoji: '🎓' },
  'job-search': { label: 'Job search', group: 'topic', emoji: '🔍' },
  'cv-career': { label: 'CV & career', group: 'topic', emoji: '📑' },
  // topics – A2.2
  sport: { label: 'Sport & fans', group: 'topic', emoji: '⚽' },
  'music-art': { label: 'Music & art', group: 'topic', emoji: '🎨' },
  'customs-etiquette': { label: 'Customs & etiquette', group: 'topic', emoji: '🎩' },
  'post-phone': { label: 'Post & phone', group: 'topic', emoji: '📮' },
  'money-banking': { label: 'Money & banking', group: 'topic', emoji: '🏦' },
  'life-stages': { label: 'Life stages', group: 'topic', emoji: '🧒' },
  // topics – B1.1
  'luck-happiness': { label: 'Luck & happiness', group: 'topic', emoji: '🍀' },
  'tv-film': { label: 'TV, series & film', group: 'topic', emoji: '📺' },
  'language-learning': { label: 'Languages & misunderstandings', group: 'topic', emoji: '🗣️' },
  'customer-service': { label: 'Customer service', group: 'topic', emoji: '🧾' },
  'living-together': { label: 'Living together', group: 'topic', emoji: '🏘️' },
  friendship: { label: 'Friendship & character', group: 'topic', emoji: '🤝' },
  'future-technology': { label: 'Future & technology', group: 'topic', emoji: '🤖' },
  environment: { label: 'Environment', group: 'topic', emoji: '♻️' },
  'mishaps-regrets': { label: 'Mishaps & regrets', group: 'topic', emoji: '🤦' },
  // topics – C1.1
  'time-stress': { label: 'Time & pace', group: 'topic', emoji: '⏳' },
  'digital-life': { label: 'Digital life', group: 'topic', emoji: '📱' },
  'language-communication': { label: 'Language & body language', group: 'topic', emoji: '🗨️' },
  'manners-complaints': { label: 'Manners & complaints', group: 'topic', emoji: '🙇' },
  tourism: { label: 'Tourism & sustainable travel', group: 'topic', emoji: '🧳' },
  workplace: { label: 'Workplace culture', group: 'topic', emoji: '🏢' },
  'career-goals': { label: 'Career paths & goals', group: 'topic', emoji: '🧭' },
  'study-science': { label: 'Study & science', group: 'topic', emoji: '🔬' },
  consumption: { label: 'Consumption & luxury', group: 'topic', emoji: '🛍️' },
  economy: { label: 'Economy & globalisation', group: 'topic', emoji: '🌐' },
  'society-volunteering': { label: 'Society & volunteering', group: 'topic', emoji: '🫶' },
  // topics – B1.2
  colleagues: { label: 'Colleagues & conflicts', group: 'topic', emoji: '🧑‍💼' },
  'digital-world': { label: 'Computers & digital life', group: 'topic', emoji: '🖥️' },
  'consumer-rights': { label: 'Consumption & consumer rights', group: 'topic', emoji: '🛍️' },
  'further-education': { label: 'Further education & courses', group: 'topic', emoji: '📖' },
  'rules-manners': { label: 'Rules & cultural differences', group: 'topic', emoji: '📜' },
  volunteering: { label: 'Volunteering', group: 'topic', emoji: '🙌' },
  'politics-society': { label: 'Politics & society', group: 'topic', emoji: '🗳️' },
  history: { label: 'History', group: 'topic', emoji: '🏛️' },
  'city-country': { label: 'City, country & tourism', group: 'topic', emoji: '🏙️' },
  'home-europe': { label: 'Home & Europe', group: 'topic', emoji: '🇪🇺' },
  'theatre-art': { label: 'Theatre & art', group: 'topic', emoji: '🎭' },
  'opinions-presenting': { label: 'Opinions & presentations', group: 'topic', emoji: '🎤' },
  // grammar points
  'word-order': { label: 'Word order', group: 'grammar', emoji: '↔️' },
  questions: { label: 'Questions', group: 'grammar', emoji: '❓' },
  pronouns: { label: 'Personal pronouns', group: 'grammar', emoji: '🙋' },
  'verb-conjugation': { label: 'Verb conjugation', group: 'grammar', emoji: '⚙️' },
  articles: { label: 'Articles', group: 'grammar', emoji: '🏷️' },
  negation: { label: 'Negation (kein)', group: 'grammar', emoji: '🚫' },
  plurals: { label: 'Plurals', group: 'grammar', emoji: '➕' },
  possessives: { label: 'Possessive articles', group: 'grammar', emoji: '🔑' },
  'prepositions-of-time': { label: 'Time prepositions', group: 'grammar', emoji: '⏰' },
  'separable-verbs': { label: 'Separable verbs', group: 'grammar', emoji: '✂️' },
  accusative: { label: 'Accusative', group: 'grammar', emoji: '🎯' },
  'modal-verbs': { label: 'Modal verbs', group: 'grammar', emoji: '💪' },
  // grammar points – A1.2
  dative: { label: 'Dative', group: 'grammar', emoji: '🎁' },
  'object-pronouns': { label: 'mich, dich, ihn… / mir, dir…', group: 'grammar', emoji: '👉' },
  'two-way-prepositions': { label: 'Wo? / Wohin?', group: 'grammar', emoji: '📍' },
  imperative: { label: 'Imperative', group: 'grammar', emoji: '📣' },
  'past-tense': { label: 'Präteritum (war, ging …)', group: 'grammar', emoji: '⏪' },
  perfekt: { label: 'Perfekt', group: 'grammar', emoji: '✔️' },
  comparison: { label: 'Comparison', group: 'grammar', emoji: '⚖️' },
  'ordinal-numbers': { label: 'Ordinal numbers', group: 'grammar', emoji: '🥇' },
  conjunctions: { label: 'und / oder / aber / denn', group: 'grammar', emoji: '🔗' },
  'polite-forms': { label: 'würde / könnte', group: 'grammar', emoji: '🎩' },
  // grammar points – A2.1
  'reflexive-verbs': { label: 'Reflexive verbs', group: 'grammar', emoji: '🪞' },
  genitive: { label: 'Genitive (Annas, des, der)', group: 'grammar', emoji: '👑' },
  'indefinite-pronouns': { label: 'man / jemand / etwas / welche', group: 'grammar', emoji: '❔' },
  'subordinate-clauses': { label: 'weil / wenn clauses', group: 'grammar', emoji: '🔚' },
  connectors: { label: 'deshalb / trotzdem / dann', group: 'grammar', emoji: '➡️' },
  superlative: { label: 'Superlative', group: 'grammar', emoji: '🏆' },
  'dative-prepositions': { label: 'mit / von / zu / seit', group: 'grammar', emoji: '🧲' },
  // grammar points – A2.2
  'konjunktiv-2': { label: 'Konjunktiv II', group: 'grammar', emoji: '💭' },
  'relative-clauses': { label: 'Relative clauses', group: 'grammar', emoji: '🔗' },
  'indirect-questions': { label: 'Indirect questions', group: 'grammar', emoji: '🙋' },
  'temporal-clauses': { label: 'als / wenn / bis / seitdem', group: 'grammar', emoji: '⏳' },
  'purpose-clauses': { label: 'damit / um … zu', group: 'grammar', emoji: '🎯' },
  passive: { label: 'Passive voice', group: 'grammar', emoji: '🔄' },
  'verbs-with-prepositions': { label: 'Verbs with prepositions', group: 'grammar', emoji: '📎' },
  'adjective-endings': { label: 'Adjective endings', group: 'grammar', emoji: '🏷️' },
  'n-declension': { label: 'n-Deklination', group: 'grammar', emoji: '🅽' },
  'word-formation': { label: 'Word formation', group: 'grammar', emoji: '🧱' },
  lassen: { label: 'lassen', group: 'grammar', emoji: '🤲' },
  'route-prepositions': { label: 'durch / entlang / vorbei', group: 'grammar', emoji: '🛣️' },
  // grammar points – B1.1
  plusquamperfekt: { label: 'Plusquamperfekt', group: 'grammar', emoji: '⏮️' },
  'concessive-clauses': { label: 'obwohl / trotzdem', group: 'grammar', emoji: '🤷' },
  'genitive-prepositions': { label: 'wegen / trotz / während', group: 'grammar', emoji: '🧷' },
  'infinitive-zu': { label: 'Infinitive with zu', group: 'grammar', emoji: '➰' },
  'two-part-conjunctions': {
    label: 'nicht nur … sondern auch',
    group: 'grammar',
    emoji: '🪢',
  },
  'adjectives-as-nouns': { label: 'Adjectives as nouns', group: 'grammar', emoji: '🧑‍🤝‍🧑' },
  'futur-1': { label: 'Futur I', group: 'grammar', emoji: '🔮' },
  'konjunktiv-2-past': { label: 'hätte gemacht / wäre gegangen', group: 'grammar', emoji: '🕰️' },
  // grammar points – C1.1
  'formal-connectors': {
    label: 'andernfalls / folglich / hingegen',
    group: 'grammar',
    emoji: '🧭',
  },
  'subjective-modals': { label: 'Subjective modal verbs', group: 'grammar', emoji: '🕵️' },
  'reported-speech': { label: 'Reported speech (Konjunktiv I)', group: 'grammar', emoji: '🗣️' },
  'noun-verb-phrases': { label: 'Noun-verb phrases', group: 'grammar', emoji: '🧩' },
  'concessive-restrictive': { label: 'wenngleich / es sei denn', group: 'grammar', emoji: '⚖️' },
  'es-functions': { label: 'Functions of es', group: 'grammar', emoji: '🔤' },
  intensifiers: { label: 'Graduating adjectives', group: 'grammar', emoji: '🎚️' },
  'unreal-consecutive': { label: 'zu … als dass / so … dass', group: 'grammar', emoji: '⛓️' },
  'participial-attributes': { label: 'Participles before nouns', group: 'grammar', emoji: '🧬' },
  'prefix-verbs': { label: 'Separable & inseparable prefixes', group: 'grammar', emoji: '🪛' },
  'nominal-style': { label: 'Nominal style', group: 'grammar', emoji: '🏛️' },
  'modal-alternatives': { label: 'sein … zu / sich lassen', group: 'grammar', emoji: '🔀' },
  // grammar points – B1.2
  'je-desto': { label: 'je … desto', group: 'grammar', emoji: '📈' },
  'als-ob': { label: 'als ob', group: 'grammar', emoji: '🫥' },
  'participles-as-adjectives': {
    label: 'Participles as adjectives',
    group: 'grammar',
    emoji: '🏃',
  },
  'modal-particles': { label: 'Modal particles (doch, ja, mal)', group: 'grammar', emoji: '🧂' },
  'indem-ohne-dass': { label: 'indem / ohne dass / statt dass', group: 'grammar', emoji: '🛠️' },
  'passive-past': { label: 'Passive: wurde / ist … worden', group: 'grammar', emoji: '📜' },
  'relative-wo-was': { label: 'Relative wo / was', group: 'grammar', emoji: '📌' },
  'nicht-position': { label: 'Position of nicht', group: 'grammar', emoji: '🙅' },
  'consecutive-clauses': { label: 'sodass / so … dass', group: 'grammar', emoji: '⤵️' },
} as const satisfies Record<string, TagInfo>;

export type TagId = keyof typeof TAGS;
export const TAG_IDS = Object.keys(TAGS) as TagId[];

export const GROUP_LABELS: Record<TagGroup, string> = {
  skill: 'Skill',
  topic: 'Topic',
  grammar: 'Grammar point',
};

export function tagsInGroup(group: TagGroup): TagId[] {
  return TAG_IDS.filter((id) => TAGS[id].group === group);
}

export function isTagId(value: string): value is TagId {
  return Object.hasOwn(TAGS, value);
}
