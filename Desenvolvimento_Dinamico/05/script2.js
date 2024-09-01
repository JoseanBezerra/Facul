var pessoa = ["Eduardo","Joana","Walace","Rosana"];
var gerente = ["Davi","Manuela"];

var pessoas1 = pessoa.slice(1,3);  // cria novo array sem alterar o array original
console.log(pessoa);
console.log(pessoas1);

var empresa = pessoa.concat(gerente); //concatena "UNE" dois arrays
console.log(empresa);