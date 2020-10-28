import AD from 'ad';
import dotenv from 'dotenv';
dotenv.config();

class Connect {
  ad: any;
  constructor() {
    this.ad = new AD({
      url: process.env.LDAP_URL,
      user: process.env.LDAP_USER,
      pass: process.env.LDAP_PASS,
      baseDN: process.env.LDAP_DN
    });  
  }
}

export default Connect;