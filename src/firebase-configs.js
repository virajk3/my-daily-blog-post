// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLgv5MPO3gcUqbdn7uIGAO2HUE7nQE6Kc",
  authDomain: "my-daily-blog-project2.firebaseapp.com",
  projectId: "my-daily-blog-project2",
  storageBucket: "my-daily-blog-project2.appspot.com",
  messagingSenderId: "684211423207",
  appId: "1:684211423207:web:cd50a0f09e96998ae31f42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();