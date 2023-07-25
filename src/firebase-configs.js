// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfEv5ldyZmtkDajw_ezt3DE9NZRo8mKwM",
  authDomain: "my-daily-blog-post.firebaseapp.com",
  projectId: "my-daily-blog-post",
  storageBucket: "my-daily-blog-post.appspot.com",
  messagingSenderId: "541681866233",
  appId: "1:541681866233:web:733040aecc6c638d18d928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

