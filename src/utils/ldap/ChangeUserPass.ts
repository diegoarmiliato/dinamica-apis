import { Result } from '@models/Result';
import Connect from './Connect';

export const changeUserPass = async (username: string, newPassword: boolean) : Promise<Result> => {
  const connect = new Connect();
  const { ad } = connect;
  const result: Result = {
    message: '',
    status: false
  };
  try {
    // checks whether the username is filled
    if ( (!username)) {
      result.message = 'Usuário obrigatório';
    } else {
      await ad.user(username).password(newPassword);
      result.message = 'Senha alterada com sucesso';
      result.status = true;
    }
  } catch (err) {
    result.message = err;
  }
  return result;
};