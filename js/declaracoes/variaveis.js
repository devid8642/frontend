// Existem 4 formas de declarar variáveis no JS
var x; // Essa é a forma de declarar variáveis desde de 1995 até 2015 e é a mais flexível pois permite redeclarações
let y; // Essa forma foi adicionada em 2015 e funciona da mesma forma que a var mas não permite redeclarações
const z = 4; // Essa forma cria-se variáveis constantes
w = 3; // É possível declarar variáveis de forma dinâmica mas não é indicado

// Todas as variáveis estão sujeitas as regras da álgebra como em qualquer outra linguagem
x = 5;
y = 6;
w = x + y * 3;
console.log(w);

// As regras para nomes de variáveis da maioria das linguagens também se aplicam ao JS

// let suporta block scope

{
	let x = 4;
}

// x não pode ser usada fora do bloco de código acima

{
	var a = 8;
}
console.log(a);

// Isso resultará em 3, sem uso do let dentro das {} resultará em 4
let b = 3;
{
	let b = 4
}
console.log(b);

// As mesmas regras acima também valem para const
// Deve-se usar const para a declaração de arrays, objetos e funções pois nesse caso o que será constate será apenas a referência para essas estruturas
const arr = [1, 2, 3, 4, 5]
console.log(arr[0])
arr.push(8);
console.log(arr[5]);

const obj = {nome: "Devid", idade: 17};
console.log(obj.nome);
console.log(obj.idade);
obj.nome = "Pedro";
console.log(obj.nome);