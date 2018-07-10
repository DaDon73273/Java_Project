import { Component, OnInit } from '@angular/core';
import { User } from '../../model-classes/user';
import { UserService } from '../../shared-service/user.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  private user:User[];
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe((users)=>{
      console.log(users);
    },(error)=>{
      console.log(error);
    })
  }

}
