import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1ijX1D7sAl9rYPBthIa6Y27uMAWqh9h0",

  authDomain: "playable-e53d7.firebaseapp.com",

  databaseURL: "https://playable-e53d7-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "playable-e53d7",

  storageBucket: "playable-e53d7.appspot.com",

  messagingSenderId: "283918241507",

  appId: "1:283918241507:web:9a1b47a786e8ef71c47fd6",

  measurementId: "G-N3XT2B8V8N"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



