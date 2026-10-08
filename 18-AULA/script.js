/*

console.log("AOBA");

//LAÇOS DE REPETIÇÃO

//FOR = PARA/DURANTE (repetição definida)
// i - variável de controle
// i = 0 - inicia do 0
// i < 10 - duração do laço
// i++ - aumenta a interação de 1 em 1

for(var i = 0; i < 3; i++){
    console.log("Alguma coisa aqui");
    console.log(i)
}
console.log("Fim");




//WHILE = ENQUANTO (repetição indefinida)
var contagem = 1
while (contagem < 51){
    console.log("Legalize já");
    contagem = contagem + 5
}

console.log("in the end");


//ARRAY = lista
var lista = ['pokebola', 777, true, 'show', 4.20, 'MD', ['sim',['não']]]

//mostra o array
console.log(lista);

//mostra um elemento específico
console.log(lista[3]);

//leght - retorna o número de itens no array
console.log(lista.length);

//LISTA DE POKEMÃOS
var pokemons = ["Venasaur", "Charizard", "Giratina", "Blastoise", "Beedof", "Kyogre"]

// INTERAGE COM VALOR FIXO
for (let i = 0; i < 6; i++) {
    console.log("O pokemon atual é: ", pokemons[i]);
}

for (let i = 0; i < pokemons.length; i++) {
    console.log("O pokemon atual é: ", pokemons[i]);
}
*/

//FUNÇÕES PARA INTERAGIR COM ARRAY
var frutas = ["Melancia", "Melão", "Morango", "Caqui", "Pêra"]

//ARRAY ORIGINAL
console.log(frutas);


//PRA ADIÇÃO DE ELEMENTOS
// push - adiciona no fim do array
frutas.push("Uva")
console.log(frutas);

// unshift - adiciona no inicio do array
frutas.unshift("Maracujá")
console.log(frutas);


// PARA REMOÇÃO DE ELEMENTOS
// pop - remove o último elemento
var frutaRetirada = frutas.pop()
console.log("A última fruta era: ", frutaRetirada)

//fruta extra
frutas.unshift("Banana")

//shift - remover do inicio do array
var exPrimeiraFruta = frutas.shift()
console.log("A ex primeira fruta era: ", exPrimeiraFruta);

//includes - descobrir se há um valor específico nesse array
console.log("Garçom, tem pitú?: ", frutas.includes("Pitú"));
console.log("Garçom, tem morango?: ", frutas.includes("Morango"));

// sort - ordernar o array
frutas.sort()
console.log(frutas)

//reverse - inverter o array
frutas.reverse()
console.log(frutas);

//convertendo o array
console.log(frutas.toString());

//junta o array e troca o separador deles
console.log(frutas.join(" ¬¬ "));


//SLICE - copia 
//(qual indice começa, quantos elementos serão copiadaos)
console.log(frutas.length);
var parteCopiada = frutas.slice(2, 6)
console.log("Cópia: ", parteCopiada);


//SPLICE
//para remover
var removidos = frutas.splice(1,2)
console.log("Removidos: ", removidos);

//para adicionar
// adiciona, sem substituir ninguém
frutas.splice( 2, 0, "Coca", "Laranja", "Caju")
console.log(frutas);

//adicionar com subtituição
frutas.splice(1, 3, "PC", "Mouse")
console.log(frutas);

