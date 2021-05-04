export class Post {
    postId: number=0;
    createdDate: string = '';
    title: string='';
    content: string='';
    userId: string='';
    headerImage: string='';
    lastUpdated: string = '';
    hl:boolean = false


     constructor(postId:number, createdDate:string, title:string, content:string, userId:string, headerImage:string, lastUpdated:string, hl:boolean){
        this.postId = postId;
        this.createdDate = createdDate;
        this.title = title;
        this.content = content;
        this.userId = userId;
        this.headerImage = headerImage;
        this.lastUpdated =lastUpdated;
        this.hl = false;
     }
}
