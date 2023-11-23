import { useState } from 'react';
import { Formulario } from '../styles';

export function RegisterYourRestaurant() {
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');

    function formatarCpf(inputCpf) {

        //Não pode usar outra coisa a não ser número
        const cpfNumerico = inputCpf.replace(/\D/g, '');

        //Aqui adiciona a máscara do CPF
        const cpfFormatado = cpfNumerico.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            '$1.$2.$3-$4'
        );

        return cpfFormatado;
    }
    function formatarPhone(inputPhone) {

        //Não pode usar outra coisa a não ser número
        const phoneNumerico = inputPhone.replace(/\D/g, '');

        //Aqui adiciona a máscara do CPF
        const phoneFormatado = phoneNumerico.replace(
            /(\d{2})(\d)/,
            '($1) $2'
        );

        return phoneFormatado;
    }
    function handleCPF(e) {
        const inputCpf = e.target.value;
        const cpfFormatado = formatarCpf(inputCpf);
        setCpf(cpfFormatado);
    };
    function handlePHONE(e) {
        const inputPhone = e.target.value;
        const phoneFormatado = formatarPhone(inputPhone);
        setPhone(phoneFormatado);
    };

    return (
        <>
            <Formulario action="">
                <input
                    type="text"
                    placeholder="Nome do Restaurante"
                    autoComplete='off'
                    required
                />
                <select name="selectedFruit" required>
                    <option disabled value="0">Sua Mercadoria</option>
                    <option value="Pizzaria">Pizzaria</option>
                    <option value="Lanchonete">Lanchonete</option>
                    <option value="Mercado">Mercado</option>
                    <option value="Conveniencia">Conveniencia</option>
                    <option value="FastFood">FastFood</option>
                    <option value="Confeitaria">Confeitaria</option>
                    <option value="Sushiaria">Sushiaria</option>
                    <option value="Padaria">Padaria</option>
                    <option value="Churrascaria">Churrascaria</option>
                </select>
                <input
                    type="mail"
                    placeholder="E-mail para contato"
                    autoComplete='off'
                    required
                />
                <input
                    type="text"
                    placeholder="Telefone para contato"
                    autoComplete='off'
                    required
                    value={phone}
                    onChange={handlePHONE}
                    maxLength={14}
                />
                <input
                    type="text"
                    placeholder="CPF"
                    autoComplete='off'
                    required
                    value={cpf}
                    onChange={handleCPF}
                    maxLength={11}
                />
                <input
                    type="text"
                    placeholder="Cidade"
                    autoComplete='off'
                    required
                />
                <input
                    type="text"
                    placeholder="Endereço"
                    autoComplete='off'
                    required
                />
                <input
                    type="text"
                    placeholder="Bairro"
                    autoComplete='off'
                    required
                />
                <input
                    accept="image/png, image/jpeg"
                    type="file"
                    required
                />
                <button type='submit'>Cadastrar Restaurante</button>
            </Formulario>
        </>
    )
}