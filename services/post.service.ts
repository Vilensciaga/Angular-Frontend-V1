import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';
import jwt_decode from 'jwt-decode';
import { Token } from '../models/token.model'
import { CreatepostComponent } from '../post/createpost/createpost.component';
import { UserserviceService } from './userservice.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  @Output() postStateChanged = new EventEmitter<boolean>()

   s:string = ''
  
  constructor(private httpC: HttpClient, private userSvc: UserserviceService) { 

    let ts = localStorage.getItem('token');

    if(ts !== null){
      let tokenObj = JSON.parse(ts) as {token:string}
      this.s = tokenObj.token
    }
  }

  

  GetPosts()
  {
    return this.httpC.get<Post[]>(`${environment.BASE_URL}/Posts`);
  }



  createPost(postData:Post){

    const headers = { Authorization: 'Bearer ' + this.s };
    return this.httpC.post<Post>(`${environment.BASE_URL}/Posts`, postData, {
      headers: headers,
    });
  }


  deletePost(postId: string){
    const headers = { Authorization: 'Bearer ' + this.s };
    return this.httpC.delete(`${environment.BASE_URL}/Posts/${postId}`, {
      headers: headers,
    });
    this.postStateChanged.emit(true)
  }

  editPost(postData: Post, postId: string){
    const headers = { Authorization: 'Bearer ' + this.s };
    return this.httpC.patch<Post>(`${environment.BASE_URL}/Posts/${postId}`, postData, {
      headers: headers,
    })
  }

}
 