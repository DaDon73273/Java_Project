import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { UserService } from './Shared-services/user.service';
import {HttpModule} from '@angular/http';
import { AlertComponent } from './directives/alert/alert.component';
import { AuthComponent } from './guards/auth/auth.component';
import { AlertService } from './Shared-services/alert.service';

const appRoute:Routes=[
  {path:'',component:ViewUserComponent},
  {path:'sign-up',component:SignUpComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    ViewUserComponent,
    AlertComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [UserService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
