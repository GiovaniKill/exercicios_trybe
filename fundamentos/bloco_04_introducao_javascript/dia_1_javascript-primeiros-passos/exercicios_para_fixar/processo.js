let estado = "aprovada";

switch (estado) {
    case "aprovada":
        console.log("Parabéns, você foi aprovada!")
        break;
    case "lista":
        console.log("Você foi colocada na lista de espera.")
        break;
    case "Reprovada":
        console.log("Não foi dessa vez, mas ainda haverá outras oportunidades!")
        break;   
    default:
        console.log("Valor não se aplica")   
}