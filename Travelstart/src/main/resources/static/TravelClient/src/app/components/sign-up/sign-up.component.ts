import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder,FormGroup,Validators, FormControl} from '@angular/forms';
import {first} from 'rxjs/operators';
import { UserService } from '../../Shared-services/user.service';
import { AlertService } from '../../Shared-services/alert.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm:FormGroup;
  loading=false;
  submitted=false;
  selectedValue:String;
  titles =['Mr', 'Mrs', 'Miss'];
  constructor(private _formBuilder:FormBuilder,
              private _router:Router,
              private _userService:UserService,
              private _alertService:AlertService) { }

  ngOnInit() {
    this._userService.getter();
    this.registerForm=this._formBuilder.group({
      title:new FormControl('',[Validators.required]),
      firstname:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    });
  }

  // convenience getter for easy access to form fields
  get f(){return this.registerForm.controls;}

  onSubmit(){
    this.submitted=true;

    // stop here if form is invalid
    if(this.registerForm.invalid){
      return;
    }
    this.loading=true;
    this._userService.createUser(this.registerForm.value)
    .pipe(first())
    .subscribe(data=>{
      this._alertService.success('Registration Successful',true);
      this._router.navigate(['/'])
    },(error)=>{
      this._alertService.error(error);
      this.loading=false;
    });
  }

}
