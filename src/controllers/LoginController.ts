import { Authenticate } from './../utils/ldap/Authenticate';
import { Request, Response, NextFunction } from 'express';
import { Login } from '@models/Login';

export const login = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    if (req.session.active) {
      const result: Login = {
        username: req.session.username,
        firstName: req.session.firstName,
        lastName: req.session.lastName,
        message: 'Login ativo',
        status: true
      };
      res.json(result);
      //
    } else {
      if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        const result: Login = {
          message: 'Falha no cabeçalho de autotização',
          status: false
        };
        res.json(result);
      } else {
      // verify auth credentials
        const base64Credentials = req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [username, password] = credentials.split(':');
        //
        const auth: Login = await Authenticate(username, password);
        if (auth.status) {
          req.session.username = auth.username;
          req.session.firstName = auth.firstName;
          req.session.lastName = auth.lastName;
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