import { Authenticate } from '@utils/ldap/Authenticate';
import { Request, Response, NextFunction } from 'express';
import { Login } from '@models/Login';
import { createAccessToken, createRefreshToken, getTokenOnRefresh, invalidateToken } from '@utils/middleware/auth';

const { NODE_ENV } = process.env;

const testUsername = 'test_username';
const testPassword = 'test_username';

const login = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {    
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
      const result: Login = {
        message: 'Falha no cabeçalho de autorização',
        status: false
      };
      res.status(403).json(result);
    } else {
    // verify auth credentials      
      const base64Credentials = req.headers.authorization.split(' ')[1];
      const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
      const [username, password] = credentials.split(':');
      //
      const auth : Login = await (async () => {
        return (NODE_ENV === 'test')
          ? ({ 
            status: (username === testUsername && password === testPassword),
            username: 'diego', 
            firstName: 'Diego', 
            lastName: 'Armiliato', 
            orgUnit: 'Funcionarios' 
          })
          : (await Authenticate(username, password));
      })();
      if (auth.status) {
        const token = createAccessToken(auth.username, auth.firstName, auth.lastName, auth.orgUnit);
        const refreshToken = createRefreshToken(auth.username, auth.firstName, auth.lastName, auth.orgUnit);
        res.status(202).cookie('jid', refreshToken, { httpOnly: true, sameSite: 'none', secure: true }).json({token});
      } else {
        req.session = null;
        res.status(401).json({ message: 'Invalid username and password' });
      }
    }    
  } catch (error) {
    next(error);
  }
};

const logoff = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    invalidateToken(req);
    res.clearCookie('jid');
    res.status(201).json({ message: 'Logged off'});
  } catch( error) {
    res.status(403).json({ message: 'Not authenticated' });
  }
};

const refresh = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    const { token, refreshToken } = getTokenOnRefresh(req);    
    // 
    if(!token) {
      res.status(403).json({ message: 'Not authenticated' });
    }
    //
    res.status(202).cookie('jid', refreshToken, { httpOnly: true, sameSite: 'none', secure: true }).json({token});
  } catch (error) {
    res.status(403).json({ message: 'Not authenticated' });
  }
};

export { login, logoff, refresh, testUsername, testPassword };