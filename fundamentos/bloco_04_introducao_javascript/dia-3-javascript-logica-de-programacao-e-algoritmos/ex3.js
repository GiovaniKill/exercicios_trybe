let array = ['java', 'javascript', 'python', 'html', 'css'];
let index = [];

for(let i = 0; i < array.length; i++){
    index.push(array[i].length)
}

 let pretendenteMaior = index[0];

for(let i = 1; i <= index.length; i++){
    if(pretendenteMaior < index[i]){
        pretendenteMaior = index[i]
    }
}

console.log("A maior palavra é " + array[index.indexOf(pretendenteMaior)]);

let pretendenteMenor = index[0];

for(let i = 1; i <= index.length; i++){
    if(pretendenteMenor > index[i]){
        pretendenteMenor = index[i]
    }
}

console.log("A menor palavra é " + array[index.indexOf(pretendenteMenor)]);