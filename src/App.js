import React, { useState } from 'react';

const rootUrl = 'https://e-commerce-silkland.onrender.com/api/v1';

function App() {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    email: '',
    password: '',
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const url = `${rootUrl}/auth/register`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        console.log('Registration successful');
      } else {
        console.log('Error during registration');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const url = `${rootUrl}/auth/login`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        console.log('Login successful');
      } else {
        console.log('Error during login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleRegister}>
        <h4>Registration Form</h4>
        <div className="form-row">
          <label htmlFor="firstName" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="firstName"
            className="form-input"
            value={registerData.firstName}
            onChange={(e) =>
              setRegisterData({ ...registerData, firstName: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={registerData.email}
            onChange={( e) => setRegisterData({ ...registerData, email: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
          Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-block submit-btn">
        Register
        </button>
      </form>

      <form className="form" onSubmit={handleLogin}>
        <h4>Login Form</h4>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
          Password
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-block submit-btn">
        Login
        </button>
      </form>
    </>
  );
}

export default App;