import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  aboutContent:string ="About Malhar Advertisers At Malhar Advertisers, we believe that every brand has a story waiting to be told. Founded on the principles of creativity, innovation, and strategy, we are a dynamic advertising agency dedicated to elevating your brand’s presence in a crowded marketplace. Our team of passionate professionals combines artistic flair with analytical insights, crafting compelling campaigns that resonate with your target audience. Whether you’re a startup looking to make your mark or an established brand seeking a fresh perspective, we tailor our services to meet your unique needs."
  serviceContent:any[]=[{
    heading:"Our Mission:",
    content:["To empower brands through innovative advertising solutions that drive engagement, build loyalty, and foster growth.",'hii']
  },{
    heading:"Our Services:",
    content:["From digital marketing and social media management to branding and traditional advertising, we offer a comprehensive suite of services designed to enhance your brand’s visibility and impact."]
  }
]

}
