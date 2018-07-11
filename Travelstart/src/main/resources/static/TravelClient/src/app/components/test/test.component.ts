import { Component, OnInit } from '@angular/core';
import { User } from '../../model-classes/user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  private objUser=User;
  constructor() { }

  ngOnInit() {
  }

}
