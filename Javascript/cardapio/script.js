function mostrarCardapio() {
    return "Bem-vindo à Lanchonete!\n\n" +
           "Por favor, escolha um item do cardápio digitando o número correspondente:\n" +
           "1. Hambúrguer - R$15,00\n" +
           "2. Cheeseburguer - R$18,00\n" +
           "3. Batata Frita - R$8,00\n" +
           "4. Refrigerante - R$5,00\n" +
           "5. Milkshake - R$12,00\n" +
           "6. Finalizar pedido";
}

function calcularPreco(item) {
    let preco = 0;

    switch(item) {
        case '1':
            preco = 15.00;
            alert("Você escolheu: Hambúrguer - R$15,00");
            break;
        case '2':
            preco = 18.00;
            alert("Você escolheu: Cheeseburguer - R$18,00");
            break;
        case '3':
            preco = 8.00;
            alert("Você escolheu: Batata Frita - R$8,00");
            break;
        case '4':
            preco = 5.00;
            alert("Você escolheu: Refrigerante - R$5,00");
            break;
        case '5':
            preco = 12.00;
            alert("Você escolheu: Milkshake - R$12,00");
            break;
        case '6':
            alert("Finalizando pedido...");
            break;
        default:
            alert("Opção inválida. Tente novamente.");
            break;
    }

    return preco;
}

function fazerPedido() {
    let total = 0;
    let pedidoFinalizado = false;

    while (!pedidoFinalizado) {
        let escolha = prompt(mostrarCardapio());
        if (escolha === '6') {
            pedidoFinalizado = true;
        } else {
            total += calcularPreco(escolha);
        }
    }

    alert("Total do pedido: R$" + total.toFixed(2));
    alert("Obrigado por fazer seu pedido!");
}

fazerPedido();
