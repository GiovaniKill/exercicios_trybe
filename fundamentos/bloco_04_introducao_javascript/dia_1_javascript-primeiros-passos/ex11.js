const salarioBruto = 90000;
let salarioBase = 0;
let salarioLiquido = 0;

//Deduzindo o INSS
if(salarioBruto <= 1556.94){
    salarioBase = salarioBruto * 0.92;
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto * 0.91;
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto * 0.89;
}else if(salarioBruto > 5189.82){
    salarioBase = salarioBruto - 570.88;
}

//Deduzindo o IR
if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    salarioLiquido = salarioBase - ((salarioBase * 0.075) - 142.80);
}else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - ((salarioBase * 0.15) - 354.80);
}else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - ((salarioBase * 0.225) - 636.13);
}else if(salarioBase > 4664.68){
    salarioLiquido = salarioBase - ((salarioBase * 0.275) - 869.36);
}

console.log("O salário líquido fica em " + salarioLiquido + " reais.")