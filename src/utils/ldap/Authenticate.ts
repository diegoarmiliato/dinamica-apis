import { Login } from '@models/Login';
import ad from './Connect';

export const Authenticate = async (username: string, password: string) : Promise<Login> => {
  const result: Login = {
    status: false
  };
  try {
    const auth = await ad.user(username).authenticate(password);
    //
    if (auth) {
      const res = await ad.user(username).get({ fields: ['givenName', 'sn']});
      console.log(res);
      result.username = username,
      result.status = true;
    } else {
      result.message = 'Nome de usuário ou senha inválido';
    }
  } catch (err) {
    result.message = err;
  }
  return result;
};