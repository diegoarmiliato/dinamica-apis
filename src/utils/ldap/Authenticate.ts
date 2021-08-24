import { Login } from '@models/Login';
import Connect from './Connect';

export const Authenticate = async (username: string, password: string) : Promise<Login> => {
  const connect = new Connect();
  const { ad } = connect;
  const result: Login = {
    status: false
  };
  try {
    const auth = await ad.user(username).authenticate(password);    
    if (auth) {
      const ou = await ad.user(username).location();
      result.orgUnit = ou;
      const res = await ad.user(username).get({ fields: ['givenName', 'sn']});
      result.firstName = res.givenName;
      result.lastName = res.sn;
      result.username = username,          
      result.message = 'Logon feito com sucesso';
      result.status = true;      
    } else {
      result.message = 'Nome de usuário ou senha inválido';
    }
  } catch (err) {
    result.message = err;
  }
  return result;
};