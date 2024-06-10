import { Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';

export const routes: Routes = [
  {
    path: ':id',
    component: UserInfoComponent,
  },
];
