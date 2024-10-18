import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private route :Router){

  }
  callLoginPage(){
    console.log("login clicked");
    this.route.navigateByUrl('loginPage');
  }

  callSignupPage(){
    console.log("signup clicked");
    this.route.navigateByUrl("signupPage");
  }

}
