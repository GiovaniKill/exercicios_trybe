let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplication = [];

for(let index = 0; index < numbers.length; index++){
    if(index < numbers.length - 1){
        let resultado = numbers[index] * numbers[index + 1];
        multiplication.push(resultado);
    }else{
        let resultado = numbers[index] * 2
        multiplication.push(resultado);
    }
    
}

console.log(multiplication);