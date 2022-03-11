function sumAllPrevious(num){
    let sum = 0;
    let message = "";

    for(index = 1; index <= num; index++){
        sum += index;
    }

    return sum;
}

console.log(sumAllPrevious(5))