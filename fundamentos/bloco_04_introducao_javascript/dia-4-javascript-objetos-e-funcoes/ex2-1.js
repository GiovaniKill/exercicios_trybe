

function isPalindrom(word){
    let drow = word.split('')

    drow.reverse(); 

    let drowJoin = drow.join('');

    if(drowJoin == word){
        return true;
    }
    return false;
}

console.log(isPalindrom('arara'))

