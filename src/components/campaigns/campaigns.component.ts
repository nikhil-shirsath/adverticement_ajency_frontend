import { Component } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent {

  campaigns :any[]=[
    { 
      name:'first',
      description:'this is first campaign',
      image:'assest/images/pic1.jpeg'
    },
    
    {
      name:'second',
      description:'this is first campaign',
      image:'assest/images/pic2.jpeg'
    }, {
      name:'third',
      description:'this is first campaign',
      image:'assest/images/pic3.jpeg'
    },
  ]

}
