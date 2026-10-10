console.log('SHAZAM');

var musicas = ["Hey You", "Boys Don't Cry", "Elenor Rigby"]
var bandas = ["Pink Floyd", "The Cure", "The Beatles"]

for(var i = 0; i < musicas.length; i++){
    console.log(musicas[i] , "-", bandas[i]);
}

//OBJETO - (são classes com característica já definida)
var filme1 = {
// "chave" : "valor"
    titulo : "Vida De Insetos",
    genero : "Revolta Trabalhista",
    anoLan : 1998
}

//mostra todo o array
console.log(filme1);

//ACESSANDO UMA CHAVE ESPECÍFICA
console.log(filme1.titulo);

//usando variável junto com texto utilizando ``
console.log(`O filme: ${filme1.titulo} foi lançado em ${filme1.anoLanc}`);

console.log(`Gênero: ${filme1["genero"]}`);


var intervalo = {
    Tempo : "20min",
    Lanche : "salgado ruim",
    Saida : "20:00",
    Retorno : "20:20"
}

console.log(`O tempo do intervalo é de ${intervalo.Tempo}, onde você tem a opção de um ${intervalo.Lanche}. Geralmente a saída é ${intervalo.Saida} e o retorno às ${intervalo.Retorno}`);

//objeto vazio
var garrafa = {}
console.log(garrafa)

//criar propriedades
garrafa.cor = "Verde"
garrafa.preco = 7
garrafa.tamanho = "330ml"
garrafa["tampada"] = false
console.log(garrafa)

//altera uma propriedade existente
garrafa.cor = "Vermelho"
console.log(garrafa)

//PEÇA AO USUÁRIO UMA NOVA PROPRIEDADE PARA ADICIONAR NA GARRAFA
//EM SEGUIDA, PEÇA O VALOR DESSA NOVA PROPRIEDADE
//AO FIM, ADICIONE-AS NO OBJETO GARRAFA 

/*
var novaPropriedade = prompt("Digite uma propriedade para sua garrafa")
garrafa[novaPropriedade] = prompt("valor: ")

var nome = prompt("QUAL O NOME?")
var teor = prompt("QUANTOS % DE ALCOOL?")
var sabor = prompt("DEFINA O SABOR:")

garrafa.nome = nome
garrafa.teor = teor
garrafa.sabor = sabor

console.log(garrafa);
console.log(garrafa[novaPropriedade])
*/

//AINDA SOBRE OBJETOS
var leao = {
    nome: "Simba",
    temPelo: true,
    especie: "Doméstico",
    peso: 130,

    // Métodos
    andar : function(){
        console.log("Walk this way");
    },
    falar: () =>{
        console.log("SÃO OS HOMI");
        
    }
}

console.log(leao);
//mostra o texto do método
console.log(leao.andar);
//executar o método do leão
leao.falar()




