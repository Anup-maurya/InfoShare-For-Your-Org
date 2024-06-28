
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  //apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyDJ0G3VOSJ3mz40kAqJKszLPyTtCorzHoc",
  authDomain: "infoshare-ae778.firebaseapp.com",
  projectId: "infoshare-ae778",
  storageBucket: "infoshare-ae778.appspot.com",
  messagingSenderId: "342399060920",
  appId: "1:342399060920:web:4faf7d3d96a2a1406a9d4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};
