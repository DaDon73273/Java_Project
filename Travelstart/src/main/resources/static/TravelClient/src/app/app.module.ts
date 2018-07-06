import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ListusersComponent } from './components/listusers/listusers.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserService } from './shared-service/user.service';


const appRoute:Routes=[
 {path:'',component:ListusersComponent},
 {path:'op',component:UserFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ListusersComponent,
    UserFormComponent,
   
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
