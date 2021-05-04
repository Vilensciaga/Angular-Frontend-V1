import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service'
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  postInfo:Post|null=null;
  message:string='';
  success:boolean=true
  id = 1753;


  

  constructor(private postSvc:PostService, private router:Router, private userSvc: UserserviceService) {
    this.postInfo = new Post(this.id++,'','','','','','',false)

  }

   ngOnInit(): void {
  }

  CreatePost()
  {
    
    let userLoggedIn = this.userSvc.GetLoggedInUser();

    let date = new Date();
    this.postInfo!.postId = this.id++;
    this.postInfo!.createdDate = date.toString();
    this.postInfo!.userId = userLoggedIn!.UserData.userId;

    this.postInfo!.lastUpdated = date.toString();

    
    
        if(this.postInfo!==null){
console.log(this.postInfo);
          this.postSvc!.createPost(this.postInfo).subscribe((response)=>{

            console.log(response);
            this.success =true;
            this.message= `${response.userId}'s post has been created!`
            setTimeout(()=>{
              this.router.navigate(["/home"]);
    
            }, 1000)
            
          },(error)=>{
            console.log(error);
            this.success = false;
            this.message = error.error.messsage;

          })

        }

  
  }

}
