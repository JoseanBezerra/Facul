var arr2 = [1,2,3,4,5,6,7];
console.log(arr2);
arr2.splice(2,3); //remove 3 objetos do array apartir da posição 2
console.log(arr2);

var nomes = ["Maria","João","Lucas","Pedro"];
console.log(nomes);
var novos = nomes.splice(1,2,"Luiz","Ronaldo"); // Substitui nomes do array
console.log(novos); // Nomes subsituidos
console.log(nomes); // Array final


var pais = ["Brasil", "Argentina","Colombia"];
console.log(pais);
pais.unshift("Uruguai"); //Adiciona um objeto no inicio do array
console.log(pais);