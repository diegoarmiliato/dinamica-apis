export class User {
  username?: string;
  firstName?: string;
  lastname?: string;
  groups?: string[];
  orgUnit?: string;
}

export class ListUser {
  userList?: User[];
  message: string;
  status: boolean;
}
