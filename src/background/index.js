import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// Set the configuration for your app
// TODO: Replace with your project's config object
var firebaseConfig = {
  apiKey: "AIzaSyAtHERv0rX5dDBjRvnbvmweI8ug02N5oPc",
  authDomain: "mv3firebase.firebaseapp.com",
  databaseURL: "https://mv3firebase-default-rtdb.firebaseio.com",
  projectId: "mv3firebase",
  storageBucket: "mv3firebase.appspot.com",
  messagingSenderId: "783360301030",
  appId: "1:783360301030:web:bd3d10c8baf33f7c856827",
  measurementId: "G-J9C547PKZW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// FIREBASE DATABASE
const dbRef = ref(getDatabase(app));
get(child(dbRef, `/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

//FREBASE AUTH
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('User logged in uid - ', uid)
  } else {
    // User is signed out
    console.log('User is not logged in')
  }
});

console.log('background script logic here...')
