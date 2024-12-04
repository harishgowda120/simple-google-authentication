// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCQ1YkLLg_mj9TmUkf1OrnKb9MCZoVAimA",
    authDomain: "simple-auth-a96c7.firebaseapp.com",
    projectId: "simple-auth-a96c7",
    storageBucket: "simple-auth-a96c7.firebasestorage.app",
    messagingSenderId: "377864927559",
    appId: "1:377864927559:web:ca90b3955bca3960a5b462",
    measurementId: "G-VFHT5SZ6DB"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
