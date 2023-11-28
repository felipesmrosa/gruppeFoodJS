import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from "react";
import { app } from "./Services/firebaseConfig";

export function App() {
  //Firebase
  const db = getFirestore(app)
  const restauranteCollection = collection(db, "restaurantes")

  //Array com as váriaveis do banco de dados
  const [infos, setInfos] = useState({
    nome: '',
    mercadoria: '',
    email: '',
    telefone: '',
    cidade: '',
    endereco: '',
    bairro: '',
    cpf: '',
    logo: ''
  });

  //infos.bairro | infos.cidade | infos.cpf | infos.email | infos.endereco | infos.logo | infos.mercadoria | infos.nome | infos.telefone
  //setInfos((prevState) => ({ ...prevState, cidade: "Itajaí", bairro: "Cordeiros" }))

  //Criar Restaurante no Banco de Dados
  async function criarRestaurante(e) {
    e.preventDefault()
    const restaurante = await addDoc(restauranteCollection, {
      nome, mercadoria, email, telefone, cidade, endereco, bairro, cpf, logo: logo
    })
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
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router
          infos={infos}
          setInfos={setInfos}

          restaurantes={restaurantes}
          setRestaurantes={setRestaurantes}

          criarRestaurante={criarRestaurante}
        />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}