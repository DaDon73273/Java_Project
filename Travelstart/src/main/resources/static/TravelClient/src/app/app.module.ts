import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';

import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { UserService } from './shared-service/user.service';
import { TestComponent } from './components/test/test.component';

const appRoute:Routes=[
  {path:'test',component:TestComponent},
  {path:'',component:DisplayUsersComponent},
  {path:'sign-up',component:SignUpComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersComponent,
    SignUpComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
