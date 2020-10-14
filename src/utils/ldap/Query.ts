import { Result } from '@models/Result';
import ad from './Connect';

export const Query = async (query: string) : Promise<Result> => {  
  const result: Result = {
    message: '',
    status: false
  };
  try {
    const find = await ad.user().get();
    //
    if (find) {
      result.message = find;
      result.status = true;
    } else {
      result.message = 'Error querying for user';
    }
  } catch (err) {
    result.message = err;
  }
  return result;
};