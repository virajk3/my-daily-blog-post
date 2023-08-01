// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWKtFThw4f5aQZCUFO9W6MvBu97lnv180",
  authDomain: "my-daily-blog-posts.firebaseapp.com",
  projectId: "my-daily-blog-posts",
  storageBucket: "my-daily-blog-posts.appspot.com",
  messagingSenderId: "588071281141",
  appId: "1:588071281141:web:f9fc42862c9e9da6e440bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();