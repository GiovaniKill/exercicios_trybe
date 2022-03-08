let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let total = 0;

for(let index = 0; index < numbers.length; index++){
    if(!(numbers[index] % 2 == 0)){
        total += 1;
    }
}

if (total > 0){
    console.log("Existem um total de " + total + " números ímpares.")
}else {
    console.log("Nenhum valor ímpar encontrado.")
}