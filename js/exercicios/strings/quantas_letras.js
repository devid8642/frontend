// Problema: https://neps.academy/br/course/javascript-bootcamp/lesson/quantas-letras
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let linhas = input.split("\n")
let palavra = linhas[0];
let letra = linhas[1];
let cont = 0;

for (let c of palavra) {
    if (c == letra) {
        cont++;
    }
}

console.log(cont);
