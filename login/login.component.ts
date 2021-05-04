import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAuthInfo: {userName:string, password:string}|null=null;
  message:string='';
  success:boolean = true;
  constructor(private userSvc:UserserviceService, private router:Router, private route:ActivatedRoute) {

    this.userAuthInfo= {userName:'', password:''};
    if(this.route.snapshot.paramMap.get('msg'))
    {
      this.message = this.route.snapshot.paramMap.get('msg') as string;
    }
  }


  ngOnInit(): void {
  }

  LoginUser()
  {
    if(this.userAuthInfo?.userName!==undefined && this.userAuthInfo.password!=undefined)
    {
      this.userSvc.Login(this.userAuthInfo?.userName, this.userAuthInfo?.password).subscribe((response)=>{

        this.userSvc.SetUserLoggedIn(response);
        this.message = "You successfully logged in"
        setTimeout(()=>{
          this.router.navigate(["/home"]);

        }, 1000)
      }, (error)=>{
        this.success=false;
        this.message =error.error.messsage;
        console.log(error);
      })
    }
  }
}
