import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const rootUrl = 'https://e-commerce-silkland.onrender.com';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleRegister = async (user) => {
    try {
      const url = `${rootUrl}/api/v1/auth/register`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log('Registration successful');
        setLoggedIn(true);
      } else {
        console.log('Registration failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (user) => {
    try {
      const url = `${rootUrl}/api/v1/auth/login`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log('Login successful');
        setLoggedIn(true);
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      const url = `${rootUrl}/api/v1/auth/logout`;
      const response = await fetch(url);

      if (response.ok) {
        console.log('Logout successful');
        setLoggedIn(false);
      } else {
        console.log('Logout failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        {!isLoggedIn ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <Login handleLogin={handleLogin} />
            ) : (
              <Navigate to="/" replace />
            )
          }
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