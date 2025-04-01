import React from 'react'
import { auth, provider } from "../firebase-configs"
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toBeChecked } from '@testing-library/jest-dom/matchers';

function Login({ setIsAuth }) {

  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      navigate("/");

      result.user.getIdToken().then((token) => {
        console.log("JWT Token", token);
        localStorage.setItem("token",token);
      }).catch((error) => {
        console.error("Error getting JWT token:", error);
      });
    });
  }

  return (
    <div className="loginPage">
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign In With Google to Continue</button>
    </div>
  )
}

export default Login
