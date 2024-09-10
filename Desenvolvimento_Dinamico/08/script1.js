var nome = "Josean Bezerra"
var x = nome.length;  // conta os caracteres
console.log(x);

resultado = x > 12 ? "Obrigado" : "Porfavor coloque o nome completo";
console.log(resultado);

var res = nome.toLocaleUpperCase(); // Deixa a string em maiusculo
console.log(res);

var jogo = "Barcelona vs Real melhor time";
var posi = jogo.indexOf("Real"); // encontra a posição na string
console.log(posi);

var cortado = jogo.slice(13,); // corta a string
console.log(cortado);

var val = jogo.includes("Real"); // verifica se contem "Real" na string
console.log(val);

var str1 = "Hello";
var str2 = " Turma";

var str3 = str1.concat(str2); //concatena(UNE) as strings
console.log(str3);

var frase = "         Olá eu sou fulano!        ";
console.log(frase.trim()); // Remove os espações do inicio e fim

var num = "1,2,3,4,5,6,7,8,9";
var arr = num.split(","); // cria um array separando elementos pelo caractere escolhido (,)
console.log(arr[2]);

var s = "JavaScript e Python";

var posi = s.indexOf("Python")
console.log(posi);
var novaString = s.substring(13,19); //tira determinado trecho da string

console.log(novaString);

var frase = "Olá mundo";

if(frase.startsWith("Olá")){
    let sub = frase.substring(4);
    let novString = sub.replace("mundo","pessoal"); // Troca caracteres de uma string
    let novStringMai = novString.toUpperCase();  //Deixa string maiuscula
    console.log(novStringMai);
}

