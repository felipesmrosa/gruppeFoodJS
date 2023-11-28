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
    bebidas
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
            />
            <Outlet />
            <Footer infos={infos} setInfos={setInfos} />
        </div>
    )
}