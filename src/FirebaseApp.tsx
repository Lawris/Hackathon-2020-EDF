import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD2z-iUmua2ta_-xdYng_D3JA_nBCTgLJE",
    authDomain: "edf-hackathon-eac15.firebaseapp.com",
    databaseURL: "https://edf-hackathon-eac15-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "edf-hackathon-eac15",
    storageBucket: "edf-hackathon-eac15.appspot.com",
    messagingSenderId: "656018636278",
    appId: "1:656018636278:web:33b9173911028badac9bd7"
});

export default firebaseApp