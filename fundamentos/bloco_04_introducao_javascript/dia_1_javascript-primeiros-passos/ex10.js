const precoCusto = 84.00;
const precoVenda = 127.00;

const custoComImposto = precoCusto * 1.2
const lucroPorVenda = precoVenda - custoComImposto;
const lucroFinal = lucroPorVenda * 1000;

if (precoCusto > 0 && precoVenda > 0) {
    console.log("O lucro total é de " + lucroFinal + " reais.")
}else{
    console.log("Valor inválido, programa encerrando")
}