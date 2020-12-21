const { LOWER_CASE } = require('old-norse-alphabet')

const oldNorseSort = (a, b) => {
  if (a === undefined || b === undefined) throw new Error('Missing argument: expects two strings as arguments')

  const alphabet = buildAlphabet()

  const indexA = alphabet.indexOf(a[0].toLowerCase())
  const indexB = alphabet.indexOf(b[0].toLowerCase())

  if (indexA === indexB) {
    return a.localeCompare(b, 'is')
  }
  return indexA - indexB;
}


const buildAlphabet = () => {
  return [...LOWER_CASE, 'ö'].join('')
}

module.exports = {
  oldNorseSort,
}
