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

export function Modal({
    mostrarModal,
    setMostrarModal,
    totalItensGeral,
    precoTotalGeral
}) {
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

                        <button>Concluir Pedido</button>
                    </FormularioCartao>
                )}
                {!pagamento && (
                    <>
                        <div>
                            <h1>Precisa de troco?</h1>
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
                        </div>
                        <button>Concluir Pedido</button>
                    </>
                )}
            </Container>
        </ModalOverlay>
    )
}