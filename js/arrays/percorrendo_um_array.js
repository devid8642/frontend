// foreach
function foo(v, i, arr) {
	console.log(`arr[${i}] = ${v}`);
}
const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(foo);

// map 
function foo2(v) {
	return v * 2;
}
const arr2 = arr.map(foo2);
console.log(arr2);

// filter
function foo3(v) {
	return v < 4;
}
const arr3 = arr.filter(foo3);
console.log(arr3);

// Buscando em um array
console.log(arr.indexOf(4));
console.log(arr2.indexOf(1));

// findIndex()
function foo4(v) {
	return v > 18;
}
console.log(arr.findIndex(foo4));

// .keys()
console.log(arr.keys());

// includes()
console.log(arr3.includes(3));