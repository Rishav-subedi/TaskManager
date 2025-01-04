import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types'; 
import API_BASE_URL from '../api/config';

const TaskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TASKS':
      return { ...state, tasks: action.payload };
    case 'ADD_TASK':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
    default:
      return state;
  }
};

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/tasks`, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: 'FETCH_TASKS', payload: data });
      } else {
        console.error(data.msg);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const addTask = async (task) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: 'ADD_TASK', payload: data });
      } else {
        console.error(data.msg);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateTask = async (task) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/tasks/${task._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(task),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: 'UPDATE_TASK', payload: data });
      } else {
        console.error(data.msg);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        dispatch({ type: 'DELETE_TASK', payload: taskId });
      } else {
        const data = await res.json();
        console.error(data.msg);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <TaskContext.Provider
      value={{ state, dispatch, fetchTasks, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// Add prop-types validation
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TaskContext, TaskProvider };
