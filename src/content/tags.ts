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
  'past-tense': { label: 'war / hatte', group: 'grammar', emoji: '⏪' },
  perfekt: { label: 'Perfekt', group: 'grammar', emoji: '✔️' },
  comparison: { label: 'Comparison', group: 'grammar', emoji: '⚖️' },
  'ordinal-numbers': { label: 'Ordinal numbers', group: 'grammar', emoji: '🥇' },
  conjunctions: { label: 'und / oder / aber / denn', group: 'grammar', emoji: '🔗' },
  'polite-forms': { label: 'würde / könnte', group: 'grammar', emoji: '🎩' },
  // grammar points – A2.1
  'reflexive-verbs': { label: 'Reflexive verbs', group: 'grammar', emoji: '🪞' },
  genitive: { label: 'Genitive with names', group: 'grammar', emoji: '👑' },
  'indefinite-pronouns': { label: 'einen / welche / etwas / man', group: 'grammar', emoji: '❔' },
  'subordinate-clauses': { label: 'weil / wenn clauses', group: 'grammar', emoji: '🔚' },
  connectors: { label: 'deshalb / zuerst – dann', group: 'grammar', emoji: '➡️' },
  superlative: { label: 'Superlative', group: 'grammar', emoji: '🏆' },
  'dative-prepositions': { label: 'mit / von / zu / seit', group: 'grammar', emoji: '🧲' },
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
