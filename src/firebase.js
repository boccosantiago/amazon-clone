import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC24Gsu7Y4WNs9nyP5sxhaIgid5bS862AY",
  authDomain: "ecommerce-55ba3.firebaseapp.com",
  projectId: "ecommerce-55ba3",
  storageBucket: "ecommerce-55ba3.appspot.com",
  messagingSenderId: "52291851753",
  appId: "1:52291851753:web:e975b935d2fc9890856778",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
