import { XCircle } from 'phosphor-react'
import {
    Container,
    ModalOverlay,
    Headerzinho,
    FormularioCartao,
    Localizacao,
    ItemUmDoLadoDoOutro,
    FecharModal,
    InfomacoesDoCartao,
    LabelCartao,
    BotaoFinalizarPedido
} from './styles'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export function Modal({
    setMostrarModal,
    precoTotalGeral,
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

        setMostrarModal(true)

        toast.success('Pedido realizado com sucesso!', {
            position: "top-right",
            autoClose: 800,
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
            setMostrarModal(false)
        }, 800)
        setTimeout(() => {
            navegar('home/historico');
            window.location.reload()
        }, 800);
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
                    <form>
                        <label htmlFor="localizacao">Aonde você está?
                            <input
                                type="text"
                                placeholder='Endereço'
                            />
                            <input
                                type="text"
                                placeholder='Complemento'
                            />
                        </label>
                    </form>
                </Localizacao>

                <h1>{pagamento ? 'Forma de pagamento: Cartão' : 'Forma de pagamento: Dinheiro'}</h1>
                {pagamento && (
                    <FormularioCartao>
                        <LabelCartao htmlFor="cartao">Digitos do Cartão
                            <InfomacoesDoCartao
                                name="cartao"
                                placeholder="0000 0000 0000 0000"
                                type="text"
                                required
                            />
                        </LabelCartao>
                        <LabelCartao htmlFor="vencimento">Vencimento
                            <InfomacoesDoCartao
                                type="text"
                                placeholder='Mês de Vencimento'
                                name="vencimento"
                                required
                            />
                        </LabelCartao>
                        <LabelCartao htmlFor="ano">
                            <InfomacoesDoCartao
                                type="text"
                                placeholder='Ano de Vencimento'
                                name="ano"
                                required
                            />
                        </LabelCartao>
                        <LabelCartao htmlFor="cartao">CVV
                            <InfomacoesDoCartao
                                name="cvv"
                                placeholder="000"
                                type="number"
                                required
                            />
                        </LabelCartao>
                        <BotaoFinalizarPedido onClick={finalizarPedido}>Concluir Pedido</BotaoFinalizarPedido>
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
                        <BotaoFinalizarPedido onClick={finalizarPedido}>Concluir Pedido</BotaoFinalizarPedido>
                    </>
                )}
            </Container>
        </ModalOverlay>
    )
}