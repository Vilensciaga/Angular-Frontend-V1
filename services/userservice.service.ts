import { Injectable, Output,EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Token } from '../models/token.model';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userIsLoggedIn: boolean =false;
  userName='jose';
  password= 'larry';

  @Output() UserStateChanged = new EventEmitter<boolean>();
  constructor(private httpC: HttpClient) { }

  Login(userName:string, password:string)
  {
    return this.httpC.get<{token:string}>(`${environment.BASE_URL}/Users/${userName}/${password}`);
  }

  CreateUser(userData:User)
  {
    return this.httpC.post<User>(`${environment.BASE_URL}/Users`,userData);
  }


  SetUserLoggedIn(userToken:{token:string})
  {
    localStorage.setItem('token',JSON.stringify(userToken));
    this.UserStateChanged.emit(true);
  }

  SetUserAsLoggedOff()
  {
    localStorage.removeItem('token');
    this.UserStateChanged.emit(false);
  }

  GetLoggedInUser()
  {
    let tokenString= localStorage.getItem('token');
    if(tokenString!==null)
    {
      let tokenObj = JSON.parse(tokenString) as {token:string};
      let tokenInfo =<Token>jwt_decode(tokenObj.token);
      console.log(tokenInfo);
      return tokenInfo;
    }
    else
      return null;
  }



}
