import React from 'react';
import './App.css';
// import { Link } from 'react-router-dom';
// import LandingPage from './pages/LandingPage';
// import TaskPage from './pages/TaskPage';

function App() {
  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="logo">Task Manager</div>
        <nav>
          <p>navbar</p>
          {/* <ul className="nav-links">
            <li><Link to="/login" className="btn btn-primary">Login</Link></li>
            <li><Link to="/signup" className="btn btn-secondary">Sign Up</Link></li>
          </ul> */}
        </nav>
      </header>

      <main className="hero">
        <h1>Welcome to Task Manager</h1>
        <p>Manage your tasks efficiently and stay productive.</p>
        <div className="hero-buttons">
          <p>hero buttons</p>
          {/* <Link to="/login" className="btn btn-primary">Get Started</Link> */}
        </div>
      </main>
    </div>
  );
}

export default App;
