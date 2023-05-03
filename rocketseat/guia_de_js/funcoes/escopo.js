let arr = [1, 2, 3];

function f(arr) {
    arr = ["a", "b", "c"];
    return arr;
}

console.log(arr);
console.log(f(arr));
console.log(arr);