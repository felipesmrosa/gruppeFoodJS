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

import { Carrinho } from './Carrinho'

import logo from '../images/logo.png';

export function Header({ quantity }) {
    const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
    // const [itensNoCarrinho, setItensNoCarrinho] = useState(localStorage.getItem('produto'))

    // Função para alternar a visibilidade da div
    function handleToggleDiv() {
        setMostrarCarrinho(!mostrarCarrinho);
    };

    return (
        <HeaderContainer>
            <img src={logo} alt="" />

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

                <Perfil>
                    <UserCircle />  {/* pedidos, favoritos, perfil, meus endereços, sair */}
                </Perfil>

                <ButtonCarrinho onClick={handleToggleDiv}>
                    <ShoppingCart />
                    CARRINHO
                </ButtonCarrinho>

                {quantity > 0 && <QuantidadeJaDentroDoCarrinho>{quantity}</QuantidadeJaDentroDoCarrinho>}

                {mostrarCarrinho && (
                    <>
                        <Carrinho quantity={quantity} handleToggleDiv={handleToggleDiv} />
                    </>
                )}

            </MenuNavigator>
        </HeaderContainer>
    )
}