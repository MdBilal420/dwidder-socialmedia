import React from 'react';
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import './App.css';
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Timeline from './pages/Timeline';
import Notification from './pages/Notification';
import { PrivateRoute } from './PrivateRoute';


function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/home" element={<Home />} />
        <PrivateRoute path="/profile" element={<Timeline />} />
        <PrivateRoute path="/notifications" element={<Notification />} />
      </Routes>
    </div>
  );
}

export default App;
