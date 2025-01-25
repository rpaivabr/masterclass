import { Component, signal } from '@angular/core';
import { PostFormComponent } from "./post-form/post-form.component";
import { Post } from './models/post';
import { PostCardComponent } from "./post-card/post-card.component";

@Component({
  selector: 'app-root',
  imports: [PostFormComponent, PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  posts = signal<Post[]>([]);

  addPost(newPost: Post) {
    this.posts.update(p => [...p, newPost]);
  }
}
