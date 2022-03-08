const peca = "bispo";

switch(peca.toLowerCase) {
    case "bispo":
        console.log("diagonais");
        break;
    case "torre":
        console.log("Retas");
        break;
    case "cavalo":
        console.log("Duas em uma direção e uma na direção perpendicular");
        break;
    case "rainha":
        console.log("Retas e diagonais");
        break;
    case "rei":
        console.log("Uma para qualquer lado");
        break;
    case "peão":
        console.log("Pode andar duas para a frente na primeira rodada, depois apenas uma por vez, devora outra peça apenas em sua diagonal direta");
        break;
    default:
        console.log("peça inválida")    
}