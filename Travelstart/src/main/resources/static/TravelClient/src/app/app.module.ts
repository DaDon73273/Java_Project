import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { UserComponent } from './sign-up/user/user.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewUsersComponent,
    UserComponent,
    DisplayUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
