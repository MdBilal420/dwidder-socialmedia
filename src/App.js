import React, { useEffect } from 'react';
import axios from "axios"
import Home from './pages/Home'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Timeline from './pages/Timeline';
import Notification from './pages/Notification';
import Followers from './pages/Followers'
import Following from './pages/Following'
import Search from './pages/Search'
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { getUser } from './features/user/userSlice';
import { getPosts } from './features/posts/postsSlice';


function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    (async () => {
      const data = JSON.parse(localStorage.getItem('user'))
      if (data) {
        const token = data.token
        localStorage.setItem('user', JSON.stringify({ token: token }))
        if (token) {
          axios.defaults.headers.common["Authorization"] = token;
        } else {
          delete axios.defaults.headers.common["Authorization"];
        }
        await dispatch(getUser())
        await dispatch(getPosts())
      } else {
        navigate("/login")
      }
    })()

  }, [dispatch, navigate])

  return (
    <div className="app">

      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/" element={<Home />} />
        <PrivateRoute path="/profile/:userId" element={<Timeline />} />
        <PrivateRoute path="/followers" element={<Followers />} />
        <PrivateRoute path="/following" element={<Following />} />
        <PrivateRoute path="/notifications" element={<Notification />} />
        <PrivateRoute path="/search" element={<Search />} />
      </Routes>

    </div>
  );
}

export default App;
