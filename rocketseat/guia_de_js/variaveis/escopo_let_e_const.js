// Let e const possuem o escopo local

let arr = [1, 2, 3];
let num = 0;
console.log(arr);
console.log(num);

{
    let arr = [4, 3, 2];
    num = 8;
    console.log(arr);
}

console.log(arr);
console.log(num);