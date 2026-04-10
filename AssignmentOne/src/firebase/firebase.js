// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyob-GfuJVFbCXBuKCQ7JTLwYFqIUn8d0",
  authDomain: "inf655---task-tracker.firebaseapp.com",
  projectId: "inf655---task-tracker",
  storageBucket: "inf655---task-tracker.firebasestorage.app",
  messagingSenderId: "199200672539",
  appId: "1:199200672539:web:94ba4d9aa0969c664a21be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;