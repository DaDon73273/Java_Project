import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {Router} from '@angular/router';
import { UserService } from '../../shared-service/user.service';
import { Title } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   
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
