import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EnquiryService {

  constructor(private http:HttpClient) {

   }
   apiPath:string = "http://localhost:8080/api/inquiry/getall/inquiries";

   getAllEnquiries(){
    debugger;
    return this.http.get(this.apiPath);
   }
  }
