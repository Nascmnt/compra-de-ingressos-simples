//Escolher o tipo de ingresso e a quantidade
//Quantidade comprada é subtraída do total
//Mandar um alert quando o tipo de ingresso selecionado não esteja mais disponível

function comprar() {
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value;
    let qtdeComprada = document.getElementById('qtd').value;
    let qtdeTotal = document.getElementById(`qtd-${tipoDeIngresso}`);
    let qtdeAtual = parseInt(qtdeTotal.innerText);
    if (qtdeComprada <= 0) {
        alert('Por favor, insira uma quantidade válida.')
        return;
    }
    if (qtdeComprada < qtdeAtual) {
        qtdeTotal.innerText = qtdeAtual - qtdeComprada;
        setTimeout(() => {
            alert("Compra realizada com sucesso!");
        }, 50); // 50ms de atraso para a qtde total atualizar
    } else {
        alert(`Área selecionada não está mais disponível. Por favor, selecione uma de nossas outras opções.`);
    }
}