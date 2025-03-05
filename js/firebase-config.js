// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1GgnmZI9-3cQ2uuaROYKvqMU78tp4Zp0",
  authDomain: "rittikznetvidz.firebaseapp.com",
  databaseURL: "https://rittikznetvidz-default-rtdb.firebaseio.com",
  projectId: "rittikznetvidz",
  storageBucket: "rittikznetvidz.firebasestorage.app",
  messagingSenderId: "492731095536",
  appId: "1:492731095536:web:1d9e8b5ae23a4031bae535",
  measurementId: "G-63LKXQJD1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);