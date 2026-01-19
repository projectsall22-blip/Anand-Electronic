// firebase.js - UPDATED VERSION
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

 const firebaseConfig = {
    apiKey: "AIzaSyBFUukl4dr-hP4KoM3IJ1sTL_b-TeTn9_4",
    authDomain: "anand-electronic.firebaseapp.com",
    projectId: "anand-electronic",
    storageBucket: "anand-electronic.firebasestorage.app",
    messagingSenderId: "780251967428",
    appId: "1:780251967428:web:485d5f62259e9ca00d3e91",
    measurementId: "G-TX4R8046W0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };