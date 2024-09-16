// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL7LUrbZySPlehbJ0dri-OyF36ZZPRSSM",
  authDomain: "familytracking-6ffb8.firebaseapp.com",
  databaseURL: "https://familytracking-6ffb8.firebaseio.com",
  projectId: "familytracking-6ffb8",
  storageBucket: "familytracking-6ffb8.appspot.com",
  messagingSenderId: "538929466447",
  appId: "1:538929466447:web:a14f0e1da943941a712e3a",
  measurementId: "G-SCKZJHSFEF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
