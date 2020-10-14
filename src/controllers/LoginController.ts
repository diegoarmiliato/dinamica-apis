import { Authenticate } from './../utils/ldap/Authenticate';
import { Request, Response, NextFunction } from 'express';
import { Result } from '@models/Result';

export const login = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
      const result: Result = {
        message: 'Missing Authorization Header',
        status: false
      };
      res.json(result);
    } else {
      // verify auth credentials
      const base64Credentials = req.headers.authorization.split(' ')[1];
      const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
      const [username, password] = credentials.split(':');
      //
      if (req.session.username === username) {
        const result: Result = {
          message: 'User already signed in',
          status: true
        };
        res.json(result);
      } else {
        const auth = await Authenticate(username, password);
        if (auth.status) {
          req.session.username = username;
          req.session.active = true;
        } else {
          req.session = null;
        }
        res.json(auth);
      }    
    }
  } catch (error) {
    next(error);
  }
};