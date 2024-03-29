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

  test('Sorts cases mixed upper/lower casing (issue #51)', () => {
    const words = ['aðili', 'maðka', 'þakkan', 'adal', 'ADAL', 'maðka'];
    const expected = ['adal', 'ADAL', 'aðili', 'maðka', 'maðka', 'þakkan'];
    const result = [...words].sort((a, b) => oldNorseSort(a, b));

    expect(result).toEqual(expected);
  });

  test('Sorts cases special characters (issue #51)', () => {
    const words = ['aðili', 'maðka', 'þakkan', 'adal', 'adal-', 'maðka'];
    const expected = ['adal', 'adal-', 'aðili', 'maðka', 'maðka', 'þakkan'];
    const result = [...words].sort((a, b) => oldNorseSort(a, b));

    expect(result).toEqual(expected);
  });

  test('Notices word length when sorting', () => {
    const words = ['aðild', 'AÐAL', 'abbast', 'aðal-vellir', 'AÐA', 'abbindi'];
    const expected = ['abbast', 'abbindi', 'AÐA', 'AÐAL', 'aðal-vellir', 'aðild'];
    const result = [...words].sort((a, b) => oldNorseSort(a, b));

    expect(result).toEqual(expected);
  });

  test('Sorts uncommon, loaned letters (issue #56)', () => {
    const words = ['Gerzkr', 'ger', 'hal-dreki', 'ÆZLI', 'gervi', 'eyxn', 'halzi', 'æxling'];
    const expected = ['eyxn', 'ger', 'gervi', 'Gerzkr', 'hal-dreki', 'halzi', 'æxling', 'ÆZLI'];
    const result = [...words].sort((a, b) => oldNorseSort(a, b));

    expect(result).toEqual(expected);
  });
});
