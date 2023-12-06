import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import React from "react";

export function DefaultLayout({
    cart,
    quantity,
    infos,
    setInfos,
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

    totalItensGeral,
    precoTotalGeral,

    restaurantes,

    precoAdicionais,
    setPrecoAdicionais,
    handleImageChange
}) {

    return (
        <div>
            <Header
                handleImageChange={handleImageChange}

                cart={cart}
                combos={combos}
                lanches={lanches}
                porcoes={porcoes}
                sobremesas={sobremesas}
                bebidas={bebidas}

                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                mostrarDetalhes={mostrarDetalhes}
                setMostrarDetalhes={setMostrarDetalhes}

                carrinho={carrinho}
                setCarrinho={setCarrinho}
                adicionarAoCarrinho={adicionarAoCarrinho}
                removerDoCarrinho={removerDoCarrinho}
                porcoesCarrinho={porcoesCarrinho}
                setPorcoesCarrinho={setPorcoesCarrinho}

                restaurantes={restaurantes}

                setPedidoFinalizado={setPedidoFinalizado}

                historico={historico}
                setHistorico={setHistorico}

                formaDePagamento={formaDePagamento}
                setFormaDePagamento={setFormaDePagamento}

                precoTotalGeral={precoTotalGeral}
                totalItensGeral={totalItensGeral}

                precoAdicionais={precoAdicionais}
                setPrecoAdicionais={setPrecoAdicionais}
            />
            <Outlet />
            <Footer infos={infos} setInfos={setInfos} />
        </div>
    )
}