import React, { useState } from 'react'
import {
  // BrowserRouter as Router,
  // Switch,
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'
import SinglePostPage from './pages/SinglePostPage'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'

import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import {auth} from './firebase-configs'
import { Navbar } from './components/Navbar'

const App = () => {

  const signUserOut = ()  => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname='/login';
    });
  };
  
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
    

    <BrowserRouter>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} signUserOut={signUserOut}/>
      
      <Routes>
        <Route exact path="/" element={<DashboardPage isAuth={isAuth}/>} />
        <Route exact path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route exact path="/createpost" element={<CreatePost />} />
        <Route exact path="/posts" element={<PostsPage />} />
        <Route exact path="/posts/:id" element={<SinglePostPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
