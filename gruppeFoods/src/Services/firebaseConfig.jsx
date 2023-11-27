import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4NOuTp_OG8eQCIaO855ZT0UPoSp2kO_8",
  authDomain: "ifoodaprimorado.firebaseapp.com",
  projectId: "ifoodaprimorado",
  storageBucket: "ifoodaprimorado.appspot.com",
  messagingSenderId: "506262745477",
  appId: "1:506262745477:web:b5fa16eeec50369c7d14ec"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)