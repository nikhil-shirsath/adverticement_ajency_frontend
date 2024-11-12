import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../../services/enquiry.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-enquiry',
  standalone: true,
  imports: [HttpClientModule,DatePipe],
  providers:[EnquiryService],
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent implements OnInit{


  inquiryList:any[]=[];

  constructor(private inquiryService:EnquiryService){

  }
  ngOnInit(): void {
      this.getAllInquiries();
  }

  getAllInquiries(){
    this.inquiryService.getAllEnquiries().subscribe((res:any)=>{
      this.inquiryList=res;
      console.log(res);
      console.log(this.inquiryList);
    })
  }
}
