import { Getuser } from './../utils/ldap/GetUser';
import { Request, Response, NextFunction } from 'express';

export const listUsers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    if (req.session.active) {
      const {username} = req.body;
      const users = await Getuser(username);
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