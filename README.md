# Old Norse Alphabet Sort

Sort arrays by Old Norse alphabet in Node.js.

Usually localeCompare() or Intl.Collator() is enough to get alphabetical order, but there are edge cases like Icelandic and Old Norse alphabets. LocaleCompare seems to have hard time properly telling apart letters like a, æ or á. This package provides custom sorter for getting old norse alphabetical order just right.

Depends on [Old Norse Alphabet](https://github.com/stscoundrel/old-norse-alphabet) package.  

### Install

`yarn add old-norse-alphabet-sort`

### Usage

With simple arrays:


```javascript
const { oldNorseSort } = require('old-norse-alphabet-sort')

const words = ['öðli', 'ógnan', 'æðrask', 'aðili', 'þakkan', 'áfir', 'él-ligr', 'ef-lauss', 'œgir', 'maðr']

const sortedWords = [...words].sort((a, b) => oldNorseSort(a, b))
// ['aðili', 'áfir', 'ef-lauss', 'él-ligr', 'maðr', 'ógnan', 'þakkan', 'æðrask', 'œgir', 'öðli']

```

With arrays of objects:


```javascript
const { oldNorseSort } = require('old-norse-alphabet-sort')

const words = [
  {
    word: 'æðrask',
    definitions: [...]
  },
  {
    word: 'af-burðr',
    definitions: [...],
  }
]

const sortedWords = [...words].sort((a, b) => oldNorseSort(a.word, b.word))

```

### About Old Norse

[Old Norse](https://en.wikipedia.org/wiki/Old_Norse) was a North Germanic language that was spoken by inhabitants of Scandinavia and their overseas settlements from about the 7th to the 15th centuries.