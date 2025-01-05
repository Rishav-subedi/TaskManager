import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
        <div className="logo">Task Manager</div>
        <nav>
          <ul className="nav-links">
            <li><Link to="/login" className="btn btn-primary">Login</Link></li>
            <li><Link to="/signup" className="btn btn-secondary">Sign Up</Link></li>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar

