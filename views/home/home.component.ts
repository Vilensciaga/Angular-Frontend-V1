import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { ViewpostComponent } from 'src/app/post/viewpost/viewpost.component';
import { PostService } from 'src/app/services/post.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empty:number = 3;

  deleted = false;

  postAry:Post[]=[];
  selectedPost: Post|undefined
  constructor(private postSvc:PostService, private router:Router) {
      this.postSvc.GetPosts().subscribe((postArray)=>{
        this.postAry = postArray;

        if(this.postAry.length == 0){
          this.empty = 0;
        }

        this.selectedPost = postArray[0];
        this.selectedPost.hl = true;
        console.log(this.postAry);
      },(err)=>{
        console.log(err);
      });

      this.postSvc.postStateChanged.subscribe((response)=>{
        this.deleted = response;
      })
   }

  ngOnInit(): void {
  }

  PostWasSelected(event:{postId:number|undefined}){

    for(let b of this.postAry){
      if(b.postId ==  event.postId){
        this.selectedPost = b;
        this.selectedPost.hl = true;

       
      }
      else{
        b.hl = false;
      }
    }

  }

  

}
