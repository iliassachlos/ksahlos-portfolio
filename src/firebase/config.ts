// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration using environment variables
const firebaseConfig = {
    apiKey: "AIzaSyAf29Vdab4GWrg6ByUGOLvRhyofn8Xpo_I",
    authDomain: "ksahlos-portfolio.firebaseapp.com",
    projectId: "ksahlos-portfolio",
    storageBucket: "ksahlos-portfolio.appspot.com",
    messagingSenderId: "244233584665",
    appId: "1:244233584665:web:fa476ddced77f2353fea88",
    measurementId: "G-F6NMRCFTXY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
