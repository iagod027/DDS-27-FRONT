console.log("Insira valor de 1 a 1000 apenas");


var a = Number("insira valor da primeira caixa : ")
var b = Number("insira valor da segunda caixa: ")
var c = Number("insira valor da terceira caixa: ")

// 1 viagem
// && = e, || = ou
if((a < b && b < c) || (a + b < c)){
    console.log("1 viagem necessária");
}
else if((a < b && b == c) || (a == b && b < c)){
    console.log("2 viagens necessárias");   
}
else{
    console.log("3 viagens necessárias");
}