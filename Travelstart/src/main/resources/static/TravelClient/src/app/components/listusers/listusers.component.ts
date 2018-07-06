import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared-service/user.service';
import { User } from '../../model-classes/user';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {
  private users:User[];
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this._userService.getUsers()
    .subscribe(data=>{
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }

}
