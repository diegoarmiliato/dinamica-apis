import { NextFunction, Request, Response } from 'express-serve-static-core';
import * as jwt from 'jsonwebtoken';

const { TOKEN_KEY, REFRESH_KEY } = process.env;

const blackList = [];

const getToken = (req: Request) : string => {
  // Gets token from authorization header parameter in format "Bearer ###########"
  const authorization = req.headers.authorization;
  if (authorization.indexOf('Bearer') < 0) {
    return undefined;
  }
  const token = authorization.split(' ')[1];
  return token;
};

const auth = (req: Request, res: Response, next: NextFunction) : void | Response<any>=> {
  const token = getToken(req);
  // If the token is not available, instantly rejects the call
  if (!token) {
    return res.status(403).json({message: 'A token is required for authentication'});
  }
  // Checks if the token was backlisted
  const blacklisted = blackList.indexOf(token);
  if (blacklisted >= 0) {
    return res.status(401).json({message: 'Invalid token'});
  }
  // Validates the token against the KEY
  try {
    const decoded = jwt.verify(token, TOKEN_KEY);
    req['user'] = decoded;    
  } catch(err) {
    return res.status(401).json({message: 'Invalid token'});
  }
  return next();
};

const createAccessToken = (username: string, firstName: string, lastName: string, orgUnit: string) : string => {
  const token = jwt.sign(
    { username,
      firstName,
      lastName,
      orgUnit  
    },
    TOKEN_KEY,
    { expiresIn: '20s' }
  );
  return token;
};

const createRefreshToken = (username: string, firstName: string, lastName: string, orgUnit: string) : string => {
  const token = jwt.sign(
    { username,
      firstName,
      lastName,
      orgUnit  
    },
    REFRESH_KEY,
    { expiresIn: '7d' }
  );
  return token;
};

const invalidateToken = (req: Request) : void => {  
  const token = getToken(req);
  // Adds token to the backlist in order to prevent any further authentication attempt
  blackList.push(token);
};

const getTokenOnRefresh = (req: Request) : {token: string, refreshToken: string} => {
  // Checks if there's a refresh token in a cookie
  const refreshToken = req.cookies.jid;
  if (!refreshToken) {
    return undefined;
  } else {
    // Checks if the refresh token was backlisted
    const blacklisted = blackList.indexOf(refreshToken);
    if (blacklisted >= 0) {
      return undefined;
    }
    // validates refresh token    
    try {
      const decoded = jwt.verify(refreshToken, REFRESH_KEY);      
      // invalidates the refresh token
      blackList.push(refreshToken);
      // generates new pair of token and refresh token
      const newToken = createAccessToken(decoded['username'], decoded['firstName'], decoded['lastName'], decoded['orgUnit']);
      const newRefreshToken = createRefreshToken(decoded['username'], decoded['firstName'], decoded['lastName'], decoded['orgUnit']);
      return (
        {
          token: newToken,
          refreshToken: newRefreshToken
        }
      );
    } catch (error) {
      return undefined;
    }
  }
};

export { auth, createAccessToken, createRefreshToken, invalidateToken, getTokenOnRefresh };