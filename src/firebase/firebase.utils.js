import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDMQ0tbgABmFfFW6f1jCzWq5MAIBCLiYFE",
  authDomain: "green-electricity-app.firebaseapp.com",
  databaseURL: "https://green-electricity-app.firebaseio.com",
  projectId: "green-electricity-app",
  storageBucket: "green-electricity-app.appspot.com",
  messagingSenderId: "552152722943",
  appId: "1:552152722943:web:5d699b5c8604ae0270cbca",
  measurementId: "G-4Q1CJL1FF4",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
