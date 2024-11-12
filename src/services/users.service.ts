import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get("http://localhost:8080/api/users/getall/users");
  }
}
