let test = [2, 3, 6, 7, 10, 1];

function biggestNumberIndex(array){

    let pretendente = array[0];

    for(let index in array){

        //O index é uma string no for/in, então tenho que convertê-lo
        let indexInt = parseInt(index);

        if(array[indexInt + 1] > pretendente){
            pretendente = array[indexInt + 1]
        }
    }
    
    return array.indexOf(pretendente);
}

console.log(biggestNumberIndex(test));