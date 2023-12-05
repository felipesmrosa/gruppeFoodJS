import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
`
export const Headerzinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15.8rem;
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
    gap: 3.7rem;
    margin: 1.25rem 0;
`
export const Mes = styled.input`
    width: 19%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const Ano = styled.input`
    width: 19%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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