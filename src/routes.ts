import express from 'express';
import { addUser } from './controllers/AddUserController';
import { login, logoff } from '@controllers/LoginController';
import { listUsers } from '@controllers/ListUsersController';

const routes = express.Router();

routes
  .post('/login', login)
  .post('/logoff', logoff)
  .get('/listUsers', listUsers)
  .put('/addUser', addUser);

export default routes;
