class funcionario{
    constructor(nome,idade,cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.trabalhando = true;
    }

    seApresentar(){
        console.log("Olá meu nome é " + this.nome + " tenho " + this.idade + " anos e sou " + this.cargo);
    }

    trabalhar(){
        if(this.trabalhando){
            console.log("O funcionário " + this.nome + " já esta trabalhando.")
            return;
        }
        this.trabalhando = true;
    }

}

class gerente extends funcionario{
    constructor(nome,idade,cargo,departamento){
        super(nome,idade,cargo);
        this.departamento = departamento;
        this.gerenciando = false;
    }

    gerenciar(){
        if(this.gerenciando){
            console.log("O funcionário " + this.nome + " já esta gerenciando.")
            return;
        }
        this.gerenciando = true;
    }
}

class desenvolvedor extends funcionario{
    constructor(nome,idade,cargo,linguagem){
        super(nome,idade,cargo);
        this.linguagem = linguagem;
        this.programando = false;
    }

    programar(){
        if(this.programando){
            console.log("O funcionário " + this.nome + " está programando.")
            return;
        }
        this.programando = true;
    }
}

var fun1 = new gerente("Roberto",34,"Gerente","Programação");
var fun2 = new desenvolvedor("Amanda",28,"Programadora","JavaScript");

fun1.seApresentar();
fun1.trabalhar();
fun1.gerenciar();
fun1.gerenciar();

fun2.seApresentar();
fun2.trabalhar();
fun2.programar();
fun2.programar();