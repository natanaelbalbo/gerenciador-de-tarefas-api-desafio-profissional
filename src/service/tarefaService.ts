import tarefaSchema from "../schema/tarefa.schema";
import { tarefaType } from "../types/tarefaType";

class tarefaService {
    async create(tarefa: tarefaType) {
        const createdTarefa = await tarefaSchema.create(tarefa)
        return createdTarefa
    }

    async findAll() {
        const findedTarefas = await tarefaSchema.find()
        return findedTarefas
    }

    async findById(id: string) {
        const findedTarefa = await tarefaSchema.findById(id)
        return findedTarefa
    }

    async update(id: string, tarefa: tarefaType) {
        const updatedTarefa = await tarefaSchema.findByIdAndUpdate(id, {
            id: tarefa.id,
            titulo: tarefa.titulo,
            descrição: tarefa.descrição,
            dataConclusao: tarefa.dataConclusao,
            tipo: tarefa.tipo,
            status: tarefa.status,
            usuarioAssociado: tarefa.usuarioAssociado  
        }, { new: true })
        return updatedTarefa
    }

    async delete(id: string) {
        try {
            await tarefaSchema.findByIdAndDelete(id)
            return "tarefa removida"
        } catch (error) {
            throw new Error(`Erro ao remover tarefa: ${error}`)
        }
    }
}


export default new tarefaService()