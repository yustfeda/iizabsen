// js/firebase-config.js

// Firebase SDK (Pastikan versi yang Anda gunakan adalah yang terbaru)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, ref, push, set, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJ-YGtjYHYbNBK8rfFZUpb2Z93jRe3kdQ",
  authDomain: "absen-iiz.firebaseapp.com",
  projectId: "absen-iiz",
  storageBucket: "absen-iiz.firebasestorage.app",
  messagingSenderId: "14091466845",
  appId: "1:14091466845:web:8d99246304dae5229575b4",
  databaseURL: "https://absen-iiz-default-rtdb.firebaseio.com" // Penting untuk Realtime Database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword, ref, push, set, onValue, remove, update };