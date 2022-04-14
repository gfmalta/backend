import { Router } from 'express';
import TaskController from '../controller/TaskController';

const taskRoutes = Router();
const taskController = new TaskController();


taskRoutes.get('/', (req, res) => {
    taskController.getAllTasks(req, res);
});
taskRoutes.post('/:id', (req, res) => {
    taskController.createTask(req, res);
});

taskRoutes.patch('/:id', (req, res) => {
    taskController.updateTask(req, res);
});

taskRoutes.delete('/:id', (req, res) => {
    taskController.deleteOneTask(req, res);
});

export default taskRoutes;