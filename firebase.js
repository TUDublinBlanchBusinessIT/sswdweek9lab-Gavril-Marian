// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {  
projectId: "mawk8-gavril21x",
  appId: "1:477065779603:web:f94c8f5d4a39da9c3af066",
  storageBucket: "mawk8-gavril21x.firebasestorage.app",
  apiKey: "AIzaSyAfPK5Jqri5jr1wtRq-pkx4fXJmziik7aU",
  authDomain: "mawk8-gavril21x.firebaseapp.com",
  messagingSenderId: "477065779603",
  measurementId: "G-HSR6G41G47",
}

;

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);