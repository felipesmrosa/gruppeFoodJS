import { useState } from 'react';
import { Formulario } from '../styles';

export function RegisterYourRestaurant({
    // infos,
    // setInfos,
    criarRestaurante,
    nome,
    setNome
}) {
    return (
        <>
            <Formulario>
                <input
                    type="text"
                    placeholder="Nome do Restaurante"
                    defaultValue={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                {/* <select value={infos.mercadoria} onChange={(e) => setInfos(e.target.value)} name="selectMercadoria" required>
                    <option value="0">Sua Mercadoria</option>
                    <option value="1">Pizzaria</option>
                    <option value="2">Lanchonete</option>
                    <option value="3">Mercado</option>
                    <option value="4">Conveniencia</option>
                    <option value="5">FastFood</option>
                    <option value="6">Confeitaria</option>
                    <option value="7">Sushiaria</option>
                    <option value="8">Padaria</option>
                    <option value="9">Churrascaria</option>
                </select> */}
                <button
                    onClick={criarRestaurante}
                >Cadastrar Restaurante</button>
            </Formulario>
        </>
    )
}