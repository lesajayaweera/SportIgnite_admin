import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CertificationVerify from './pages/Certification';
import Login from './pages/Login';
import './output.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("userToken")
  );

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("userToken");
      setIsAuthenticated(!!token);
    };

    window.addEventListener('storage', checkAuth);
    checkAuth();

    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("adminEmail");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to='/login' />
          }
        />
        <Route
          path='/login'
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path='/certificates'
          element={
            isAuthenticated ? <CertificationVerify /> : <Navigate to='/login' />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
