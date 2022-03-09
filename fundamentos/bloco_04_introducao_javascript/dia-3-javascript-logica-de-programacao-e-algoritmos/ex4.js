let primos = [];
//Defina aqui o limite
let limite = 1000000;

//Passa por todos os números a partir do 2 até o limite
for(let numeroPretendente = 2; numeroPretendente <= limite; numeroPretendente++){

    let isPrime = true;
    //Divide o número por todos menores dele, a partir do 2 até a metade dele
    for(let numerosMenores = 2; numerosMenores < (numeroPretendente / 2); numerosMenores++){

        if(numeroPretendente % numerosMenores == 0){
            isPrime = false;
            break;
        }  
    } 
    //Se passar, isPrime permanecerá true, e o número será colocado em um array
    if(isPrime){
        primos.push(numeroPretendente);
    } 
    
    
}
//Aqui o último número do array é exibido
console.log("O maior numero primo até " + limite + " é " + primos[primos.length - 1]);
