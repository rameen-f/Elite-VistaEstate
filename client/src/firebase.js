// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1de94.firebaseapp.com",
  projectId: "mern-estate-1de94",
  storageBucket: "mern-estate-1de94.firebasestorage.app",
  messagingSenderId: "948985331362",
  appId: "1:948985331362:web:6caf330a1d9c5a5cabe1fb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
