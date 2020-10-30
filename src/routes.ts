import express from 'express';
import { postLogin, postLogoff } from '@controllers/LoginController';
import { getUsers, addUsers, lockUsers, changeUsersPass } from '@controllers/UsersController';

const routes = express.Router();

routes
  .post('/login', postLogin)
  .post('/logoff', postLogoff)
  .get('/users', getUsers)
  .post('/users',addUsers)
  .put('/users', lockUsers)
  .patch('/password', changeUsersPass);

export default routes;
