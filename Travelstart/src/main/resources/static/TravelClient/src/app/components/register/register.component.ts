import { Component, OnInit } from '@angular/core';
import { User } from '../../model-classes/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private objUser:User;
  constructor() { }

  ngOnInit() {
  }

}
