function multiplicar(x,y){ // criando a função
    return x * y; //o que a função realizará
}

var a = multiplicar(4,2); //chamando a função
console.log(a);

var b = multiplicar(6,7); //chamando a função
console.log(b);


function somaValores(a,b =2, c = 6){
    var total = a + b + c;
    return total;
}

var f = somaValores(8);
console.log(f);

var infoCal = function(a,b,c){ //outra forma de criar a função
    return a + b + c;
}

console.log(infoCal(2,5,7));

const soma = (num1,num2) =>{ //função arow
    return num1 + num2;
}

console.log(soma(3,6));

const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * num);
console.log(valores);

var listaProdutos = ["geladeira","fogão","air fryer"];
var listaEmMaiuscula = listaProdutos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
}

console.log(listaEmMaiuscula);

