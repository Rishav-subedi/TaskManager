import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/Router';
// import App from './App';
// import TaskPage from './pages/TaskPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TaskPage /> */}
    <AppRouter />
  </React.StrictMode>
);

