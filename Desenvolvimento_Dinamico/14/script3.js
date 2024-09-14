class minhaClasse{

        constructor(valor){
            this.valor = valor;
        }

        operaçãoAssincrona(){
            return new Promise((resolve,reject) =>{
                const resultado = this.valor * 2;
                if(resultado >= 10){
                    resolve(resultado)
                }else{
                    reject("O resultado é negativo")
                }
            })
        }

}

const minhaClass = new minhaClasse(32);
minhaClass.operaçãoAssincrona()
.then((resultado) =>{
    console.log("O resultado da operação é: ", resultado)
})
.catch((error) =>{
    console.log("Ocorreu um erro: ", error)
})