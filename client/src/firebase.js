
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  
 // apiKey: "AIzaSyBZzj4vrx3gEyZYPfFbgvknqKGVW-7blZI",
  authDomain: "anupm-f5912.firebaseapp.com",
  projectId: "anupm-f5912",
  storageBucket: "anupm-f5912.appspot.com",
  messagingSenderId: "740112549727",
  appId: "1:740112549727:web:f6d18c61e55e884444d8ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};
