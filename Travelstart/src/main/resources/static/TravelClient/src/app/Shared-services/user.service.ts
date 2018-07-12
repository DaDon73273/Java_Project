import { Injectable } from '@angular/core';
import {Http,Headers,Response,RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl:String='http://localhost:8080/api';
  private headers=new Headers({'Content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  

  constructor(private _http:Http) { }

  getUsers(){
  return  this._http.get(this.baseUrl+'/users',this.options).pipe(map((response:Response)=>response.json()));
  }

  getUser(userID:Number){
    return  this._http.get(this.baseUrl+'/user/'+userID,this.options).pipe(map((response:Response)=>response.json()));
  }

  deleteUser(userID:Number){
    return  this._http.delete(this.baseUrl+'/user/'+userID,this.options).pipe(map((response:Response)=>response.json()));
  }

  createUser(user:User){
    return  this._http.post(this.baseUrl+'/user',user,this.options).pipe(map((response:Response)=>response.json()));
  }

  updateUser(user:User){
    return  this._http.put(this.baseUrl+'/user',user,this.options).pipe(map((response:Response)=>response.json()));
  }
}
