import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBcuznyrS40XgLQltHcgGY9s85qDxYwVzc",
    authDomain: "authandfirestore-e425e.firebaseapp.com",
    projectId: "authandfirestore-e425e",
    storageBucket: "authandfirestore-e425e.appspot.com",
    messagingSenderId: "811494766417",
    appId: "1:811494766417:web:e5cfb01f4154dc6b3ac570"
  };
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
    db, auth,
}