const express = require('express');
const Task = require('../models/Task');
const authenticate = require('../middleware/authenticate'); // Auth middleware

const router = express.Router();

// Create Task
router.post('/', authenticate, async (req, res) => {
  try {
    const task = new Task({ ...req.body, user: req.user._id });
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// Get All Tasks for the User
router.get('/', authenticate, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// Update Task
router.put('/:id', authenticate, async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// Delete Task
router.delete('/:id', authenticate, async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task removed' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
