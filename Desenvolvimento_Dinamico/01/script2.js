let rlsync = require('readline-sync');

let nome = rlsync.question("Qual o seu nome?\n")
let cidade = rlsync.question("Qual a sua cidade?\n")
console.log(`Olá ${nome} da cidade de ${cidade}` )