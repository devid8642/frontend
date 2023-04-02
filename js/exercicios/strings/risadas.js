// Problema: https://neps.academy/br/course/javascript-bootcamp/lesson/huaauhahhuahau
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let vogais = [];
let ctl = true;

for (let c of input) {
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
        vogais.push(c);
    }
}

for (let i = 0; i < vogais.length; i++) {
    if (vogais[i] != vogais.reverse()[i]) {
        ctl = false;
        break;       
    }
}

if (ctl) {
    console.log("S");
}
else {
    console.log("N");
}