let n = 9;

//A primeira linha sempre terá (n-1)/2 espaços, um asterístico e a primeira parte de novo
//A partir da segunda a lógica muda, a quantidade de espaços no começo e no final é n menos 1+3+5..., a quantidade de asterísticos é igual em todas as linhas, a não ser na última, a quantidade de espaços no meio é 1+3+5, então colocarei esse valor no index


//Primeira linha
let primeiraLinha = "";

for(index = 1; index <= (n-1)/2; index++){
    primeiraLinha += " "
}

primeiraLinha += "*"

for(index = 1; index <= (n-1)/2; index++){
    primeiraLinha += " "
}

console.log(primeiraLinha);


//Linhas do meio

for(index2 = 1; index2 <= (n-2); index2+=2){
    let linhaCheia = "";
    //Espaços antes do asterísco
    for(index3 = 1; index3 <= (n-(index2 + 2))/2; index3++){
        linhaCheia += " ";
    }

    linhaCheia += "*"
    //Espaços entre os asterísticos
    for(index4 = 1; index4 <= index2; index4++){
        linhaCheia +=" ";
    }

    linhaCheia += "*"
    //Espaços depois do asterístico
    for(index5 = 1; index5 <= (n-(index2 + 2))/2; index5++){
        linhaCheia += " ";
    }
    
    console.log(linhaCheia)
}

//Última linha

let ultimaLinha = "";

for(indexCheia = 1; indexCheia <= n; indexCheia++){
    ultimaLinha += "*";
}

console.log(ultimaLinha);