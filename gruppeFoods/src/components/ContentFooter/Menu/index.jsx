import {
    Formulario,
    Legenda,
    Container,
    AdicionarProdutoPraLista,
    Row,
    DivImagemProduto
} from './styled'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MinusCircle, Paperclip, PlusCircle } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

export function Menu({
    novoItem,
    handleChange,
    infos,
    criarRestaurante,
    handleProduct,
    adicionarItem,
    removerItem,
    redirecionarPagina
}) {
    const navegar = useNavigate();

    function criarERedirecionar() {
        if (typeof criarRestaurante === 'function') {
            criarRestaurante();
        }
    }
    function redirecionaParaHome() {
        setTimeout(() => {
            navegar('/home');
            window.location.reload();
        }, 5000);
    }

    return (
        <Container>
            <Formulario onSubmit={criarERedirecionar}>
                <fieldset>
                    <Legenda>Seus Produtos!</Legenda>
                    {novoItem.length > 0 && novoItem.map((item, index) => (
                        <div key={index}>
                            <label htmlFor={`nomeDoProduto-${index}`}>Nome do Produto*
                                <input
                                    id={`nomeDoProduto-${index}`}
                                    placeholder='Nome'
                                    type="text"
                                    name='nomeDoProduto'
                                    value={item.nome}
                                    onChange={(event) => handleChange(index, event)}
                                />
                            </label>
                            <label htmlFor={`precoDoProduto-${index}`}>Preço do Produto*
                                <input
                                    id={`precoDoProduto-${index}`}
                                    placeholder='Preço'
                                    type="text"
                                    name='precoDoProduto'
                                    value={item.preco}
                                    onChange={(event) => handleChange(index, event)}
                                />
                            </label>
                            <label htmlFor={`descricaoDoProduto-${index}`}>Descrição do Produto*
                                <input
                                    id={`descricaoDoProduto-${index}`}
                                    placeholder='Descrição'
                                    type="text"
                                    name='descricaoDoProduto'
                                    value={item.descricao}
                                    onChange={(event) => handleChange(index, event)}
                                />
                            </label>
                            <DivImagemProduto>
                                <label htmlFor={`imagemProduto-${index}`}><Paperclip size={32} />Imagem do Produto*
                                    <input
                                        id={`imagemProduto-${index}`}
                                        type="file"
                                        onChange={(event) => { console.log(index, event); handleProduct(index, event) }}
                                        accept='image/*'
                                    />
                                </label>
                            </DivImagemProduto>
                            <Row>
                                <p onClick={adicionarItem}><PlusCircle /></p>
                                {novoItem.length > 1 && <p onClick={removerItem}><MinusCircle /></p>}
                            </Row>
                        </div>
                    ))}
                    <br />
                    <AdicionarProdutoPraLista onClick={redirecionaParaHome} type='submit'>Cadastrar Restaurante</AdicionarProdutoPraLista>
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