class Pessoa{  //Inicia a classe

    constructor(nome,sobrenome){ //Constroi o objeto da classe
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){ //método falar
        console.log("Olá " + this.nome);
    }

    get nomeCompleto(){ //Função nome completo
        console.log("Olá " + this.nome +" "+ this.sobrenome);
    }

}

p1 = new Pessoa("Fábio","Silva"); // Atribui o valor ao objeto da classe
p1.falar(); //Chama metodo falar
p1.nomeCompleto; //Chama função falar nome completo