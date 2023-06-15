import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    try {
      const response = await fetch('https://e-commerce-silkland.onrender.com/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log('Registration successful');
        // Perform any additional actions upon successful registration
      } else {
        console.log('Registration failed');
        // Handle registration error
      }
    } catch (error) {
      console.log('Error occurred during registration:', error);
      // Handle error
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    try {
      const response = await fetch('https://e-commerce-silkland.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setLoggedIn(true);
        console.log('Login successful');
        // Perform any additional actions upon successful login
      } else {
        console.log('Login failed');
        // Handle login error
      }
    } catch (error) {
      console.log('Error occurred during login:', error);
      // Handle error
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('https://e-commerce-silkland.onrender.com/api/v1/auth/logout', {
        method: 'GET',
      });

      if (response.ok) {
        setLoggedIn(false);
        console.log('Logout successful');
        // Perform any additional actions upon successful logout
      } else {
        console.log('Logout failed');
        // Handle logout error
      }
    } catch (error) {
      console.log('Error occurred during logout:', error);
      // Handle error
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <form onSubmit={handleRegister}>
            <h2>Registration Form</h2>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Register</button>
          </form>

          <form onSubmit={handleLogin}>
            <h2>Login Form</h2>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Auth;