// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "rentals-8a427.firebaseapp.com",
    projectId: "rentals-8a427",
  storageBucket: "rentals-8a427.appspot.com",
  messagingSenderId: "279804362697",
  appId: "1:279804362697:web:137b2c7f7200727cc0b218"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);