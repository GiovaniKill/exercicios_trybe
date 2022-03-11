let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector){
    let evens = [];
    for(let array of vector){
        for(let number of array){
            if(number % 2 == 0){
                evens.push(number);
            }
        }
    }

    return evens;
}

console.log(arrayOfNumbers(vector));