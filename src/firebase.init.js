// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBqgzp8KI6Jx2TIDwIUu1vhqlMw9AcDCRI",
    authDomain: "travelo-e1cee.firebaseapp.com",
    projectId: "travelo-e1cee",
    storageBucket: "travelo-e1cee.appspot.com",
    messagingSenderId: "787128741977",
    appId: "1:787128741977:web:83631acfca892692b24148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;