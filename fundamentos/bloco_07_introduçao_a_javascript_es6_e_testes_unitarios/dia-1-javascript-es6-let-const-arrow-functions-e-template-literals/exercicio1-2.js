const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const order = (array) => `Os números ${array.sort((a, b) => a - b).join(', ')} se encontram ordenados de forma crescente!`

console.log(order(oddsAndEvens)); // será necessário alterar essa linha 😉