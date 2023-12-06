import { useState } from 'react';
import {
    Formulario,
    Cadastro,
    LogoDiv,
    ButtonCadastrarRestaurante,
    CadastrarCardapio,
    ButtonTPC,
    ButtonCadastroDeProdutos,
    ProdutosDoRestaurante,
    FecharProdutos,
    Legenda,
    FecharProdutosHeader
} from '../styles';

import { Paperclip, Plus, TrashSimple, X } from 'phosphor-react'

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { app } from '../../Services/firebaseConfig';

export function RegisterYourRestaurant({
    criarRestaurante,

    handleImageChange,

    infos,
    setInfos,
    handleLogoChange,
    adicionarCardapio,
    setName,
    name,
    setPrice,
    price,
    setSrc,
    src,
    novoItem,
    handleChange,
    handleProductChange,
    enviarImagem,
    handleProduct,
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
                        <Legenda>Cadastre seu restaurante!</Legenda>
                        <label htmlFor='restaurante'>Nome do Restaurante
                            <input
                                id='restaurante'
                                type="text"
                                placeholder='Nome do Restaurante'
                                defaultValue={infos.nome}
                                onChange={(e) => setInfos({ ...infos, nome: e.target.value })}
                                required
                            />
                        </label>
                        <label htmlFor='email'>Email do Restaurante
                            <input
                                id='email'
                                type="text"
                                placeholder='Email do Restaurante'
                                onChange={(e) => setInfos({ ...infos, email: e.target.value })}
                                defaultValue={infos.email}
                                required
                            />
                        </label>
                        <label htmlFor='telefone'>Telefone do Restaurante
                            <input
                                id='telefone'
                                type="text"
                                placeholder='Telefone do Restaurante'
                                onChange={(e) => setInfos({ ...infos, telefone: e.target.value })}
                                defaultValue={infos.telefone}
                                required
                            />
                        </label>
                        <label htmlFor='cidade'>Cidade
                            <input
                                id='cidade'
                                type="text"
                                placeholder='Cidade'
                                onChange={(e) => setInfos({ ...infos, cidade: e.target.value })}
                                defaultValue={infos.cidade}
                                required
                            />
                        </label>
                        <label htmlFor='endereco'>Endereço
                            <input
                                id='endereco'
                                type="text"
                                placeholder='Endereço'
                                onChange={(e) => setInfos({ ...infos, endereco: e.target.value })}
                                defaultValue={infos.endereco}
                                required
                            />
                        </label>
                        <label htmlFor='bairro'>Bairro
                            <input
                                id='bairro'
                                type="text"
                                placeholder='Bairro'
                                onChange={(e) => setInfos({ ...infos, bairro: e.target.value })}
                                defaultValue={infos.bairro}
                                required
                            />
                        </label>
                        <label htmlFor='cpf'>CPF
                            <input
                                id='cpf'
                                type="text"
                                placeholder='CPF'
                                onChange={(e) => setInfos({ ...infos, cpf: e.target.value })}
                                defaultValue={infos.cpf}
                                required
                            />
                        </label>
                        <label htmlFor="time">Inicio do expediente
                            <input
                                id='time'
                                name='time'
                                type="time"
                                onChange={(e) => setInfos({ ...infos, horarioFuncionamentoI: e.target.value })}
                            />
                        </label>
                        <label htmlFor='timeFim'>Final do expediente
                            <input
                                id='timeFim'
                                name='timeFim'
                                type="time"
                                onChange={(e) => setInfos({ ...infos, horarioFuncionamentoF: e.target.value })}
                            />
                        </label>
                        <LogoDiv>
                            <label for="arquivo"><Paperclip size={32} />Enviar Logo
                                <input
                                    id='arquivo'
                                    type="file"
                                    onChange={handleLogoChange}
                                    accept='image/*'
                                    required
                                />
                            </label>
                        </LogoDiv>

                        {/* {!cadastrarCardapio && (
                            <CadastrarCardapio>
                                <ButtonCadastroDeProdutos onClick={() => setCadastrarCardapio(true)}>
                                    Cadastrar Produtos <Plus />
                                </ButtonCadastroDeProdutos>
                            </CadastrarCardapio>
                        )}
                        {cadastrarCardapio && (
                            <CadastrarCardapio>
                                {inputs.map((value, index) => (
                                    <>
                                        <FecharProdutosHeader>
                                            {inputs.length >= 1 && (
                                                <FecharProdutos title='Fechar' onClick={() => setCadastrarCardapio(false)}>
                                                    <X />
                                                </FecharProdutos>
                                            )}
                                        </FecharProdutosHeader >
                                        <ProdutosDoRestaurante key={index}>
                                            <label htmlFor='product'>
                                                Nome do Produto:
                                                <input
                                                    id='product'
                                                    type="text"
                                                    name='nameItem'
                                                    placeholder="Nome do Produto"
                                                    value={novoItem.nameItem}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <label htmlFor='price'>
                                                Preço:
                                                <input
                                                    id='price'
                                                    type="number"
                                                    name='priceItem'
                                                    placeholder="Preço do Produto"
                                                    value={novoItem.priceItem}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <label htmlFor='imageSRC'>
                                                <Paperclip />
                                                Foto do produto
                                                <input
                                                    id='imageSRC'
                                                    type="file"
                                                    name='src'
                                                    onChange={handleProduct}
                                                />
                                            </label>
                                            <ButtonTPC>
                                                <p title='Adicionar Produto' onClick={handleAddInput}>
                                                    <Plus />
                                                </p>
                                                {inputs.length > 1 && (
                                                    <p title='Deletar Produto' onClick={handleRemoveInput}>
                                                        <TrashSimple />
                                                    </p>
                                                )}
                                            </ButtonTPC>
                                        </ProdutosDoRestaurante>
                                    </>
                                ))}
                            </CadastrarCardapio>
                        )} */}

                        <ButtonCadastrarRestaurante
                            type='submit'
                        >Cadastrar Restaurante</ButtonCadastrarRestaurante>
                    </fieldset>
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