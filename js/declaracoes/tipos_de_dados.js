// Os tipos de dados no JS são dinâmicos
let x;
x = "Devid";
x = 5;
console.log(x);

console.log("5" + 2 + 2);
console.log(2 + 2 + "5");

// No JS exite apenas o tipo number, não existe int, float, double etc
let a = 5;
let b = 3.14;
let c = -45;

console.log(typeof a); // Number
console.log(typeof b); // Number
console.log(typeof c); // Number

// Array no JS
const arr = [1, 2, 3];
console.log(arr[0]);
arr.push(4);
console.log(typeof arr); // Object

// Objetos no JS
const obj = {nome: "Devid", idade: 17};
console.log(obj.nome);
console.log(obj.idade);

// Strings
let primeiroNome = "Devid";
let segundoNome = "Teofilo";
console.log(primeiroNome + " " + segundoNome);

// Caracterres de Escape
/*
	\" -> "
	\' -> '
	\\ ->  \
*/
console.log("A variável \"a\" vale 5");