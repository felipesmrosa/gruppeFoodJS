import { useState } from 'react'
import {
    Container,
    ModalOverlay,
    Headerzinho,
    FormularioCartao,
    Localizacao,
    ItemUmDoLadoDoOutro,
    FecharModal,
    VencimentoDoCartao,
    Banner,
    Title,
    UL,
    Row,
    BtnRow,
    Observacao,
    TextoDeObservacao,
    BotaoDetalhes,
    Salvar,
    SalvarPedidoButton
} from './styles'
import { XCircle } from 'phosphor-react'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function Detalhes({
    setMostrarDetalhes,
    setPrecoAdicionais,
    precoAdicionais
}) {

    function SalvarPedido() {
        toast.success('Pedido Salvo', {
            position: "top-right",
            autoClose: 300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const precoCarne = setPrecoAdicionais(5)

    const [quantity, setQuantity] = useState(0);
    const [quantity2, setQuantity2] = useState(0);
    const [quantity3, setQuantity3] = useState(0);
    const [quantity4, setQuantity4] = useState(0);

    const increment = () => {
        setQuantity(quantity + 1);
    };
    const increment2 = () => {
        setQuantity2(quantity2 + 1);
    };
    const increment3 = () => {
        setQuantity3(quantity3 + 1);
    };
    const increment4 = () => {
        setQuantity4(quantity4 + 1);
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    const decrement2 = () => {
        if (quantity2 > 0) {
            setQuantity2(quantity2 - 1);
        }
    };
    const decrement3 = () => {
        if (quantity3 > 0) {
            setQuantity3(quantity3 - 1);
        }
    };
    const decrement4 = () => {
        if (quantity4 > 0) {
            setQuantity4(quantity4 - 1);
        }
    };

    return (
        <ModalOverlay>
            <Container>
                <Headerzinho>
                    <FecharModal onClick={() => setMostrarDetalhes(false)}>
                        <XCircle />
                    </FecharModal>
                </Headerzinho>
                <Banner />
                <Title>Adicionar Itens</Title>
                <UL>
                    <Row>
                        <li>Carne Adicional - ${precoCarne}</li>
                        <BtnRow>
                            <BotaoDetalhes onClick={increment}>+</BotaoDetalhes>{quantity}<BotaoDetalhes onClick={decrement}>-</BotaoDetalhes>
                        </BtnRow>
                    </Row>
                    <Row>
                        <li>Bacon Adicional - $3</li>
                        <BtnRow>
                            <BotaoDetalhes onClick={increment2}>+</BotaoDetalhes>{quantity2}<BotaoDetalhes onClick={decrement2}>-</BotaoDetalhes>
                        </BtnRow>
                    </Row>
                    <Row>
                        <li>Queijo Adicional - $2</li>
                        <BtnRow>
                            <BotaoDetalhes onClick={increment3}>+</BotaoDetalhes>{quantity3}<BotaoDetalhes onClick={decrement3}>-</BotaoDetalhes>
                        </BtnRow>
                    </Row>
                    <Row>
                        <li>Cheddar Adicional - $3</li>
                        <BtnRow>
                            <BotaoDetalhes onClick={increment4}>+</BotaoDetalhes>{quantity4}<BotaoDetalhes onClick={decrement4}>-</BotaoDetalhes>
                        </BtnRow>
                    </Row>
                </UL>
                <Title>Alguma observação?</Title>
                <Observacao>
                    <TextoDeObservacao
                        name=""
                        id=""
                        placeholder="Observações..."
                    ></TextoDeObservacao>
                </Observacao>
                <Salvar>
                    <SalvarPedidoButton onClick={SalvarPedido}>Salvar Pedido</SalvarPedidoButton>
                </Salvar>
            </Container>
            <ToastContainer
                position="top-right"
                autoClose={300}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </ModalOverlay>
    )
}