import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { handleRegister, handleLogin, handleLogout } from './components/api';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const handleUserLogin = async (user) => {
    setLoading(true);
    const success = await handleLogin(user);
    if (success) {
      setLoggedIn(true);
    }
    setLoading(false);
  };

  const handleUserLogout = async () => {
    setLoading(true);
    const success = await handleLogout();
    if (success) {
      setLoggedIn(false);
    }
    setLoading(false);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {isLoading ? (
          <span>Loading...</span>
        ) : isLoggedIn ? (
          <button onClick={handleUserLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={!isLoggedIn ? <Login handleLogin={handleUserLogin} /> : <Navigate to="/" replace />}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" /> : <Register handleRegister={handleRegister} />}
        />
      </Routes>
    </Router>
  );
};

export default App;