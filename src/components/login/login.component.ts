import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData  :FormGroup =  new FormGroup({
    userEmail:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(40),Validators.email]),
    userPassword: new FormControl('',[Validators.required]),
    isChecked: new FormControl(false,[Validators.required]),
    userRole:new FormControl()

  });

  LoginFormValue:any;

  constructor(private route: Router){

  }
  redirectToSignUp(){
    this.route.navigateByUrl("signupPage");
  }

  onSubmit(){
    this.LoginFormValue= this.loginData.value;
  }

}
