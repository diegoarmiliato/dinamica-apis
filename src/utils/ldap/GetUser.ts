import { Result } from '@models/Result';
import ad from './Connect';

export const Getuser = async (username: string) : Promise<Result> => {  
  const result: Result = {
    message: '',
    status: false
  };
  try {
    const find = await ad.user(username).get({fields: ['sAMAccountName','givenName','sn','cn','displayName','groups']});
    //
    if (find) {
      result.message = find;
      result.status = true;
    } else {
      result.message = 'Error querying for user';
    }
  } catch (err) {
    result.message = err.message;
  }
  return result;
};