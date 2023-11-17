import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyD8OAEBX0886TCF0vWcLOqd1mQu18O8TG4",
  
    authDomain: "notesandres-ba5cd.firebaseapp.com",
  
    projectId: "notesandres-ba5cd",
  
    storageBucket: "notesandres-ba5cd.appspot.com",
  
    messagingSenderId: "472473428310",
  
    appId: "1:472473428310:web:34514b4662c3557608b6f7",
  
    measurementId: "G-KRY711BP3B"
  
  };


if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};