var n = 3;
n *= 10;
//n = n * 10;
console.log(n);

var x = 10;
x++  //operador de incremento
console.log(x<n); //Operador de comparação <= >= != etc..

a =20 ;
b = 8;

console.log(n <= x && a != b);

//verificar se a é maior que b e b é divisivel por dois
console.log(a > b && b % 2 ==0);

//verificar se b é maior igual a ou b dividido por dois o resultado é dois
console.log(a <= b || b / 2 ==2);

//verificar se a é maior que b e b maior igual a 5
console.log(a > b && 5 <= b);

//verificar se b é par ou impar usando o ternario
resultado = b% 2 == 0 ? "Par" : "Impar";
console.log(resultado);
