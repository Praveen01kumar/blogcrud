import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/home/auth.service';
import { PostsService } from '../posts.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-post-dasboard',
  templateUrl: './post-dasboard.component.html',
  styleUrls: ['./post-dasboard.component.scss']
})
export class PostDasboardComponent implements OnInit {

  title!: string;
  image: any = null;
  content!: string;
  buttonText: string = 'Create Post';
  uploadPercent: Observable<number> | any;
  downloadUrl: Observable<string> | any;

  constructor(
    private auth: AuthService,
    private postservice: PostsService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void { }

  createPost() {
    const data = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image,
      published: new Date(),
      title: this.title
    };
    this.postservice.create(data);
    this.title = '';
    this.content = '';
    this.image = '';
    this.buttonText = 'Post created!';
    setTimeout(() => {
      this.buttonText = 'Create Post';
    }, 3000);
  }

  async uploadImage(event: any) {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    console.log(event.target.files);
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files');
    } else {
      const task = this.storage.upload(path, file);
      const ref = this.storage.ref(path);
      // this.downloadUrl = task.downloadUrl();
      this.uploadPercent = task.percentageChanges();
      // console.log("Image Uploaded!");
      // this.downloadUrl.subscribe((url: any) => {this.image = url;})
      await task;
      console.log('Image uploaded!');
      this.image = await ref.getDownloadURL().toPromise();
    }
  }

}
