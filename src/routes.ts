import { Router } from 'express'
import usuarioController from './controllers/usuarioController'
import tarefaController from './controllers/tarefaController'
import categoriaController from './controllers/categoriaController'

const routes = Router()

routes.post('/usuario', usuarioController.create)
routes.get('/usuarios', usuarioController.findAll)
routes.get('/usuario/:id', usuarioController.findById)
routes.put('/usuario/:id', usuarioController.update)
routes.delete('/usuario/:id', usuarioController.delete)

routes.post('/tarefa', tarefaController.create)
routes.get('/tarefas', tarefaController.findAll)
routes.get('/tarefa/:id', tarefaController.findById)
routes.put('/tarefa/:id', tarefaController.update)
routes.delete('/tarefa/:id', tarefaController.delete)

routes.post('/categoria', categoriaController.create)
routes.get('/categorias', categoriaController.findAll)
routes.get('/categorias/:id', categoriaController.findById)
routes.put('/categorias/:id', categoriaController.update)
routes.delete('/categorias/:id', categoriaController.delete)


export {
    routes
}