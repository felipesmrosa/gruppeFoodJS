import styled from "styled-components";

export const Container = styled.div`
    display: block !important;
    position: fixed;
    left: 77.8%;
    width: 22.2%;
    max-width: 22.2%;
    top: 0;
    height: 100vh;
    padding: 1.5rem !important;
    border-radius: 8px 0 0px 8px !important;
    border: none !important;
    background: #f9f9f9;
    box-shadow: 14px 0px 40px 20px #c01212;
    z-index: 999;
    overflow-y: scroll;
`

export const FecharCarrinho = styled.button`
    background-color: transparent;
    font-size: 3.25rem;
    border: none;
    color: ${props => props.theme["yellow-100"]};

    svg {
        width: 2em;
        height: 2em;
    }
`
export const HeaderCarrinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const QuantidadePrecoEItem = styled.span`
    text-align: end;
`
export const ProdutosNoCarrinho = styled.div`
    width: 100%;
    height: 6rem;
    border-radius: 8px;
    border: 2px solid;
    padding: 0.1rem 0.3rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 35%;
        border-radius: 7px;
        padding: 0;
    }
`
export const NomePreco = styled.span`
    p {
        font-size: 1.35rem;
    }
`

export const QuantidadeDeleter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`