import express from 'express';
import ClassesControllers from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController';

const routes = express()


routes.post('/classes' ,ClassesControllers.create)
routes.get('/classes' ,ClassesControllers.index)


routes.post('/connections' , ConnectionsController.create)
routes.get('/connections' , ConnectionsController.index)
export default routes;