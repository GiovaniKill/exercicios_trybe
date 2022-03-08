let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for(let index = 0; index < numbers.length; index+=1){
    sum += numbers[index];
    if(index == numbers.length - 1){
        if(sum <= 20){
            console.log("Valor menor ou igual a vinte");
        }else{
            console.log("Valor maior que 20")
        }
        
    }
}