import { AuthGuard } from './user/auth-guard.service';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDashboardComponent } from "./project/project-dashboard/project-dashboard.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent},
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'users', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ProjectDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
