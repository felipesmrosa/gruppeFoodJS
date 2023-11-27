import { Formulario } from '../styles';

export function RegisterYourRestaurant({
    criarRestaurante,
    nome,
    setNome,
    bairro,
    setBairro,
    cidade,
    setCidade,
    cpf,
    setCpf,
    email,
    setEmail,
    endereco,
    setEndereco,
    logo,
    setLogo,
    mercadoria,
    setMercadoria,
    telefone,
    setTelefone
}) {
    return (
        <>
            <Formulario>
                <input
                    type="text"
                    placeholder="Nome do Restaurante"
                    defaultValue={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <select
                    defaultValue={mercadoria}
                    onChange={(e) => setMercadoria(e.target.value)}
                    name="selectMercadoria"
                    required
                >
                    <option value="0">Sua Mercadoria</option>
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
                    type="text"
                    placeholder='Email do Restaurante'
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={email}
                    required
                />
                <input
                    type="text"
                    placeholder='Telefone do Restaurante'
                    onChange={(e) => setTelefone(e.target.value)}
                    defaultValue={telefone}
                    required
                />
                <input
                    type="text"
                    placeholder='Cidade'
                    onChange={(e) => setCidade(e.target.value)}
                    defaultValue={cidade}
                    required
                />
                <input
                    type="text"
                    placeholder='Endereço'
                    onChange={(e) => setEndereco(e.target.value)}
                    defaultValue={endereco}
                    required
                />
                <input
                    type="text"
                    placeholder='Bairro'
                    onChange={(e) => setBairro(e.target.value)}
                    defaultValue={bairro}
                    required
                />
                <input
                    type="text"
                    placeholder='CPF'
                    onChange={(e) => setCpf(e.target.value)}
                    defaultValue={cpf}
                    required
                />
                <input
                    type="file"
                    placeholder='Logo do Restaurante'
                    onChange={(e) => setLogo(e.target.value)}
                    defaultValue={logo}
                    required
                />
                <button
                    onClick={criarRestaurante}
                >Cadastrar Restaurante</button>
            </Formulario>
        </>
    )
}