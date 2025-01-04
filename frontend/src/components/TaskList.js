import React, { useEffect, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import PropTypes from 'prop-types';

const TaskList = ({ setCurrentTask }) => {
  const { state, fetchTasks, deleteTask } = useContext(TaskContext);
  const { tasks } = state;

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => setCurrentTask(task)}>Edit</button>
              <button onClick={() => handleDelete(task._id)}>Delete</button>
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
