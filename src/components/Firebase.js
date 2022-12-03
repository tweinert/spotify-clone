import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyB3ONqntTxMWJ3Br898lwtocVsedrqwXCw",
  authDomain: "spotify-clone-eab01.firebaseapp.com",
  projectId: "spotify-clone-eab01",
  storageBucket: "spotify-clone-eab01.appspot.com",
  messagingSenderId: "679841981447",
  appId: "1:679841981447:web:64adbcbc914a1385e176a2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;