import { Formulario } from '../styles';
import { imgDB } from '../../Services/firebaseConfig';
import { v4 } from "uuid"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

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

    function handleUpload(e) {
        console.log(e.target.files[0])
        const imgs = ref(imgDB, `Imgs${v4()}`)
        uploadBytes(imgs, e.target.files[0]).then(data => {
            console.log(data, "imgs")
            getDownloadURL(data.ref).then(val=> {
                setLogo(val)
            })
        })
    }
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
                    onChange={(e) => handleUpload(e)}
                    required
                />
                <button
                    onClick={criarRestaurante}
                >Cadastrar Restaurante</button>
            </Formulario>
        </>
    )
}