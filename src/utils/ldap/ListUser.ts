import { ListUser, User } from '@models/ListUser';
import ad from './Connect';

export const listUser = async () : Promise<ListUser> => {  
  const result: ListUser = {
    message: '',
    status: false
  };
  try {
    const query = await ad.user().get({fields: ['sAMAccountName','givenName','sn','groups']});
    //    
    if (query) {
      //
      const getData = async () => {
        return Promise.all(query.map( async (line) => {
          const ou = await ad.user(line.sAMAccountName).location();
          //
          const result: User = {
            username: line.sAMAccountName,
            firstName: line.givenName,
            lastname: line.sn,
            groups: line.groups.map((group) => {
              return group.cn;
            }),
            orgUnit: ou
          };
          return result;
        }));
      };
      const userList = await getData();
      result.message = 'Usuários listados';
      result.userList = userList;
      result.status = true;
    } else {
      result.message = 'Erro ao listar usuários';
    }
  } catch (err) {
    result.message = err.message;
  }
  return result;
};