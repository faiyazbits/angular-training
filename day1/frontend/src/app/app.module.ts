import { PersonGenderComponent } from './persons/person-gender/person-gender.component';
import { UserGenderComponent } from './user/user-gender/user-gender.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes.module';
import { UserListComponent } from './user/user-list/user-list.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { RouterModule } from '@angular/router';
import { ProjectTypeComponent } from './project/project-type/project-type.component';
import { PersonsListComponent } from './persons/person-list/persons-list.component';
import './persons/person-gender/person-gender.component.css';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserGenderComponent,
    ProjectListComponent,
    ProjectTypeComponent,
    PersonsListComponent,
    PersonGenderComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutesModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}