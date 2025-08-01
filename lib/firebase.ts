
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcFWwKA1899bTnDlRX8e5-lN4ouuNEHfU",
  authDomain: "multi-arena.firebaseapp.com",
  projectId: "multi-arena",
  storageBucket: "multi-arena.appspot.com",
  messagingSenderId: "815268584187",
  appId: "1:815268584187:web:17f8d6f02e74786123ae5e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);