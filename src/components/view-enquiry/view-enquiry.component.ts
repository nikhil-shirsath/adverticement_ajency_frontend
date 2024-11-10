import { Component } from '@angular/core';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-view-enquiry',
  standalone: true,
  imports: [],
  templateUrl: './view-enquiry.component.html',
  styleUrl: './view-enquiry.component.css'
})
export class ViewEnquiryComponent {


  enquiryList:any[]=[];

  constructor(private enquiry:EnquiryService){

  }

  ngOnInit(){
    this.enquiry.getAllEnquiries().subscribe((res:any)=>{
      this.enquiryList=res;
      console.log(res);
      console.log(this.enquiryList);
    })
  }
}
