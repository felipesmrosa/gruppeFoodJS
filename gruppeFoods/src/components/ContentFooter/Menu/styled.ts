import styled from 'styled-components'

export const Container = styled.div`
    width: 73%;
`
export const Formulario = styled.div`
    fieldset {
        padding: 1rem 1rem;
        border: 2.5px solid #000;
        display: flex;
        align-items: stretch;
        justify-content: center;
        flex-direction: column;
    }

    input {
        width: 100%;
        height: 2.7rem;
        padding: 0 1rem;
        margin-bottom: 1rem;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid;
    }
`
export const Legenda = styled.legend`
    font-size: 28px;
    font-weight: 500;
    text-transform: uppercase;
`
export const AdicionarProdutoPraLista= styled.button`
    cursor: pointer;
    width: 100%;
    padding: 0.6rem;
    border-radius: 18px;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    background: #ff3939;
    color: #f9a01b;
    transition: all .1s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`