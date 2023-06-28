const express = require('express');
const router = express.Router();
const TaskController = require ('../controllers/TaskController');

router.get('/add', TaskController.createTask);      // rota para ver as tarefas
router.get('/add', TaskController.createTaskSave);  // rota para criar uma tarefa
router.get('/', TaskController.showTasks);

module.exports = router;
