import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  constructor(private http:HttpClient) {

   }
   apiPath:string = "http://localhost:8080/enquiry/getall/enquiries";

   getAllEnquiries(){
    debugger;
    return this.http.get(this.apiPath);
   }
  }
