import { Request, Response } from 'express'
import tarefaService from '../service/tarefaService'

class tarefaController {
    async create(req: Request, res: Response) {
        const createdTarefa = await tarefaService.create(req.body)
        res.status(201)
        return res.json(createdTarefa)
    }

    async findAll(req: Request, res: Response) {
        const findedTarefas = await tarefaService.findAll()
        return res.json(findedTarefas)
    }

    async findById(req: Request, res: Response) {
        const findedTarefa = await tarefaService.findById(req.params.id)
        return res.json(findedTarefa)
    }

    async update(req: Request, res: Response) {
        const updatedTarefa = await tarefaService.update(req.params.id, req.body)
        return res.json(updatedTarefa)
    }

    async delete(req: Request, res: Response) {
        const deleteMessage = await tarefaService.delete(req.params.id)
        return res.json(deleteMessage)
    }
}

export default new tarefaController()