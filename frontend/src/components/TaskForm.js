import React, { useState, useEffect, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import PropTypes from 'prop-types';

const TaskForm = ({ currentTask, setCurrentTask }) => {
  const [taskData, setTaskData] = useState({
    title: currentTask?.title || '',
    description: currentTask?.description || '',
    category: currentTask?.category || '',
    priority: currentTask?.priority || 'Medium',
    dueDate: currentTask?.dueDate || '',
  });
  const { addTask, updateTask } = useContext(TaskContext);

  const clearCurrentTask = () => {
    setCurrentTask(null);
  };

  useEffect(() => {
    if (currentTask) {
      const formattedDate = currentTask.dueDate
        ? new Date(currentTask.dueDate).toISOString().split('T')[0]
        : '';
      setTaskData({ ...currentTask, dueDate: formattedDate }); // Populate the form with the current task details
    } else {
      setTaskData({
        title: '',
        description: '',
        category: '',
        priority: '',
        dueDate: '',
      }); // Reset form
    }
  }, [currentTask]);

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentTask) {
      await updateTask({ ...currentTask, ...taskData });
    } else {
      await addTask(taskData);
    }
    setTaskData({
      title: '',
      description: '',
      category: '',
      priority: 'Medium',
      dueDate: '',
    });

    setCurrentTask(null);
  };

  return (
    <div className="task-main">
      <main className="task-main">
        <section className="task-form">
          <h2>{currentTask ? 'Edit Task' : 'Add New Task'}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={taskData.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={taskData.description}
              onChange={handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={taskData.category}
              onChange={handleChange}
            />
            <label htmlFor="priority">
              <select
                name="priority"
                value={taskData.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </label>
            <input
              type="date"
              name="dueDate"
              value={taskData.dueDate}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary">
              {currentTask ? 'Update Task' : 'Add Task'}
            </button>
            {currentTask && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={clearCurrentTask}
              >
                Cancel Edit
              </button>
            )}
          </form>
        </section>
      </main>
    </div>
  );
};

TaskForm.propTypes = {
  setCurrentTask: PropTypes.func,
  currentTask: PropTypes.shape({
    category: PropTypes.string,
    priority: PropTypes.string,
    dueDate: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};

export default TaskForm;
