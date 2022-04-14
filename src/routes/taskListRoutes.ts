import { Router } from 'express'
import TasklistController from '../controller/TasklistController'
import mongoose from 'mongoose';

const tasklistRoutes = Router()
const tasklistController = new TasklistController()



tasklistRoutes.post('/', (req, res) => {
    tasklistController.createTasklist(req,res)
})

tasklistRoutes.get('/all', (req, res) => {
    tasklistController.getAllTasklists(req,res)
})

tasklistRoutes.delete('/:id', (req, res) => {
    tasklistController.deleteTasklist(req,res)
})

tasklistRoutes.patch('/name/:id', (req, res) => {
    tasklistController.updateTasklistName(req,res)
})

tasklistRoutes.get('/:id', (req, res) => {
    tasklistController.getOneTasklist(req,res)
})







export default tasklistRoutes