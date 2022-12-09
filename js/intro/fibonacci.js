// Link do problema: https://neps.academy/br/exercise/257
const rd = require("readline-sync");

let n = Number(rd.question());
let fib1 = 0;
let fib2 = 1;
let tmp;

for (let i = 1; i <= n; i++) {
	tmp = fib2;
	fib2 += fib1
	fib1 = tmp;
}

console.log(fib2);