import styled from 'styled-components'

export const ContainerFragment = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12rem;
    
    @media screen and (min-width: 1024px) {
        gap: 11rem;
        margin-top: 0;
        justify-content: start;
    }
    @media screen and (min-width: 1530px){
        gap: 14rem;
    }
`

export const BarraLateral = styled.div`
    display: none;
   
    @media screen and (min-width: 1024px) {
        display: block;
        width: 33%;
        background-repeat: no-repeat;
        background-image: url(../../src/images/bannerPequenoLogin.png);
        height: 100vh;
        box-shadow: 0px 0px 12px 0px #000;
    }
    @media screen and (min-width: 1530px){
        display: block;
        width: 40%;
        background-image: url(../../src/images/banner.png);
        height: 100vh;
        box-shadow: 0px 0px 12px 0px #000;
    }
`

export const ConteudoDeLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    background: #FDFDFD;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 20px 0px #ff3939;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        width: 70%;
    }
    @media screen and (min-width: 1024px) {
        width: 33%;
    }
        
    
`

export const Titulo = styled.h1`
    text-transform: uppercase;
`

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: .4rem;
`

export const InputLoginECadastro = styled.input`
    width: 100%;
    height: 2.8rem;
    padding: 0 1rem;
    border: 1px solid #000;
    border-radius: 8px;
`

export const EsqueceuASenha = styled.p`
    font-size: .9rem;
    cursor: pointer;
`

export const LogarOuCadastrar = styled.button`
    width: auto;
    padding: 0.2rem 1rem;
    background: #ff3939;
    border: none;
    border-radius: 1rem;
    text-transform: uppercase;
    color: #f9a01b;
    font-weight: 700;
    font-size: 1.3rem;
`

export const BotaoCadastrarLogar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-weight: 500;
`