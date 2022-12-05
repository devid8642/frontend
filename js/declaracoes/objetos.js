// No JS é possível criar objetos sem classes
function getNome() {
	return this.nome;
}
function getIdade() {
	return this.idade;
}
const obj = {nome: "Devid", idade: 17, getNome: getNome, getIdade: getIdade};
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.getNome());
console.log(obj.getIdade());