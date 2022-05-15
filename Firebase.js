import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAYjldPlFpsz7InSNi2K7TwS5XBoEY51V0",
  authDomain: "social-media-2915a.firebaseapp.com",
  projectId: "social-media-2915a",
  storageBucket: "social-media-2915a.appspot.com",
  messagingSenderId: "241480593853",
  appId: "1:241480593853:web:3735be71e73d90df9ca2d4",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
