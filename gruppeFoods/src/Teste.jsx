import React, { useState } from 'react';

// Suponha que "products" seja um array com objetos vindo do Firebase, cada um contendo informações sobre um produto, incluindo o preço base e os itens adicionais.

const produtos = [
    {id: 1, nome: 'batata', preco: 15}
]

export function Teste() {
  const [itensSelecionados, setItensSelecionados] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);

  const adicionarItem = (item) => {
    const novosItens = [...itensSelecionados, item];
    setItensSelecionados(novosItens);

    // Atualiza o valor total ao adicionar um item
    const precoTotal = novosItens.reduce(
      (total, currentItem) => total + currentItem.preco,
      0
    );
    setValorTotal(precoTotal);
  };

  const confirmarItens = () => {
    // Aqui você pode enviar os itens selecionados de volta ao Firebase, se necessário
    console.log('Itens selecionados:', itensSelecionados);
    console.log('Valor total:', valorTotal);

    // Fechar o modal ou executar outras ações necessárias
  };

  return (
    // Renderização do modal e botões para adicionar itens, etc.
    <div>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <p>{produto.nome}</p>
          <button onClick={() => adicionarItem(produto)}>
            Adicionar (+ {produto.preco})
          </button>
        </div>
      ))}
      <button onClick={confirmarItens}>Confirmar</button>
    </div>
  );
};