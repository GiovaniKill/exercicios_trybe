let word = "trybe"
let ending = "be"

function checkTheEnd(word, ending){

    let divisor = word[word.length - ending.length - 1]
    let broken = word.split(divisor)
    if(ending == broken[1]){
        return true;
    }else{
        return false;
    }
}   

console.log(checkTheEnd(word, ending))
