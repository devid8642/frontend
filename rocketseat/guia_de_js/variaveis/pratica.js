let weight;

console.log(typeof weight);

let name = 'Devid';
let age = 18;
let starts = 500.25;
let is_sub = false;

let student = {};

console.log(typeof student);

student = {
    name: 'Devid',
    age: 18,
    stars: 500.25,
    is_sub: false
};

console.log(`Nome: ${student.name} idade: ${student.age} starts: ${student.stars} is_sub: ${student.is_sub}`);


let students = [];

students = [student];

console.log(students[0]);

student = {
    name: 'Abraão',
    idade: 900,
    stars: Infinity,
    is_sub: true
};

students[1] = student;

console.log(students);
