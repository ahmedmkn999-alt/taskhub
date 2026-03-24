import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDwMOax-amBzEm3FDjXKN8yBbB3cXNbb14",
    authDomain: "taskhub-9d282.firebaseapp.com",
    projectId: "taskhub-9d282",
    storageBucket: "taskhub-9d282.firebasestorage.app",
    messagingSenderId: "981675153894",
    appId: "1:981675153894:web:380c4194bb4ea9e1f51e27"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
