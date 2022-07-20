import firebase from "firebase";

const firebaseConfig = {
    // your firebase credentials go here
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAOYBs3URMEApwZt8LCdSD6soxUx33v3AE",
    authDomain: "imessage-clone-3cbfd.firebaseapp.com",
    projectId: "imessage-clone-3cbfd",
    storageBucket: "imessage-clone-3cbfd.appspot.com",
    messagingSenderId: "381149196045",
    appId: "1:381149196045:web:581607c76639535816ca44",
    measurementId: "G-ENQB0BDZ89"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;