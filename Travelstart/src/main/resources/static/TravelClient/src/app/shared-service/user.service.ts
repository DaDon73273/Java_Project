import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { User } from '../model-classes/user';
@Injectable()
export class UserService {
  private baseUrl: String = 'http://localhost:8080/api';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers })
  constructor(private _http: Http) { }


  getUsers() {
    return this._http.get(this.baseUrl + "/users", this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }


  getUser(id: Number) {
    return this._http.get(this.baseUrl + "/user/" + id, this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  deleteUser(id: Number) {
    return this._http.delete(this.baseUrl + "/user/" + id, this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  createUser(regUser:User) {
    return this._http.post(this.baseUrl + "/user",JSON.stringify(User), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }

  updateUser(updateUser:User) {
    return this._http.put(this.baseUrl + "/user",JSON.stringify(User), this.options).map((response: Response) => response.json())
      .catch(this.errorHandler);
  }
  errorHandler(error: Response) {
    return Observable.throw(error || "SERVER ERROR");
  }
}
