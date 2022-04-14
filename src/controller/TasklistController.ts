import { Request, Response } from 'express'
import mongoose from 'mongoose';
import Task from '../models/Task';
import Tasklist from '../models/Tasklist'

export default class TasklistController {
   
    createTasklist = async (req: Request, res: Response) => {
        const { list, name } =  req.body;
        
        
        try {
            let tasklist = await Tasklist.create({
                list,
                name, 
            })

            res.status(200).json(tasklist)

        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "Erro ao criar lista" })
        }
    }

    updateTasklistName = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const tasklist = await Tasklist.findById(id)
    
            if (!tasklist) {
                res.status(400).json({ message: "A lista não existe" })
            }
    
            await tasklist.updateOne(req.body)
            res.status(200).json({ message: "A lista foi atualizada com sucesso" })
    
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "Erro ao atualizar a lista" })
        }
    }

    getOneTasklist = async (req: Request, res: Response) =>{
        const { id } = req.params
        try{
            const response = await Tasklist.findById(id);
            res.status(200).json(response);
        } catch (error){
          console.log(error);
          res.status(400).json({message: "Erro ao achar lista"});
        }
      }

      getAllTasklists = async (req: Request, res: Response) =>{
        
        try{
            const response = await Tasklist.find();
          res.status(200).json(response);
        } catch (error){
          console.log(error);
          res.status(400).json({message: "Erro ao achar lista"});
        }
      }
  
    
      deleteTasklist = async (req: Request, res: Response) => {
        const { id } = req.params

        try {
            await Tasklist.findByIdAndDelete(id)
            res.status(200).json({ message: "Lista deletada com sucesso" })
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "Erro ao deletar lista" })
        }
    }
}