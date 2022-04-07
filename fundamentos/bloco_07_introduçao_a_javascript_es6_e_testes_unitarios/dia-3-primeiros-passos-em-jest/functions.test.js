const { it, expect } = require('@jest/globals');
const { describe } = require('yargs');
const {sum, myRemove, myFizzBuzz} = require('./functions');


it('Veririfica se o retorno de 4 e 5 é 9', () => {
    expect(sum(4, 5)).toBe(9);
});

it('Veririfica se o retorno de 0 e 0 é 0', () => {
    expect(sum(0, 0)).toBe(0);
});

it('Veririfica se o retorno de 4 e \"5\" é \"parameters must be numbers\"', () => {
    expect(() => {sum(3, '5')}).toThrowError('parameters must be numbers');
})


it('Verifica se as entradas [1, 2, 3, 4] e 3 retornam [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
})

it('Verifica se as entradas [1, 2, 3, 4] e 3 não retornam [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
})

it('Verifica se as entradas [1, 2, 3, 4] e 5 retornam [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
})

it('Verifica se o número 15 retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz')
})

it('Verifica se o número 6 retorna fizz', () => {
    expect(myFizzBuzz(3)).toMatch('fizz')
})

it('Verifica se o número 10 retorna buzz', () => {
    expect(myFizzBuzz(10)).toMatch('buzz')
})

it('Verifica se o número 22 retorna 22', () => {
    expect(myFizzBuzz(22)).toBe(22)
})

it('Verifica se um valor não númerico retorna false', () => {
    expect(myFizzBuzz('b')).toEqual(false)
})