
let dobra = 0;

alert('Bem vindo ao sistema de navegação da nave espacial');
let nome = prompt('Digite seu nome, piloto:');
let nameNave = prompt('Digite o nome da sua nave');
confirm('As informações estão, ok?');

let op = parseInt(prompt('Deseja entrar em dobra espacial?\n1-Sim\n2-Não'));
while (op === 1) {
    alert('Entrando em dobra...');
    dobra++;
    op = parseInt(prompt('Deseja entrar em dobra espacial novamente?\n1-Sim\n2-Não'));
}
confirm(`Piloto: ${nome}\nNave: ${nameNave}\nDobras Espaciais: ${dobra}`);
alert('Obrigado por usar nosso programa.');

