//Precisamos do valor de cada algarismo
//Se um número for antecedido por um número menor que ele, devemos subtrair o menor do maior

function romansToOurs(string){
    let values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    string = string.split("")

    let finalNumber = 0;

    for(index = 0; index < string.length; index++){
        let first = string[index]
        let second = string[index+1]
        if(values[first] > values[second] || values[first] == values[second]){
            finalNumber += values[first]
        }else{
            if(index == string.length - 1){
                finalNumber += values[first];
            }else{
                finalNumber += values[second] - values[first]
                index++
            }
        }
    }

    return finalNumber;

}

console.log(romansToOurs("CMXCIX"))