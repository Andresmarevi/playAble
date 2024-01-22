import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBOBwBlLrhD4SeTnVbxuoG_RCRWId1fuEU",

  authDomain: "playable-ad5c2.firebaseapp.com",

  databaseURL: "https://playable-ad5c2-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "playable-ad5c2",

  storageBucket: "playable-ad5c2.appspot.com",

  messagingSenderId: "661973394043",

  appId: "1:661973394043:web:b4a818e546040f712ff8de",

  measurementId: "G-RKCG9155RV"


};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default firebase;



