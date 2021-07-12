import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAm2dIAvrMsQ0iIECSER5_I44HZaaBQKmA",
  authDomain: "whatsapp-2-f751b.firebaseapp.com",
  projectId: "whatsapp-2-f751b",
  storageBucket: "whatsapp-2-f751b.appspot.com",
  messagingSenderId: "596750348428",
  appId: "1:596750348428:web:d7506b4adf9763b29e4ba9",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
