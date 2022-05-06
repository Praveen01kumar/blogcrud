import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsCollection: AngularFirestoreCollection<Post> | any;
  postDoc!: AngularFirestoreDocument<Post> | any;

  constructor(private readonly afs: AngularFirestore) {

    this.postsCollection = this.afs.collection<Post>('posts');
  }
  getPosts() {
    return this.postsCollection.snapshotChanges().pipe(map((actions: any[]) => actions.map(a => {
      const data = a.payload.doc.data() as Post;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
    );
  }

  getPostData(id: any) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`);
    return this.postDoc.valueChanges();
  }

  create(data: Post) {
    this.postsCollection.add(data);
  }
  getPost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`);
  }

  delete(id: string) {
    return this.getPost(id).delete();
  }

  update(id:string, formData: Partial<Post>) {
    return this.getPost(id).update(formData);

  }

}
