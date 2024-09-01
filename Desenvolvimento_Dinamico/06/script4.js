var numeros = [1,2,3,4,5,6,7,8,9,10];

var nums = numeros.map(function(valor){
    return valor * 2;               //multipica os valores do array e atribui a nums
});
console.log(nums);

var funcionarios = [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

nomes = funcionarios.map(pessoa => pessoa.nome);//atribue nomes da tabela a 
console.log(nomes);                         // variavel nomes