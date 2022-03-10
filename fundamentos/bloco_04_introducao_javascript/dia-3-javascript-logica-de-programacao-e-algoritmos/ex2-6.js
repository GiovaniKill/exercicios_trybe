let n = 99999999977;
let isPrime = true;

for(index = 2; index <= n/2; index++){
    if(n % index == 0){
        console.log("O número \"" + n + "\" não é primo.")
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log("O número \"" + n + "\" é primo.")
}