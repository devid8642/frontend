// Link do problema: https://neps.academy/br/exercise/156
const rd = require("readline-sync");

let n1 = Number(rd.question());
let n2 = Number(rd.question());



for (let i = Math.min(n1, n2); i <= Math.max(n1, n2); i++) {
	process.stdout.write(`${i} `);
}
console.log();