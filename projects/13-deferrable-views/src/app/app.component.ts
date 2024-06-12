import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts>Load Posts</button>
      @defer (on timer(500ms)) {
      <app-posts />
      } @placeholder {
      <p>Placeholder</p>
      }
    </section>
  `,
})
export class AppComponent {}
