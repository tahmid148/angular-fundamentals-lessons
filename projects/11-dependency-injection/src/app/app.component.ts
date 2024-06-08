import { Component, inject } from '@angular/core';
import { UserService } from './user.service';
import { User } from './data';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>User Listing</h1>
    @for(userEntry of userData; track userEntry) {
    <app-user-info [user]="userEntry" />
    }
  `,
  imports: [UserInfoComponent],
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
