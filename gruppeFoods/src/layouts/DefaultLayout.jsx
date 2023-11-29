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

    totalItensGeral,
    precoTotalGeral
}) {

    return (
        <div>
            <Header
                cart={cart}
                combos={combos}
                lanches={lanches}
                porcoes={porcoes}
                sobremesas={sobremesas}
                bebidas={bebidas}
                
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}

                carrinho={carrinho}
                setCarrinho={setCarrinho}
                adicionarAoCarrinho={adicionarAoCarrinho}
                removerDoCarrinho={removerDoCarrinho}
                porcoesCarrinho={porcoesCarrinho}
                setPorcoesCarrinho={setPorcoesCarrinho}

                setPedidoFinalizado={setPedidoFinalizado}

                historico={historico}
                setHistorico={setHistorico}

                formaDePagamento={formaDePagamento}
                setFormaDePagamento={setFormaDePagamento}

                precoTotalGeral={precoTotalGeral}
                totalItensGeral={totalItensGeral}
            />
            <Outlet />
            <Footer infos={infos} setInfos={setInfos} />
        </div>
    )
}