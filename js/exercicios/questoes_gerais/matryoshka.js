const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let linhas = input.split("\n");
let tmp = linhas[1].split(" ");
let arr = [];
let aux = [];
let ans = [];

for (let i of tmp) {
    arr.push(parseInt(i));
    aux.push(parseInt(i));
}

aux.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
    if (aux[i] != arr[i]) {
        ans.push(arr[i]);
    }
}

console.log(ans.length);
if (ans.length != 0) {
    ans.sort((a, b) => a - b);
    let out = "";
    for (let i = 0; i < ans.length; i++) {
        out += ans[i].toString() + " ";
    }
    console.log(out);
}