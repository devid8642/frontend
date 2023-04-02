// Problema: https://neps.academy/br/course/javascript-bootcamp/lesson/todos-os-divisores
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let num = parseInt(input);
let aux = [];
for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        aux.push(i);
    }
}
console.log(...aux);
