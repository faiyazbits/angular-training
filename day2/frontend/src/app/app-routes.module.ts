import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectDashboardComponent} from "./project/project-dashboard/project-dashboard.component";
import {UserDashboardComponent} from "./user/user-dashboard/user-dashboard.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'users', component: UserDashboardComponent, canActivate: [AuthGuard]},
    {path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
    {path: 'projects', component: ProjectDashboardComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutesModule {
}
