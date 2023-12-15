import styled from 'styled-components'

export const ConteudoHistorico = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0px;
`
export const Reverse = styled.ul`
    flex-direction: column-reverse;
    display: flex;
    align-items: center;
`
export const ListaColumn = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
`
export const NadaEncontrado = styled.div`
    margin: 5.8rem;

    @media screen and (min-width: 1530px){
        margin: 10.8rem;
    }
`

export const ContainerDoProduto = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f6f6f6;
    padding: 1rem;
    padding-top: 1.5rem;
    border-radius: 12px;
    width: 75%;
    position: relative;
    gap: 0.5rem;
    margin-bottom: 1rem;
    box-shadow: 0px 0px 20px -6px black;
`
export const ProdutoNoHistorico = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.1rem;
    margin-top: 1rem;
`

export const DataDaCompra = styled.p`
    font-size: .875rem;
    position: absolute;
    top: .3rem;
`

export const Status = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

export const BtnConfirmar = styled.button`
    background: #f9a01b;
    border: none;
    padding: 0.1rem 0.7rem;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: #000000;
`

export const TextoStatus = styled.p`
    background-color: #00a900;
    padding: 0.1rem 0.4rem;
    border-radius: 20px;
    font-size: .95rem;
    text-transform: uppercase;
    color: #f6f6f6;
`

export const ImagemDoProduto = styled.img`
    width: 25vh;
    height: 25vh;
    border-radius: 28px;
    border: 3px solid #ff3939;
    padding: 0.2rem;
`

export const Descricao = styled.p`
    font-size: 0.875rem;
    width: 75%;
    word-break: break-word;
    height: 3rem;
    overflow-y: auto;
`