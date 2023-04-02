// Problema: https://neps.academy/br/course/javascript-bootcamp/lesson/codigo-(obi-2015)
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let linhas = input.split("\n")
let nums = linhas[1].split(" ");
let ans = 0;

for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] == "100") {
        ans++;
    }
}

console.log(ans);
