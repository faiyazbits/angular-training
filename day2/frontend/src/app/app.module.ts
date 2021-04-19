import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { RouterModule } from '@angular/router';
import { ProjectTypeComponent } from './project/project-type/project-type.component';

import { ProjectService } from './project/project.service';
import { ProjectSummaryComponent } from "./project/project-summary/project-summary.component";
import { ProjectDetailsComponent } from "./project/project-details/project-details.component";
import { ProjectDashboardComponent } from "./project/project-dashboard/project-dashboard.component";
import { ProjectFilterComponent } from "./project/project-filter/project-filter.component";


import { UserDashboard } from './user/user-dashboard/user-dashboard.component';
import { UserSummaryComponent } from './user/user-summary/user-summary.component';
import { UserDetailsComponent  } from './user/user-details/user-details.component';
import { UserFilterComponent } from './user/user-filter/user-filter.component';
import { UserGenderComponent } from './user/user-gender/user-gender.component'
import { UserListComponent } from './user/user-list/user-list.component';
import { UserService } from './user/user.service';
import { UserLoginComponent } from './user/user-login/user-login.component';


    

@NgModule({
    declarations: [

         // User-Classes
        
         UserDashboard,
         UserSummaryComponent,
         UserDetailsComponent,
         UserFilterComponent,
         UserGenderComponent,
         UserListComponent,
         UserLoginComponent,

        AppComponent,
        ProjectDashboardComponent,
        ProjectListComponent,
        ProjectTypeComponent,
        ProjectSummaryComponent,
        ProjectDetailsComponent,
        ProjectFilterComponent,

       
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutesModule,
        RouterModule
    ],
    
    providers: [ ProjectService , UserService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
