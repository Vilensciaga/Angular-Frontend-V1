import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInfo:User|null=null;
  message:string='';  
  success:boolean=true;

  constructor(private userSvc:UserserviceService, private router:Router) {
    this.userInfo= new User('','','','','');
  }




  ngOnInit(): void {
  }

  CreateUser()
  {
    if(this.userInfo!==null){

      this.userSvc.CreateUser(this.userInfo).subscribe((response)=>{
        this.success =true;
        this.message= `The User ${response.userId} has been created!`
        setTimeout(()=>{
          this.router.navigate(["/login"]);

        }, 1000)
      },(error)=>{
        this.success =false;
        this.message = error.error.messsage;

      })

    }
  }
}
