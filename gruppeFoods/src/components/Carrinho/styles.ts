import styled from "styled-components";

export const Container = styled.div`
    display: block!important;
    position: fixed;
    left: 40%;
    width: 100%;
    max-width: 60%;
    overflow-y: auto;
    top: 0;
    height: 100vh;
    padding: 0.6rem!important;
    border-radius: 8px 0 0px 8px!important;
    border: none!important;
    background: #f9f9f9;
    box-shadow: 14px 0px 40px 20px #c01212;
    z-index: 999;
    @media screen and (min-width: 1000px) and (max-width: 1366px){
        left: 60%;
        max-width: 40%;
    }
    @media screen and (min-width: 1366px){
        left: 70%;
        max-width: 30%;
    }
`

export const ButtonFinalizarPedido = styled.button`
    width: 80%;
    margin: 1rem 1.8rem;
    height: 2rem;
    border-radius: 18px;
    border: none;
    background: #ff3939;
    color: #f9a01b;
    text-transform: uppercase;
    font-weight: 700;
    transition: all .1s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
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
    height: auto;
    border-radius: 8px;
    border: 2px solid;
    padding: 0.5rem 0rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-direction: column;

    img {
        width: 16vh;
        height: 16vh;
        border-radius: 7px;
        padding: 0;
    }

    @media screen and (min-width: 1024px) {
        flex-direction: row;
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
    position: relative;
    gap: .4rem;
`
export const DetalhesModal = styled.p`
    cursor: pointer;

    @media screen and (min-width: 1024px) {
        position: absolute;
        left: 84%;
        top: 81%;
    }
`
export const Minus = styled.button`
    background: transparent;
    border: 2px solid #f9a01b;
    border-radius: 50%;
    display: flex;
    width: 3vh;
    height: 3vh;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const Plus = styled.button`
    background: transparent;
    border: 2px solid #f9a01b;
    border-radius: 50%;
    display: flex;
    width: 3vh;
    height: 3vh;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const Del = styled.button`
    background: transparent;
    border: none;
    color: #ff3939;
    display: flex;

    svg {
        width: 3vh;
        height: 3vh;
    }
`
