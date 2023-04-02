// Problema: https://neps.academy/br/course/javascript-bootcamp/lesson/desafio-do-maior-numero
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let linhas = input.split(" ");
let arr = [];
for (let i of linhas) {
    if (i != "0") {
        arr.push(parseInt(i));
    }
}
arr.sort(function(a, b){return a - b});
console.log(arr[arr.length - 1]);