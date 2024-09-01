var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0); // filtra valores pares do array
console.log(resultado);

var numerosFiltrados = numeros.filter( // filtra valores maiores de 5 utilizando
    function(valor){                   // função
        return valor > 5;
    }
);
console.log(numerosFiltrados);

function buscarValores(valor){
    return valor < 5;            // função para buscar valores menores que 5
}
var numerosEncontrados = numeros.filter(buscarValores); // filtro chamando a função
console.log(numerosEncontrados);                        // criada anteriormente

var r1 = numeros.filter((valor) =>{ // filtra valores maiores que 5 com função 
    return valor > 5;               // "oculta"
} );
console.log(r1);

var r2 = numeros.filter(valor => valor > 5);
console.log(r2);                  // função para buscar valores maiores que 5


var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var pessoasListagem = funcionarios.filter(
    function(valor){
        console.log(valor.nome);  //lista somente o nome do array
    }
);

var pessoasListagem = funcionarios.filter(
    function(valor){        // filtra da lista nomes com menos de 5 letras
        return valor.nome.length < 5
    }
);
console.log(pessoasListagem);