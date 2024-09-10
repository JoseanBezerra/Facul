class DispositivoEletronico{  // Inicia a classe
    constructor(nome){ // Constroi o objeto
        this.nome;
        this.ligado = false;
    }

    ligar(){ // método ligar
        if(this.ligado){ // Se estiver ligado(ligado = true) retorna...
            console.log("Já está ligado")
            return;
        }
        this.ligado = true;
    }

}

class SmartPhone extends DispositivoEletronico{ // classe herdada
    constructor(nome,cor,modelo){ // constroi o objeto
        super(nome); //variável herdada
        this.cor = cor;
        this.modelo = modelo;
    }

}

var s1 = new SmartPhone("Samsung","Preto","A71"); // Define valores das váriaveis da classe
console.log(s1);
s1.ligar();
s1.ligar();