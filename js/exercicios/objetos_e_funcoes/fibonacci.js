// Problema: https://neps.academy/br/course/javascript-bootcamp/lesson/fibonacci
function fib(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
console.log(fib(parseInt(input)));