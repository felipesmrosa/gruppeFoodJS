import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import React from "react";

export function DefaultLayout({ quantity }) {
    return (
        <div>
            <Header quantity={quantity}/>
            <Outlet />
            <Footer />
        </div>
    )
}