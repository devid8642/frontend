const d = new Date();
console.log(d);

// A contagem de meses começa no 0 neste formato, ou seja, 2 indica o mês de março
const data = new Date(2022, 2, 25);
console.log(data);

// Formatos de datas
const data2 = new Date(2022, 11, 25);
console.log(data2.toISOString());
console.log(data2.toUTCString());