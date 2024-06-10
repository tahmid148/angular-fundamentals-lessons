import { Component, Input, OnInit, inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from './user-info/user-info.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>User Listing</h1>
    <router-outlet />
    <!-- @for(userEntry of userData; track userEntry.id) {
    <app-user-info [user]="userEntry" />
    } -->
  `,
  imports: [UserInfoComponent, RouterModule],
})
export class AppComponent {
  userService = inject(UserService);
  userData: User[] = [];

  constructor() {
    this.userService.getUserData().then((data) => {
      this.userData = data;
    });
  }
}
