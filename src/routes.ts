import { Router } from 'express'
import usuarioController from './controllers/usuarioController'

const routes = Router()

routes.post('/usuario', usuarioController.create)
routes.get('/usuarios', usuarioController.findAll)
routes.get('/usuario/:id', usuarioController.findById)
routes.put('/usuario/:id', usuarioController.update)
routes.delete('/usuario/:id', usuarioController.delete)


export {
    routes
}