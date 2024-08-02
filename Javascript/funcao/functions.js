
function genero(sx) {
    switch (sx) {
        case '1':
            sx = 'Masculino';
            break;
        case '2':
            sx = 'Feminino';
            break;
        case '3':
            sx = 'Outros';
            break;
    }
    return sx;
}

function astrolog(elemento) {
    let signo = '';

    if (elemento === '1') {
        signo = prompt('Escolha seu signo\n1) Áries.\n2) Leão.\n3) Sagitário');

        if (signo === '1') {
            signo = 'Áries';
        } else if (signo === '2') {
            signo = 'Leão';
        } else {
            signo = 'Sagitário';
        }

    } else if (elemento === '2') {
        signo = prompt('Escolha seu signo\n1) Touro.\n2) Virgem.\n3) Capricórnio');

        if (signo === '1') {
            signo = 'Touro';
        } else if (signo === '2') {
            signo = 'Virgem';
        } else {
            signo = 'Capricórnio';
        }

    } else if (elemento === '3') {
        signo = prompt('Escolha seu signo\n1) Gêmeos.\n2) Libra.\n3) Aquário');

        if (signo === '1') {
            signo = 'Gêmeos';
        } else if (signo === '2') {
            signo = 'Libra';
        } else {
            signo = 'Aquário';
        }

    } else if (elemento === '4') {
        signo = prompt('Escolha seu signo\n1) Câncer.\n2) Escorpião.\n3) Peixes');

        if (signo === '1') {
            signo = 'Câncer';
        } else if (signo === '2') {
            signo = 'Escorpião';
        } else {
            signo = 'Peixes';
        }
    }
    
    return signo;
}

function mensagem() {
    alert('Bem-vindo ao sistema de informações');
    let nome = prompt('Escreva seu nome');
    let idade = parseInt(prompt('Digite sua idade'));
    let sexo = prompt('Escolha seu gênero:\n1-Masculino\n2-Feminino\n3-Outros');
    sexo = genero(sexo);
    let elementoSign = prompt('Escolha o elemento do seu signo\n1-Fogo\n2-Terra\n3-Ar\n4-Água');
    let elemento = '';

    switch (elementoSign) {
        case '1':
            elemento = 'Fogo';
            break;
        case '2':
            elemento = 'Terra';
            break;
        case '3':
            elemento = 'Ar';
            break;
        case '4':
            elemento = 'Água';
            break;
    }

    let signo = astrolog(elementoSign);

    alert(`Dados cadastrados\nNome: ${nome}\nIdade: ${idade} anos.\nGênero: ${sexo}.\nSigno: ${signo}.\nElemento: ${elemento}.`);
}

mensagem();
