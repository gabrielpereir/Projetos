alert('BEM VINDO AO CONVERSOR DE MEDIDAS');
let total;
let tecla;
tecla = parseFloat(prompt('Pressione 1 para continuar ou 0 para sair'));
while (tecla === 1) {
    let medida = parseFloat(prompt('Escreva um valor em metros que deseja converter:'));
    let escolha;
    escolha = parseFloat(prompt('Selecione para qual medida deseja converter\n(digite o número da opção)\n1---Milímetro(Mm)\n2---Centímetro(Cm)\n3---Decímetro(Dm)\n4---Decâmetro(Dam)\n5---Hectômetro(Hm)\n6---Quilômetro(Km)'));
    while (escolha < 1 || escolha > 6) {
        alert('Opção inválida');
        escolha = parseFloat(prompt('Selecione para qual medida deseja converter\n(digite o número da opção)\n1---Milímetro(Mm)\n2---Centímetro(Cm)\n3---Decímetro(Dm)\n4---Decâmetro(Dam)\n5---Hectômetro(Hm)\n6---Quilômetro(Km)'));
    }
    switch (escolha) {
        case 1:
            total = medida * 1000;
            break;
        case 2:
            total = medida * 100;
            break;
        case 3:
            total = medida * 10;
            break;
        case 4:
            total = medida / 10;
            break;
        case 5:
            total = medida / 100;
            break;
        case 6:
            total = medida / 1000;
            break;


    }






    tecla = parseFloat(prompt('O número ' + medida + ' equivale à ' + total + '\nPressione 1 para converter outra medida ou 0 para sair'));
}

alert('Obrigado por usar nosso programa');

