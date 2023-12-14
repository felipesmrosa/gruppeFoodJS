import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BarraLateral = styled.div`
    display: none;

    /* width: 40%;
    background-image: url('../../src/images/bannerReset.png');
    height: 100vh;
    box-shadow: 0px 0px 12px 0px #000; */
`
export const LINKVOLTAR = styled.span`
    position: absolute;
`
export const ConteudoDeResetarSenha = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    background: #FDFDFD;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px #ff3939;
    margin-top: 12rem;

    
`

export const InputEmail = styled.input`
    width: 100%;
    height: 2.6rem;
    border-radius: 8px;
    border: 1px solid #000;
    padding: 0 1rem;
`

export const ResetarSenha = styled.button`
    text-transform: uppercase;
    border-radius: 1rem; 
    border: none;
    padding: 0.3rem 1rem;
    background-color: #ff3939;
    color: #f9a01b;
    font-weight: 600;
`