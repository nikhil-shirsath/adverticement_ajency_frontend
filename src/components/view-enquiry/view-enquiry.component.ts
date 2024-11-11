import { Component } from '@angular/core';
import { EnquiryService } from '../../services/enquiry.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-enquiry',
  standalone: true,
  imports: [HttpClientModule,DatePipe],
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent {


  enquiryList:any[]=[];

  constructor(private http:HttpClient){

  }

  onCall(){
    this.http.get("http://localhost:8080/enquiry/getall/enquiries").subscribe((res:any)=>{
      this.enquiryList=res;
      console.log(res);
      console.log(this.enquiryList);
    })
  }
}
