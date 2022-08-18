import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFh5bOpUwX7JkJoJglQXRzS-Gq3oys-BM",
  authDomain: "twitter-4a323.firebaseapp.com",
  projectId: "twitter-4a323",
  storageBucket: "twitter-4a323.appspot.com",
  messagingSenderId: "519338440735",
  appId: "1:519338440735:web:8ff560bdc0a870aceffd2a",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
