// Link do problema: https://neps.academy/br/exercise/145
const rd = require("readline-sync");

let num = Number(rd.question());

if (num > 0) {
	console.log("positivo");
}
else if (num == 0) {
	console.log("nulo");
}
else {
	console.log("negativo");
}