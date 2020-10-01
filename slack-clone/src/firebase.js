import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBQexSXvzqGNlh686T1mT_RcRsuK5vwOnE",
    authDomain: "slack-clone-4eb4f.firebaseapp.com",
    databaseURL: "https://slack-clone-4eb4f.firebaseio.com",
    projectId: "slack-clone-4eb4f",
    storageBucket: "slack-clone-4eb4f.appspot.com",
    messagingSenderId: "209934043922",
    appId: "1:209934043922:web:579a79d1a11f2a964501cb"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;