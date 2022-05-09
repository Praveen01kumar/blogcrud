import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PostDasboardComponent } from './post-dasboard/post-dasboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostsService } from './posts.service';
import { AuthGuard } from './../auth.guard';


const routes:Routes = [
  {path:'post', component:PostListComponent},
  {path:'post/:id',component:PostDetailComponent},
  {path:'dasboard',component:PostDasboardComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [PostDasboardComponent,PostDetailComponent, PostListComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  providers:[PostsService]
})

export class PostModule { }
