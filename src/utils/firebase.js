// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNwKQUw3C2Edlvwa8U666MiXHt3lRKX9E",
  authDomain: "netflix-ankur.firebaseapp.com",
  projectId: "netflix-ankur",
  storageBucket: "netflix-ankur.firebasestorage.app",
  messagingSenderId: "501063435740",
  appId: "1:501063435740:web:b4d4adda6975e119e43b19",
  measurementId: "G-CHY7LLJV18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();