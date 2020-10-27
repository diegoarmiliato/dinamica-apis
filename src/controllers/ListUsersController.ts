import { listUser } from '../utils/ldap/ListUser';
import { Request, Response, NextFunction } from 'express';

export const listUsers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
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