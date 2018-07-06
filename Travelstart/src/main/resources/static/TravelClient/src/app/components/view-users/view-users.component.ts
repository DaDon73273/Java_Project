import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared-service/user.service';
import { User } from '../../model-classes/user';
import { error } from '../../../../node_modules/protractor';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  private users:User[];
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe(data=>{
      console.log(data);
      this.users=data;
    },(error)=>{
      console.log(error);
    })
  }

}
