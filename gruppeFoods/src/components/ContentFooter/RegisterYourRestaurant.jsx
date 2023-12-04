import { useState } from 'react';
import {
    Formulario,
    Cadastro,
    LogoDiv,
    ButtonCadastrarRestaurante,
    CadastrarCardapio,
    ButtonTPC,
    ButtonCadastroDeProdutos,
    ProdutosDoRestaurante
} from '../styles';

import { Paperclip, Plus, TrashSimple, X } from 'phosphor-react'

export function RegisterYourRestaurant({
    criarRestaurante,

    infos,
    setInfos,
    handleLogoChange,
    adicionarCardapio,
    setName,
    name,
    setPrice,
    price,
    setSrc,
    src
}) {

    const [cadastrarCardapio, setCadastrarCardapio] = useState(false)
    const [inputs, setInputs] = useState([''])

    const handleAddInput = () => {
        setInputs([...inputs, '']); // Adiciona um novo input ao array de inputs
    };

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    return (
        <>
            <Cadastro>

                <Formulario onSubmit={criarRestaurante}>
                    <fieldset>
                        <legend>Cadastre seu restaurante!</legend>
                        <label>Nome do Restaurante</label>
                        <input
                            type="text"
                            placeholder='Nome do Restaurante'
                            defaultValue={infos.nome}
                            onChange={(e) => setInfos({ ...infos, nome: e.target.value })}
                            required
                        />
                        <label>Email do Restaurante</label>
                        <input
                            type="text"
                            placeholder='Email do Restaurante'
                            onChange={(e) => setInfos({ ...infos, email: e.target.value })}
                            defaultValue={infos.email}
                            required
                        />
                        <label>Telefone do Restaurante</label>
                        <input
                            type="text"
                            placeholder='Telefone do Restaurante'
                            onChange={(e) => setInfos({ ...infos, telefone: e.target.value })}
                            defaultValue={infos.telefone}
                            required
                        />
                        <label>Cidade</label>
                        <input
                            type="text"
                            placeholder='Cidade'
                            onChange={(e) => setInfos({ ...infos, cidade: e.target.value })}
                            defaultValue={infos.cidade}
                            required
                        />
                        <label>Endereço</label>
                        <input
                            type="text"
                            placeholder='Endereço'
                            onChange={(e) => setInfos({ ...infos, endereco: e.target.value })}
                            defaultValue={infos.endereco}
                            required
                        />
                        <label>Bairro</label>
                        <input
                            type="text"
                            placeholder='Bairro'
                            onChange={(e) => setInfos({ ...infos, bairro: e.target.value })}
                            defaultValue={infos.bairro}
                            required
                        />
                        <label>CPF</label>
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
                        <label>Final do expediente</label>
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
                            <CadastrarCardapio>
                                <ButtonCadastroDeProdutos onClick={() => setCadastrarCardapio(true)}>
                                    Cadastrar Produtos <Plus />
                                </ButtonCadastroDeProdutos>
                            </CadastrarCardapio>
                        )}
                        {cadastrarCardapio && (
                            <CadastrarCardapio>
                                {inputs.map((value, index) => (
                                    <ProdutosDoRestaurante key={index}>
                                        <label>
                                            Nome do Produto:
                                            <input
                                                type="text"
                                                placeholder="Nome do Produto"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        </label>
                                        <label>
                                            Preço:
                                            <input
                                                type="number"
                                                placeholder="Preço do Produto"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                            />
                                        </label>
                                        {/* <label>
                                            <Paperclip />
                                            Enviar foto do produto
                                            <input
                                                type="file"
                                            />
                                        </label> */}
                                        <ButtonTPC>
                                            {inputs.length > 1 && (
                                                <p onClick={handleRemoveInput}>
                                                    <TrashSimple />
                                                </p>
                                            )}
                                            <p onClick={handleAddInput}>
                                                <Plus />
                                            </p>
                                            <p onClick={() => setCadastrarCardapio(false)}>
                                                <X />
                                            </p>
                                        </ButtonTPC>
                                    </ProdutosDoRestaurante>
                                ))}
                            </CadastrarCardapio>
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