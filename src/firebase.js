// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk3UcX-WUqMx7rvHFQHNVA7ZlKfxQzxlM",
  authDomain: "chat-40bda.firebaseapp.com",
  projectId: "chat-40bda",
  storageBucket: "chat-40bda.appspot.com",
  messagingSenderId: "125090972645",
  appId: "1:125090972645:web:87daf0b6daf3a56ece650c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
