import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    height: 96vh;
    width: 100%;
`
export const Headerzinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6rem;
    margin-bottom: 2rem;
`
export const BotaoFinalizarPedido = styled.button`
    width: 70%;
    margin-top: 0.15rem;
    height: 2rem;
    border: none;
    background-color: #ff3939;
    border-radius: 18px;
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 700;
    color: #f9a01b;
`
export const SimNao = styled.div`
`
export const ModalSimNao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.3rem;

    input {
        margin-bottom: 0.2rem;
        width: 61.3%;
        padding: 0.3rem 1rem;
        border-radius: 12px;
        border: 2px solid #747474;
    }
`
export const LabelCartao = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0.1rem;
    width: 100%;
`
export const Cartao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`
export const VencimentoDoCartao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
    margin: 0.3rem 0;
`
export const ItemUmDoLadoDoOutro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 1rem;
`
export const InfomacoesDoCartao = styled.input`
    width: 100%;
    padding: 0.3rem 1rem;
    border-radius: 12px;
    border: 2px solid #747474;
`
export const FecharModal = styled.button`
    background-color: transparent;
    border: none;

    svg {
        width: 2em;
        height: 2em;
        color: ${props => props.theme['yellow-100']};
    }
`
export const Localizacao = styled.div`
    margin-bottom: 1rem;

    input {
        margin-bottom: 0.2rem;
        width: 100%;
        padding: 0.3rem 1rem;
        border-radius: 12px;
        border: 2px solid #747474;
    }
`
export const FormularioCartao = styled.form`
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
    z-index: 9999;
    align-items: center;
`