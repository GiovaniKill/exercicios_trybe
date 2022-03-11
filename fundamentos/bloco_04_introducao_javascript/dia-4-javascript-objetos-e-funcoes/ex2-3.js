let test = [2, 4, 6, 7, 10, 0, -3];

function smallestNumberIndex(array){
    let pretendente = array[0];

    for(index=0; index<test.length; index++){
        if(array[index + 1] < pretendente){
            pretendente = array[index + 1]
        }
    }

    return array.indexOf(pretendente)
}

console.log(smallestNumberIndex(test));