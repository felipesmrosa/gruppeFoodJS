import { useState } from 'react';
import {
    Formulario,
    Cadastro,
    LogoDiv,
    ButtonCadastrarRestaurante
} from '../styles';

import { Paperclip, Plus } from 'phosphor-react'

export function RegisterYourRestaurant({
    criarRestaurante,

    infos,
    setInfos,
    handleLogoChange,
}) {

    const [cadastrarCardapio, setCadastrarCardapio] = useState(false)

    return (
        <>
            <Cadastro>
                <Formulario onSubmit={criarRestaurante}>
                    <fieldset>
                        <legend>Cadastre seu restaurante!</legend>
                        <input
                            type="text"
                            placeholder="Nome do Restaurante"
                            defaultValue={infos.nome}
                            onChange={(e) => setInfos({ ...infos, nome: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder='Email do Restaurante'
                            onChange={(e) => setInfos({ ...infos, email: e.target.value })}
                            defaultValue={infos.email}
                            required
                        />
                        <input
                            type="text"
                            placeholder='Telefone do Restaurante'
                            onChange={(e) => setInfos({ ...infos, telefone: e.target.value })}
                            defaultValue={infos.telefone}
                            required
                        />
                        <input
                            type="text"
                            placeholder='Cidade'
                            onChange={(e) => setInfos({ ...infos, cidade: e.target.value })}
                            defaultValue={infos.cidade}
                            required
                        />
                        <input
                            type="text"
                            placeholder='Endereço'
                            onChange={(e) => setInfos({ ...infos, endereco: e.target.value })}
                            defaultValue={infos.endereco}
                            required
                        />
                        <input
                            type="text"
                            placeholder='Bairro'
                            onChange={(e) => setInfos({ ...infos, bairro: e.target.value })}
                            defaultValue={infos.bairro}
                            required
                        />
                        <input
                            type="text"
                            placeholder='CPF'
                            onChange={(e) => setInfos({ ...infos, cpf: e.target.value })}
                            defaultValue={infos.cpf}
                            required
                        />

                        <label htmlFor="time">Inicio do expediente</label>
                        <input
                            id='time'
                            name='time'
                            type="time"
                            onChange={(e) => setInfos({ ...infos, horarioFuncionamentoI: e.target.value })}
                        />
                        <label htmlFor="timeFim">Final do expediente</label>
                        <input
                            id='timeFim'
                            name='timeFim'
                            type="time"
                            onChange={(e) => setInfos({ ...infos, horarioFuncionamentoF: e.target.value })}
                        />

                        <LogoDiv>
                            <label for="arquivo"><Paperclip size={32} />Enviar Logo</label>
                            <input
                                id='arquivo'
                                name='arquivo'
                                type="file"
                                placeholder='Logo do Restaurante'
                                onChange={handleLogoChange}
                                accept='image/*'
                                required
                            />
                        </LogoDiv>

                        {!cadastrarCardapio && (
                            <button onClick={() => setCadastrarCardapio(true)}>
                                Cadastrar Produtos <Plus />
                            </button>
                        )}
                        {cadastrarCardapio && (
                            <>
                                <h1>Oi</h1>
                                <p onClick={() => setCadastrarCardapio(false)}>Cancelar</p>

                                <button onClick={() => setCadastrarCardapio(true)}>
                                    <Plus />
                                </button>
                            </>
                        )}

                        <ButtonCadastrarRestaurante
                            type='submit'
                        >Cadastrar Restaurante</ButtonCadastrarRestaurante>
                    </fieldset>
                </Formulario>
            </Cadastro>
        </>
    )
}