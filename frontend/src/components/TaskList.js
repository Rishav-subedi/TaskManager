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
    <div className="task-page">
      <main className="task-main">
        <section className="task-list">
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
                      className="btn btn-secondary"
                      onClick={() => setCurrentTask(task)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(task._id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

TaskList.propTypes = {
  setCurrentTask: PropTypes.func,
};

export default TaskList;
