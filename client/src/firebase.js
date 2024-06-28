// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import dotenv from 'dotenv';
dotenv.config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "infoshare-8c065.firebaseapp.com",
  projectId: "infoshare-8c065",
  storageBucket: "infoshare-8c065.appspot.com",
  messagingSenderId: "166832110648",
  appId: "1:166832110648:web:bf2edc71e0873007f37acd",
  measurementId: "G-KZ7BTS91W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);