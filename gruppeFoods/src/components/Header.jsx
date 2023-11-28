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

export function Header({
    quantity,
    cart,
    combos,
    lanches,
    porcoes,
    sobremesas,
    bebidas
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

            <SearchEat onSubmit={handleSearch}>
                <input
                    type="text"
                    list='search'
                    placeholder='Pesquise'
                    onChange={({ target }) => setSearchValue(target.value)}
                    value={searchValue}
                    required
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
                    <ShoppingCart /> CARRINHO
                    <QuantidadeJaDentroDoCarrinho>1</QuantidadeJaDentroDoCarrinho>
                </ButtonCarrinho>

                {mostrarCarrinho && (
                    <>
                        <Carrinho
                            cart={cart}
                            quantity={quantity}
                            handleToggleDiv={handleToggleDiv}
                            cart={cart}
                            combos={combos}
                            lanches={lanches}
                            porcoes={porcoes}
                            sobremesas={sobremesas}
                            bebidas={bebidas}
                        />
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