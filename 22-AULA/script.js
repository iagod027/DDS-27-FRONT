/*
//console - Terminal do navegador
console.log(console);

//Window - Janela do navegador
window.alert()
window.prompt()
console.log(window);
*/
//Document - DOM, SEU CODIGO HTML INTEIRO

console.log(document);
console.log(document.head)
console.log(document.body);


//SEÇÃO 1
//SELECIONA ELEMENTOS PELA TAG
var titulos = document.getElementsByTagName("h1")
console.log(titulos);

//SELECIONA ELEMENTOS PELA CLASSE
var paragrafos = document.getElementsByClassName("para")
console.log(paragrafos);

//SELECIONA ELEMENTO POR ID
var especifico = document.getElementById("p3")
console.log(especifico);

//ALTERAÇÃO DE ESTILOS
// PEGO PELO ID
especifico.style.backgroundColor = "green"
especifico.style.color = "yellow"

// PELA CLASS
paragrafos[0].style.backgroundColor = "pink"

// PELA TAG
titulos[2].style.backgroundColor = "orange"


//SEÇÃO 2
//funcção ativada, mas criada pelo javascript
function cliquei(){
    console.log("ATUMALAKA");
}

//funcção ativada, mas criada pelo javascript, via eventListener
let qtdCliques = 0
document.getElementById("btnCliqueDuplo").addEventListener("dblclick", () =>{
    qtdCliques++

    console.log(`Cliques:${qtdCliques}`);
})

//botão clicável, que altera vários
document.getElementById("shazam").addEventListener("click", () =>{
    for(var i = 0; i < titulos.length; i++){
        titulos[i].style.backgroundColor = "red"
        titulos[i].style.color = "yellow"
        titulos[i].style.fontSize = "100px"
    }
})

//USO O THIS
//função atividade, e o parametro veio com o this
function quemFoi(elementoQueChamou){
    console.log(elementoQueChamou);
    
}


//SEÇÃO 3
//ALTERA O TEXTO
document.getElementById("criaTexto").addEventListener("click", () => {
    
    // INNERTEXT
    document.getElementById("textoCriado").innerText = "Veio aí a mudança"
})

//ALTERA O HTML
document.getElementById("criaHtml").addEventListener("click", () =>{

    // INNERHTML - ALTERA O ELEMENTO
    document.getElementById("vazia").innerHTML = "<h2> TIMBALAIÊ </h2>"
})
