import { Result } from '@models/Result';
import ad from './Connect';

export const AddUser = async (username: string, password: string, firstName: string, lastName: string, orgUnit: string, mailDomain: string) : Promise<Result> => {
  const result: Result = {
    message: '',
    status: false
  };
  try {
    // checks whether the first name, last name or password strings are null
    if ( (!username) || (!firstName) || (!lastName) || (!password) || (!orgUnit) || (!mailDomain)) {
      result.message = 'Usernamw, First Name, Last Name, Password, Organization Unit or Domain can\'t be null';
    } else {
      const commonName = firstName + ' ' + lastName;
      const cnCheck = await ad.find(`CN=${commonName}`);
      if (typeof cnCheck === 'undefined' || cnCheck === null || cnCheck.length === null || cnCheck.length == 0) {
        const email = `${username}@${mailDomain}`;
        //
        const options = {
          userName: username,
          firstName: firstName,
          commonName: commonName,
          lastName: lastName,
          password: password,
          title: commonName,
          email: email,
          location: orgUnit
        };
        //
        await ad.user().add(options);
        await ad.user(username).passwordNeverExpires();
        //
        result.status = true;
      } else {
        result.message = `User ${commonName} already exists with username ${cnCheck.users[0]['sAMAccountName']}`;
      }      
    }
  } catch (err) {
    result.message = err;
  }
  return result;
};