alert('Bem vindo ao verificador de idade');
let idade =parseInt(prompt('Digite sua idade:'));
if(idade > 18 && idade <70){
    alert('Eleitor obrigatório');
}else if(idade >16 ){
    alert('Eleitor Facultativo');
}else{
    alert('idade insuficiente para votar');
}