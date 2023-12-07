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
    infos
}) {
    
    function ficarnapagina(e) {
        e.preventDefault();
        
        console.log(infos, 'infos')
    }
    return (
        <Container>
            <Formulario>
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
                            name='imagemProduto'
                            value={novoItem.src}
                            onChange={handleChange}
                            accept='image/*'
                        />
                    </label>
                    <br />
                    <AdicionarProdutoPraLista onClick={ficarnapagina}>Adicionar Produto</AdicionarProdutoPraLista>

                    <h2>Produtos Cadastrados:</h2>
                    {/* {produtos && (
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