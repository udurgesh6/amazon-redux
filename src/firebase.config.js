// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDswmZdg4Hl0OODRYqyCuAva-A90ewtMuI",
  authDomain: "coaching-fb7e3.firebaseapp.com",
  projectId: "coaching-fb7e3",
  storageBucket: "coaching-fb7e3.appspot.com",
  messagingSenderId: "118269908142",
  appId: "1:118269908142:web:2ec96846c81df1b0ed893f",
  measurementId: "G-1XLYQVRRK0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
