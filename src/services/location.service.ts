import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

  constructor(private http : HttpClient) { }
  getlocation(){
    return this.http.get("https://ipapi.co/json/")
  }
}
