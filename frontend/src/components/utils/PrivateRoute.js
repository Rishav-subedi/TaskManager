import React from 'react';
import PropTypes from 'prop-types'; 
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Check if user is authenticated

  return isAuthenticated ? children : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate 'children' prop
};

export default PrivateRoute;
