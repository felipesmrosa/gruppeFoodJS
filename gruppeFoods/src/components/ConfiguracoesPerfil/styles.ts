import styled from 'styled-components'


// CONTAINER ANTIGO
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     background: #f2f2f2;
//     position: absolute;
//     padding: 1rem 2rem;
//     top: 3.3rem;
//     border-radius: 12px;
//     box-shadow: 0px 0px 15px 2px #c01212;
//     gap: 0.25rem;
export const Container = styled.div`
    display: block!important;
    position: fixed;
    left: 49%;
    width: 100%;
    max-width: 51%;
    top: 0;
    height: 100vh;
    padding: 0.6rem!important;
    border-radius: 8px 0 0px 8px!important;
    border: none!important;
    background: #f9f9f9;
    box-shadow: 14px 0px 40px 20px #c01212;
    z-index: 999;
`
export const Cabecalhozinho = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
`
export const Botao = styled.button`
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid;

    &:last-child {
        border-bottom: 0px solid;
    }
`
export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Fechar = styled.button`
    background-color: transparent;
    font-size: 3.25rem;
    border: none;
    color: #F9A01B;

    svg {
        width: 2em;
        height: 2em;
    }
`