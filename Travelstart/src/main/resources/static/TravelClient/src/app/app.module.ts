import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { UserFormComponent } from './components/user-form/user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewUsersComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
