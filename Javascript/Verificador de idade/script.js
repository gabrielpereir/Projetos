// alert('Bem vindo ao verificador de idade');

// let nomePessoa1 = prompt('Digite o nome da primeira pessoa');
// let idadePessoa1 = prompt('Digite a idade da primeira pessoa');
// let nomePessoa2 = prompt('Digite o nome da segunda pessoa');
// let idadePessoa2 = prompt('Digite a idade da segunda pessoa');

//  if(idadePessoa1>idadePessoa2){

//     alert(`A pessoa mais velha é ${nomePessoa1} que tem ${idadePessoa1} anos\nA pessoa mais nova é ${nomePessoa2} que tem ${idadePessoa2} anos`);

// }
// else if(idadePessoa1===idadePessoa2){

//     alert(`${nomePessoa1} e ${nomePessoa2} tem a mesma idade ${idadePessoa1}`);
// }

// else{
//     alert(`A pessoa mais velha é ${nomePessoa2} que tem ${idadePessoa2} anos\nA pessoa mais nova é ${nomePessoa1} que tem ${idadePessoa1} anos`)
// }


// let dobra = 0;

// alert('Bem vindo ao sistema de navegação da nave espacial');
// let nome = prompt('Digite seu nome, piloto:');
// let nameNave = prompt('Digite o nome da sua nave');
// confirm('As informações estão, ok?');

// let op = parseInt(prompt('Deseja entrar em dobra espacial?\n1-Sim\n2-Não'));
//     while (op === 1) {
//         alert('Entrando em dobra...');
//         dobra++;
//         op = parseInt(prompt('Deseja entrar em dobra espacial novamente?\n1-Sim\n2-Não'));
//     }
//     confirm(`Piloto: ${nome}\nNave: ${nameNave}\nDobras Espaciais: ${dobra}`);
//     alert('Obrigado por usar nosso programa.');

// let nome = prompt('Digite seu nome: ');
// for (let i=0; i<nome.length; i++){
//     console.log(nome[i]);
// }

// let nomeNave = prompt('Escreva o nome da nave:');

// let char = prompt('Digite o carater que deseja substituir');

// let novoChar = prompt('Digite por qual caracter deseja substituir o: '+char);

// let novoNomeNave= '';

// for(i=0; i<nomeNave.length; i++){
//     if(nomeNave[i]===char){
//         novoNomeNave+=novoChar;
//     }else{
//         novoNomeNave+=nomeNave[i];
//     }
// }
// alert(`Você escolheu a letra ${novoChar} para substituir a letra ${char}\nO novo nome é ${novoNomeNave}`);

// let cpf = prompt ('Digite o número do seu cpf');

// let numero = prompt('digite um número para substituir');

// let novo = prompt('digite um novo número');

// let senha ='';

// for (i=0; i<cpf.length; i++){
//     if(cpf[i] === numero){
//         senha+=novo;
//     }else{
//         senha+=cpf[i];
//     }
// }alert ('Sua senha é:\n'+senha);