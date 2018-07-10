import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { UserComponent } from './sign-up/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
