// Arrays são estruturas para armazenar uma sequência, um arranjo, de valores.
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr[0]);

// Os arrays em JS podem armazenar elementos de diferentes tipos
arr[0] = "Devid";
console.log(arr);

// A forma indicada de adicionar elementos novos a um array é usando push()
arr.push("F"); // Adiciona um elemento no fim do array
arr.unshift("G"); // Adiciona um elemento no começo do array
console.log(arr[arr.length - 1]);
// A propriedade length retorna o número de elementos de um array

// É possível transformar um array numa string
console.log(arr.join(" "));

// Removendo elementos de um array
arr.pop() // remove o último elemento
arr.shift() // remove o primeiro elemento
console.log(arr);

// Concatenando arrays
const arr2 = [34, 43, 6, "f", 5];
console.log(arr.concat(arr2));

// Com o método splice() é possível remover e adicionar elmentos ao mesmo tempo em um array
// sintaxe do método: splice(inicio, numero de elementos a remover, elementos a adicionar)
arr.splice(4, 3, "a", "b", "c"); // Vai ate a posição 4 e remove, contando dessa posição, três elementos e por fim adiciona essas letras
console.log(arr);

// Usando a função sort() é possível ordenar um array
const arrr = ["Peixes", "abacate", "cadeira", "tatu"];
arrr.sort();
console.log(arrr);

// com números
const nums = [3, 5, 6,312, 56, 7, 2];
nums.sort(function(a, b) {return a - b});
console.log(nums);