// Para declarar variáveis no JS temos três comandos: var, let e cons

// var é o comando mais flexível e permite redeclaração e reatribuição
var nome = 'Devid';
console.log(nome);
var nome = 'José';
console.log(nome);

// já a let permite apenas a reatribuição
let num = 12;
console.log(num);
num = 3.14; // se usar o let aqui vai ter um erro
console.log(num);

// Já o const não permite nenhum dos dois
const arr = [1, 2, 3];
console.log(arr);
