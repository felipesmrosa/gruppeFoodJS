import { useEffect, useState } from 'react'
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

import { v4 as uuidv4 } from 'uuid'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function Detalhes({
    setMostrarDetalhes,
    precoTotalGeral,
}) {
    const uniqueID = uuidv4()

    const adicionais = [
        { id: 1, nome: 'Carne Adicional', preco: 5 },
        { id: 2, nome: 'Bacon Adicional', preco: 3 },
        { id: 3, nome: 'Queijo Adicional', preco: 2 },
        { id: 4, nome: 'Cheddar Adicional', preco: 3 },
    ];

    const [itensSelecionados, setItensSelecionados] = useState([]);
    const [valorTotal, setValorTotal] = useState(0);

    // Carregar itens do localStorage quando o componente for montado
    useEffect(() => {
        const savedItens = JSON.parse(localStorage.getItem('itensSelecionados'));
        const savedTotal = JSON.parse(localStorage.getItem('valorTotal'));

        if (savedItens) {
            setItensSelecionados(savedItens);
        }

        if (savedTotal) {
            setValorTotal(savedTotal);
        }
    }, []);

    // Salvar itens no localStorage sempre que houver uma alteração
    useEffect(() => {
        localStorage.setItem('itensSelecionados', JSON.stringify(itensSelecionados));
        localStorage.setItem('valorTotal', JSON.stringify(valorTotal));
    }, [itensSelecionados, valorTotal]);

    const adicionarItem = (id) => {
        const itemSelecionado = adicionais.find(item => item.id === id);

        if (itemSelecionado) {
            const novosItens = { ...itensSelecionados };
            if (novosItens[id]) {
                novosItens[id].quantidade += 1;
            } else {
                novosItens[id] = { ...itemSelecionado, quantidade: 1, adicional: '' };
            }

            setItensSelecionados(novosItens);

            const precoTotal = calcularPrecoTotal(novosItens);
            setValorTotal(precoTotal);
        }
    };

    const removerItem = (id) => {
        const novosItens = { ...itensSelecionados };
        if (novosItens[id] && novosItens[id].quantidade > 0) {
            novosItens[id].quantidade -= 1;

            // if (novosItens[id].quantidade === 0) {
            //     delete novosItens[id]; // Remove o item se a quantidade for zero
            // }

            setItensSelecionados(novosItens);

            const precoTotal = calcularPrecoTotal(novosItens);
            setValorTotal(precoTotal);
        }
    };

    const calcularPrecoTotal = (itens) => {
        return Object.values(itens).reduce(
            (total, currentItem) => total + currentItem.preco * currentItem.quantidade,
            0
        );
    };


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

    return (
        <ModalOverlay>
            <Container>
                <Headerzinho>
                    <FecharModal onClick={() => setMostrarDetalhes(false)}>
                        <XCircle />
                    </FecharModal>
                    <h3>Preço dos Adicionais: {valorTotal}</h3>
                </Headerzinho>
                <Banner />
                <Title>Adicionar Itens</Title>
                <UL>
                    {adicionais.map((item) => (
                        <Row key={item.id}>
                            <li>{item.nome} - ${item.preco}</li>
                            <BtnRow>
                                <BotaoDetalhes onClick={() => adicionarItem(item.id)}>+</BotaoDetalhes>
                                {itensSelecionados[item.id] !== undefined ? (
                                    <span>{itensSelecionados[item.id].quantidade}</span>
                                ) : (
                                    <span>0</span>
                                )}
                                <BotaoDetalhes onClick={() => removerItem(item.id)}>-</BotaoDetalhes>
                            </BtnRow>
                        </Row>
                    ))}
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
                    <SalvarPedidoButton onClick={SalvarPedido}>Salvar</SalvarPedidoButton>
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