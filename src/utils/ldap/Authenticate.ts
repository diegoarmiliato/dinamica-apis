import { Result } from '@models/Result';
import ad from './Connect';

export const Authenticate = async (username: string, password: string) : Promise<Result> => {
  const result: Result = {
    message: '',
    status: false
  };
  try {
    const auth = await ad.user(username).authenticate(password);
    //
    if (auth) {
      result.status = true;
    } else {
      result.message = 'Invalid username password';
    }
  } catch (err) {
    result.message = err;
  }
  return result;
};