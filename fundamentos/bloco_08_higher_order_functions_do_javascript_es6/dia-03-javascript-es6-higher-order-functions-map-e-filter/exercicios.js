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
  
  // Adicione o código do exercício aqui:

  function formatedBookNames(array) {
    const newArray = array.map(book => `${book.name} - ${book.genre} - ${book.author.name}`)
    return newArray
  }

/*   console.log(formatedBookNames(books)); */

function nameAndAge(array) {
    const newArray = array.map(book => ({age: book.releaseYear - book.author.birthYear, author: book.author.name,})).sort((a, b) => a.age - b.age);
    return newArray;
  }

  /* console.log(nameAndAge(books)); */

function fantasyOrScienceFiction(array) {
    const newArray = books.filter(book => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
    return newArray;
}

/* console.log(fantasyOrScienceFiction(books)); */

function oldBooksOrdered(array, anoAtual) {
    const newArray = array.filter((book => anoAtual - book.releaseYear > 60)).sort((a, b) => a.releaseYear - b.releaseYear);
    return newArray;
  }

  /* console.log(oldBooksOrdered(books, 2022)); */

  function fantasyOrScienceFictionAuthors(array) {
    const newArray = array.filter(book => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').map(book => book.author.name).sort()
    return newArray;
  }

  /* console.log(fantasyOrScienceFictionAuthors(books)); */

  function oldBooks(array, anoAtual) {
    const newArray = array.filter(book => anoAtual - book.releaseYear > 60).map(book => book.name);
    return newArray;
  }

  /* console.log(oldBooks(books, 2022)); */

  function authorWith3DotsOnName(array) {
      // Achei esse uso de regex para contar a quantidade de um caracter em uma string em https://www.codegrepper.com/code-examples/javascript/javascript+count+character+in+string, o || [] é usado para caso o match retorne null
    return array.filter(book => (book.author.name.match(/\./g) || []).length === 3)[0].author.name
  }

  /* console.log(authorWith3DotsOnName(books)); */
