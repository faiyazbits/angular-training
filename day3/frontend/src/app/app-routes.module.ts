import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { ProjectDashboardComponent } from "./project/project-dashboard/project-dashboard.component";
import { ProjectTemplateformAddComponent } from "./project/project-templateform-add/project-templateform-add.component";
import { ProjectReactiveformAddComponent } from "./project/project-reactiveform-add/project-reactiveform-add.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: 'users', component: UserListComponent },
    { path: 'projects', component: ProjectDashboardComponent },
    { path: 'projects/reactive-form-add', component: ProjectReactiveformAddComponent },
    { path: 'projects/template-form-add', component: ProjectTemplateformAddComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutesModule {
}
