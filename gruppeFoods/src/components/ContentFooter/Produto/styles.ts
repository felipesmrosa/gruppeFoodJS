import styled from 'styled-components'

export const Container = styled.div`
    border-radius: 6px;
    border: 2px solid;
`
export const Infos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid;
    padding: 0.5rem;
    gap: 0;
    position: relative;
`
export const Spanzinho = styled.span`
    width: 36%;
`
export const ProdutoImagem = styled.img`
    width: 15vh;
    height: 15vh;
    border-radius: 27%;
`
export const Descricao = styled.p`
    font-size: 1rem;
    letter-spacing: 0;
    line-height: 17px;
    overflow-y: auto;
    height: 3.2rem;
    width: 100%;
    overflow-x: hidden;
    word-break: break-word;

    &::-webkit-scrollbar {
        width: 10px;               /* width of the entire scrollbar */
    }
    &::-webkit-scrollbar-track {
        background: #cacaca;       /* color of the tracking area */
        border-radius: 20px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff3939;    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
        border: 2px solid #cacaca;  /* creates padding around scroll thumb */
    }
`
export const DeletarProduto = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    top: 2.5%;
    left: 92%;
`