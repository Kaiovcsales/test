// seleciona os elementos HTML relevantes
const btnAdicionar = document.querySelectorAll('.btn-adicionar');
const listaCarrinho = document.getElementById('carrinho-lista');
const totalCarrinho = document.getElementById('carrinho-total');

// inicializa o carrinho como um objeto vazio
let carrinho = {};

// adiciona um evento de clique para cada botão "Adicionar" no cardápio
btnAdicionar.forEach(function(btn) {
  btn.addEventListener('click', function(event) {
    const item = event.target.parentElement;
    const nome = item.querySelector('.cardapio-item-nome').innerText;
    const preco = parseFloat(item.querySelector('.cardapio-item-preco').innerText.replace(',', '.'));

    // verifica se o item já existe no carrinho e incrementa a quantidade, caso contrário, adiciona o item ao carrinho
    if (carrinho[nome]) {
      carrinho[nome].quantidade += 1;
    } else {
      carrinho[nome] = {
        quantidade: 1,
        preco: preco
      };
    }

    // atualiza a exibição do carrinho
    exibirCarrinho();
  });
});

// atualiza a exibição do carrinho
function exibirCarrinho() {
  listaCarrinho.innerHTML = '';
  let total = 0;

  // adiciona cada item do carrinho à lista de itens do carrinho
  for (const [nome, item] of Object.entries(carrinho)) {
    const li = document.createElement('li');
    li.innerText = `${nome} x ${item.quantidade} - R$ ${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(li);
    total += item.preco * item.quantidade;
  }

  // exibe o total do carrinho
  totalCarrinho.innerText = total.toFixed(2);
}
