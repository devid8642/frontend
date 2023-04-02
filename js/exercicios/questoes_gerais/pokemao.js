// Problema: https://neps.academy/br/course/javascript-bootcamp/lesson/po-ke-mao
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");


let linhas = input.split("\n");
let a = parseInt(linhas[0]);
let arr = [parseInt(linhas[1]), parseInt(linhas[2]), parseInt(linhas[3])];
let ans = 0;

arr.sort((a, b) => a - b);

for (let i = 0; i < 3; i++) {
    a -= arr[i];
    if (a >= 0) {
        ans++;
    }
}

console.log(ans);