export class User {
  username?: string;
  firstName?: string;
  lastName?: string;
  groups?: string[];
  orgUnit?: string;
  active?: boolean;
}

export class ListUser {
  userList?: User[];
  message: string;
  status: boolean;
}
