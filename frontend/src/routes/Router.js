import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import PrivateRoute from '../components/utils/PrivateRoute';
import { TaskProvider } from '../context/TaskContext';
import TaskPage from '../pages/TaskPage';
import App from '../App';

const AppRouter = () => {
  return (
    <TaskProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/tasks" element={<PrivateRoute><TaskPage /></PrivateRoute>} />
      </Routes>
    </Router>
    </TaskProvider>
  );
};

export default AppRouter;
