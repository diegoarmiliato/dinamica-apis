import AD from 'ad';
import dotenv from 'dotenv';
dotenv.config();

const ad = new AD({
  url: process.env.LDAP_URL,
  user: process.env.LDAP_USER,
  pass: process.env.LDAP_PASS,
  baseDN: process.env.LDAP_DN
});  

export default ad;