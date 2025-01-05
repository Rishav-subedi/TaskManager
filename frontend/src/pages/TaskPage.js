import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const TaskPage = () => {
  const [currentTask, setCurrentTask] = useState(null);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Task Management</h1>
      <TaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} />
      <TaskList setCurrentTask={setCurrentTask} />
    </div>
  );
};

export default TaskPage;
