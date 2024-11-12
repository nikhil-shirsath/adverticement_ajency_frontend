import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  apiPrefix:string = "http://localhost:8080/api/users";

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(`${this.apiPrefix}/getall/users`);
  }
  

  addNewUser(userObj:any){
    return this.http.post(`${this.apiPrefix}/register/user`,userObj);
  }
}
