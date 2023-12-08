import { useState } from 'react'
import { Produto } from '../Produto'
import {
    Formulario,
    Legenda,
    Container,
    AdicionarProdutoPraLista
} from './styled'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Paperclip } from 'phosphor-react';

export function Menu({
    novoItem,
    handleChange,
    infos,
    criarRestaurante,
    handleProduct
}) {
    


    return (
        <Container>
            <Formulario onSubmit={criarRestaurante}>
                <fieldset>
                    <Legenda>Seus Produtos!</Legenda>
                    <label htmlFor="nomeDoProduto">Nome do Produto*
                        <input
                            id='nomeDoProduto'
                            placeholder='Nome'
                            type="text"
                            name='nomeDoProduto'
                            value={novoItem.nome}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="precoDoProduto">Preço do Produto*
                        <input
                            id='precoDoProduto'
                            placeholder='Preço'
                            type="text"
                            name='precoDoProduto'
                            value={novoItem.preco}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="descricaoDoProduto">Descrição do Produto*
                        <input
                            id='descricaoDoProduto'
                            placeholder='Descrição'
                            type="text"
                            name='descricaoDoProduto'
                            value={novoItem.descricao}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="imagemProduto"><Paperclip size={32} />Imagem do Produto*
                        <input
                            id='imagemProduto'
                            type="file"
                            onChange={handleProduct}
                            accept='image/*'
                        />
                    </label>
                    <br />
                    <AdicionarProdutoPraLista type='submit'>Cadastrar Restaurante</AdicionarProdutoPraLista>

                    {/* <h2>Produtos Cadastrados:</h2>
                     {produtos && (
                        <Produto
                        />
                    )} */}

                </fieldset>
            </Formulario>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </Container>
    )
}