import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';

import {Observable} from 'rxjs';

import {map} from 'rxjs/operators';
import {catchError} from 'rxjs/operators';
import { User } from '../model-classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:String='http://localhost:8080/api';
  private headers=new Headers({'Content-Type':'application/json'});
  private options=new RequestOptions({headers:this.headers});
  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this.baseUrl+'/users',this.options).pipe(map((response:Response)=>response.json()))
    .pipe(catchError(this.errorHandler));
  }

  getUser(id:Number){
    return this._http.get(this.baseUrl+'/user/'+id,this.options).pipe(map((response:Response)=>response.json()))
    .pipe(catchError(this.errorHandler));
  }

  deleteUser(id:Number){
    return this._http.delete(this.baseUrl+'/user/'+id,this.options).pipe(map((response:Response)=>response.json()))
    .pipe(catchError(this.errorHandler));
  }

  createUser(user:User){
    return this._http.post(this.baseUrl+'/users',JSON.stringify(user),  this.options).pipe(map((response:Response)=>response.json()))
    .pipe(catchError(this.errorHandler));
  }

  updateUsers(user:User){
    return this._http.put(this.baseUrl+'/users',JSON.stringify(user), this.options).pipe(map((response:Response)=>response.json()))
    .pipe(catchError(this.errorHandler));
  }
errorHandler(error:Response){
return Observable.throw(error||"SRVER ERROR");
}

}
