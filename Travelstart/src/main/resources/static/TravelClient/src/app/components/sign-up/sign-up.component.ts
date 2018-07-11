import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {Router} from '@angular/router';
import { UserService } from '../../shared-service/user.service';
import { User } from '../../model-classes/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   private objUser:User;
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit() {
   // this.objUser=this._userService.getter();
    
  }

  onSubmit(user){
    
    
    this._userService.createUser(user)
    .subscribe((data:any) => {
        if (data.Succeeded == true)
      
       this._router.navigate(['/']);
       }); 
     
    
  }

}
