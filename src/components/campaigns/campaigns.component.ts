import { CurrencyPipe, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [HttpClientModule,CurrencyPipe,DatePipe],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent implements OnInit{

  campaignsList :any[]=[]
  constructor(private http: HttpClient){

  }

  ngOnInit(){
    this.getAllCampaigns();
  }
  getAllCampaigns(){
    this.http.get("http://localhost:8080/api/campaign/campaigns").subscribe((res:any)=>{
      debugger;
      this.campaignsList=res;
      console.log(res);

    })
  }

}
