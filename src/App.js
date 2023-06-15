import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Auth from './components/Auth';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/auth">Auth</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;