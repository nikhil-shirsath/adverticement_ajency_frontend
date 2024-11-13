import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocationService } from '../../services/location.service';
import { HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-enquiry-form',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,JsonPipe],
  providers:[LocationService,EnquiryService],
  templateUrl: './enquiry-form.component.html',
  styleUrl: './enquiry-form.component.css'
})
export class EnquiryFormComponent implements OnInit {

  locationService= inject(LocationService);
  inquiryService= inject(EnquiryService);
  signUpFormData :any={
    userFirstName       :"",
    userLastName  :"",
    userEmail :"",
    userMobileNo  :"",
    inquiryMessage  :"",
    submittedTime :"",
    userCity  :"",
    userState :"",
    userCountry :"",
  }
  locationInfo:any;

  confirmationInquiry:any={

  }

  registerUser:FormGroup= new FormGroup(
    {
      userFirstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]),
      userLastName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]),
      userEmail: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40),Validators.email]),
      userMobileNo: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
      inquiryMessage: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(1000)])   
    }
  )

  ngOnInit(): void {
      this.locationService.getlocation().subscribe((res:any)=>{
        this.locationInfo = res;
      })
  }
  

  onSubmit(){
    this.signUpFormData = this.registerUser.value;
    this.signUpFormData.userCity= this.locationInfo.city;
    this.signUpFormData.userCountry= this.locationInfo?.city;
    this.signUpFormData.userState= this.locationInfo?.region;            

    this.inquiryService.addNewInquiry(this.signUpFormData).subscribe((res:any)=>{
      this.confirmationInquiry= res;
      console.log(this.confirmationInquiry);
    })
    console.log(this.signUpFormData);
  }

}
