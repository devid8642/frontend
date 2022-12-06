// Busca que retorna uma posição da primeria ocorrência de determina string
let str = "Olá Mundo!";
console.log(str.indexOf("Mundo"));

// Buscas em strings usando expressões regulares
let text = "The rain in SPAIN stays mainly in the plain";
const myArr = text.match(/ain/g);
console.log(myArr);

// Busca que retorna um iterador com todas as ocorrências de uma string
text = "I love cats. Cats are very easy to love. Cats are very popular.";
const iterator = text.matchAll("Cats");
console.log(Array.from(iterator));

// Verificando se uma string contém outra ou não
str = "AAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBB";
console.log(str.includes("AB"));