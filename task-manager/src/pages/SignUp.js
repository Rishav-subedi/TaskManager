import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AuthForms.css';


const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', formData);
    // TODO: Call backend API to register the user
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
          <Link to="/login">Already have an account? Log in</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
