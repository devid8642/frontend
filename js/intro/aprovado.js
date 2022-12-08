// Link do problema: https://neps.academy/br/exercise/147
const rd = require("readline-sync");

let n1 = Number(rd.question());
let n2 = Number(rd.question());
let media = (n1 * 2 + n2 * 3)/5;

if (media >= 7) {
	console.log("Aprovado");
}
else if (media < 3) {
	console.log("Reprovado");
}
else {
	console.log("Final");
}