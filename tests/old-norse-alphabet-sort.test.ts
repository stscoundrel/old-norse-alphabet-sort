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
});
