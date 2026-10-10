//CRIA UMA FUNÇÃO EXTERNA
function opcoes(){
    //THIS NESSE CONTEXTO, É O CARA QUE ESTÁ CHAMANDO A FUNÇÃO
    console.log("as opções são:", this.tamanho.toString());
}

var produto1 ={
    nome: "Coca-Cola",
    categoria: "Bebidas",
    quantidade: 30,
    tamanho: ["350ml ", "600ml ", "1.5L ", "3L ", "Ks " ],
    // CRIA UM MÉTODO INTERNO *********************************************
    descricao: function (){
        //this: referencia o próprio objeto *******************************
        console.log(`A ${this.nome} é da categoria ${this.categoria}`);
    },
    //USA UMA FUNÇÃO EXTERNA COMO SEU MÉTODO ******************************
      verTamanhos : opcoes
}
produto1.descricao()
produto1.verTamanhos()

var produto2 = {
    nome: "Doritos",
    categoria: "Salgadinho",
    quantidade: 15,
    tamanho: ["120g ", "200g ", "300g ", "400g "],
    descricao: function (){
             console.log(`A ${this.nome} é da categoria ${this.categoria}`);
    },
       verTamanhos : opcoes
}
produto2.descricao()
produto2.verTamanhos()

//LUCAS TA LELÉ
/*
var aluno ={
    nome: "Bob Esponja",
    anoEscolar: "9º",
    turma: "C",
    notas: [7, 9, 8],
    media: function(){
        n1 = this.notas[0]
        n1 = this.notas[1]
        n1 = this.notas[2]

        return ((n1+n2+n3) / 3)
    }
}

console.log(aluno.media());
*/