import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faSignInAlt, faUserPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { Token } from 'src/app/models/token.model';
import { UserserviceService } from 'src/app/services/userservice.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
         
  signInIcon = faSignInAlt;
  registerIcon= faUserPlus;
  signOutIcon = faSignOutAlt;
  userIsLoggedIn= false;
  currentUser: Token|null=null;
  constructor(private userSvc: UserserviceService, private router:Router) {

    let userLoggedIn = this.userSvc.GetLoggedInUser();
    if(userLoggedIn!==null)
    {
      this.userIsLoggedIn = true;
      this.currentUser = userLoggedIn;
    }

    this.userSvc.UserStateChanged.subscribe((userLogedInMsg)=>{
      this.userIsLoggedIn = userLogedInMsg;
      this.currentUser = userLoggedIn;
    })


  }

  ngOnInit(): void {
  }

  LogoutUser()
  {
    this.userSvc.SetUserAsLoggedOff();
    this.userIsLoggedIn=false;
    this.router.navigate(['/login']);
  }

}
