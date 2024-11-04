import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-enquiry-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './enquiry-form.component.html',
  styleUrl: './enquiry-form.component.css'
})
export class EnquiryFormComponent {
  states:string[]=['maharashtra','goa','mp','chattisgadh'];
  registerUser:FormGroup= new FormGroup(
    {
      userFirstName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]),
      userLastName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]),
      userEmail: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40),Validators.email]),
      userPassword: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]),
      userConfirmPassword: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]),
      userMobileNo: new FormControl('',[Validators.required,]),
      userAddress: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(100)]),
      userCity: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      userState: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
      userPinCode: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(7)]),
      userIsAcceptTerms: new FormControl('',[Validators.required]),
      
    }
  )

  signUpFormData :any;

  onSubmit(){
    this.signUpFormData = this.registerUser.value;
    console.log(this.signUpFormData);
  }

}
