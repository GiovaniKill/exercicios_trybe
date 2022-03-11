let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  let ultimoMoradorB2 = moradores["blocoDois"][moradores["blocoDois"].length - 1]

  console.log("O morador do bloco 2 de nome " + ultimoMoradorB2.nome + " " + ultimoMoradorB2.sobrenome + " mora no " + ultimoMoradorB2.andar + "º andar, apartamento " + ultimoMoradorB2.apartamento)