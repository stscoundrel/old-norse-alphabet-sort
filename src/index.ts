import { LOWER_CASE } from 'old-norse-alphabet';

function buildAlphabet(): string {
  return [...LOWER_CASE, 'ö'].join('');
}

export function oldNorseSort(a: string, b: string): number {
  if (a === undefined || b === undefined) throw new Error('Missing argument: expects two strings as arguments');

  const alphabet: string = buildAlphabet();

  const indexA: number = alphabet.indexOf(a[0].toLowerCase());
  const indexB: number = alphabet.indexOf(b[0].toLowerCase());

  if (indexA === indexB) {
    return a.localeCompare(b, 'is');
  }
  return indexA - indexB;
}

export default {
  oldNorseSort,
};
