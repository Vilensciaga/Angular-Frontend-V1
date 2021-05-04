import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { Token } from 'src/app/models/token.model';
import { PostService } from 'src/app/services/post.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-viewpost', 
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  @Input() postInstance: Post | undefined;
  @Output()postSelected = new EventEmitter<{postId:number|undefined}>();
  @Output() postDeleted = new EventEmitter<number>()
  currentUser: Token = new Token;
  

  success:boolean = false;
  //correctUser:boolean = true;
  constructor(private postSvc:PostService, private userSvc: UserserviceService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  
  }

  clickedPost(){
    this.postSelected.emit({postId:this.postInstance?.postId});
    if(this.success){

      this.success = false;
    }
    else{

      this.success = true;
    }
    
    
  }

  

  EditPost() {
    
    if (this.checkUser()) {
      this.postSelected.emit({postId:this.postInstance?.postId});
      this.router.navigate(['/editpost/', { postId: this.postInstance.postId }]);
    } else {
    
      window.alert('You are only allowed to edit your own posts!');
    }
    
  }


  checkUser() {
    let user = this.userSvc.GetLoggedInUser();
    let userId = user.UserData.userId

    
    if (this.postInstance.userId === userId) {
      return true;
    } else {
    
      return false;
    }
    
  }


  

 
  deletePost(){
  if(this.checkUser()){
    if(confirm('Are you sure you want to delete this post?')){
      this.postSvc.deletePost(this.postInstance.postId.toString()).subscribe((response) => {
        this.postDeleted.emit(this.postInstance.postId);
      }, (err) => {
        alert(`Post not found: ${err.error.message}`);
      });
    }
    }
    else{
      window.alert('You are only allowed to delete your own posts!');
    }
  }

}
  