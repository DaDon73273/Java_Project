import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { UserService } from './shared-service/user.service';

const appRoute:Routes=[
  {path:'',component:DisplayUsersComponent},
  {path:'sign-up',component:SignUpComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
