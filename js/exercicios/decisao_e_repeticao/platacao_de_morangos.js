// Problema: https://neps.academy/br/course/javascript-bootcamp/lesson/plantacao-de-morangos
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let linhas = input.split("\n");
let a = parseInt(linhas[0]);
let b = parseInt(linhas[1]);
let x = parseInt(linhas[2]);
let y = parseInt(linhas[3]);

console.log(Math.max(a * b, x * y));