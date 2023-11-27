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

export function Header({ quantity, cart }) {
    const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
    const [mostrarPerfil, setMostrarPerfil] = useState(false);
    // const [itensNoCarrinho, setItensNoCarrinho] = useState(localStorage.getItem('produto'))

    // Função para alternar a visibilidade da div
    function handleToggleDiv() {
        setMostrarCarrinho(!mostrarCarrinho);
    };
    function handleTogglePerfil() {
        setMostrarPerfil(!mostrarPerfil);
    }

    return (
        <HeaderContainer>
            <Link to="/home">
                <img src={logo} alt="" />
            </Link>

            <SearchEat>
                <input
                    type="text"
                    list='search'
                    placeholder='Pesquise'
                />

                <datalist id="search">
                    <option value="Jungle Burguer" />
                    <option value="Santo Burguer" />
                    <option value="Best Burguer" />
                </datalist>

                <button>
                    <MagnifyingGlass />
                </button>
            </SearchEat>

            <MenuNavigator>
                <Entregas>
                    <MapPin />
                    ENTREGA
                </Entregas>

                <Perfil onClick={handleTogglePerfil}>
                    <UserCircle />  {/* pedidos, favoritos, perfil, meus endereços, sair */}
                </Perfil>

                <ButtonCarrinho onClick={handleToggleDiv}>
                    <ShoppingCart />
                    CARRINHO
                </ButtonCarrinho>

                {quantity > 0 && <QuantidadeJaDentroDoCarrinho>{quantity}</QuantidadeJaDentroDoCarrinho>}

                {mostrarCarrinho && (
                    <>
                        <Carrinho cart={cart} quantity={quantity} handleToggleDiv={handleToggleDiv} />
                    </>
                )}
                {mostrarPerfil && (
                    <>
                        <Configuracoes />
                    </>
                )}

            </MenuNavigator>
        </HeaderContainer>
    )
}