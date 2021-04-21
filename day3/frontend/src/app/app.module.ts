import { PostsService } from './post/posts.service';
import { UserSummaryComponent } from './user/user-summary/user-summary.component';
import { UserFilterComponent } from './user/user-filter/user-filter.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { RouterModule } from '@angular/router';
import { ProjectTypeComponent } from './project/project-type/project-type.component';
import { UserGenderComponent } from './user/user-gender/user-gender.component';
import { ProjectService } from './project/project.service';
import { ProjectSummaryComponent } from "./project/project-summary/project-summary.component";
import { ProjectDetailsComponent } from "./project/project-details/project-details.component";
import { ProjectDashboardComponent } from "./project/project-dashboard/project-dashboard.component";
import { ProjectFilterComponent } from "./project/project-filter/project-filter.component";
import { ProjectReactiveformAddComponent } from "./project/project-reactiveform-add/project-reactiveform-add.component";
import { ProjectTemplateformAddComponent } from "./project/project-templateform-add/project-templateform-add.component";
import { UserService } from "./user/user.service";
import { UserTemplateformAddComponent } from './user/user-templateform-add/user-templateform-add.component';
import { UserReactiveformAddComponent } from './user/user-reactiveform-add/user-reactiveform-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { PostListComponent } from './post/post-list/post-list.component';

@NgModule({
    declarations: [
        AppComponent,
        UserDashboardComponent,
        UserListComponent,
        UserGenderComponent,
        UserDetailsComponent,
        UserFilterComponent,
        UserSummaryComponent,
        ProjectDashboardComponent,
        ProjectListComponent,
        ProjectTypeComponent,
        ProjectSummaryComponent,
        ProjectDetailsComponent,
        ProjectFilterComponent,
        ProjectReactiveformAddComponent,
        ProjectTemplateformAddComponent,
        UserTemplateformAddComponent,
        UserReactiveformAddComponent,
        UserEditComponent,
        PostListComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutesModule,
        RouterModule
    ],
    providers: [ ProjectService, UserService, PostsService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
