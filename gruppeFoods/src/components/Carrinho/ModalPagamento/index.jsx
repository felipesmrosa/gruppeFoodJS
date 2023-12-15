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
    BotaoFinalizarPedido,
    Cartao,
    SimNao,
    ModalSimNao
} from './styles'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export function Modal({
    setMostrarModal,
    precoTotalGeral,
    value,
    onChange
}) {
    const navegar = useNavigate()
    const [pagamento, setPagamento] = useState(true)
    const [simSelecionado, setSimSelecionado] = useState(false);
    const [modalSim, setModalSim] = useState(false)
    const [naoSelecionado, setNaoSelecionado] = useState(false);

    function handleSimChange() {
        if (!simSelecionado) {
            setSimSelecionado(true);
            setModalSim(true)
            setNaoSelecionado(false);
        } else {
            setSimSelecionado(false);
        }
    };

    function handleNaoChange() {
        if (!naoSelecionado) {
            setNaoSelecionado(true);
            setSimSelecionado(false);
            setModalSim(false)
        } else {
            setNaoSelecionado(false);
            setModalSim(false)
        }
    };

    const [inputs, setInputs] = useState({
        endereco: '',
        complemento: '',
        cartao: '',
        vencimento: '',
        ano: '',
        cvv: '',
        troco: ''
    })
    const [erro, setErro] = useState(false)

    const handleInputChange = (e) => {
        setInputs(e.target.value);
        const formattedValue = formatCreditCard(e.target.value);
        onChange(formattedValue);
    };

    function handleSubmit(e) {
        e.preventDefault();

        // Preenchido corretamente
        if (inputs.trim() !== '') {
            const carrinhoLocalStorage = localStorage.getItem('carrinho');

            if (!carrinhoLocalStorage || JSON.parse(carrinhoLocalStorage).length === 0) {
                // Se o carrinho estiver vazio, exiba uma mensagem de erro
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
            } else {
                // Se o carrinho não estiver vazio, prossiga com o pedido
                const carrinho = JSON.parse(carrinhoLocalStorage);
                const novaCompra = { itens: carrinho, data: new Date().toLocaleString() };
                const historicoCompras = JSON.parse(localStorage.getItem('historicoCompras')) || [];
                const novoHistorico = [...historicoCompras, novaCompra];

                localStorage.setItem('historicoCompras', JSON.stringify(novoHistorico));
                localStorage.removeItem('carrinho');

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
                localStorage.removeItem('valorTotal');
                setTimeout(() => {
                    setMostrarModal(false);
                    navegar('home/historico');
                    window.location.reload();
                }, 800);
            }
        } else {
            // Se não preenchido, exiba erro
            setErro(true);
        }
    };


    function formatCreditCard(value) {
        //Remove o que for letra e tal
        const onlyNumber = value.replace(/[^\d]/g, '')

        if (onlyNumber.length <= 16) {
            return onlyNumber
                .replace(/(\d{4})/g, '$1 ')
                .trim(); // Remove espaços extras no final, se houver
        }
        // Limita o tamanho do número do cartão em 16 dígitos
        return onlyNumber.slice(0, 16).replace(/(\d{4})/g, '$1 ').trim();
    }

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

                <h1>{pagamento ? 'Forma de pagamento: Cartão' : 'Forma de pagamento: Dinheiro'}</h1>
                {pagamento && (
                    <FormularioCartao onSubmit={handleSubmit}>
                        <Localizacao>
                            <label htmlFor="localizacao">Aonde você está?*
                                <input
                                    type="text"
                                    placeholder='Endereço*'
                                    required
                                    value={inputs.endereco}
                                    onChange={handleInputChange}
                                />
                                <input
                                    type="text"
                                    placeholder='Complemento*'
                                    required
                                    value={inputs.complemento}
                                    onChange={handleInputChange}
                                />
                            </label>
                        </Localizacao>

                        <Cartao>
                            <LabelCartao htmlFor="cartao">Digitos do Cartão*
                                <InfomacoesDoCartao
                                    name="cartao"
                                    placeholder="0000 0000 0000 0000*"
                                    type="number"
                                    required
                                    value={inputs.cartao}
                                    maxLength={16}
                                    onChange={handleInputChange}
                                />
                            </LabelCartao>
                            <LabelCartao htmlFor="vencimento">Vencimento*
                                <InfomacoesDoCartao
                                    type="number"
                                    placeholder='Mês de Vencimento*'
                                    name="vencimento"
                                    required
                                    value={inputs.vencimento}
                                    maxLength={2}
                                    onChange={handleInputChange}
                                />
                            </LabelCartao>
                            <LabelCartao htmlFor="ano">
                                <InfomacoesDoCartao
                                    type="number"
                                    placeholder='Ano de Vencimento*'
                                    name="ano"
                                    required
                                    value={inputs.ano}
                                    maxLength={2}
                                    onChange={handleInputChange}
                                />
                            </LabelCartao>
                            <LabelCartao htmlFor="cartao">CVV*
                                <InfomacoesDoCartao
                                    name="cvv"
                                    placeholder="000*"
                                    type="number"
                                    maxLength={3}
                                    required
                                    value={inputs.cvv}
                                    onChange={handleInputChange}
                                />
                            </LabelCartao>
                        </Cartao>
                        {erro && <p style={{ color: 'red' }}>Por favor, preencha este campo.</p>}
                        <BotaoFinalizarPedido type='submit'>Concluir Pedido</BotaoFinalizarPedido>
                    </FormularioCartao>
                )}

                {!pagamento && (
                    <>
                        <FormularioCartao onSubmit={handleSubmit}>
                            <Localizacao>
                                <label htmlFor="localizacao">Aonde você está?*
                                    <input
                                        type="text"
                                        placeholder='Endereço*'
                                        required
                                        value={inputs.endereco}
                                        onChange={handleInputChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder='Complemento*'
                                        required
                                        value={inputs.complemento}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </Localizacao>
                            <h1>Precisa de troco?</h1>
                            <SimNao>
                                <label htmlFor="sim">
                                    <input
                                        id='sim'
                                        type="checkbox"
                                        checked={simSelecionado}
                                        onChange={handleSimChange}
                                    />
                                    SIM
                                </label>
                                <label htmlFor="nao">
                                    <input
                                        id='nao'
                                        type="checkbox"
                                        checked={naoSelecionado}
                                        onChange={handleNaoChange}
                                    />
                                    NÃO
                                </label>
                                {modalSim && (
                                    <ModalSimNao>
                                        <h3>Troco para quanto?</h3>
                                        <input
                                            type="number"
                                            placeholder='Quanto você tem?'
                                            value={inputs.troco}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </ModalSimNao>
                                )}
                            </SimNao>
                            <BotaoFinalizarPedido type='submit'>Concluir Pedido</BotaoFinalizarPedido>
                        </FormularioCartao>
                    </>
                )}
                {/* <Localizacao>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="localizacao">Aonde você está?*
                            <input
                                type="text"
                                placeholder='Endereço*'
                                required
                                value={inputs.endereco}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                placeholder='Complemento*'
                                required
                                value={inputs.complemento}
                                onChange={handleInputChange}
                            />
                        </label>
                    </form>
                </Localizacao>

                <h1>{pagamento ? 'Forma de pagamento: Cartão' : 'Forma de pagamento: Dinheiro'}</h1>
                {pagamento && (
                    <FormularioCartao onSubmit={handleSubmit}>
                        <LabelCartao htmlFor="cartao">Digitos do Cartão*
                            <InfomacoesDoCartao
                                name="cartao"
                                placeholder="0000 0000 0000 0000*"
                                type="number"
                                required
                                value={inputs.cartao}
                                onChange={handleInputChange}
                            />
                        </LabelCartao>
                        <LabelCartao htmlFor="vencimento">Vencimento*
                            <InfomacoesDoCartao
                                type="text"
                                placeholder='Mês de Vencimento*'
                                name="vencimento"
                                required
                                value={inputs.vencimento}
                                onChange={handleInputChange}
                            />
                        </LabelCartao>
                        <LabelCartao htmlFor="ano">
                            <InfomacoesDoCartao
                                type="text"
                                placeholder='Ano de Vencimento*'
                                name="ano"
                                required
                                value={inputs.ano}
                                onChange={handleInputChange}
                            />
                        </LabelCartao>
                        <LabelCartao htmlFor="cartao">CVV*
                            <InfomacoesDoCartao
                                name="cvv"
                                placeholder="000*"
                                type="number"
                                required
                                value={inputs.cvv}
                                onChange={handleInputChange}
                            />
                        </LabelCartao>
                        {erro && <p style={{ color: 'red' }}>Por favor, preencha este campo.</p>}
                        <BotaoFinalizarPedido type='submit'>Concluir Pedido</BotaoFinalizarPedido>
                    </FormularioCartao>
                )}
                {!pagamento && (
                    <>
                        <div>
                            <h1>Precisa de troco?</h1>
                            <form onSubmit={handleSubmit}>
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
                        <BotaoFinalizarPedido type='submit' >Concluir Pedido</BotaoFinalizarPedido>
                    </>
                )} */}
            </Container>
        </ModalOverlay >
    )
}