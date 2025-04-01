// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-af025.firebaseapp.com",
  projectId: "taskmanager-af025",
  storageBucket: "taskmanager-af025.firebasestorage.app",
  messagingSenderId: "686583693836",
  appId: "1:686583693836:web:98afe16b44647c619ea429"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);