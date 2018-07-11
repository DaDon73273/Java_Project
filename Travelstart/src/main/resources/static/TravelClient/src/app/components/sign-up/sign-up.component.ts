import { Component, OnInit } from '@angular/core';
import { User } from '../../model-classes/user';
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
  private user:User;
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit() {
    this.user=this._userService.getter()
    
  }

  onSubmit(user){
    
    
    this._userService.createUser(user)
    .subscribe((data:any) => {
        if (data.Succeeded == true)
      
       this._router.navigate(['/']);
       }); 
     
    
  }

}
