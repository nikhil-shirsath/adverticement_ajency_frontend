import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent1 {

  projects:any[] =[
    {path:'assest/images/pic1.jpeg',
      title:'first',
      description:'this is first description'
    },
    {path:'assest/images/pic1.jpeg',
      title:'first',
      description:'this is first description'
    },{path:'assest/images/pic1.jpeg',
      title:'first',
      description:'this is first description'
    },{path:'assest/images/pic1.jpeg',
      title:'first',
      description:'this is first description'
    },
  ]

  constructor(private route: Router){

  }


  navigateToEnquiry(){
    console.log("navigate to enquiry");
    this.route.navigateByUrl('/enquiryForm');
  }
}
