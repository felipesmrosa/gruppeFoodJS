import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import React from "react";

export function DefaultLayout({ quantity, infos, setInfos }) {

    return (
        <div>
            <Header cart={cart} quantity={quantity} />
            <Outlet />
            <Footer infos={infos} setInfos={setInfos} />
        </div>
    )
}