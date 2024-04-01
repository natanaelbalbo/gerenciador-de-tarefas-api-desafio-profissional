import usuarioShema from "../schema/usuario.shema";
import { usuarioType } from "../types/usuarioType";

class usuarioService {
    async create(usuario: usuarioType) {
        const createdUsuario = await usuarioShema.create()
        return createdUsuario
    }

    async findAll() {
        const findedUsuarios = await usuarioShema.find()
        return findedUsuarios
    }

    async findById(id: string) {
        const findedUsuario = await usuarioShema.findById(id)
        return findedUsuario
    }

    async update(id: string, usuario: usuarioType) {
        const updateBook = await usuarioShema.findByIdAndUpdate(id, {
            id: usuario.id,
            nome: usuario.nome,
            peso: usuario.peso,
            senha: usuario.senha,
            email: usuario.email
        }, { new: true })
        return updateBook
    }

    async delete(id: string) {
        try {
            await usuarioShema.findByIdAndDelete(id)
            return "Usuário Removido"
        } catch (error) {
            throw new Error(`Erro ao remover usuário: ${error}`)
        }
    }
}


export default new usuarioService()