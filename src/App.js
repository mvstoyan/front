import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { handleRegister, handleLogin, handleLogout } from './components/api';

const App = () => {
  // eslint-disable-next-line
  const [isLoggedIn, setLoggedIn] = useState(false);

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
          element={!isLoggedIn ? <Login handleLogin={handleLogin} /> : <Navigate to="/" replace />}
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