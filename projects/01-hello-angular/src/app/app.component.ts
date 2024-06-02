import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ul>
      <li>Star Wars</li>
      <li>Home Alone/li></li>
      <li>Die Hard</li>
    </ul>
  `,
  styles: `ul {
    list-style-type: upper-roman;
  }`,
})
export class AppComponent {}
