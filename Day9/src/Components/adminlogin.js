// src/LoginPage.js
import React, { useState } from 'react';
import "./adminlogin.css"
import { Link } from 'react-router-dom';
function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here, you can add your logic to validate and submit the login data
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-page">
      <h2>Admin Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <Link to="/adminds"><button className='sumit'>Login</button></Link>
      </form>
    </div>
  );
}

export default LoginPage;
