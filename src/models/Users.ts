export class User {
  username?: string;
  firstName?: string;
  lastName?: string;
  groups?: string[];
  orgUnit?: string;
  active?: boolean;
}

export class Users {
  userList?: User[];
  message: string;
  status: boolean;
}
