import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDpgENHMOaoT4kTRib0FFa8hKLTiReBbBI",
    authDomain: "facebook-clone-a0727.firebaseapp.com",
    projectId: "facebook-clone-a0727",
    storageBucket: "facebook-clone-a0727.appspot.com",
    messagingSenderId: "295847377108",
    appId: "1:295847377108:web:4b9f788b248a630f992341",
    measurementId: "G-40LB5DXXCP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
