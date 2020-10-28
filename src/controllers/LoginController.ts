import { Result } from './../models/Result';
import { Authenticate } from './../utils/ldap/Authenticate';
import { Request, Response, NextFunction } from 'express';
import { Login } from '@models/Login';

export const postLogin = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    if (req.session.active) {
      const result: Login = {
        username: req.session.username,
        firstName: req.session.firstName,
        lastName: req.session.lastName,
        orgUnit: req.session.orgUnit,
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
          req.session.orgUnit = auth.orgUnit;
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

export const postLogoff = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  req.session = null;
  const result: Result = {
    message: 'Logoff realizado',
    status: true
  };
  res.json(result);
};