import { useState } from 'react';
import {
    HeaderContainer,
    SearchEat,
    MenuNavigator,
    ButtonCarrinho,
    Entregas,
    Perfil,
    QuantidadeJaDentroDoCarrinho
} from './styles'

import {
    MagnifyingGlass,
    MapPin,
    UserCircle,
    ShoppingCart
} from 'phosphor-react'

import { Link } from 'react-router-dom'

import { Carrinho } from './Carrinho'

import logo from '../images/logo.png';
import { Configuracoes } from './ConfiguracoesPerfil';
import { Modal } from './Carrinho/ModalPagamento';
import { Detalhes } from './Carrinho/ModalDetalhes';

export function Header({
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
    mostrarDetalhes,
    setMostrarDetalhes,
    precoTotalGeral,
    totalItensGeral,
    restaurantes
}) {
    const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
    const [mostrarPerfil, setMostrarPerfil] = useState(false);

    const [searchValue, setSearchValue] = useState('');
    // const [itensNoCarrinho, setItensNoCarrinho] = useState(localStorage.getItem('produto'))

    // Função para alternar a visibilidade da div
    function handleToggleDiv() {
        setMostrarCarrinho(!mostrarCarrinho);
    };
    function handleTogglePerfil() {
        setMostrarPerfil(!mostrarPerfil);
    }

    function handleSearch(e) {
        e.preventDefault()
    }

    return (
        <HeaderContainer>
            <Link to="/home">
                <img src={logo} alt="" />
            </Link>

            <MenuNavigator>
                <Perfil onClick={handleTogglePerfil}>
                    <UserCircle />  {/* pedidos, favoritos, perfil, meus endereços, sair */}
                </Perfil>

                <ButtonCarrinho onClick={handleToggleDiv}>
                    <ShoppingCart /> CARRINHO
                    <QuantidadeJaDentroDoCarrinho>{totalItensGeral}</QuantidadeJaDentroDoCarrinho>
                </ButtonCarrinho>

                {mostrarCarrinho && (
                    <>
                        <Carrinho
                            restaurantes={restaurantes}

                            cart={cart}
                            quantity={quantity}
                            handleToggleDiv={handleToggleDiv}
                            carrinho={carrinho}
                            setCarrinho={setCarrinho}
                            adicionarAoCarrinho={adicionarAoCarrinho}
                            removerDoCarrinho={removerDoCarrinho}
                            porcoesCarrinho={porcoesCarrinho}
                            setPorcoesCarrinho={setPorcoesCarrinho}
                            setPedidoFinalizado={setPedidoFinalizado}
                            combos={combos}
                            lanches={lanches}
                            porcoes={porcoes}
                            sobremesas={sobremesas}
                            bebidas={bebidas}
                            historico={historico}
                            setHistorico={setHistorico}
                            formaDePagamento={formaDePagamento}
                            setFormaDePagamento={setFormaDePagamento}
                            mostrarModal={mostrarModal}
                            setMostrarModal={setMostrarModal}
                            mostrarDetalhes={mostrarDetalhes}
                            setMostrarDetalhes={setMostrarDetalhes}
                            precoTotalGeral={precoTotalGeral}
                            totalItensGeral={totalItensGeral}
                        />
                    </>
                )}
                {mostrarPerfil && (
                    <>
                        <Configuracoes />
                    </>
                )}

                {mostrarModal && (
                    <center>
                        <Modal
                            cart={cart}
                            quantity={quantity}
                            handleToggleDiv={handleToggleDiv}
                            carrinho={carrinho}
                            setCarrinho={setCarrinho}
                            adicionarAoCarrinho={adicionarAoCarrinho}
                            removerDoCarrinho={removerDoCarrinho}
                            porcoesCarrinho={porcoesCarrinho}
                            setPorcoesCarrinho={setPorcoesCarrinho}
                            setPedidoFinalizado={setPedidoFinalizado}
                            combos={combos}
                            lanches={lanches}
                            porcoes={porcoes}
                            sobremesas={sobremesas}
                            bebidas={bebidas}
                            historico={historico}
                            setHistorico={setHistorico}
                            formaDePagamento={formaDePagamento}
                            setFormaDePagamento={setFormaDePagamento}

                            mostrarModal={mostrarModal}
                            setMostrarModal={setMostrarModal}

                            totalItensGeral={totalItensGeral}
                            precoTotalGeral={precoTotalGeral}
                        />
                    </center>
                )}
                {mostrarDetalhes && (
                    <center>
                        <Detalhes 
                            setMostrarDetalhes={setMostrarDetalhes}
                        />
                    </center>
                )}
            </MenuNavigator>
        </HeaderContainer>
    )
}