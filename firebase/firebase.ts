// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXb2I-hFMo0HPGM4YTHAWs3lU-T28rCDQ",
  authDomain: "mobileinvitation-5840a.firebaseapp.com",
  projectId: "mobileinvitation-5840a",
  storageBucket: "mobileinvitation-5840a.appspot.com",
  messagingSenderId: "523966684809",
  appId: "1:523966684809:web:60d7e38b36a3fb2d30f058",
  measurementId: "G-C23L8PLRX3",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
