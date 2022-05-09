import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
import { Post } from '../post';
import { AuthService } from 'src/app/home/auth.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  post: Post | any;
  editing:boolean = false;

  constructor(private route:ActivatedRoute,
    private postservice:PostsService,
    public auth:AuthService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    const id = this.route.snapshot.paramMap.get('id');
    return this.postservice.getPostData(id).subscribe((data: any) => {
      this.post = data;
      // console.log(this.post);
    })
  }
  
  delete(){
    const id:any = this.route.snapshot.paramMap.get('id');
    this.postservice.delete(id);
    this.router.navigate(['/post']);

  }
  updatePost(){
    const formData = {
      title:this.post.title,
      content:this.post.content
    }
    const id:any = this.route.snapshot.paramMap.get('id');
    this.postservice.update(id, formData);
    this.editing = false;
  }


}
