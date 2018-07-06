import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserService } from './shared-service/user.service';
import {HttpModule} from '@angular/http';

const appRoute:Routes=[
  {path:'',component:ViewUsersComponent},
  {path:'register',component:UserFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ViewUsersComponent,
    UserFormComponent
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
