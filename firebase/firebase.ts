// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXb2I-hFMo0HPGM4YTHAWs3lU-T28rCDQ",
  authDomain: "mobileinvitation-5840a.firebaseapp.com",
  projectId: "mobileinvitation-5840a",
  storageBucket: "mobileinvitation-5840a.appspot.com",
  messagingSenderId: "523966684809",
  appId: "1:523966684809:web:60d7e38b36a3fb2d30f058",
  measurementId: "G-C23L8PLRX3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
