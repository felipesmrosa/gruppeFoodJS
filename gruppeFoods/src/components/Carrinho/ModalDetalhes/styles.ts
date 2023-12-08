import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    padding: 20px;
    width: 35%;
    height: 30rem;
    border-radius: 8px;
`
export const SalvarPedidoButton = styled.button`
    background-color: #ff3939;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    color: #f9981d;
    border: 2px solid #ff3939;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.2rem;
    transition: all .2s ease-in-out;

    &:hover {
        color: #ff3939;
        background-color: #f9981d;
        border: 2px solid #f9981d;
    }
`
export const TextoDeObservacao = styled.textarea`
    width: 92%;
    resize: none;
    padding: .35rem .5rem;
    font-size: 1rem;
    height: 6rem;
    border-radius: 10px;
`
export const Observacao = styled.div`
    margin-top: .5rem;
`
export const Salvar = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0 1rem;
`
export const Headerzinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15.8rem;
`
export const Banner = styled.div`
    background-image: url(../../../src/images/pedido.png);
    width: 100%;
    height: 7.3rem;
    margin-bottom: 0.5rem;
    border-radius: 12px;
    background-repeat: no-repeat;
    background-size: contain;
`
export const VencimentoDoCartao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
    margin: 0.3rem 0;
`
export const Row = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.12rem 0;
`
export const BtnRow = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`
export const BotaoDetalhes = styled.button`
    background: transparent;
    border-radius: 50%;
    height: 3vh;
    width: 3vh;
    display: flex;
    border: 2px solid #faa01b;
    align-items: center;
    justify-content: center;
    color: #faa01b;
`
export const Title = styled.p`
    width: 100%;
    background-color: #ff3939;
    color: #f9a01b;
    font-size: 1.3rem !important;
    font-weight: 700;
    text-transform: uppercase;
    text-align: start;
    padding: 0 1rem;
    border-radius: 10px;
`
export const UL = styled.ul`
    list-style: none;
    text-align: start;
    padding: 0 1.7rem;
`
export const ItemUmDoLadoDoOutro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.7rem;
    margin: 1.25rem 0;
`
export const FecharModal = styled.button`
    background-color: transparent;
    border: none;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${props => props.theme['yellow-100']};
    }
`
export const Localizacao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 1rem 0;

    input {
        margin-bottom: .3rem;
        width: 75%;
        padding: .5rem 1rem;
    }
`
export const FormularioCartao = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input {
        width: 75%;
        padding: .5rem 1rem;
    }
`
export const ModalOverlay = styled.div`
    position: fixed;
    text-align: center;
    top: 0;
    left: 50%;
    padding: 20px;
    transform: translate(-50%, 0);
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
`