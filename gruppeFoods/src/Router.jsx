import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { InsideRestaurant } from './pages/InsideRestaurant'
import { useEffect, useState } from 'react';
import { Login } from './pages/Login';
import { RegisterYourRestaurant } from './components/ContentFooter/RegisterYourRestaurant';
import { ResetPass } from './pages/ResetPass';
import { HistoricoDeCompras } from './components/ConfiguracoesPerfil/HistoricoDeCompras';


export function Router({
    restaurantes,
    setRestaurantes,

    criarRestaurante,

    infos,
    setInfos,

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

    totalItensGeral,
    precoTotalGeral
}) {

    const combos = [
        {
            id: 1,
            src: '/src/images/comidas/combos/combo01.jpg',
            name: "Combo 01",
            price: 10
        },
        {
            id: 2,
            src: '/src/images/comidas/combos/combo02.jpg',
            name: "Combo 02",
            price: 11
        },
        {
            id: 3,
            src: '/src/images/comidas/combos/combo03.jpg',
            name: "Combo 03",
            price: 17
        },
        {
            id: 4,
            src: '/src/images/comidas/combos/combo04.jpg',
            name: "Combo 04",
            price: 13
        },
        {
            id: 5,
            src: '/src/images/comidas/combos/combo05.jpg',
            name: "Combo 05",
            price: 12
        },
        {
            id: 6,
            src: '/src/images/comidas/combos/combo01.jpg',
            name: "Combo 123",
            price: 128
        }
    ]
    // const lanches = [
    //     {
    //         id: 1,
    //         src: '/src/images/comidas/lanches/Lanche01.jpg',
    //         name: "Lanche 01",
    //         price: 10
    //     },
    //     {
    //         id: 2,
    //         src: '/src/images/comidas/lanches/Lanche02.jpg',
    //         name: "Lanche 02",
    //         price: 11
    //     },
    //     {
    //         id: 3,
    //         src: '/src/images/comidas/lanches/Lanche03.jpg',
    //         name: "Lanche 03",
    //         price: 17
    //     },
    //     {
    //         id: 4,
    //         src: '/src/images/comidas/lanches/Lanche04.jpg',
    //         name: "Lanche 04",
    //         price: 13
    //     },
    //     {
    //         id: 5,
    //         src: '/src/images/comidas/lanches/Lanche05.jpg',
    //         name: "Lanche 05",
    //         price: 12
    //     },
    // ]
    const porcoes = [
        {
            id: 7,
            src: '/src/images/comidas/porcoes/porcao01.jpg',
            name: "Porção 01",
            price: 10
        },
        {
            id: 8,
            src: '/src/images/comidas/porcoes/porcao02.jpg',
            name: "Porção 02",
            price: 11
        },
        {
            id: 9,
            src: '/src/images/comidas/porcoes/porcao03.jpg',
            name: "Porção 03",
            price: 17
        },
        {
            id: 10,
            src: '/src/images/comidas/porcoes/porcao04.jpg',
            name: "Porção 04",
            price: 13
        },
        {
            id: 11,
            src: '/src/images/comidas/porcoes/porcao05.jpg',
            name: "Porção 05",
            price: 12
        },
        {
            id: 12,
            src: '/src/images/comidas/porcoes/porcao05.jpg',
            name: "Porção 42",
            price: 521
        }
    ]
    // const sobremesas = [
    //     {
    //         id: 1,
    //         src: '/src/images/comidas/sobremesas/sobremesa01.jpg',
    //         name: "Sobremesa 01",
    //         price: 10
    //     },
    //     {
    //         id: 2,
    //         src: '/src/images/comidas/sobremesas/sobremesa02.jpg',
    //         name: "Sobremesa 02",
    //         price: 11
    //     },
    //     {
    //         id: 3,
    //         src: '/src/images/comidas/sobremesas/sobremesa03.jpg',
    //         name: "Sobremesa 03",
    //         price: 17
    //     },
    //     {
    //         id: 4,
    //         src: '/src/images/comidas/sobremesas/sobremesa04.jpg',
    //         name: "Sobremesa 04",
    //         price: 13
    //     },
    //     {
    //         id: 5,
    //         src: '/src/images/comidas/sobremesas/sobremesa05.jpg',
    //         name: "Sobremesa 05",
    //         price: 12
    //     },
    // ]
    // const bebidas = [
    //     {
    //         id: 1,
    //         src: '/src/images/comidas/bebidas/bebidas01.jpg',
    //         name: "Bebida 01",
    //         price: 10
    //     },
    //     {
    //         id: 2,
    //         src: '/src/images/comidas/bebidas/bebidas02.jpg',
    //         name: "Bebida 02",
    //         price: 11
    //     },
    //     {
    //         id: 3,
    //         src: '/src/images/comidas/bebidas/bebidas03.jpg',
    //         name: "Bebida 03",
    //         price: 17
    //     },
    //     {
    //         id: 4,
    //         src: '/src/images/comidas/bebidas/bebidas04.jpg',
    //         name: "Bebida 04",
    //         price: 13
    //     },
    //     {
    //         id: 5,
    //         src: '/src/images/comidas/bebidas/bebidas05.jpg',
    //         name: "Bebida 05",
    //         price: 12
    //     },
    // ]

    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/reset' element={<ResetPass />} />
            <Route path='/home' element={<DefaultLayout
                carrinho={carrinho}
                setCarrinho={setCarrinho}
                adicionarAoCarrinho={adicionarAoCarrinho}
                removerDoCarrinho={removerDoCarrinho}
                porcoesCarrinho={porcoesCarrinho}
                setPorcoesCarrinho={setPorcoesCarrinho}

                setPedidoFinalizado={setPedidoFinalizado}

                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}

                historico={historico}
                setHistorico={setHistorico}
                restaurantes={restaurantes}

                formaDePagamento={formaDePagamento}
                setFormaDePagamento={setFormaDePagamento}

                totalItensGeral={totalItensGeral}
                precoTotalGeral={precoTotalGeral}

                porcoes={porcoes}
            />}>
                <Route path='home/historico' element={
                    <HistoricoDeCompras
                        historico={historico}
                        setHistorico={setHistorico}
                        restaurantes={restaurantes}
                        formaDePagamento={formaDePagamento}
                        precoTotalGeral={precoTotalGeral}
                    />} />
                <Route path='/home/' element={<Home
                    restaurantes={restaurantes}
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    
                />} />
                <Route
                    path='home/restaurante/:nome'
                    element={
                        <InsideRestaurant
                            restaurantes={restaurantes}
                            
                            //Temporário
                            combos={combos}
                            // lanches={lanches}
                            porcoes={porcoes}
                            // sobremesas={sobremesas}
                            // bebidas={bebidas}

                            carrinho={carrinho}
                            setCarrinho={setCarrinho}
                            adicionarAoCarrinho={adicionarAoCarrinho}
                            removerDoCarrinho={removerDoCarrinho}
                            porcoesCarrinho={porcoesCarrinho}
                            setPorcoesCarrinho={setPorcoesCarrinho}
                        />}
                />
                <Route
                    path='home/registerRestaurant'
                    element={
                        <RegisterYourRestaurant
                            infos={infos}
                            setInfos={setInfos}

                            carrinho={carrinho}
                            setCarrinho={setCarrinho}
                            adicionarAoCarrinho={adicionarAoCarrinho}

                            criarRestaurante={criarRestaurante}
                        />
                    }
                >
                </Route>
            </Route>
        </Routes >
    )
}