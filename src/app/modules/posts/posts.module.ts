import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { CreatePostComponent } from './componenets/create-post/create-post.component';
import { EditPostComponent } from './componenets/edit-post/edit-post.component';
import { DetailPostComponent } from './componenets/detail-post/detail-post.component';
import { GetAllPostComponent } from './componenets/get-all-post/get-all-post.component';


@NgModule({
  declarations: [
    CreatePostComponent,
    EditPostComponent,
    DetailPostComponent,
    GetAllPostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ],
  exports:[
    GetAllPostComponent,
  ]
})
export class PostsModule { }
