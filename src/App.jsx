import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link ,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CertificationVerify from './pages/Certification';
import Login from './pages/Login';
import './output.css';

function App() {  
  let isAuthenticated = !!localStorage.getItem("userToken");
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          isAuthenticated ?<Home/> : <Navigate to='/login'/>
          }></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/certificates' element={
          isAuthenticated ?<CertificationVerify /> : <Navigate to='/login'/>
          }></Route>
      </Routes>
    </Router>
  );
}

export default App;
