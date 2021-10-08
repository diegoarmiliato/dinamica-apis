import { lockUser } from './../utils/ldap/LockUser';
import { addUser } from './../utils/ldap/AddUser';
import { listUser } from '../utils/ldap/ListUser';
import { changeUserPass } from '../utils/ldap/ChangeUserPass';
import { Request, Response, NextFunction } from 'express';

const { NODE_ENV } = process.env;

const mockUsers = [
  {
    username: 'jobrother',
    firstName: 'Jonas',
    lastName: 'Brother',
    groups: [],
    orgUnit: 'Alunos',
    active: true
  },
  {
    username: '102',
    firstName: 'Zé',
    lastName: 'Silva',
    groups: [],
    orgUnit: 'Alunos',
    active: false
  }
];

const index = 111;

export const getUsers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {    
    if (NODE_ENV === 'test') {
      res.json({
        message: 'Usuários listados',
        status: true,
        userList: mockUsers
      });
    }    
    const users = await listUser();
    res.json(users);    
  } catch (error) {
    next(error);
  }
};

export const addUsers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {  
    const {username, password, firstName, lastName, orgUnit, mailDomain} = req.body;
    if (NODE_ENV === 'test') {
      mockUsers.push({
        username,
        firstName,
        lastName,
        groups: [],
        orgUnit,
        active: true
      });
      res.json({        
        message: 'Usuário criado',
        status: true,
      });
    }          
    const add = await addUser(username, password, firstName, lastName, orgUnit, mailDomain);
    res.json(add);    
  } catch (error) {
    next(error);
  }
};

export const delUsers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    res.json({
      message: 'Erro',
      status: false
    });
  } catch (error) {
    next(error);
  }
};

export const lockUsers = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    const { username, active } = req.body;
    const lock = await lockUser(username, active);      
    res.json(lock);
  } catch (error) {
    next(error);
  }
};

export const changeUsersPass = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
  try {
    const { username, newPassword } = req.body;
    const pass = await changeUserPass(username, newPassword);      
    res.json(pass);
  } catch (error) {
    next(error);
  }
};