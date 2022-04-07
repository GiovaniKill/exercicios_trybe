const draw = (num, func) => {
    const result = Math.floor(Math.random() * 5 + 1);
    return func(num, result);
}

const verifyNumber = (num, result) => num === result ? 'Parabéns, você ganhou!' : 'Tente novamente...';

console.log(draw(2, verifyNumber));
