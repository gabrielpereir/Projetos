let op;

do {
    op = prompt(
        'Bem vindo a calculadora geometrica\n\n' +
        'Escolha a opção que você deseja calcular:\n' +
        '1-Área do triângulo.\n' +
        '2-Área do retângulo.\n' +
        '3-Área do quadrado.\n'+
        '4-Área do trapézio.\n' +
        '5-Área do círculo.\n' +
        '6-Sair do programa.'
    );
    switch (op) {

        case '1':

            confirm(
                'A opção escolhida foi área  do triângulo.\n' +
                'Clique em ok para continuar'
            );
            let baseTriangulo = parseFloat( prompt('Qual o valor da base do triangulo?')); 
            let alturaTriangulo = parseFloat( prompt('Qual o valor da altura do triangulo?'));
            const valorTriangulo = areaTriangulo (baseTriangulo,alturaTriangulo);
            alert ('A área do triangulo é '+ valorTriangulo );
            
            break;

        case '2':
            confirm(
                'A opção escolhida foi área  do retângulo.\n' +
                'Clique em ok para continuar'
            );
            let baseRetangulo = parseFloat( prompt('Qual o valor da base do retângulo?')); 
            let alturaRetangulo = parseFloat( prompt('Qual o valor da altura do retângulo?'));
            const valorRetangulo = areaRetangulo (baseRetangulo,alturaRetangulo);
            alert ('A área do retangulo é '+ valorRetangulo);
            break;

        case '3':
            confirm(
                'A opção escolhida foi área  do  quadrado.\n' +
                'Clique em ok para continuar'
            );
            let lado = parseFloat(prompt('Escreva o valor do lado do quadrado: '));
            const valorQuadrado = areaQuadrado (lado);
            alert ('A área do quadrado é '+ valorQuadrado);
            break;

        case '4':
            confirm(
                'A opção escolhida foi área  do  trapézio.\n' +
                'Clique em ok para continuar'
            );
            let baseMaior = parseFloat(prompt('Escreva o valor da base maior do trapézio: '));
            let baseMenor = parseFloat(prompt('Escreva o valor da base menor do trapézio: '));
            const valorTrapezio = areaTrapezio (baseMaior,baseMenor);
            alert ('A área do Trapézio é '+ valorTrapezio);
            break;


        case '5':
            confirm(
                'A opção escolhida foi área do círculo.\n' +
                'Clique em ok para continuar'
            );
            let raio = parseFloat(prompt('Escreva o valor do raio do círculo'));
            const valorCirculo = areaCirculo(raio);
            alert ('A área do círculo é '+ valorCirculo);

        case '6':
            confirm(
                'A opção escolhida foi sair do programa.\n' +
                'Clique em ok para continuar'
            );
            alert('Encerrando programa...');
            break;

        default:
            alert('Opção invalida');
            break;
    }

} while (op !== '6');

function areaTriangulo(b, a) {

    let resultado = (b * a) / 2;
    return resultado;

}

function areaRetangulo (b,a) {

    let resultado = b * a;
    return resultado;
}

function areaQuadrado (l) {

    let resultado = l * l;
    return resultado;
}

function areaTrapezio (b1,b2,a) {
    let resultado = (b1 + b2) * a / 2;
    return resultado;
}

function areaCirculo (r) {
    let resultado = 3.14 * r * r;
    return resultado;
}