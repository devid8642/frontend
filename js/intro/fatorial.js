// Link para o problema: https://neps.academy/br/exercise/158
const rd = require("readline-sync");

function fat(n) {
	if (n == 0 || n == 1)
		return 1;
	return n * fat(n - 1);
}

let n = Number(rd.question());

console.log(fat(n));