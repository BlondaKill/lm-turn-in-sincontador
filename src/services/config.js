import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBnI4w3sES-1GS3yUpW21AmLcePHPZReDQ",
  authDomain: "tpfinalreact-5bf56.firebaseapp.com",
  projectId: "tpfinalreact-5bf56",
  storageBucket: "tpfinalreact-5bf56.appspot.com",
  messagingSenderId: "302774935977",
  appId: "1:302774935977:web:1f7e44d09f61a6587a64b8"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);