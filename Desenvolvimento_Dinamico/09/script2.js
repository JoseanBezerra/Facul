//criação de objetos 1 forma

const pessoa = {
    nome: "Lucas",
    sobrenome: "Silva"
}
console.log(pessoa["sobrenome"]);

//criação de objetos 2 forma

const funcionario = new Object();
funcionario.nome = "Karen";
funcionario.sobrenome = "Joana";
console.log(funcionario.nome);

//criação de objetos 3 forma
function criarPessoa(nome,sobrenome){

    return nome, sobrenome
//    get nomeCompleto(){
//       return `${this.nome} ${this.sobrenome}`
//    }
}

const p1 = criarPessoa("Arthur","Silva");
const p2 = criarPessoa("João","Gomes");

console.log(p1);
console.log(p2);


