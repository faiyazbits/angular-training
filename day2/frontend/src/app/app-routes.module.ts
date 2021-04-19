import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjectDashboardComponent } from "./project/project-dashboard/project-dashboard.component";
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { AuthService } from './guard/auth.service';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { ResolveService } from './resolve/resolve.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'projects', component: ProjectDashboardComponent, canActivate: [AuthService] },
  { path: 'users', component: UserDashboardComponent },
  { path: 'projects', component: ProjectDashboardComponent },
  {
    path: 'project-detail/:id', component: ProjectDetailsComponent,
    resolve: {
      projectInfo: ResolveService
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule { }
