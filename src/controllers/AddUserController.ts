import { AddUser } from './../utils/ldap/AddUser';
import { Request, Response, NextFunction } from 'express';

export const addUser = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    if (req.session.active) {
      const {username, password, firstName, lastName, orgUnit, mailDomain} = req.body;
      const add = await AddUser(username, password, firstName, lastName, orgUnit, mailDomain);
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