import { oldNorseSort } from '../src';

describe('Old Norse Alphabet sort', () => {
  test('Throws error on missing arguments', () => {
    expect(() => {
      oldNorseSort();
    }).toThrow('Missing argument: expects two strings as arguments');
  });

  test('Sorts by Old Norse alphabet', () => {
    const words = ['öðli', 'ógnan', 'æðrask', 'aðili', 'þakkan', 'áfir', 'á-auki', 'él-ligr', 'maðka', 'ef-lauss', 'œgir', 'áðr', 'maðr', 'madr', 'mæðr'];
    const expected = ['aðili', 'á-auki', 'áðr', 'áfir', 'ef-lauss', 'él-ligr', 'madr', 'maðka', 'maðr', 'mæðr', 'ógnan', 'þakkan', 'æðrask', 'œgir', 'öðli'];
    const result = [...words].sort((a, b) => oldNorseSort(a, b));

    expect(result).toEqual(expected);
  });

  test('Sorts applied after second letter (issue #45)', () => {
    const words = ['Mælingar', 'Minnisatriði'];
    const expected = ['Minnisatriði', 'Mælingar'];
    const result = [...words].sort((a, b) => oldNorseSort(a, b));

    expect(result).toEqual(expected);
  });

  test('Sorts cases with identical words (issue #48)', () => {
    const words = ['aðili', 'maðka', 'þakkan', 'maðka'];
    const expected = ['aðili', 'maðka', 'maðka', 'þakkan'];
    const result = [...words].sort((a, b) => oldNorseSort(a, b));

    expect(result).toEqual(expected);
  });
});
