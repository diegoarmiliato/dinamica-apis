import { addUser } from './controllers/AddUserController';
import express from 'express';
import { login } from '@controllers/LoginController';
import { listUsers } from '@controllers/ListUsersController';

const routes = express.Router();

routes
  .get('/', (req, res) => { res.send({ status: 'OK' }); })
  .post('/login', login)
  .get('/listUsers', listUsers)
  .post('/addUser', addUser)
  .get('/welcome', (req, res) => { res.render('Login'); })
  .get('/login');

export default routes;
