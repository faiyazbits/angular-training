import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ReactiveFormsModule } from '@angular/forms'
import { PersonService } from './person/person.service';
import { PersonDashboardComponent } from './person/person-dashboard/person-dashboard.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonGenderComponent } from './person/person-gender/person-gender.component';
import { PersonSummaryComponent } from './person/person-summary/person-summary.component';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import {PersonFilterComponent } from './person/person-filter/person-filter.component';

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
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './auth-guard/auth.services';





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
        PersonDashboardComponent,
        PersonListComponent,
        PersonGenderComponent,
        PersonDetailsComponent,
        PersonSummaryComponent,
        PersonFilterComponent,
        LoginComponent
        
       
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutesModule,
        RouterModule,
        ReactiveFormsModule
    ],
    providers: [
         ProjectService,
        PersonService,
        AuthguardService
     ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
