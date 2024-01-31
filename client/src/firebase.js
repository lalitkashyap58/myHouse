// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "rentals-213de.firebaseapp.com",
    projectId: "rentals-213de",
    storageBucket: "rentals-213de.appspot.com",
    messagingSenderId: "387921675985",
    appId: "1:387921675985:web:a429fd0dbe7826d1e767f0",
    measurementId: "G-JRH8QPFZF9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);