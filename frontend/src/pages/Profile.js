import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to your profile!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
