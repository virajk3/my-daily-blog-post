import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'
import SinglePostPage from './pages/SinglePostPage'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import { signOut } from 'firebase/auth'
import { auth } from './firebase-configs'
import { Navbar } from './components/Navbar'
import MyPosts from './components/MyPosts'
import SingleMyPost from './components/SingleMyPost'

const App = () => {

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
    });
  };

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
    <BrowserRouter>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} signUserOut={signUserOut} />
      <Routes>
        <Route exact path="/" element={<DashboardPage isAuth={isAuth} />} />
        <Route exact path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route exact path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route exact path="/posts" element={<PostsPage />} />
        <Route exact path="/myPosts" element={<MyPosts />} />
        <Route exact path="/posts/:id" element={<SinglePostPage />} />
        <Route exact path="/smp/:id" element={<SingleMyPost />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
