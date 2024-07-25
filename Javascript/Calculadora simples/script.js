

alert('Bem vindo(a) a calculadora simples');
let firstNumber = prompt('Digite o primeiro número');
let secondNumber = prompt('Digite o segundo número');
const n1 = parseFloat(firstNumber);
const n2 = parseFloat(secondNumber);
let total;



let operation = parseFloat(prompt('Digite o número da operação desejada\n1-Soma\n2-subtração\n3-Multiplicação\n4-Divisão'));

switch (operation) {
    case 1:
        soma();

        break;
    case 2:
        subtracao();
        alert('O resultado da soma é: '+ total);
        break;

    case 3:
        multiplicacao();
        
        break;

    case 4:
        divisao();
        
        break;
}

function soma() {
    total = n1 + n2
    alert('O resultado da soma é: '+ total);
}
function subtracao() {
    total = n1 - n2
    alert('O resultado da subtração é: '+ total);
}
function multiplicacao() {
    total = n1 * n2
    alert('O resultado da multiplicação é: '+ total);
}
function divisao() {
    total = n1 / n2
    alert('O resultado da divisão é: '+ total);
}
