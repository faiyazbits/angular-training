import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Here is dashboard root for  the all view in user Components
import { UserDashboard } from './user/user-dashboard/user-dashboard.component';   
import { ProjectDashboardComponent } from "./project/project-dashboard/project-dashboard.component";
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserLoginComponent } from './user/user-login/user-login.component';
import { AuthGuard } from "./user/auth-guard.service";


const appRoutes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectDashboardComponent } ,
  { path: 'users' , component: UserDashboard , canActivate:[AuthGuard]},
  { path: 'users/:id' , component: UserDetailsComponent , canActivate:[AuthGuard]},
  { path: 'login' , component: UserLoginComponent}
  
 
 

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
