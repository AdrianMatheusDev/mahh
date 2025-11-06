// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB33Gu8Y1uQDECWgpir2ExNSbet0rSP3sg",
  authDomain: "mahh-8961a.firebaseapp.com",
  databaseURL: "https://mahh-8961a-default-rtdb.firebaseio.com",
  projectId: "mahh-8961a",
  storageBucket: "mahh-8961a.firebasestorage.app",
  messagingSenderId: "893365247441",
  appId: "1:893365247441:web:23cdcd5748901d045714f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };