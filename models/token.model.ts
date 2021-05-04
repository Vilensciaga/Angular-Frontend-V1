import { User } from './user.model';


export class Token {
  token = '';
  UserData: User = new User("", "", "", "", "");
  iat: number = 0;
  exp: number = 0;
  sub: string = '';

}