export class User {
  firstName: string = '';
  lastName: string = '';
  emailAddress: string = '';
  userId: string = '';
  password: string = '';
  constructor(firstName: string,lastName: string, emailAddress: string,userId: string, password: string
  ) {

    this.emailAddress=emailAddress;
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
  }
}
