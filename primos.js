//Insira um número que não termine em 0, 2, 4, 5, 6 ou 8
let n = 999998727899999;
let isPrime = true;


//Eu corto a quantidade total de números a dividirem o pretendente pelo maior número que já o dividiu e dividido apenas por números ímpares

    console.log("Calculando...")
    for(index = 3; index <= n/index; index+=2){
        if(n % index == 0){
            console.log("O número \"" + n + "\" não é primo, pois também é divisível por " + index);
            isPrime = false;
            break;
        }
    }
    
    if(isPrime){
        console.log("O número \"" + n + "\" é primo.")
    }


//Dividir o total de números em 7 e dividir apenas por números ímpares fez a verificação do número 99.999.999.977 cair de 825 segundos para 117 segundos.
//Dividir o total de números por index reduziu a verificação do número 99.999.999.977 de 117 segundos para 0.047 segundos 🤔
//Verificar o número 999.998.727.899.999 demorou 0.185 segundos