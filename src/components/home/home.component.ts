import { Component } from '@angular/core';
import { CouselSlidebarComponent } from '../cousel-slidebar/cousel-slidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CouselSlidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
