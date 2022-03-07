// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = firebase.initializeApp({
    apiKey: "AIzaSyCaVZt_y1wzy9F4t93IhxD1w8F_Zr0fPOg",
    authDomain: "ecommerce-roarbike-api.firebaseapp.com",
    projectId: "ecommerce-roarbike-api",
    storageBucket: "ecommerce-roarbike-api.appspot.com",
    messagingSenderId: "720603138802",
    appId: "1:720603138802:web:4371ee028b0ade0c701e6b"
});

// Initialize Firebase
export const db = getFirestore(app);