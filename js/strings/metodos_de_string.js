// Métodos de string
// Tamanho de uma string
let str = "AAAAAAAAAAAAAAAAABBBBBBBBBBBBB";
console.log(str.length);

// Extraindo parte de uma string
str = "Alice e Bob";
console.log(str.slice(3, 8));
// slice(começo, fim);

// Substituindo na string
let strr = str.replace("Bob", "Bernand");
console.log(str);
console.log(strr);

// replace() substitui apenas a primeira ocorrência da string especificada e retorna uma nova string como resultado

strr = "Alice, Bob e Bob";
str = strr.replaceAll("Bob", "Bernand");
console.log(strr);
console.log(str);

// Minúsculas para maiúsculas e vice-versa
console.log("tudo maiúsculo".toUpperCase());
console.log("TUDO MINÚSCULO".toLowerCase());

// Removendo espaços desnecessários de uma string
str = "                Olá Mundo!             ";
console.log(str.trim());

// Acessando caracteres de uma string
str = "Olá Mundo!";
console.log(str.charAt(2));
console.log(str[5]);

// Transformando strings em arrays
str = "Cada palavra dessa string vai se tornar um elemento de um array";
console.log(str.split(" "));


let txt = "I can eat bananas all day";
console.log(txt.slice(10, 17));