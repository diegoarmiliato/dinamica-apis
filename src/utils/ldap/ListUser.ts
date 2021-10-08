import { Users, User } from '@models/Users';
import Connect from './Connect';

export const listUser = async () : Promise<Users> => {  
  const connect = new Connect();
  const { ad } = connect;
  const result: Users = {
    message: '',
    status: false
  };
  try {
    const query = await ad.user().get({fields: ['sAMAccountName','givenName','sn','groups', 'userAccountControl', 'lockoutTime']});
    //    
    if (query) {
      //
      const getData = async () => {
        return Promise.all(query.map( async (line) => {
          const ou = await ad.user(line.sAMAccountName).location();
          //
          const active = () => {
            if (line.userAccountControl == 514) return false;
            if (typeof line.lockoutTime === 'undefined') return true;
            if (line.lockoutTime != 0) return false;
            return true;
          };
          const result: User = {
            username: line.sAMAccountName,
            firstName: line.givenName,
            lastName: line.sn,
            groups: line.groups.map((group) => {
              return group.cn;
            }),
            orgUnit: ou,
            active: active()
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