
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-58641.firebaseapp.com",
  projectId: "interviewiq-58641",
  storageBucket: "interviewiq-58641.firebasestorage.app",
  messagingSenderId: "44345693422",
  appId: "1:44345693422:web:d66817e95116957bf94fff"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth, provider}