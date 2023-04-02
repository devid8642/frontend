// Link do problema: https://neps.academy/br/exercise/146
const rd = require("readline-sync");

let x = Number(rd.question());
let y = Number(rd.question());

if (x == 0 || y == 0) {
	console.log("eixos");
}
else if (x > 0 && y > 0) {
	console.log("Q1");
}
else if (x > 0 && y < 0) {
	console.log("Q4");
}
else if (x < 0 && y > 0) {
	console.log("Q2");
}
else {
	console.log("Q3");
}