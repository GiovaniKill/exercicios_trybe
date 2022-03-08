const a = 54;
const b = 98;
const c = 28;

const soma = a + b + c;

if(typeof(a) != "number" || typeof(b) != "number" || typeof(c) != "number" || a <= 0 || b <= 0 || c <= 0) {
    console.log("Ângulo inválido!")
} else if(soma == 180) {
    console.log("True")
} else {
    console.log("False")
}