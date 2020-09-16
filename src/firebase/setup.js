import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoaYW6xCcLScbKygUJsqULsGw9gIvG5Zo",
  authDomain: "violet-boutique.firebaseapp.com",
  databaseURL: "https://violet-boutique.firebaseio.com",
  projectId: "violet-boutique",
  storageBucket: "violet-boutique.appspot.com",
  messagingSenderId: "916944178270",
  appId: "1:916944178270:web:a8fb3d305bd0fcba4d38cf",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const db = firebase.firestore();
const auth = firebase.auth();

export { storage, db, auth, firebase as default };
