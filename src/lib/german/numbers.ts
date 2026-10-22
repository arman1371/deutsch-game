const ONES = [
  'null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn',
  'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn',
];
const TENS = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];

/** 0–99. `attributive` drops the final -s of "eins" (ein Euro, einundzwanzig). */
function below100(n: number): string {
  if (n < 20) return ONES[n] as string;
  const t = Math.floor(n / 10);
  const o = n % 10;
  if (o === 0) return TENS[t] as string;
  const one = o === 1 ? 'ein' : (ONES[o] as string);
  return `${one}und${TENS[t]}`;
}

function below1000(n: number): string {
  if (n < 100) return below100(n);
  const h = Math.floor(n / 100);
  const rest = n % 100;
  const head = `${h === 1 ? 'ein' : ONES[h]}hundert`;
  return rest === 0 ? head : `${head}${below100(rest)}`;
}

/** Cardinal numbers 0–999 999 as one German word, e.g. 21 → "einundzwanzig". */
export function numberToGerman(n: number): string {
  if (!Number.isInteger(n) || n < 0 || n > 999_999) throw new RangeError(`Unsupported number: ${n}`);
  if (n < 1000) return below1000(n);
  const thousands = Math.floor(n / 1000);
  const rest = n % 1000;
  const head = thousands === 1 ? 'eintausend' : `${below1000(thousands)}tausend`;
  return rest === 0 ? head : `${head}${below1000(rest)}`;
}

/** Spoken digit-by-digit form for phone numbers: "0151 234" → "null eins fünf eins zwei drei vier". */
export function digitsToGerman(digits: string): string {
  return digits
    .replace(/\D/g, '')
    .split('')
    .map((d) => ONES[Number(d)] as string)
    .join(' ');
}

/** Letter names in German, used by spelling games. */
export const LETTER_NAMES: Record<string, string> = {
  a: 'a', b: 'be', c: 'ce', d: 'de', e: 'e', f: 'ef', g: 'ge', h: 'ha', i: 'i', j: 'jot',
  k: 'ka', l: 'el', m: 'em', n: 'en', o: 'o', p: 'pe', q: 'ku', r: 'er', s: 'es', t: 'te',
  u: 'u', v: 'fau', w: 'we', x: 'ix', y: 'ypsilon', z: 'zett', ä: 'a-Umlaut', ö: 'o-Umlaut',
  ü: 'u-Umlaut', ß: 'Eszett',
};

export function spellOut(word: string): string {
  return word
    .toLowerCase()
    .split('')
    .map((c) => LETTER_NAMES[c] ?? c)
    .join(' ');
}

export function formatPrice(cents: number): string {
  const euros = Math.floor(cents / 100);
  const rest = cents % 100;
  return `${euros},${String(rest).padStart(2, '0')} €`;
}

/** Spoken price: 250 → "zwei Euro fünfzig", 100 → "ein Euro", 80 → "achtzig Cent". */
export function priceToGerman(cents: number): string {
  const euros = Math.floor(cents / 100);
  const rest = cents % 100;
  const e = euros === 1 ? 'ein Euro' : `${numberToGerman(euros)} Euro`;
  if (euros === 0) return `${numberToGerman(rest)} Cent`;
  if (rest === 0) return e;
  return `${e} ${numberToGerman(rest)}`;
}
