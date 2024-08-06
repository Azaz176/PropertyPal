// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "propertypal-f485f.firebaseapp.com",
  projectId: "propertypal-f485f",
  storageBucket: "propertypal-f485f.appspot.com",
  messagingSenderId: "620664533223",
  appId: "1:620664533223:web:1d9ab7a9d639e4c0c23242",
  measurementId: "G-E1NL3PLEF5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);