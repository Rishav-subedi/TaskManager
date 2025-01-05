import React, { useEffect, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import PropTypes from 'prop-types';
import "../styles/TaskList.css";

const TaskList = ({ setCurrentTask }) => {
  const { state, fetchTasks, deleteTask } = useContext(TaskContext);
  const { tasks } = state;
  // console.log(tasks);

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div className="task-list-container">
      {tasks.length === 0 ? (
        <p className="empty-message">No tasks available</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li className="task-item" key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <div className="task-actions">
                <button
                  className="edit-btn"
                  onClick={() => setCurrentTask(task)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

TaskList.propTypes = {
  setCurrentTask: PropTypes.func,
};

export default TaskList;
