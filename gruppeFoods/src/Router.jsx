import { Routes, Route, useNavigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { InsideRestaurant } from './pages/InsideRestaurant'
import { Login } from './pages/Login';
import { RegisterYourRestaurant } from './components/ContentFooter/RegisterYourRestaurant';
import { ResetPass } from './pages/ResetPass';
import { HistoricoDeCompras } from './components/ConfiguracoesPerfil/HistoricoDeCompras';
import { Teste } from './Teste';


export function Router({
    removerItem,

    restaurantes,

    adicionarItem,

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
    mostrarDetalhes,
    setMostrarDetalhes,

    totalItensGeral,
    precoTotalGeral,
    handleLogoChange,
    novoItem,
    handleChange,
    precoAdicionais,
    setPrecoAdicionais,
    handleImageChange,
    enviarImagem,
    handleProduct
}) {
    return (
        <Routes>
            <Route path='/teste' element={<Teste />}></Route>
            <Route path='/' element={<Login />} />
            <Route path='/reset' element={<ResetPass />} />
            <Route path='/home' element={<DefaultLayout
                carrinho={carrinho}

                handleImageChange={handleImageChange}

                setCarrinho={setCarrinho}
                adicionarAoCarrinho={adicionarAoCarrinho}
                removerDoCarrinho={removerDoCarrinho}
                porcoesCarrinho={porcoesCarrinho}
                setPorcoesCarrinho={setPorcoesCarrinho}

                setPedidoFinalizado={setPedidoFinalizado}

                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                mostrarDetalhes={mostrarDetalhes}
                setMostrarDetalhes={setMostrarDetalhes}

                historico={historico}
                setHistorico={setHistorico}
                restaurantes={restaurantes}

                formaDePagamento={formaDePagamento}
                setFormaDePagamento={setFormaDePagamento}

                totalItensGeral={totalItensGeral}
                precoTotalGeral={precoTotalGeral}

                precoAdicionais={precoAdicionais}
                setPrecoAdicionais={setPrecoAdicionais}
            />}>
                <Route path='home/historico' element={
                    <HistoricoDeCompras
                        historico={historico}
                        setHistorico={setHistorico}
                        restaurantes={restaurantes}
                        formaDePagamento={formaDePagamento}
                        precoTotalGeral={precoTotalGeral}
                    />}
                />
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
                            adicionarItem={adicionarItem}
                            handleImageChange={handleImageChange}

                            infos={infos}
                            setInfos={setInfos}

                            carrinho={carrinho}
                            setCarrinho={setCarrinho}
                            adicionarAoCarrinho={adicionarAoCarrinho}

                            criarRestaurante={criarRestaurante}
                            handleLogoChange={handleLogoChange}
                            novoItem={novoItem}
                            handleChange={handleChange}

                            enviarImagem={enviarImagem}

                            handleProduct={handleProduct}

                            removerItem={removerItem}
                        />
                    }
                >
                </Route>

            </Route>
        </Routes >
    )
}