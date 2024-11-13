import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EnquiryService {

  private apiBasePath:string="http://localhost:8080/api/inquiry";
  constructor(private http:HttpClient) {

  }

   getAllEnquiries(){
    debugger;
    return this.http.get(`${this.apiBasePath}/getall/inquiries`);
   }

   addNewInquiry(inquiry:any){
    return this.http.post(`${this.apiBasePath}/add/inquiry`,inquiry);
   }

  }
