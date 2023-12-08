import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f2f2f2;
    position: absolute;
    padding: 1rem 2rem;
    top: 5.3rem;
    right: 18.7rem;
    border-radius: 12px;
    box-shadow: 0px 0px 15px 2px #c01212;
    gap: 0.25rem;
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