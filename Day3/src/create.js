import React, { useState } from 'react';
import './login.css'; // Import your CSS file for styling

const Create= () => {
  const [formData, setFormData] = useState({ email: '', password: '',mobile: ''});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Front-end validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required';
    }

    // Check if there are errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, you can proceed with further actions here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="login-form">
      <div className="glass">
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h4><label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}</h4>
        </div>
        <div className="form-group">
          <h4><label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}</h4>
        </div>
        <div className="form-group">
          <h4><label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}</h4>
        </div>
        <button type="submit">Signup</button>
        
      </form>
    </div>
    </div>
  );
};

export default Create;