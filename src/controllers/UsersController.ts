import { lockUser } from './../utils/ldap/LockUser';
import { addUser } from './../utils/ldap/AddUser';
import { listUser } from '../utils/ldap/ListUser';
import { Request, Response, NextFunction } from 'express';

export const getUsers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    if (req.session.active) {
      const users = await listUser();
      res.json(users);
    } else {
      res.json({
        message: 'Please logon first',
        status: false
      });
    }
  } catch (error) {
    next(error);
  }
};

export const addUsers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    if (req.session.active) {
      const {username, password, firstName, lastName, orgUnit, mailDomain} = req.body;
      const add = await addUser(username, password, firstName, lastName, orgUnit, mailDomain);
      res.json(add);
    } else {
      res.json({
        message: 'Favor realizar o logon, usuário não autenticado',
        status: false
      });
    }
  } catch (error) {
    next(error);
  }
};

export const delUsers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    if (req.session.active) {
      res.json({
        message: 'Erro',
        status: false
      });
    } else {
      res.json({
        message: 'Favor realizar o logon, usuário não autenticado',
        status: false
      });
    }
  } catch (error) {
    next(error);
  }
};

export const lockUsers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    if (req.session.active) {
      const { username, active } = req.body;
      const lock = await lockUser(username, active);      
      res.json(lock);
    } else {
      res.json({
        message: 'Favor realizar o logon, usuário não autenticado',
        status: false
      });
    }
  } catch (error) {
    next(error);
  }
};