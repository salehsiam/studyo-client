// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4RD7O_q3NYKcJR_xgSO9CihduVA8mLEc",
  authDomain: "studyo-7b463.firebaseapp.com",
  projectId: "studyo-7b463",
  storageBucket: "studyo-7b463.firebasestorage.app",
  messagingSenderId: "103177209137",
  appId: "1:103177209137:web:7353684a6ffba5f2969c10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
