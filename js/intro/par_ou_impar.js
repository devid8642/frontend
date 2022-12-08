// Link do problema: https://neps.academy/br/exercise/148
const rd = require("readline-sync");

let b = Number(rd.question());
let c = Number(rd.question());

if ((b + c) % 2 == 0) {
	console.log("Bino");
}
else {
	console.log("Cino");
}