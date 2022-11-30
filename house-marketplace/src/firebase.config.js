// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOsE4qZq1OPJLqnxbtnTSj2ttMfDl18wA",
  authDomain: "house-marketplace-app-18cf7.firebaseapp.com",
  projectId: "house-marketplace-app-18cf7",
  storageBucket: "house-marketplace-app-18cf7.appspot.com",
  messagingSenderId: "191990402223",
  appId: "1:191990402223:web:a2b33b031b60875455d85a"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore()