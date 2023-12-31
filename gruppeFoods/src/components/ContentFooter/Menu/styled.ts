import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;

    @media screen and (min-width: 1024px) {
        width: 30%;
    }
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
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        width: 2em;
        height: 2em;
    }
`
export const DivImagemProduto = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: 0.7rem 0;
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