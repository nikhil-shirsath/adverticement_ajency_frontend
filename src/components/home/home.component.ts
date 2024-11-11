import { Component } from '@angular/core';
import { CouselSlidebarComponent } from '../cousel-slidebar/cousel-slidebar.component';
import { PartnersComponent } from '../partners/partners.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CouselSlidebarComponent,PartnersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
