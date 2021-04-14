import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Here is dashboard root for  the all view in user Components
import { UserDashboard } from './user/user-dashboard/user-dashboard.component';   
import { ProjectDashboardComponent } from "./project/project-dashboard/project-dashboard.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'users', component: UserDashboard },
  { path: 'projects', component: ProjectDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
