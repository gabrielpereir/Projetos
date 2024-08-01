

function mensagem(){

    alert('Bem vindo ao identificador de múltiplos')
    let number1 = parseInt(prompt('Escreva o primeiro número inteiro'));
    let number2 = parseInt(prompt('Escreva o segundo número inteiro'));
    verificacao(number1,number2)
}


function verificacao(n1,n2) {
   let maior, menor;
    if(n1>n2){

        maior = n1;
        menor = n2;
    }

    else if (n2>n1 || n2===n1)
        {
            maior = n2;
            menor = n1;
    }
    
    multiplo(maior,menor);
   }



function multiplo(a,b){

    if(a % b === 0){
     alert('Os números são multiplos');
    }else{
     alert('Os números não são multiplos');
    }
 }
 

mensagem();