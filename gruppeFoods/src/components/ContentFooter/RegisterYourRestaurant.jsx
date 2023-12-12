import {
    Formulario,
    Cadastro,
    LogoDiv,
    ButtonCadastrarRestaurante,
    Legenda,
    Lembrar
} from '../styles';

import { Paperclip } from 'phosphor-react'

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Menu } from './Menu';

export function RegisterYourRestaurant({
    criarRestaurante,

    infos,
    setInfos,
    handleLogoChange,
    novoItem,
    handleChange,
    handleProduct,
    adicionarItem,

    removerItem,
}) {
    return (
        <>
            <Cadastro>
                <Formulario onSubmit={criarRestaurante}>
                    <fieldset>
                        <Legenda>Cadastre seu restaurante!</Legenda>
                        <label htmlFor='restaurante'>Nome do Restaurante*
                            <input
                                id='restaurante'
                                type="text"
                                placeholder='Nome do Restaurante'
                                defaultValue={infos.nome}
                                onChange={(e) => setInfos({ ...infos, nome: e.target.value })}
                                required
                            />
                        </label>
                        <label htmlFor='email'>Email do Restaurante*
                            <input
                                id='email'
                                type="text"
                                placeholder='Email do Restaurante'
                                onChange={(e) => setInfos({ ...infos, email: e.target.value })}
                                defaultValue={infos.email}
                                required
                            />
                        </label>
                        <label htmlFor='telefone'>Telefone do Restaurante*
                            <input
                                id='telefone'
                                type="text"
                                placeholder='Telefone do Restaurante'
                                onChange={(e) => setInfos({ ...infos, telefone: e.target.value })}
                                defaultValue={infos.telefone}
                                required
                            />
                        </label>
                        <label htmlFor='cidade'>Cidade*
                            <input
                                id='cidade'
                                type="text"
                                placeholder='Cidade'
                                onChange={(e) => setInfos({ ...infos, cidade: e.target.value })}
                                defaultValue={infos.cidade}
                                required
                            />
                        </label>
                        <label htmlFor='endereco'>Endereço*
                            <input
                                id='endereco'
                                type="text"
                                placeholder='Endereço'
                                onChange={(e) => setInfos({ ...infos, endereco: e.target.value })}
                                defaultValue={infos.endereco}
                                required
                            />
                        </label>
                        <label htmlFor='bairro'>Bairro*
                            <input
                                id='bairro'
                                type="text"
                                placeholder='Bairro'
                                onChange={(e) => setInfos({ ...infos, bairro: e.target.value })}
                                defaultValue={infos.bairro}
                                required
                            />
                        </label>
                        <label htmlFor='cpf'>CPF*
                            <input
                                id='cpf'
                                type="text"
                                placeholder='CPF'
                                onChange={(e) => setInfos({ ...infos, cpf: e.target.value })}
                                defaultValue={infos.cpf}
                                required
                            />
                        </label>
                        <label htmlFor="time">Inicio do expediente*
                            <input
                                id='time'
                                name='time'
                                type="time"
                                onChange={(e) => setInfos({ ...infos, horarioFuncionamentoI: e.target.value })}
                            />
                        </label>
                        <label htmlFor='timeFim'>Final do expediente*
                            <input
                                id='timeFim'
                                name='timeFim'
                                type="time"
                                onChange={(e) => setInfos({ ...infos, horarioFuncionamentoF: e.target.value })}
                            />
                        </label>
                        <LogoDiv>
                            <label for="arquivo"><Paperclip size={32} />Enviar Logo*
                                <input
                                    id='arquivo'
                                    type="file"
                                    onChange={handleLogoChange}
                                    accept='image/*'
                                    required
                                />
                            </label>
                        </LogoDiv>
                        <Lembrar>Lembre-se de cadastrar seus produtos.</Lembrar>
                    </fieldset>
                    <Menu
                        removerItem={removerItem}
                        adicionarItem={adicionarItem}
                        handleProduct={handleProduct}
                        infos={infos}
                        novoItem={novoItem}
                        handleChange={handleChange}
                        criarRestaurante={criarRestaurante}
                    />
                </Formulario>
            </Cadastro >
            <ToastContainer
                position="top-right"
                autoClose={850}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}