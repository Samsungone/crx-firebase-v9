try {

    import { initializeApp } from 'firebase/app';
    import { getDatabase, ref, child, get } from "firebase/database";
    import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

    // Set the configuration for your app
    // TODO: Replace with your project's config object
    var firebaseConfig = {
      apiKey: "AIzaSyAA5qIMoAuhr1ikVQ9CbFrA4EOdRv_d8lU",
      authDomain: "crx-firebase-v9.firebaseapp.com",
      projectId: "crx-firebase-v9",
      storageBucket: "crx-firebase-v9.appspot.com",
      messagingSenderId: "218491650923",
      appId: "1:218491650923:web:24a61671670488da7c822e",
      measurementId: "G-FZW9TV11SY"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);


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
  } catch (e){
    console.log(e);
  }