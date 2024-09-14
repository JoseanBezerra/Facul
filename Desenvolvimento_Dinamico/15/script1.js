const pessoa = {
    nome: "Joao",
    idade: 25,
    profissao: "Desenvolvedor"
}

const pessoaJson = JSON.stringify(pessoa); // transforma o objeto em json
console.log(pessoa)
console.log(pessoaJson)

const pessoaObj = JSON.parse(pessoaJson) //transforma json em objeto
console.log(pessoaObj)