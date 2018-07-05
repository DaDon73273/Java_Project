import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../../model-classes/user';
import { UserService } from '../../shared-service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User[];
  constructor(private router:Router,private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe(data=>{
      this.users=data;
    });
  };

  deleteUser(id:Number):void{
    this._userService.deleteUser(id)
    .subscribe(data=>{
    //Need to work on delete
      //  this.users=this.users.filter(u=>u )
    });
  }

}
