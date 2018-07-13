import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Shared-services/user.service';
import { User } from '../../model/user';
import { first } from '../../../../node_modules/rxjs/operators';
import {Router} from '@angular/router';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  constructor(private _userService: UserService,private _router:Router) {
   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.loadAllUsers();
  }
  

  private loadAllUsers() {
    this._userService.getUsers().pipe(first()).subscribe(users => { 
      console.log(users);
        this.users = users; 
    });
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
