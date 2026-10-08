// DESVIOS CONDICIONAIS

// IF = SE
var estaVivo = true

//primeira comparação
if (estaVivo){
    console.log("Parabéns, sefudeu");
}

//segunda comparação, caso o primeiro esteja errado
else if (estaVivo == undefined){
    console.log("Meia noite eu te conto")
}

//ultimo caso, caso todos acima esteja errado
else{
    console.log("Virou lateral esquerda do Vasco");    
}

//SWITCH/CASE
var camisa = "Preta"

switch(camisa){
    case "Preta":
        console.log("Show de bola, ganhou um fino");
    break
    case "Branca":
        console.log("Massa, ganhou um pino de 10");
    break
    case "Vermelha": ("Você acaba de ganhar +2 dias de vida");
    break
    default:   
        console.log("Silascou, ganhou nada");
    break
}

//PROMPT - INTERAGE COM O USUÁRIO E COLETE UM VALOR
var pet = prompt("QUAL É O SEU PET FAVORITO DO MUNDO DOS FILMES: ")

console.log("Seu PET preferido é: ", preferido)