import { Component } from '@angular/core';

@Component({
  selector: 'app-cousel-slidebar',
  standalone: true,
  imports: [],
  templateUrl: './cousel-slidebar.component.html',
  styleUrl: './cousel-slidebar.component.css'
})
export class CouselSlidebarComponent {

  paths:string[]=["assest/images/pic1.jpeg","assest/images/pic2.jpeg","assest/images/pic3.jpeg"]

}
