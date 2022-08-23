// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain:"twitter-clone-79adf.firebaseapp.com",
  projectId: "twitter-clone-79adf",
  storageBucket: "twitter-clone-79adf.appspot.com",
  messagingSenderId: "916426682005",
  appId: "1:916426682005:web:e8e764ecd6bedbdf11359c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};