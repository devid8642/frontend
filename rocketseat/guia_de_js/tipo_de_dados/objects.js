// Objeto é um tipo de dado que agrupa estado e comportamento

objeto = {
    nome: 'devid',
    idade: 18,
    fazer_aniversario: function() {
        this.idade += 1;
        console.log(`${this.nome} fez aniversário!`);
    }
};

console.log(`${objeto.nome} tem ${objeto.idade} anos`);

objeto.fazer_aniversario();

console.log(`${objeto.nome} tem ${objeto.idade} anos`);