let test = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName(array){
    let pretendant = array[0];

    for(let name of array){
        if(name.length > pretendant.length){
            pretendant = name;
        }
    }

    return pretendant;

}

console.log(biggestName(test));