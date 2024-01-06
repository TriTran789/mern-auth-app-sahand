// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-sahand-149d8.firebaseapp.com",
  projectId: "mern-auth-sahand-149d8",
  storageBucket: "mern-auth-sahand-149d8.appspot.com",
  messagingSenderId: "980811147753",
  appId: "1:980811147753:web:4384ecd2eecf8392438378"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);