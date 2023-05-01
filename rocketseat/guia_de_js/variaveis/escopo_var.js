// O escopo do comando var é global

// é possível acessar num1 e num2 mesmo antes de suas declarações
console.log(`num1: ${num1} e num2: ${num2} antes da declaração`);

{
    var num1 = 5;
    var num2 = 3;
}

console.log(`num1: ${num1} e num2: ${num2} depois da declaração`);
