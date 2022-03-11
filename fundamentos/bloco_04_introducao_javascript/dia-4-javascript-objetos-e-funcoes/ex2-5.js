let test = [2, 3, 2, 5, 8, 2, 3, 8, 9, 3, 0, 8, 4, 7, 8, 3, 6, 6, 8, 8];



function mostRepetitive(array){
    let biggestHits = 0;
    let winner;

    for(let number of array){

        let pretendantHits = 0;

        for(var number2 of array){
            if(number == number2){
                pretendantHits +=1;
            }
        }
        if(pretendantHits > biggestHits){
            biggestHits = pretendantHits
            winner = number
        }
    }

    return winner;

}

console.log(mostRepetitive(test))