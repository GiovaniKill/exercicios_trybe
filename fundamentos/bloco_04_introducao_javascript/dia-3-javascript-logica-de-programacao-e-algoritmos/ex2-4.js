let n = 99;

//A pirâmide funcionará diferente caso n seja par ou ímpar, pois imprimiremos a partir da primeira linha, e está variará de acordo
//Para valores ímpares:
//Primeiro adiciono (n-1)/2 espaços
//Depois adiciono 1 + index asterísticos
//Depois repito o primeiro passo
//Para valores pares o processo é similar, como usamos o index como parâmetro para os espaços e os asterísticos, se mudarmos o valor inicial dele de ímpar para par, tudo funciona como o esperado
if(n % 2 == 0){

    for(let index = 2; index <= n; index+=2){

        let linhas = ""
        for(let espacos = 1; espacos <= (n-index)/2; espacos++){
            linhas += " "
        }
        for(let asteristicos = 1; asteristicos <= index; asteristicos++){
            linhas += "*"
        }
        for(let espacos = 1; espacos <= (n-index)/2; espacos++){
            linhas += " "
        }
        console.log(linhas);
    }

}else{

    for(let index = 1; index <= n; index+=2){

        let linhas = "";
        for(let espacos1 = 1; espacos1 <= (n-index)/2; espacos1++){
            linhas += " ";
        }
        for(let asteristicos = 1; asteristicos <= index; asteristicos++){
            linhas += "*"
        }
        for(let espacos2 = 1; espacos2 <= (n-index)/2; espacos2++){
            linhas += " ";
        }
        console.log(linhas);
    }
    
}


