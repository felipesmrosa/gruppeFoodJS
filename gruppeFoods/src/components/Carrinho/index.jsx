import { useContext, useState } from 'react';
import {
    Container,
    FecharCarrinho,
    HeaderCarrinho,
    QuantidadePrecoEItem,
    ProdutosNoCarrinho,
    NomePreco,
    QuantidadeDeleter
} from './styles'

import { TrashSimple, XCircle } from 'phosphor-react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Modal } from './ModalPagamento';

export function Carrinho({
    handleToggleDiv,
    quantity,
    cart,
    combos,
    lanches,
    porcoes,
    sobremesas,
    bebidas,
    carrinho,
    setCarrinho,
    adicionarAoCarrinho,
    removerDoCarrinho,
    porcoesCarrinho,
    setPorcoesCarrinho,
    historico,
    setHistorico,
    setPedidoFinalizado,
    formaDePagamento,
    setFormaDePagamento,
    mostrarModal,
    setMostrarModal,
    precoTotalGeral,
    totalItensGeral,
    restaurantes
}) {

    console.log(restaurantes, 'meu deus')
    const produtos = [
        { combos },
        { lanches },
        { porcoes },
        { sobremesas },
        { bebidas }
    ]

    const navegar = useNavigate();

    const diminuirQuantidade = (id, tipo) => {
        const carrinhoAtual = tipo === 'combo' ? carrinho : porcoesCarrinho;

        const novoCarrinho = carrinhoAtual.map((item) =>
            item.id === id && item.quantidade > 1 ? { ...item, quantidade: item.quantidade - 1 } : item
        );

        tipo === 'combo' ? setCarrinho(novoCarrinho) : setPorcoesCarrinho(novoCarrinho);
        console.log(novoCarrinho, 'Novo carrinho')
    };

    const aumentarQuantidade = (id, tipo) => {
        const carrinhoAtual = tipo === 'combo' ? carrinho : porcoesCarrinho;

        const novoCarrinho = carrinhoAtual.map((item) =>
            item.id === id ? { ...item, quantidade: item.quantidade < 10 ? item.quantidade + 1 : 10 } : item
        );

        tipo === 'combo' ? setCarrinho(novoCarrinho) : setPorcoesCarrinho(novoCarrinho);
    };

    function AbrirModal() {
        const carrinhoLocalStorage = localStorage.getItem('carrinho');

        if (!carrinhoLocalStorage || JSON.parse(carrinhoLocalStorage).length === 0) {
            toast.error('Seu carrinho está vazio. Adicione itens antes de finalizar o pedido.', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        } else {
            setMostrarModal(true)
        }
    }

    return (
        <>
            <Container>
                <HeaderCarrinho>
                    <FecharCarrinho onClick={handleToggleDiv}>
                        <XCircle />
                    </FecharCarrinho>
                    <QuantidadePrecoEItem>
                        <h2>Total price: ${precoTotalGeral}</h2>
                        <h4>Itens: {totalItensGeral}</h4>
                    </QuantidadePrecoEItem>
                </HeaderCarrinho>

                <hr />

                {carrinho.map((item) => (
                    <ProdutosNoCarrinho key={item.id}>
                        <img src={item.src} alt={item.name} />
                        <NomePreco>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                        </NomePreco>
                        <QuantidadeDeleter>
                            {item.quantidade > 1 && (
                                <button onClick={() => diminuirQuantidade(item.id, 'combo')}>-</button>
                            )}
                            <p>{item.quantidade}</p>
                            {item.quantidade < 10 && (
                                <button onClick={() => aumentarQuantidade(item.id, 'combo')}>+</button>
                            )}
                            <button onClick={() => removerDoCarrinho(item.id, 'combo')}><TrashSimple /></button>
                        </QuantidadeDeleter>
                    </ProdutosNoCarrinho>
                ))}
                {porcoesCarrinho.map((item) => (
                    <ProdutosNoCarrinho key={item.id}>
                        <img src={item.src} alt={item.name} />
                        <NomePreco>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                        </NomePreco>
                        <QuantidadeDeleter>
                            {item.quantidade > 1 && (
                                <button onClick={() => diminuirQuantidade(item.id)}>-</button>
                            )}
                            <p>{item.quantidade}</p>
                            {item.quantidade < 10 && (
                                <button onClick={() => aumentarQuantidade(item.id)}>+</button>
                            )}
                            <button onClick={() => removerDoCarrinho(item.id)}><TrashSimple /></button>
                        </QuantidadeDeleter>
                    </ProdutosNoCarrinho>
                ))}
                <hr />
                <button onClick={AbrirModal}>
                    Finalizar Pedido
                </button>
            </Container>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}