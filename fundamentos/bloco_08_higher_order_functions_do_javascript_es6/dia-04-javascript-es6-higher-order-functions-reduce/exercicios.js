const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  function flatten() {
    return arrays.reduce((newArray, value) => newArray.concat(value))
  }

  /* console.log(flatten()); */

  function reduceNames() {
    return `${books.reduce((acc, value) => `${acc} ${value.author.name},`, ``)}`
  }  

  /* console.log(reduceNames()); */

  function averageAge() {
    return books.reduce((acc, value) => acc + (value.releaseYear - value.author.birthYear), 0) / books.length
  }

  /* console.log(averageAge()); */

  function longestNamedBook(array) {
    return array.reduce((bigger, book) => bigger.name.length > book.name.length ? bigger : book, array[0])
  }

  /* console.log(longestNamedBook(books)); */

  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  function containsA() {
    return names.reduce((acc, name) => acc + name.match(/a/gi).length, 0)
  }

  /* console.log(containsA()); */

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  return students.map((nome, index) => ({name: nome, media: grades[index].reduce((acc, grade) => acc + grade) / grades[index].length}))
}

/* console.log(studentAverage()) */

