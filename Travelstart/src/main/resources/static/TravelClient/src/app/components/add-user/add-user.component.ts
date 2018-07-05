import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../model-classes/user';
import { UserService } from '../../shared-service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User=new User();
  constructor(private router:Router,private _userService:UserService) { }

  ngOnInit() {
  }

  createUser(user):void{
    this._userService.createUser(this.user)
    .subscribe(data=>{
      alert("User created Successfully.");
    });
  };

}
