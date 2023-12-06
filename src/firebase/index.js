// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoIDges9G-L-bCTpM7mPjyKYiYxku6MRw",
  authDomain: "hotel-room-486a8.firebaseapp.com",
  projectId: "hotel-room-486a8",
  storageBucket: "hotel-room-486a8.appspot.com",
  messagingSenderId: "951781063316",
  appId: "1:951781063316:web:e7702796a289df6cbcd281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth()

export default db