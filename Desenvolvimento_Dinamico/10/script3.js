class ContaCliente{
    constructor(numeroConta,saldo,debito,credito){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.debito = debito;
        this.credito = credito;
    }

    calcularSaldoAtual(){
        return this.saldo - this.debito + this.credito;
    }

    verificarSaldo(){
        const saldoAtual = this.calcularSaldoAtual();
        if(saldoAtual >= 0){
            alert("Saldo positivo "+ saldoAtual);
        }
        else{
            alert("Saldo negativo "+ saldoAtual);
        }

    }

}

let numeroConta = prompt("Digite o número da conta");
let saldo = prompt("Digite o saldo da conta");
let debito = prompt("Digite o debito da conta");
let credito = prompt("Digite o crédito da conta");

let conta = new ContaCliente(numeroConta,saldo,debito,credito);

conta.verificarSaldo();