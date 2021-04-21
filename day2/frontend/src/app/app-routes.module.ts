import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { authgaurd } from '../app/auth-login/auth.service'
import { ProjectDashboardComponent } from "./project/project-dashboard/project-dashboard.component";
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component'
import { from } from 'rxjs';

const appRoutes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'users', component: UserDashboardComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'users', component: UserDashboardComponent, canActivate: [authgaurd] },

  { path: 'projects', component: ProjectDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
