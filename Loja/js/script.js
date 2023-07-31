function alterarQtd(produto, acao){
    const qtd = document.getElementById("qtd_" + produto)
    const valor = document.getElementById("valor_" + produto)
    const total = document.getElementById("total_" + produto)

    if(acao == '-' && qtd.innerHTML == 0){
        alert("Atenção! não pode selecionar quantidade negativa.")
    }else{
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        total.innerHTML = qtd.innerHTML * somenteNumeros(valor.innerHTML)
        soma()
    }
}


function soma() {
    let soma = 0;
  
    for (let i = 0; i < 4; i++) {
      const element = document.getElementById('total_' + i);
      if (element) {
        soma += parseFloat(element.innerHTML);
      }
    }
  
    const formatarSubtotal = 'R$ ' + soma.toFixed(2); // Formata para 2 casas decimais
    document.getElementById('subtotal').innerHTML = formatarSubtotal;
  }
  

function somenteNumeros(n){
    return n.replace(/\D/g, '')
}

function formatarValor(n){
    return 'R$ ' + n.toLocateString()
}