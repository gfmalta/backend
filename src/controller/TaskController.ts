import { Request, Response } from 'express';
import Task from '../models/Task';
import Tasklist from '../models/Tasklist';

export default class TaskController{

  createTask = async (req: Request, res: Response) =>{
    const { id } = req.params;
    const tasklist = await Tasklist.findById(id);
    try{
      if (!tasklist) {
        return res.status(400).json({ error: 'Lista não existe!' })
    }let task = await Task.create(req.body)
            await tasklist.updateOne({$push:{list: task}});
            res.status(200).json({ message: "Tarefa adicionada com sucesso" })
    }catch(error){
        console.log(error);
        res.status(400).json({message: "Erro ao criar tarefa"})
      }
    }
    
    getAllTasks = async (req: Request, res: Response) => {
      try{
        const response = await Task.find();
      res.status(200).json(response);
    } catch (error){
      console.log(error);
      res.status(400).json({message: "Erro ao achar lista"});
    }
  }


    updateTask = async (req: Request, res: Response) => {
      const { id } = req.params
      try {
          const tasklist = await Task.findById(id)

          if (!tasklist) {
              res.status(400).json({ message: "A tarefa não existe" })
          }

          await tasklist.updateOne(req.body)
          res.status(200).json({ message: "A tarefa foi atualizada com sucesso" })

      } catch (error) {
          console.log(error)
          res.status(400).json({ message: "Erro ao atualizar a tarefa" })
      }
  }

    deleteOneTask = async (req: Request, res: Response) =>{
      const { id } = req.params
      try{
           await Task.findByIdAndDelete(id);
           res.status(200).json({message: "Tarefa deletada com sucesso!"});
      } catch (error){
        console.log(error);
        res.status(400).json({message: "Erro ao deletar tarefa"});
      }
    }
}
