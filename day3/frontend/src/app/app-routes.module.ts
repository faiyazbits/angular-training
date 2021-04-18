import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectDashboardComponent} from './project/project-dashboard/project-dashboard.component';
import {ProjectTemplateformAddComponent} from './project/project-templateform-add/project-templateform-add.component';
import {ProjectReactiveformAddComponent} from './project/project-reactiveform-add/project-reactiveform-add.component';
import {UserReactiveformAddComponent} from './user/user-reactiveform-add/user-reactiveform-add.component';
import {UserTemplateformAddComponent} from './user/user-templateform-add/user-templateform-add.component';
import {UserDashboardComponent} from './user/user-dashboard/user-dashboard.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/projects', pathMatch: 'full'},
    {path: 'users', component: UserDashboardComponent},
    {path: 'projects', component: ProjectDashboardComponent},
    {path: 'projects/reactive-form-add', component: ProjectReactiveformAddComponent},
    {path: 'projects/template-form-add', component: ProjectTemplateformAddComponent},
    {path: 'users/reactive-form-add', component: UserReactiveformAddComponent},
    {path: 'users/template-form-add', component: UserTemplateformAddComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutesModule {
}
