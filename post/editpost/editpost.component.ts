import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {


  postId: string = '';
  content: string = '';
  title: string = '';
  headerImage: string = '';
  currentPost: Post = new Post(1923,'','','','','','',false);
  message:string = ''
  success:boolean = true;
  
  @Input() postInstance: Post | undefined;
  
  constructor(private postSvc:PostService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  editPost(){

  this.postId = this.route.snapshot.paramMap.get('postId');

    
  let date = new Date()
  this.currentPost.headerImage = this.headerImage;
  this.currentPost.content = this.content;
  this.currentPost.title = this.title;
  this.currentPost!.lastUpdated = date.toString();
  this.postSvc.editPost(this.currentPost, this.postId).subscribe(
    (response) => {
      console.log(response)
      this.success = true;
      this.message= `${response.userId}'s Post has been edited`
      setTimeout(()=>{
        this.router.navigate(["/home"]);

      }, 1000)
   
      
    },
    (error) => {
      console.log(error);
      this.success = false;
      this.message = error.error.message;
    }
  );
}




}


