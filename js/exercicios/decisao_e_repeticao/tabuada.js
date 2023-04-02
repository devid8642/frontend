// Link para o problema: https://neps.academy/br/exercise/154
const rd = require("readline-sync");

let x = Number(rd.question());

for (let i = 1; i <= 10; i++) {
	console.log(`${x} * ${i} = ${x * i}`);
}