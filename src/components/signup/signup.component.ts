import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocationService } from '../../services/location.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe,HttpClientModule],
  providers:[LocationService,UsersService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  
  locationInfo:any;
  signUpFormData :any={
    userFirstName:"",
    userLastName:"",
    userEmail:"",
    userPassword:"",
    userConfirmPassword:"",
    userMobileNo:"",
    userCity:"",
    userState:"",
    userCountry:""
  }
  states:string[]=['maharashtra','goa','mp','chattisgadh'];
  registerUser:FormGroup= new FormGroup(
    {
      userFirstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]),
      userLastName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]),
      userEmail: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40),Validators.email]),
      userPassword: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]),
      userConfirmPassword: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]),
      userMobileNo: new FormControl('',[Validators.required,]),
      // userAddress: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
      // userCity: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      // userState: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      // userPinCode: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(7)]),
       userIsAcceptTerms: new FormControl('',[Validators.required]),
      
    }
  )

  

  constructor(private locationService: LocationService){

  }

  userService = inject(UsersService);

  ngOnInit(): void {
      this.locationService.getlocation().subscribe((res:any)=>{
        this.locationInfo= res;
        console.log(res);
      })
  }

  onSignUp(){
    this.signUpFormData = this.registerUser.value;
    this.signUpFormData.userCity= this.locationInfo?.city;
    this.signUpFormData.userState=this.locationInfo?.region;
    this.signUpFormData.userCountry=this.locationInfo?.country_name;
    console.log(this.signUpFormData);
    this.userService.addNewUser(this.signUpFormData).subscribe((res:any)=>{
      console.log(res);
    })
    
  }

  

}
