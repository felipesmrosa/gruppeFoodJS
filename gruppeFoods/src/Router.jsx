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
    precoTotalGeral,
    handleLogoChange,
    handleNomeChange,
    handlePriceChange,
    adicionarItem,
    enviarCardapio,
    adicionarCardapio,
    setName,
    setPrice,
    setSrc,
    name,
    price,
    src
}) {

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
                            handleLogoChange={handleLogoChange}
                            adicionarCardapio={adicionarCardapio}
                            setName={setName}
                            setPrice={setPrice}
                            setSrc={setSrc}
                            name={name}
                            price={price}
                            src={src}
                        />
                    }
                >
                </Route>
            </Route>
        </Routes >
    )
}