import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt928RYOle5-F7TLCMXWH9uNEsJNpEwko",
  authDomain: "kuldeep-gupta-portfolio.firebaseapp.com",
  projectId: "kuldeep-gupta-portfolio",
  storageBucket: "kuldeep-gupta-portfolio.appspot.com",
  messagingSenderId: "600053965893",
  appId: "1:600053965893:web:61ca55bb0fc65cdb706f2c",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
