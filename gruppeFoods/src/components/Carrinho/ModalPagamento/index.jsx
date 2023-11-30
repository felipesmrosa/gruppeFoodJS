import { XCircle } from 'phosphor-react'
import {
    Container,
    ModalOverlay,
    Headerzinho,
    FormularioCartao,
    Localizacao,
    ItemUmDoLadoDoOutro,
    FecharModal
} from './styles'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export function Modal({
    quantity,
    cart,
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
    precoTotalGeral,
    totalItensGeral
}) {
    const navegar = useNavigate()
    const [pagamento, setPagamento] = useState(true)
    const [simSelecionado, setSimSelecionado] = useState(false);
    const [naoSelecionado, setNaoSelecionado] = useState(false);

    function handleSimChange() {
        if (!simSelecionado) {
            setSimSelecionado(true);
            setNaoSelecionado(false);
        } else {
            setSimSelecionado(false);
        }
    };

    function handleNaoChange() {
        if (!naoSelecionado) {
            setNaoSelecionado(true);
            setSimSelecionado(false);
        } else {
            setNaoSelecionado(false);
        }
    };


    const finalizarPedido = (e) => {
        e.preventDefault()

        const carrinhoLocalStorage = localStorage.getItem('carrinho');

        if (!carrinhoLocalStorage || JSON.parse(carrinhoLocalStorage).length === 0) {
            toast.error('Seu carrinho está vazio. Adicione itens antes de finalizar o pedido.', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        const historicoCompras = JSON.parse(localStorage.getItem('historicoCompras')) || [];
        const carrinho = JSON.parse(carrinhoLocalStorage);

        if (formaDePagamento === 'cartao') {
            // Lógica para validar os dados do cartão...
            // Se estiver tudo certo com os dados do cartão, continuar o processo de finalização do pedido
        } else {
            // Continuar o processo de finalização do pedido para pagamento em dinheiro
        }
        setMostrarModal(true)

        toast.success('Pedido realizado com sucesso!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

        const novaCompra = { itens: carrinho, data: new Date().toLocaleString() };

        const novoHistorico = [...historicoCompras, novaCompra];

        localStorage.setItem('historicoCompras', JSON.stringify(novoHistorico));
        localStorage.removeItem('carrinho');

        setTimeout(() => {
            navegar('home/historico');
        }, 1200);
    };

    return (
        <ModalOverlay>
            <Container>
                <Headerzinho>
                    <FecharModal onClick={() => setMostrarModal(false)}>
                        <XCircle />
                    </FecharModal>
                    <h1>Preço Total: ${precoTotalGeral}</h1>
                </Headerzinho>
                <ItemUmDoLadoDoOutro>
                    <div className={pagamento == true ? 'ativarCor' : 'pointer'} onClick={() => setPagamento(true)}>Cartão</div>
                    <div className={pagamento == false ? 'ativarCor' : 'pointer'} onClick={() => setPagamento(false)}>Dinheiro</div>
                </ItemUmDoLadoDoOutro>

                <Localizacao>
                    <label htmlFor="localizacao">Aonde você está?</label>
                    <input type="text" placeholder='Endereço' />
                    <input type="text" placeholder='Complemento' />
                </Localizacao>

                <h1>{pagamento ? 'Forma de pagamento: Cartão' : 'Forma de pagamento: Dinheiro'}</h1>
                {pagamento && (
                    <FormularioCartao>
                        <br />
                        <label htmlFor="cartao">Digitos do Cartão</label>
                        <input name="cartao" placeholder="0000 0000 0000 0000" type="text" />

                        <label htmlFor="cartao">CVV</label>
                        <input name="cvv" placeholder="000" type="number" />

                        <label htmlFor="vencimento">Vencimento</label>
                        <input type="number" placeholder='Mês' name="vencimento" id="vencimento" />
                        <input type="number" placeholder='Ano' name="vencimento" id="vencimento" />

                        <button onClick={finalizarPedido}>Concluir Pedido</button>
                    </FormularioCartao>
                )}
                {!pagamento && (
                    <>
                        <div>
                            <h1>Precisa de troco?</h1>
                            <form>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={simSelecionado}
                                        onChange={handleSimChange}
                                    />
                                    SIM
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={naoSelecionado}
                                        onChange={handleNaoChange}
                                    />
                                    NÃO
                                </label>
                            </form>
                        </div>
                        <button onClick={finalizarPedido}>Concluir Pedido</button>
                    </>
                )}
            </Container>
        </ModalOverlay>
    )
}