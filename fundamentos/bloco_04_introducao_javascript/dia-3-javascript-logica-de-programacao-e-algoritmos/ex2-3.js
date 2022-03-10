let n = 5;

for(index = 1; index <= n; index++){
    let linha = "";
    for(index2 = 1; index2 <= n - index; index2++){
        linha += " "
    }
    for(index3 = 1; index3 <= index; index3++){
        linha += "*"
    }
    console.log(linha)    
}