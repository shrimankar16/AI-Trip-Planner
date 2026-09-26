// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyBpw8HeC16TVnC0-jjMJvn5s1rC7uTiAQs",
  authDomain: "fir-a3f86.firebaseapp.com",
  projectId: "fir-a3f86",
  storageBucket: "fir-a3f86.firebasestorage.app",
  messagingSenderId: "817024984467",
  appId: "1:817024984467:web:d14bf3e38cdb4d614b7466",
  measurementId: "G-K102WWPPFT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)