// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzmujZbdCxbbJyd8MFj9qi2E9_NJW6Ksc",
  authDomain: "awesomeproject-397111.firebaseapp.com",
  projectId: "awesomeproject-397111",
  storageBucket: "awesomeproject-397111.appspot.com",
  messagingSenderId: "1025451550911",
  appId: "1:1025451550911:web:89fa32ff149d80ddd87e0a",
  measurementId: "G-CJ52V2PYY9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);