var a = [10,20,30,40,50,60];

a.forEach(valor => console.log(valor)); // Lista valores do array

var tot = 0;
a.forEach(valor => { //soma valores do array
    tot += valor;
});
console.log(tot);

a.forEach(function(valor,indice,array){  // Lista valores do array
    console.log(array[indice]);
});