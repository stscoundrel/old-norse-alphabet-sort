const { LOWER_CASE } = require('old-norse-alphabet')

const oldNorseSort = (a, b) => {
  if (a === undefined || b === undefined) throw new Error('Missing argument: expects two strings as arguments')

  const alphabet = buildAlphabet()

  const indexA = alphabet.indexOf(a[0])
  const indexB = alphabet.indexOf(b[0]);

  if (indexA === indexB) {
    if (a < b) {
      return -1;
    } if (a > b) {
      return 1;
    }
    return 0;
  }
  return indexA - indexB;
}

/**
 * Based on alphabet constant, but adds both upper & lowercase variants in order.
 */
const buildAlphabet = () => {
  const alphabet = []

  LOWER_CASE.forEach((letter) => {
    alphabet.push(letter)
    alphabet.push(letter.toUpperCase())
  })

  alphabet.push('ö')
  alphabet.push('Ö')

  return alphabet.join('')
}

module.exports = {
  oldNorseSort,
}
