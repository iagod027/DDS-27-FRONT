console.log("Manda um oi ai pra eu ver...");

// FUNÇÕES
//SÓ EXECUTA
function teste() {
    console.log("Stoy Funcionando");
}

//EXECUTANDO A FUNÇÃO
teste()

//COM RETORNO
function soma() {
    return 3 + 4
}

console.log(soma());

//MOSTRAS APENAS O TEXTO DA FUNÇÃO, NÃo EXECUTA
console.log(soma);

//COM PARAMETROS
function teste2(parametro) {
    console.log("O parametro enviado foi: ", parametro);
}

//EXECUTADO
teste2("Berecoteco")

var nome = "Ash"
teste2(nome)

//FAZ AÇÕES E RETORNA RESULTADOS
function media(n1,n2){
    //let - variável local
    let  resultado = (n1 + n2) / 2
    return resultado
}

//GUARDA RESULTADOS EM VARIÁVEIS, PRA DEPOIS UTILIZAR
var final = media(9,7)
console.log("Resusltado da média: ", final);

//FUNÇÃO ANÔNIMA (sem nome)
//é uma função que não tem nome, e seu texto é guardado em uma variável
var mensagem = function () {
    console.log("Tchubiraun daun daun");   
}

//mostra o texto da função
console.log(mensagem);

//apenas guarda o texto função
mensagem

//executa a função, coloco os ()
mensagem()



// ARROW FUNCTION - FUNÇÃO DE SETA
// FORMA MAIS COMUM DE ESCREVER NO JAVASCRIPT
const multiplicar = (x,y) => {
    let result, primeiro = x, segundo = y
    result = primeiro * segundo
    return result
}

console.log("Resultado da multiplicação é: ", multiplicar(7,4));

//MAIS MENOR AINDA
//QUANDO SÓ TEM UMA LINHA DE RETORNO, O RETURN PODE SER OMITIDO TAMBÉM
//multiplicando numero por 2
const dobro = numero => numero * 2

console.log("O dobro é: ", dobro(420));


//FAÇA UM PEDIDO DE UM NÚMERO AO USUÁRIO, E UTILIZA O VALOR INFORMADO PARA PASSAR A UMA FUNÇÃO DE SETA, E RETORNAR A DIVISÃO POR DOIS DAQUELE VALOR. E MOSTRE NO CONSOLE O RESULTADO
