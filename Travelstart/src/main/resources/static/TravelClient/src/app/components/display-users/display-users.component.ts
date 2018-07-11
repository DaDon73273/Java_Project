import { Component, OnInit } from '@angular/core';
import { User } from '../../model-classes/user';
import { UserService } from '../../shared-service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  private users:User[];
  constructor(private _userService:UserService,private _router:Router) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe((users)=>{
      console.log(users);
      this.users=users;
    },(error)=>{
      console.log(error);
    })
  }

  deleteUser(user){
    this._userService.deleteUser(user.userId).subscribe(data=>{
      this.users.splice(this.users.indexOf(user),1);
    },(error)=>{
      console.log(error);
    })
  }

  updateUser(user){
    this._userService.setter(user);
    this._router.navigate(['/sign-up']);
  }

  newUser(){
    let user=new User();
    this._userService.setter(user);
    this._router.navigate(['/sign-up']);
  }

}
