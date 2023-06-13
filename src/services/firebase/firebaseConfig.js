// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMfu_sFO_U_MfnKDf_eq-ZBDjx-P4rTbw",
    authDomain: "ecommerce-de-zapatillas.firebaseapp.com",
    projectId: "ecommerce-de-zapatillas",
    storageBucket: "ecommerce-de-zapatillas.appspot.com",
    messagingSenderId: "966448930940",
    appId: "1:966448930940:web:7cac6a064285ee2a7669f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)