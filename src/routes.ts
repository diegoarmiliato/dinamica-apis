import express from 'express';
import { login, logoff, refresh } from '@controllers/LoginController';
import { getUsers, addUsers, lockUsers, changeUsersPass } from '@controllers/UsersController';
import { auth } from './utils/middleware/auth';

const routes = express.Router();

routes
  .post('/login', login)
  .post('/logoff', auth, logoff)
  .post('/isAuth', auth, async ( req, res) => res.status(202).json({ message: 'authenticated'}))
  .post('/refresh', refresh)
  .get('/users', auth, getUsers)
  .post('/users',auth, addUsers)
  .put('/users', auth, lockUsers)
  .patch('/password', auth, changeUsersPass);

export default routes;
