import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import '../styles/TaskPage.css';

const TaskPage = () => {
  const [currentTask, setCurrentTask] = useState(null);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    navigate('/login');
  };

  return (
    <div className="task-page">
      <header className="navbar">
        <div className="logo">Task Manager</div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/login" onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="task-main">
        <section className="task-form">
          <TaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} />
        </section>
        <section className="task-list">
          <TaskList setCurrentTask={setCurrentTask} />
        </section>
      </main>
    </div>
  );
};

export default TaskPage;