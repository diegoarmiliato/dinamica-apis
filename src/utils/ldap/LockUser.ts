import { Result } from '@models/Result';
import Connect from './Connect';

export const lockUser = async (username: string, active: boolean) : Promise<Result> => {
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
      active ? await ad.user(username).enable() : await ad.user(username).disable(); 
      const msg = active ? 'desbloqueado' : 'bloqueado';
      result.message = `Usuário ${msg} com sucesso`;
      result.status = true;
    }
  } catch (err) {
    result.message = err;
  }
  return result;
};