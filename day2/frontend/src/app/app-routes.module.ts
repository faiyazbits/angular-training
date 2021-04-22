import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectDashboardComponent} from "./project/project-dashboard/project-dashboard.component";
import {UserDashboardComponent} from "../../../../day3/frontend/src/app/user/user-dashboard/user-dashboard.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./user/auth.guard";

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'users/:id', component: UserDetailsComponent},
    {path: 'users', component: UserDashboardComponent, canActivate: [AuthGuard]},
    {path: 'projects', component: ProjectDashboardComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutesModule {
}import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProjectDashboardComponent} from "./project/project-dashboard/project-dashboard.component";
import {UserDashboardComponent} from "../../../../day3/frontend/src/app/user/user-dashboard/user-dashboard.component";
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./user/auth.guard";

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'users/:id', component: UserDetailsComponent},
    {path: 'users', component: UserDashboardComponent, canActivate: [AuthGuard]},
    {path: 'projects', component: ProjectDashboardComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutesModule {
}