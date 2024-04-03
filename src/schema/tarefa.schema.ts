import { Schema, model } from 'mongoose'

const tarefaSchema = new Schema({
    id: Number,
    titulo: String,
    descrição: String,
    dataConclusao: Date,
    tipo: String,
    status: String,
    usuarioAssociado: String

}, { timestamps: true });

export default model("Tarefa", tarefaSchema)