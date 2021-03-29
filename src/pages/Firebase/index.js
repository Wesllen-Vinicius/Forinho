import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import 'firebase/firestore';

const db = firebase.initializeApp({
  apiKey: "AIzaSyDdqqN5oT1o-lpQZr2JHUC5dDOxAwCkI0g",
  authDomain: "forinho-b7a57.firebaseapp.com",
  projectId: "forinho-b7a57",
  storageBucket: "forinho-b7a57.appspot.com",
  messagingSenderId: "556089905904",
  appId: "1:556089905904:web:b54fa69a826003eadb6835",
  measurementId: "G-LCWTF5GB1M",
});

export default db;
