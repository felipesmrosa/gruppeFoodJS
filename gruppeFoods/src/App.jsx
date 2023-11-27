import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { app } from "./Services/firebaseConfig";
import { AuthGoogleProvider } from "./contexts/authGoogle";

export function App() {
  //Firebase
  const db = getFirestore(app)
  const restauranteCollection = collection(db, "restaurantes")

  //Variaveis do banco
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")
  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")
  const [endereco, setEndereco] = useState("")
  const [logo, setLogo] = useState("")
  const [mercadoria, setMercadoria] = useState("")
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  //Criar Restaurante
  async function criarRestaurante(e) {
    e.preventDefault()
    const restaurante = await addDoc(restauranteCollection, {
      nome, mercadoria, email, telefone, cidade, endereco, bairro, cpf, logo
    })
    console.log('Nome: ', nome)
    console.log('Mercadoria: ', mercadoria)
    console.log('email: ', email)
    console.log('telefone', telefone)
    console.log('cidade', cidade)
    console.log('endereco', endereco)
    console.log('bairro', bairro)
    console.log('cpf', cpf)
    console.log('logo', logo)
  }

  //Armazena os restaurantes
  const [restaurantes, setRestaurantes] = useState([]);

  //Olhar se tem dados salvos, se tiver, renderizar em tela
  useEffect(() => {
    const getRestaurantes = async () => {
      //Armazena a listagem de restaurantes do firebase
      //getDocs pega a referencia no banco de dados
      const data = await getDocs(restauranteCollection)
      setRestaurantes(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    };
    getRestaurantes();
  }, []);

  return (
    <AuthGoogleProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router
            nome={nome}
            setNome={setNome}

            bairro={bairro}
            setBairro={setBairro}
            cidade={cidade}
            setCidade={setCidade}
            cpf={cpf}
            setCpf={setCpf}
            email={email}
            setEmail={setEmail}
            endereco={endereco}
            setEndereco={setEndereco}
            logo={logo}
            setLogo={setLogo}
            mercadoria={mercadoria}
            setMercadoria={setMercadoria}
            telefone={telefone}
            setTelefone={setTelefone}
            
            restaurantes={restaurantes}
            setRestaurantes={setRestaurantes}

            criarRestaurante={criarRestaurante}
          />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </AuthGoogleProvider>
  )
}