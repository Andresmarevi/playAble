// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1ijX1D7sAl9rYPBthIa6Y27uMAWqh9h0",
  authDomain: "playable-e53d7.firebaseapp.com",
  projectId: "playable-e53d7",
  storageBucket: "playable-e53d7.appspot.com",
  messagingSenderId: "283918241507",
  appId: "1:283918241507:web:9a1b47a786e8ef71c47fd6",
  measurementId: "G-N3XT2B8V8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);