import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
