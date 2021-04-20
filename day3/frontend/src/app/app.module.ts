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
import {UserDetailsComponent} from "./user/user-details/user-details.component";
import {UserFilterComponent} from "./user/user-filter/user-filter.component";
import {UserSummaryComponent} from "./user/user-summary/user-summary.component";
import { ProjectReactiveformAddComponent } from "./project/project-reactiveform-add/project-reactiveform-add.component";
import { ProjectTemplateformAddComponent } from "./project/project-templateform-add/project-templateform-add.component";
import { UserService } from "./user/user.service";
import {UserDashboardComponent} from "./user/user-dashboard/user-dashboard.component";
import {UserReactiveformAddComponent} from "./user/user-reactiveform-add/user-reactiveform-add.component";
import {UserTemplateformAddComponent} from "./user/user-templateform-add/user-templateform-add.component";
import {EditUserComponent} from './user/edit-user/edit-user.component';
import {UserPostComponent} from './user/user-post/user-post.component';
import {PostCommentComponent} from './user/post-comment/post-comment.component';
import {PostService} from './user/post.service';

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserGenderComponent,
        ProjectDashboardComponent,
        ProjectListComponent,
        ProjectTypeComponent,
        ProjectSummaryComponent,
        ProjectDetailsComponent,
        ProjectFilterComponent,
        UserDetailsComponent,
        UserDashboardComponent,
        UserFilterComponent,
        UserSummaryComponent,
        ProjectReactiveformAddComponent,
        ProjectTemplateformAddComponent,
        UserReactiveformAddComponent,
        UserTemplateformAddComponent,
        EditUserComponent,
        UserPostComponent,
        PostCommentComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutesModule,
        RouterModule
    ],
    providers: [ ProjectService, UserService ,PostService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
