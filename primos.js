//Insira um número que não termine em 0, 2, 4, 5, 6 ou 8
let n = 100123456789;
let isPrime = true;

let testeDiv3 = false;
let somaDiv3 = 0;

let nstring = n.toString()

//Verificar se o número é divisível por números pequenos permite que eu corte a quantidade total de números que o dividiriam proporcionalmente, 1 sempre será divisível, 2 apenas se par, se a soma de todos os números que o compõem for divisível por 3, o número também será, e é isso que a parte a baixo verifica, 4 apenas se par, 5 apenas se terminado em 5 ou 0, 6 apenas se par, então após verificar todos acima, eu posso cortar os números que dividirão n em 7
for(indexDiv3 = 0; indexDiv3 < nstring.length; indexDiv3++){
    
    somaDiv3 += parseInt(nstring[indexDiv3]);
}

if(somaDiv3 % 3 == 0){
    testeDiv3 = true;
}


//Se o número não for divisível por 3, verifico se ele é primo, cortando em 7 o número de divisores e dividindo apenas por números ímpares
if(!testeDiv3){
    console.log("Calculando...")
    for(index = 3; index <= n/7; index+=2){
        if(n % index == 0){
            console.log("O número \"" + n + "\" não é primo, pois também é divisível por " + index);
            isPrime = false;
            break;
        }
    }
    
    if(isPrime){
        console.log("O número \"" + n + "\" é primo.")
    }

} else {
    console.log("O número \"" + n + "\" não é primo, pois também é divisível por 3")
}

//Dividir o total de números em 7 e dividir apenas por números ímpares fez a verificação do número 99.999.999.977 cair de 825 segundos para 117 segundos.