import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfSFgZc_JGyHktLLAxRw9DJoCX4sk4UVA",
  authDomain: "clone-version-24583.firebaseapp.com",
  projectId: "clone-version-24583",
  storageBucket: "clone-version-24583.appspot.com",
  messagingSenderId: "845914082654",
  appId: "1:845914082654:web:cb32edc115456e7daa93cf",
  measurementId: "G-JKY0657V2E",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
