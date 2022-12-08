const d = new Date();
const meses = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro"
]
let mes = meses[d.getMonth()];

if (mes == "Fevereiro") {
	console.log("É o mês do seu aniversário");
}
else {
	console.log("Não é o mês do seu aniversário");
}