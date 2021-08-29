import { LOWER_CASE } from 'old-norse-alphabet';

function buildAlphabet(): string {
  return [...LOWER_CASE, 'ö'].join('');
}

const compare = (a: string, b: string, index: number, alphabet: string) : number => {
  if (a.toLocaleLowerCase() === b.toLocaleLowerCase()) {
    return 0;
  }

  if (a.length <= index) return -1;
  if (b.length <= index) return 1;

  const indexA: number = alphabet.indexOf(a[index]?.toLowerCase());
  const indexB: number = alphabet.indexOf(b[index]?.toLowerCase());

  if (indexA === -1 && indexB !== -1) return 1;
  if (indexB === -1 && indexA !== -1) return -1;

  if (indexA === indexB) {
    const newIndex = index + 1;

    return compare(a, b, newIndex, alphabet);
  }

  return indexA - indexB;
};

export function oldNorseSort(a: string, b: string): number {
  if (a === undefined || b === undefined) throw new Error('Missing argument: expects two strings as arguments');

  const alphabet: string = buildAlphabet();

  return compare(a, b, 0, alphabet);
}

export default {
  oldNorseSort,
};
