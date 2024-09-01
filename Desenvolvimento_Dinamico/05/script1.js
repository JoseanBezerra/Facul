var valores = [8,1,7,2,9]; // declarando a váriavel array

console.log(valores[3]);

for (var pos =0 ; pos < valores.length; pos++){        //função de repedir o codigo com uma condição
      console.log("Posição: "+pos+" Valore: "+ valores[pos]);
}

//Outrs formas de declarar um array

var carros = [];  
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW", "yamaha", "honda");

//Caucular a média de todos os números de um array

var soma = 0;
for (var pos =0 ; pos < valores.length; pos++){        //função de repedir o codigo com uma condição
    soma += valores[pos];
}

var media = soma/valores.length;

console.log("A média dos numeros do array é " + media);


var arr1 = [1,2,3,4,5,6];

console.log(arr1.join(' * ')); //converte a array em string

var retirado = arr1.shift(); //Retira primeiro numero do array
console.log(retirado);
console.log(arr1);

console.log("Posição do número 3: "+ arr1.indexOf(3)); //busca numero dentro da array 

arr1.push(7); //Inclui o numero 7 no array
console.log(arr1);

arr1.pop();
console.log(arr1);


// criar um novo array com somente os numeros positivos

var ar = [-5,10,15,20,-3,89];
var posi = [];

for (var pos =0 ; pos < ar.length; pos++){        //função de repedir o codigo com uma condição
    
     if(ar[pos] > 0){

        posi.push(ar[pos]);
     }

}

console.log(posi);