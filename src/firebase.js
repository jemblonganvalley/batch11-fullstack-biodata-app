import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBSr3UCRn5iChRhpwmF4PU5F7HxnV1X9jM",
  authDomain: "biodata-app-3a869.firebaseapp.com",
  projectId: "biodata-app-3a869",
  storageBucket: "biodata-app-3a869.appspot.com",
  messagingSenderId: "310390582201",
  appId: "1:310390582201:web:67ef0b0d22ff1612586468"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db