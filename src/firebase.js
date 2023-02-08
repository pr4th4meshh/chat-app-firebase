// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyh1SGu0udgdnJpZBFcbsP6BbcZfE_58A",
  authDomain: "chat-app-firebase-b5e15.firebaseapp.com",
  projectId: "chat-app-firebase-b5e15",
  storageBucket: "chat-app-firebase-b5e15.appspot.com",
  messagingSenderId: "567329244587",
  appId: "1:567329244587:web:2cb16383ce51db0de83eee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)