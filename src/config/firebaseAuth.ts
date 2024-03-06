import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjcuGcnoDgtBAIyiNhzJ7i74SNicNYiJM",
  authDomain: "dutchpay-bill.firebaseapp.com",
  projectId: "dutchpay-bill",
  storageBucket: "dutchpay-bill.appspot.com",
  messagingSenderId: "222654780212",
  appId: "1:222654780212:web:80d0619ef30e3356990b61",
  measurementId: "G-VS4DNCEJ3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);