// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjTl2WxW53sxxh6u1Bw8aT5ko-MErpCQI",
  authDomain: "eshop-portfolio-piece.firebaseapp.com",
  projectId: "eshop-portfolio-piece",
  storageBucket: "eshop-portfolio-piece.appspot.com",
  messagingSenderId: "800291613424",
  appId: "1:800291613424:web:ef691a2d761792bbc6b035",
  measurementId: "G-BFXT48V6DC",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getDatabase(app)
export { auth, db }
