import { PersonDashboardComponent } from './person/person-dashboard/person-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDashboardComponent } from "./project/project-dashboard/project-dashboard.component";
import { LoginComponent } from './login/login.component';



const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'persons', component: PersonDashboardComponent },
  { path: 'projects', component: ProjectDashboardComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
